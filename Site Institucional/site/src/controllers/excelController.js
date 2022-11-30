var excelModel = require("../models/excelModel");


function getAllDadosCpuByIdTotem(req, res) {
    var idTotem = req.params.idTotem;

    excelModel.getAllDadosCpuByIdTotem(idTotem).then(function (resultado) {
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

function getAllDadosRamByIdTotem(req, res) {
    var idTotem = req.params.idTotem;

    excelModel.getAllDadosRamByIdTotem(idTotem).then(function (resultado) {
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

function getAllDadosDiscoByIdTotem(req, res) {
    var idTotem = req.params.idTotem;

    excelModel.getAllDadosDiscoByIdTotem(idTotem).then(function (resultado) {
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
    getAllDadosCpuByIdTotem,
    getAllDadosRamByIdTotem,
    getAllDadosDiscoByIdTotem
}