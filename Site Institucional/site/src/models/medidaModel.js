var database = require("../database/config");

function buscarUltimasMedidas(id_dado_cpu , limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,
        data_hora_captura,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from dado_cpu
                    where fk_totem = ${id_dado_cpu}
                    order by id desc limit ${limite_linhas}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,
        data_hora_captura,
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico
                    from dado_cpu
                    where fk_totem = ${id_dado_cpu}
                    order by id_dado_cpu desc limit ${limite_linhas}`;
                    console.log("to no model")
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,  
                        CONVERT(varchar, data_hora_captura, 108) as momento_grafico, 
                        fk_totem 
                        from dado_cpu where fk_totem = ${id_dado_cpu} 
                    order by id_dado_cpu desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_cpu as usoCpu, 
        status_coleta as statusCpu,  
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
                        fk_totem 
                        from dado_cpu where fk_totem = ${id_dado_cpu} 
                    order by id_dado_cpu desc limit 1`;
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
                            estado 'totemStatus',
                            sistema_operacional 'totemSO',
                            fk_posto 'fkPosto'
                        FROM
                            totem 
                        WHERE 
                            fk_posto = ${idPosto}
                        ORDER BY idTotem DESC;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
                            idTotem 'totemId',
                            serie 'totemSerial',
                            estado 'totemStatus',
                            sistema_operacional 'totemSO',
                            fk_posto 'fkPosto'
                        FROM
                            totem 
                        WHERE 
                            fk_posto = ${idPosto}
                        ORDER BY idTotem DESC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarTotem(serial, so, fkPosto) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", serial, so, fkPosto);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO totem (serie, sistema_operacional, fk_posto) VALUES ('${serial}', '${so}', '${fkPosto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarDadosPostos,
    cadastrarTotem
}
