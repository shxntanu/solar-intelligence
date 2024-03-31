const express = require("express");

const router = express.Router();

const {
  regionWiseResult,
  regionWiseNumericResult,
} = require("../contollers/evRegion");

router.get("/:evRegion/:category", regionWiseResult);
router.get("/:evRegion/:category/:numeric", regionWiseNumericResult);

module.exports = router;
