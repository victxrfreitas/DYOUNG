var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id_dado_cpu", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id_dado_cpu", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/dadosPosto/:idPosto", function (req, res) {
    medidaController.buscarDadosPostos(req, res);
});

router.post("/cadastrarTotem", function (req, res) {
    medidaController.cadastrarTotem(req, res);
})


module.exports = router;