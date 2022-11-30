var idTotem = 1;


    function getDadosCpuByIdTotem(idTotem) {
        fetch(`/ram/getDadosCpuByIdTotem/${idTotem}`, { cache: "no-store" })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        //console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        resposta.reverse();
                        // console.log(data, resposta);

                        resposta.forEach(item => {
                            let dados = {
                                dtHrColeta: '',
                                usoCpu: '',
                                tempCpu: '',
                                usoDisco: '',
                                usoRam: ''
                            };
                            dados.usoCpu = item.usoCpu,
                                dados.tempCpu = item.tempCpu,
                                dados.dtHrColeta = item.dtHrColeta,
                                getDadosRamByIdTotem(idTotem)
                            getDadosDiscoByIdTotem(idTotem)
                            data.push(dados);
                        });


                    });
                } else {
                    console.error("Nenhum dado encontrado ou erro na API da CPU");
                }
            })
            .catch(function (error) {
                console.error(
                    `Erro na obtenção dos dados p/ gráfico: ${error.message}`
                );
            });
    }
    function getDadosRamByIdTotem(idTotem) {
        fetch(`/ram/getDadosByIdTotem/${idTotem}`, { cache: "no-store" })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        //console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        resposta.reverse();

                        for (let i = 0; i < resposta.length; i++) {
                            data[i].usoRam = resposta[i].usoRam;
                        }
                    });
                } else {
                    console.error("Nenhum dado encontrado ou erro na API");
                }
            })
            .catch(function (error) {
                console.error(
                    `Erro na obtenção dos dados p/ gráfico: ${error.message}`
                );
            });
    }
    function getDadosDiscoByIdTotem(idTotem) {
        // alterarTitulo(id_da);

        fetch(`/ram/getDadosDiscoByIdTotem/${idTotem}`, { cache: "no-store" })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        resposta.reverse();

                        for (let i = 0; i < resposta.length; i++) {
                            // console.log(resposta[i])
                            data[i].usoDisco = resposta[i].usoDisco;
                        }
                    });
                } else {
                    console.error("Nenhum dado encontrado ou erro na API");
                }
            })
            .catch(function (error) {
                console.error(
                    `Erro na obtenção dos dados p/ gráfico: ${error.message}`
                );
            });
    }