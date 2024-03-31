const express = require("express");

const router = express.Router();

const {
  region,
  categoryWiseResult,
  categoryWiseNumericResult,
} = require("../contollers/global");

router.get("/", region);
router.get("/:category", categoryWiseResult);
router.get("/:category/:numeric", categoryWiseNumericResult);

module.exports = router;
