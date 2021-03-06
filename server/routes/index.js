const express = require("express");

const router = express.Router();
const apiRoutes = require("./api/index");
// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

// define the home page route
router.get("/", (req, res) => {
  res.send();
});

router.use("/api", apiRoutes);

module.exports = router;
