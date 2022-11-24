var express = require("express");
var router = express.Router();

var discoController = require("../controllers/discoController");

// router.get("/ultimasDisco/:id_dado_disco", function (req, res) {
//     discoController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-realDisco/:id_dado_disco", function (req, res) {
//     discoController.buscarMedidasEmTempoReal(req, res);
// });
router.get("/ultimasDisco/:idTotem", function (req, res) {
    discoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-realDisco/:idTotem", function (req, res) {
    discoController.buscarMedidasEmTempoReal(req, res);
});


module.exports = router;