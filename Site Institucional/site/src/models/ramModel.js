var database = require("../database/config");

function buscarUltimasMedidasRam(idTotemRam , limite_linhas) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `select top ${limite_linhas}
        uso_ram as usoRam, 
        status_coleta as statusRam,
        data_hora_captura,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from dado_ram join totem on fk_totem = idTotem Where fk_totem = ${idTotemRam}
                    order by id desc limit ${limite_linhas}`;   
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `select 
        uso_ram as usoRam, 
        status_coleta as statusRam,
        data_hora_captura,
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico
                     from dado_ram join totem on fk_totem = idTotem Where fk_totem = ${idTotemRam}
                    order by id_dado_ram desc limit ${limite_linhas}`;
                    console.log("to no model")
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}

function buscarMedidasEmTempoRealRam(idTotemRam) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `select top 1
        uso_ram as usoRam, 
        status_coleta as statusCpu,  
                        CONVERT(varchar, data_hora_captura, 108) as momento_grafico, 
                        fk_totem 
                        from dado_ram join totem on fk_totem = idTotem Where fk_totem = ${idTotemRam}
                    order by id_dado_ram desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `select 
        uso_ram as usoRam, 
        status_coleta as statusCpu,  
                        DATE_FORMAT(data_hora_captura,'%H:%i:%s') as momento_grafico, 
                        fk_totem 
                        from dado_ram join totem on fk_totem = idTotem Where fk_totem = ${idTotemRam}
                    order by id_dado_ram desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}


module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealRam
}
