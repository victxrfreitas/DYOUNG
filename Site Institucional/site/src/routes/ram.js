var express = require("express");
var router = express.Router();

var ramController = require("../controllers/ramController");

console.log("to na rota")

router.get("/ultimasRam/:id_dado_ram", function (req, res) {
    ramController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-realRam/:id_dado_ram", function (req, res) {
    ramController.buscarMedidasEmTempoReal(req, res);
});


module.exports = router;