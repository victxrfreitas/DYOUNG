function obterDadosGrafico(id_dado_ram) {
    // alterarTitulo(id_da);

    if (proximaAtualizacao != undefined) {
      clearTimeout(proximaAtualizacao);
    }

    fetch(`/ram/ultimasRam/${id_dado_ram}`, { cache: "no-store" })
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            resposta.reverse();

            plotarGrafico(resposta,id_dado_ram);
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

  // Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
  // Configura o gráfico (cores, tipo, etc), materializa-o na página e,
  // A função *plotarGrafico* também invoca a função *atualizarGrafico*
  function plotarGrafico(resposta, id_dado_ram) {
    console.log("iniciando plotagem do gráfico...");

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dadosRam = {
      labels: labels,
      datasets: [
        {
          label: "Uso RAM",
          data: [],
          // fill: false,
          backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
    };

    console.log("----------------------------------------------");
    console.log(
      'Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":'
    );
    console.log(resposta);

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];
      labels.push(registro.momento_grafico);
      dadosRam.datasets[0].data.push(registro.usoRam);
      // dados.datasets[1].data.push(registro.temperatura);
    }

    console.log("----------------------------------------------");
    console.log("O gráfico será plotado com os respectivos valores:");
    console.log("Labels:");
    console.log(labels);
    console.log("Dados:");
    console.log(dadosRam.datasets);
    console.log("----------------------------------------------");

    // Criando estrutura para plotar gráfico - config
    const config = {
  type: 'pie',
  data: dadosRam,
};
    // Adicionando gráfico criado em div na tela
    let myPieChart = new Chart(document.getElementById("myPieChart"), config);

    setTimeout(() => atualizarGrafico(id_dado_ram, dadosRam, myPieChart), 2000);
  }

  // Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
  // buscando a última medida inserida em tabela contendo as capturas,

  //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
  //     Para ajustar o "select", ajuste o comando sql em src/models
  function atualizarGrafico(id_dado_ram,dadosRam, myPieChart) {
    console.log(id_dado_ram);
    fetch(`/ram/tempo-realRam/${id_dado_ram}`, { cache: "no-store" })
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (novoRegistro) {
            console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
            console.log(`Dados atuais do gráfico:`);
            console.log(dadosRam);

            document.getElementById("avisoCaptura").innerHTML = "";

            if (
              novoRegistro[0].momento_grafico ==
              dadosRam.labels[dadosRam.labels.length - 1]
            ) {
              console.log(
                "---------------------------------------------------------------"
              );
              console.log(
                "Como não há dados novos para captura, o gráfico não atualizará."
              );
              document.getElementById("avisoCaptura").innerHTML =
                "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará.";
              console.log("Horário do novo dado capturado:");
              console.log(novoRegistro[0].momento_grafico);
              console.log("Horário do último dado capturado:");
              console.log(dadosRam.labels[dadosRam.labels.length - 1]);
              console.log(
                "---------------------------------------------------------------"
              );
            } else {
              // tirando e colocando valores no gráfico
              dadosRam.labels.shift(); // apagar o primeiro
              dadosRam.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

              dadosRam.datasets[0].data.shift(); // apagar o primeiro de umidade
              dadosRam.datasets[0].data.push(novoRegistro[0].usoRam); // incluir uma nova medida de umidade

            //   dados.datasets[1].data.shift(); // apagar o primeiro de temperatura
            //   dados.datasets[1].data.push(novoRegistro[0].statusCpu); // incluir uma nova medida de temperatura

              myPieChart.update();
            }

            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(
              () => atualizarGrafico(id_dado_ram, dadosRam, myPieChart ),
              2000
            );
          });
        } else {
          console.error("Nenhum dado encontrado ou erro na API");
          // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
          proximaAtualizacao = setTimeout(
            () => atualizarGrafico(id_dado_ram, dadosRam, myPieChart ),
            2000
          );
        }
      })
      .catch(function (error) {
        console.error(
          `Erro na obtenção dos dados p/ gráfico: ${error.message}`
        );
      });
  }