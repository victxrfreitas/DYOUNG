var express = require("express");
var router = express.Router();

var ramController = require("../controllers/ramController");

console.log("to na rota")

// router.get("/ultimasRam/:id_dado_ram", function (req, res) {
//     ramController.buscarUltimasMedidasRam(req, res);
// });

// router.get("/tempo-realRam/:id_dado_ram", function (req, res) {
//     ramController.buscarMedidasEmTempoRealRam(req, res);
// });

router.get("/ultimasRam/:idTotemRam", function (req, res) {
    ramController.buscarUltimasMedidasRam(req, res);
});

router.get("/tempo-realRam/:idTotemRam", function (req, res) {
    ramController.buscarMedidasEmTempoRealRam(req, res);
});

router.get("/getDadosByIdTotem/:idTotem", function (req, res) {
    ramController.getDadosByIdTotem(req, res);
});

router.get("/getDadosCpuByIdTotem/:idTotem", function (req, res) {
    ramController.getDadosCpuByIdTotem(req, res);
});

router.get("/getDadosDiscoByIdTotem/:idTotem", function (req, res) {
    ramController.getDadosDiscoByIdTotem(req, res);
});

module.exports = router;