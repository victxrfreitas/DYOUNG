var database = require("../database/config");

function buscarUltimasMedidas(idTotem, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        uso_disco as usoDisco, 
        status_coleta as statusDisco,
                        FORMAT(data_hora_captura,'hh:mm:ss') as momento_grafico
                    from dado_disco join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_disco desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_disco as usoDisco, 
        status_coleta as statusDisco,
        data_hora_captura,
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico
                        from dado_disco join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_disco desc limit ${limite_linhas}`;
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
        uso_disco as usoDisco, 
        status_coleta as statusDisco,  
        FORMAT(data_hora_captura,'hh:mm:ss') as momento_grafico, 
                        fk_totem 
                        from dado_disco join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_disco desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        uso_disco as usoDisco, 
        status_coleta as statusDisco,  
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
                        fk_totem 
                        from dado_disco join totem on fk_totem = idTotem WHere fk_totem = ${idTotem}
                    order by id_dado_disco desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
