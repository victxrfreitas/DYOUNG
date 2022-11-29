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



function AlertarDiscoTotem(req, res) {

    var idTotem = req.params.idTotem;

    medidaModel.AlertarDiscoTotem(idTotem).then(function (resultado) {
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

function AlertarRamTotem(req, res) {

    var idTotem = req.params.idTotem;

    medidaModel.AlertarRamTotem(idTotem).then(function (resultado) {
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
function AlertarCpuTotem(req, res) {

    medidaModel.AlertarCpuTotem().then(function (resultado) {
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
function alertaRamTi(req, res) {

    var idPosto = req.params.idPosto;
    medidaModel.alertaRamTi(idPosto).then(function (resultado) {
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
function alertaDiscoTi(req, res) {

    var idPosto = req.params.idPosto;
    medidaModel.alertaDiscoTi(idPosto).then(function (resultado) {
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
function alertaCpuTi(req, res) {

    var idPosto = req.params.idPosto;
    medidaModel.alertaCpuTi(idPosto).then(function (resultado) {
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






function buscarQtdTotens(req, res) {

    var idPosto = req.params.idPosto;
   

    medidaModel.buscarQtdTotens(idPosto).then(function (resultado) {
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






///////Listagem e criação dos Cards

function buscarNomesPosto(req, res) {

    console.log("nomes medida controller");
    var idPosto = req.params.idPosto;
    
    medidaModel.buscarNomesPosto(idPosto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os nomes dos postos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function identificacaoTotem(req, res) {

    console.log("nomes medida controller");
    var idFuncionario = req.params.idFuncionario;
    var idPosto = req.params.idPosto;
    
    medidaModel.identificacaoTotem(idFuncionario,idPosto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os nomes dos postos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function buscarTodosDados(req, res) {

    var idTotem = req.params.idTotem;

    medidaModel.buscarTodosDados(idTotem).then(function (resultado) {
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

    medidaModel.buscarDadosPostos().then(function (resultado) {
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
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;
    var unidade = req.body.unidadeServer;

    // Faça as validações dos valores
    if (serial == undefined) {
        res.status(400).send("Serial está undefined!");
    } else if (so == undefined) {
        res.status(400).send("SO está undefined!");
    } else if (login == undefined) {
        res.status(400).send("SO está undefined!");
    }  else if (senha == undefined) {
        res.status(400).send("SO está undefined!");
    }  else if (unidade == undefined) {
        res.status(400).send("SO está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarTotem(serial, so, login, senha, unidade)
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
    buscarNomesPosto,
    buscarDadosTotem,
    cadastrarTotem,
    deletarTotem,
    editarTotem,
    buscarqtdTotem,
    buscarTodosDados,
    buscarQtdTotens,
    AlertarCpuTotem,
    AlertarRamTotem,
    AlertarDiscoTotem,
    identificacaoTotem,
    alertaRamTi,
    alertaDiscoTi,
    alertaCpuTi
}