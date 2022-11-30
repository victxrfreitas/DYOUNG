var database = require("../database/config");

function getDadosCpuByIdTotem(idTotem) {
    instrucaoSqlRam = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSqlRam = `SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu' from dado_cpu where fk_totem = ${idTotem};`;   
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSqlRam = `SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu' from dado_cpu where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSqlRam);
    return database.executar(instrucaoSqlRam);
}

module.exports = {
    getDadosCpuByIdTotem
}