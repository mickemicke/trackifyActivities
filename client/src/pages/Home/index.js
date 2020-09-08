import React from "react";
import Navigation from "../../components/Navigation";
import ColumnWrapper from '../../elements/ColumnWrapper';
import { useStore } from "../../hooks/useStore";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from '../../relay/index';
import Month from '../../components/Month';

function Home() {
  const { state } = useStore();
  const { months } = state;
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeQuery($id: ID!) {
          activity(id: $id) {
            title
            date
            id
          }
        }
      `}
      variables={{ id: "5f3f704503fcbb05d9834ef1" }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <ColumnWrapper>
            {console.log("props", props)}
            <Navigation />
            {months.map((m) => <Month {...m} />)}
          </ColumnWrapper>
        );
      }}
    />
  );
}

export default Home;
