var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:id_dado_cpu", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:id_dado_cpu", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// });

router.get("/ultimasTotem/:idTotem", function (req, res) {
    console.log("rotaaa");
    medidaController.buscarUltimasMedidas(req, res);
   
});

router.get("/tempo-realTotem/:idTotem", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-real-qtd/:statusTotem", function (req, res) {
    medidaController.buscarqtdTotem(req, res);
});

router.get("/dadosPosto/:idPosto", function (req, res) {
    medidaController.buscarDadosPostos(req, res);
});

router.get("/dadosTotem/:idTotem", function (req, res) {
    medidaController.buscarDadosTotem(req, res);
});

router.post("/cadastrarTotem", function (req, res) {
    medidaController.cadastrarTotem(req, res);
})

router.post("/deletarTotem", function (req, res) {
    medidaController.deletarTotem(req, res);
})

router.post("/editarTotem", function (req, res) {
    medidaController.editarTotem(req, res);
})


module.exports = router;