const { Router } = require("express");
const router = Router();
const controllerStatistics = require("../controllers/ctrlStatistics");

router
    .get("/", controllerStatistics.getStatistics);

module.exports = router;