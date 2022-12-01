package com.mycompany.dyoung.project.cmd;

import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.util.Conversor;
import java.text.DecimalFormat;
import java.util.List;
import java.util.Scanner;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author GJ541GR
 */
public class TelaLogin {
    public static void main(String[] args) {
        Conexao con = new Conexao();
        JdbcTemplate banco = con.getConnection();
        Scanner usu = new Scanner(System.in);
        Conversor convert = new Conversor();
        Processador cpu = new Processador();
        Memoria mem = new Memoria();
        DiscoGrupo discoGrupo = new DiscoGrupo();
//        DiscosGroup discoGrupo = new DiscosGroup();
        Sistema sistema = new Sistema();
//        Totem totem = new Totem();
        DecimalFormat df = new DecimalFormat("##.00");
        
        
        Integer id_totem = 2;
        Integer fk_Posto = 4;
        
        System.out.println("Usuario: ");
        String usuario = usu.nextLine();
        
        System.out.println("Senha: ");
        String senha = usu.nextLine();
        
        
        boolean ativar = false;
        
        List<Totem> buscarFuncionario = banco.query("SELECT * FROM totem", 
                new BeanPropertyRowMapper<>(Totem.class));
            
            
            for (Totem totem : buscarFuncionario) {
                if(totem.getLoginTotem().equals(usuario) && totem.getSenhaTotem().equals(senha)){
                ativar = true;
            }
            }
             while(ativar == true){
                 Double dadoCpu = cpu.getUso();
                
                String insert = "INSERT INTO dado_cpu (uso_cpu, status_coleta, fk_totem, fk_posto)VALUES (?, 1, ?, ?);";
                banco.update(insert, dadoCpu, id_totem,fk_Posto);
                System.out.println(String.format("Inserindo dado CPU: %.1f ---- ID: %d ---- fkPosto: %d",
                        dadoCpu, id_totem,fk_Posto));


                
                
                //Pegando os dados da RAM = Memória RAM transformando, exibindo 
                //e guardando no banco de dados
                //Os dados da memoria chegam em "LONG", porem temos que converter
                //para double e fazer a conta para calcular a porcentagem de uso
               Long dadoMemoriaRam = mem.getEmUso();
                Long dadoTotalMemoriaRam = mem.getTotal();
                
                //Convertendo os dados para "String" para ficar mais faceis de transformar em double
                String dadoRamString = Conversor02.formatarBytes(dadoMemoriaRam);
                String dadoTotalRamString = Conversor02.formatarBytes(dadoTotalMemoriaRam);
               
                
                //Tranformando os dados de "String" para "Double"
                Double dadoRamDouble = Double.valueOf(dadoRamString.substring(0,1));
                Double dadoTotalRamlDouble = Double.valueOf(dadoTotalRamString.substring(0,1));
                
                // Realizando a conta para calcular a porcentagem de uso
               Double totalRam = (dadoRamDouble * 100) / dadoTotalRamlDouble;
                
                //Inserindo os dados no banco
                String insertRam = "INSERT INTO dado_ram (uso_ram, status_coleta, fk_totem, fk_posto)VALUES (?, 1, ?, ?);";
                banco.update(insertRam, totalRam, id_totem,fk_Posto);
//                
//                //Exibindo os dados
               System.out.println(String.format("Inserindo dado da Memória RAM: %.1f", totalRam));

                
                //Pegando os dados do DISCO = Disco transformando, exibindo e guardando no banco de dados
                List<Disco> discos = discoGrupo.getDiscos();
                for (Disco disco : discos) {
                    
                    
                    String dadoDiscoTotalString = Conversor.formatarBytes(disco.getTamanho());
                    String dadoDiscoEcritaString = Conversor.formatarBytes(disco.getBytesDeEscritas());
                    String dadoDiscoLeituraString = Conversor.formatarBytes(disco.getBytesDeLeitura());
                    
                    Double dadoDiscoTotalDouble = Double.valueOf(dadoDiscoTotalString.substring(0, 3));
                    Double dadoDiscoEcritaDouble = Double.valueOf(dadoDiscoEcritaString.substring(0, 1));
                    Double dadoDiscoLeituraDouble = Double.valueOf(dadoDiscoLeituraString.substring(0, 1));
                    
                    Double totalUso = dadoDiscoEcritaDouble + dadoDiscoLeituraDouble;
                    Double totalDisco = (totalUso * 100) / dadoDiscoTotalDouble;
                    
                    System.out.println(String.format("Inserindo dado do Disco: %.1f", totalDisco));
                    String insertDisco = "INSERT INTO dado_disco (uso_disco, status_coleta, fk_totem, fk_posto)VALUES (?, 1, ?, ?);";
                    banco.update(insertDisco, totalDisco, id_totem,fk_Posto);
//
//                }
                
                }
                 System.out.println("\n ------------------------------------- \n");
             }
        }
    }