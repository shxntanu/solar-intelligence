const express = require("express");

const router = express.Router();

const {
  regionWiseResult,
  regionWiseNumericResult,
  uniqueRegions,
} = require("../contollers/region");

router.get("/:region/:category", regionWiseResult);
router.get("/:region/:category/:numeric", regionWiseNumericResult);
router.get("/", uniqueRegions);

module.exports = router;
