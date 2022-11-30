var express = require("express");
var router = express.Router();

router.get("/getAllDadosCpuByIdTotem/:idTotem", function (req, res) {
    excelController.getAllDadosCpuByIdTotem(req, res);
});

router.get("/getAllDadosRamByIdTotem/:idTotem", function (req, res) {
    excelController.getAllDadosRamByIdTotem(req, res);
});

router.get("/getAllDadosDiscoByIdTotem/:idTotem", function (req, res) {
    excelController.getAllDadosDiscoByIdTotem(req, res);
});