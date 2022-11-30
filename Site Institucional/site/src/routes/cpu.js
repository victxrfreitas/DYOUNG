var express = require("express");
var router = express.Router();

var cpuController = require("../controllers/cpuController");

router.get("/getDadosCpuByIdTotem/:idTotem", function (req, res) {
    cpuController.getDadosCpuByIdTotem(req, res);
});

module.exports = router;
