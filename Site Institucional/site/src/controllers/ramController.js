var ramModel = require("../models/ramModel");

function buscarUltimasMedidasRam(req, res) {

    const limite_linhas = 7;

    var id_dado_ram = req.params.id_dado_ram;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    ramModel.buscarUltimasMedidasRam(id_dado_ram, limite_linhas).then(function (resultado) {
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

    var id_dado_ram = req.params.id_dado_ram;
    console.log("sdsdd"+id_dado_ram);
    console.log(`Recuperando medidas em tempo real`);

    ramModel.buscarMedidasEmTempoRealRam(id_dado_ram).then(function (resultado) {
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
    buscarMedidasEmTempoRealRam

}