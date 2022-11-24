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

router.get("/dadosPosto/:idPosto", function (req, res) {
    medidaController.buscarDadosPostos(req, res);
});
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// INDEX
router.get("/dadosTotem-qtd/:idTotem", function (req, res) {
    medidaController.buscarTodosDados(req, res);
    console.log("Rota");
});

router.get("/dadosTotem-alerta/:idTotem", function (req, res) {
    medidaController.buscarTodosDadosAlerta(req, res);
    console.log("Rota");
});

router.get("/dadosTotem-funcionamento/:idTotem", function (req, res) {
    medidaController.buscarTodosDadosFuncionamento(req, res);
    console.log("Rota Ideal");
});

router.get("/dadosTotem-critico/:idTotem", function (req, res) {
    medidaController.buscarTodosDadosCritico(req, res);
    console.log("Rota");
});
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
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