const express = require("express");

const router = express.Router();

const { integrate } = require("../contollers/productRecommendation");

router.post("/", integrate);

module.exports = router;
