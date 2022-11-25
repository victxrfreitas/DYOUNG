var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    // var id_dado_cpu = req.params.id_dado_cpu;
    var idTotem = req.params.idTotem;


    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    // console.log(`############## ${id_dado_cpu}`);
    console.log(`totem  ${idTotem}`);

    medidaModel.buscarUltimasMedidas(limite_linhas,idTotem).then(function (resultado) {
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


function buscarMedidasEmTempoReal(req, res) {

    // var id_dado_cpu = req.params.id_dado_cpu;
    var idTotem = req.params.idTotem;
    // console.log("sdsdd"+id_dado_cpu);
    console.log("teste totemmm "+idTotem);

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idTotem).then(function (resultado) {
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

function buscarqtdTotem(req, res) {

    // var id_dado_cpu = req.params.id_dado_cpu;
    var statusTotem = req.params.statusTotem;
    // console.log("sdsdd"+id_dado_cpu);
    console.log("teste totemmm "+statusTotem);

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarqtdTotem(statusTotem).then(function (resultado) {
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

function buscarDadosPostos(req, res) {

    var idPosto = req.params.idPosto;

    medidaModel.buscarDadosPostos(idPosto).then(function (resultado) {
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

function buscarDadosTotem(req, res) {
    var idTotem = req.params.idTotem;

    medidaModel.buscarDadosTotem(idTotem).then(function (resultado) {
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

function cadastrarTotem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var serial = req.body.serialServer;
    var so = req.body.soServer;
    var fkPosto = req.body.fkPosto;

    // Faça as validações dos valores
    if (serial == undefined) {
        res.status(400).send("Serial está undefined!");
    } else if (so == undefined) {
        res.status(400).send("SO está undefined!");
    } else if (fkPosto == undefined) {
        res.status(400).send("SO está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarTotem(serial, so, fkPosto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletarTotem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idTotem = req.body.idTotemServer;

    // Faça as validações dos valores
    if (idTotem == undefined) {
        res.status(400).send("Serial está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.deletarTotem(idTotem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao deletar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editarTotem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var serial = req.body.serialServer;
    var so = req.body.soServer;
    var idTotem = req.body.idTotem;

    // Faça as validações dos valores
    if (serial == undefined) {
        res.status(400).send("Serial está undefined!");
    } else if (so == undefined) {
        res.status(400).send("SO está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.editarTotem(serial, so, idTotem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarDadosPostos,
    buscarDadosTotem,
    cadastrarTotem,
    deletarTotem,
    editarTotem,
    buscarqtdTotem

}