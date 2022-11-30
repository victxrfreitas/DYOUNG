var database = require("../database/config");

// DADOS CPU //
function getAllDadosCpuByIdTotem(idTotem) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu' from dado_cpu where fk_totem = ${idTotem};`;
    }
    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu' from dado_cpu where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// DADOS DISCO //
function getAllDadosDiscoByIdTotem(idTotem) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT uso_disco 'usoDisco' from dado_disco where fk_totem = ${idTotem};`;
    }
    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT uso_disco 'usoDisco' from dado_disco where fk_totem = ${idTotem};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getAllDadosCpuByIdTotem,
    getAllDadosRamByIdTotem,
    getAllDadosDiscoByIdTotem
}