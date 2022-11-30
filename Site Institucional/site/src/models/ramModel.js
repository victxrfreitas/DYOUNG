var database = require("../database/config");

function buscarUltimasMedidasRam(idTotemRam , limite_linhas) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `select top ${limite_linhas}
        uso_ram as usoRam, 
        status_coleta as statusRam,
        data_hora_captura,
                        FORMAT(data_hora_captura,'hh:mm:ss') as momento_grafico
                        from dado_ram join totem on fk_totem = idTotem Where fk_totem = ${idTotemRam}
                    order by id_dado_ram desc`;   
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
        FORMAT(data_hora_captura,'hh:mm:ss') as momento_grafico, 
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

function getDadosByIdTotem(idTotem) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `SELECT uso_ram 'usoRam' from dado_ram where fk_totem = ${idTotem};`;   
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `SELECT uso_ram 'usoRam' from dado_ram where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}

function getDadosCpuByIdTotem(idTotem) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `SELECT uso_cpu 'usoCpu', FORMAT(data_hora_captura, 'dd-MM-yy-hh:mm:ss') 'dtHrColeta' from dado_cpu where fk_totem = ${idTotem};`;   
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu', DATE_FORMAT(data_hora_captura, \"%d/%m/%Y | %H:%i:%s\") 'dtHrColeta' from dado_cpu where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}

function getDadosDiscoByIdTotem(idTotem) {

    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `SELECT uso_disco 'usoDisco' from dado_disco where fk_totem = ${idTotem};`;   
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `SELECT uso_disco 'usoDisco' from dado_disco where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}
module.exports = {
    buscarUltimasMedidasRam,
    buscarMedidasEmTempoRealRam,
    getDadosByIdTotem,
    getDadosCpuByIdTotem,
    getDadosDiscoByIdTotem,
}
