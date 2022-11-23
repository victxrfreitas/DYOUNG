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




module.exports = router;