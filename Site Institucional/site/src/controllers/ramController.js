var ramModel = require("../models/ramModel");

function buscarUltimasMedidasRam(req, res) {

    const limite_linhas = 7;

    // var id_dado_ram = req.params.id_dado_ram;
    var idTotemRam = req.params.idTotemRam;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    ramModel.buscarUltimasMedidasRam(idTotemRam, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealRam(req, res) {

    // var id_dado_ram = req.params.id_dado_ram;
    var idTotemRam = req.params.idTotemRam;
    console.log("sdsdd"+idTotemRam);
    console.log(`Recuperando medidas em tempo real`);

    ramModel.buscarMedidasEmTempoRealRam(idTotemRam).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getDadosByIdTotem(req, res) {
    var idTotem = req.params.idTotem;


    ramModel.getDadosByIdTotem(idTotem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getDadosCpuByIdTotem(req, res) {
    var idTotem = req.params.idTotem;


    ramModel.getDadosCpuByIdTotem(idTotem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function getDadosDiscoByIdTotem(req, res) {
    var idTotem = req.params.idTotem;


    ramModel.getDadosDiscoByIdTotem(idTotem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealRam,
    getDadosByIdTotem,
    getDadosCpuByIdTotem,
    getDadosDiscoByIdTotem,
}