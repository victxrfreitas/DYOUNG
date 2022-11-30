var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas, idTotem) {

    instrucaoSql = ''

    //select * from totem join dado_cpu on idTotem = fkTotem Where idTotem = ${idTotem}

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select top ${limite_linhas}
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,
        data_hora_captura,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from dado_cpu join totem on fk_totem = idTotem Where fk_totem = ${idTotem}
                    order by id desc limit ${limite_linhas}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,
        data_hora_captura,
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico
                    from dado_cpu join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_cpu desc limit ${limite_linhas}`;
        console.log("to no model")
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,  
                        CONVERT(varchar, data_hora_captura, 108) as momento_grafico, 
                        fk_totem 
                        from dado_cpu join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_cpu desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,  
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
                        fk_totem 
                        from dado_cpu join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_cpu desc limit 1`;
        // instrucaoSql = `select 
        // uso_cpu as usoCpu, 
        // status_coleta as statusCpu,  
        //                 DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
        //                 fk_totem 
        //                 from dado_cpu where fk_totem = ${id_dado_cpu} 
        //             order by id_dado_cpu desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarqtdTotem(statusTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,  
                        CONVERT(varchar, data_hora_captura, 108) as momento_grafico, 
                        fk_totem 
                        from dado_cpu join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_cpu desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(statusTotem) FROM totem WHERE statusTotem = ${statusTotem};`;
        // instrucaoSql = `select 
        // uso_cpu as usoCpu, 
        // status_coleta as statusCpu,  
        //                 DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
        //                 fk_totem 
        //                 from dado_cpu where fk_totem = ${id_dado_cpu} 
        //             order by id_dado_cpu desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosPostos(idPosto) {

    instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        idTotem 'totemId',
        serie 'totemSerial',
        sistema_operacional 'totemSO',
        status 'status',
        fk_posto 'fkPosto',
        DATE_FORMAT(dtInstalacao, "%d/%m/%Y") 'totemData',
        nomePosto 'nomePosto'
    FROM
        totem
    JOIN
        posto
    ON
        idPosto = fk_posto
                        ORDER BY idTotem DESC;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        idTotem 'totemId',
        serie 'totemSerial',
        sistema_operacional 'totemSO',
        status 'status',
        fk_posto 'fkPosto',
        DATE_FORMAT(dtInstalacao, "%d/%m/%Y") 'totemData',
        nomePosto 'nomePosto'
    FROM
        totem
    JOIN
        posto
    ON
        idPosto = fk_posto
                        ORDER BY idTotem DESC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function identificacaoTotem(idFuncionario, idPosto) {

    // console.log("Acesse o nomesPosto model id=" + idPosto);

    instrucaoSql = ''



    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `SELECT idtotem 'totemId'
        FROM totem t JOIN posto p ON t.fk_posto = p.idPosto 
            JOIN cadastro_funcionario c ON c.fk_posto = p.idPosto 
                WHERE idFuncionario = ${idFuncionario}
                AND t.fk_posto = ${idPosto};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT idtotem 'totemId'
        FROM totem t join posto p ON t.fk_posto = p.idPosto 
            JOIN cadastro_funcionario c ON c.fk_posto = p.idPosto 
                WHERE idFuncionario = ${idFuncionario}
                    AND t.fk_posto = ${idPosto}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

///////////////////////////////////////////////////////////////////////////
//////////////////////////////DASHBOARD RESP TI///////////////////////

function alertaRamTi(idPosto) {


    instrucaoSql = ''


    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select uso_ram 'dadoRam'
        from dado_ram d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto};
`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select uso_ram 'dadoRam'
        from dado_ram d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function alertaDiscoTi(idPosto) {


    instrucaoSql = ''


    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select uso_disco 'dadoDisco'
        from dado_disco d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto};
`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select uso_disco 'dadoDisco'
        from dado_disco d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function alertaCpuTi(idPosto) {


    instrucaoSql = ''


    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select uso_cpu 'dadoCpu', temp_cpu 'dadoTemperatura' 
        from dado_cpu d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto};
`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select uso_cpu 'dadoCpu', temp_cpu 'dadoTemperatura' 
        from dado_cpu d 
        join totem t on d.fk_totem= t.idTotem 
        join posto p on t.fk_posto = p.idposto 
        where t.fk_posto = ${idPosto}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function buscarNomesPosto(idPosto) {

    // console.log("Acesse o nomesPosto model id=" + idPosto);

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `SELECT
        idPosto 'postoId',
       nomePosto 'postoNome'
    FROM 
       posto
   WHERE 
       idPosto = ${idPosto};`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT
                             idPosto 'postoId',
                            nomePosto 'postoNome'
                         FROM 
                            posto
                        WHERE 
                            idPosto = ${idPosto};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// INDEX
function buscarTodosDados(idTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(idTotem) from totem;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(idTotem)'qtdTotem' FROM totem;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function AlertarRamTotem() {

    instrucaoSql = ''


    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT uso_ram 'dadoRam'
        FROM dado_ram;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT uso_ram 'dadoRam'
        FROM dado_ram;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function AlertarDiscoTotem() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT uso_disco 'dadoDisco'
        FROM dado_disco;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT uso_disco 'dadoDisco'
        FROM dado_disco;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function AlertarCpuTotem() {
    function AlertarCpuTotem() {

        instrucaoSql = ''



        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `SELECT uso_cpu 'dadoCpu', temp_cpu 'dadoTemp'
        FROM dado_cpu;`;

        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `SELECT uso_cpu 'dadoCpu', temp_cpu 'dadoTemp'
        FROM dado_cpu;`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////



// ################################TABLES###################################

function buscarQtdTotens(idPosto) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(idTotem) 'qtd' from totem where fk_posto = ${idPosto}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(idTotem) 'qtd' from totem where fk_posto = ${idPosto}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarDadosTotem(idTotem) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
                            idTotem 'totemId',
                            serie 'totemSerial',
                            sistema_operacional 'totemSO',
                            fk_posto 'fkPosto',
                            DATE_FORMAT(dtInstalacao, "%d/%m/%Y") 'totemData'
                        FROM
                            totem 
                        WHERE 
                            idTotem = ${idTotem};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
                            idTotem 'totemId',
                            serie 'totemSerial',
                            sistema_operacional 'totemSO',
                            fk_posto 'fkPosto',
                            DATE_FORMAT(dtInstalacao, "%d/%m/%Y") 'totemData'
                        FROM
                            totem 
                        WHERE 
                            idTotem = ${idTotem}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarTotem(serial, so, login, senha, unidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", serial, so, login, senha, unidade);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO totem (serie, sistema_operacional, loginTotem, senhaTotem, status, fk_posto) VALUES ('${serial}', '${so}', '${login}', '${senha}', true, '${unidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarTotem(idTotem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idTotem);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE Totem SET status = false WHERE idTotem = ${idTotem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarTotem(serial, so, idTotem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", serial, so, idTotem);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE totem SET serie = '${serial}', sistema_operacional = '${so}' WHERE idTotem = ${idTotem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
    AlertarRamTotem,
    AlertarDiscoTotem,
    AlertarCpuTotem,
    identificacaoTotem,
    alertaRamTi,
    alertaDiscoTi,
    alertaCpuTi
}

