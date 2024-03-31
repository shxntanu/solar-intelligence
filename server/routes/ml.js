const express = require("express");

const router = express.Router();

const {
  optimization,
  singleUserIdData,
  forecast,
} = require("../contollers/ml");

router.get("/optimization/:id", optimization);
router.get("/singleUser/:id", singleUserIdData);
router.get("/forecast", forecast);

module.exports = router;
