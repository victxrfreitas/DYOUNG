var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


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

////////// LISTAGEM E CRIAÇÃO DE CARDS

router.get("/nomesPosto/:idPosto", function (req, res) {
    // console.log("rota nomes posto"+idPosto)
    medidaController.buscarNomesPosto(req,res);
})


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// INDEX
router.get("/dadosTotem-qtd/:idTotem", function (req, res) {
    medidaController.buscarTodosDados(req, res);
    console.log("Rota");
});

router.get("/AlertarDiscoTotem/:idTotem", function (req, res) {
    medidaController.AlertarDiscoTotem(req, res);
    console.log("Rota222222222222222");
});

router.get("/AlertarRamTotem/:idTotem", function (req, res) {
    medidaController.AlertarRamTotem(req, res);
    console.log("Rota2222222222222222");
});
router.get("/AlertarCpuTotem/:idTotem", function (req, res) {
    medidaController.AlertarCpuTotem(req, res);
    console.log("Rota2222222222222");
});
// ####################### TABLE #############################
router.get("/qtdTotens/:idPosto", function (req, res) {
    medidaController.buscarQtdTotens(req, res);
    console.log("Rota");
});

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.get("/dadosPosto/", function (req, res) {
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