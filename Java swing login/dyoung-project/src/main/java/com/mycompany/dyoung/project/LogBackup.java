package com.mycompany.dyoung.project;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.util.Conversor;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.TimeUnit;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import oshi.driver.linux.proc.CpuInfo;
import oshi.driver.linux.proc.CpuStat;

/**
 *
 * @author ctc
 */
public class LogBackup {
    
    /**
     *
     * @throws IOException
     * @throws InterruptedException
     */
    public void gerarLog() throws IOException, InterruptedException {
        //Instanciando uma máquina para exemplo
        Looca looca = new Looca();
        Processador proc = new Processador();
        Memoria memoria = new Memoria();
        Sistema sistema = new Sistema();
        Conversor conversor = new Conversor();
        DiscoGrupo disco = new DiscoGrupo();
        

        //Classe reponsável em formatar a data
        DateFormat hoursFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        DateFormat dateHoursFormat = new SimpleDateFormat("dd-MM-yyyy HH'h'mm'm'ss'ss'");

        for (int b = 0; b < 2; b++) {
            Date dateHours = new Date();
            Date date = new Date();
            Date hours = new Date();
            
            System.out.print("Captando log das máquinas...\n");

            FileWriter arqLog = new FileWriter(String.format("log %s.txt", dateHoursFormat.format(dateHours)));
            PrintWriter gravarArqLog = new PrintWriter(arqLog);
            gravarArqLog.print("Máquina iniciada em " + dateHoursFormat.format(dateHours)+"\n");
            String memorias = Conversor.formatarBytes(memoria.getTotal()).replace("GiB", "").replace(",", ".");
            Double memoriaAtual = Double.parseDouble(memorias);
            Integer cpusFisicos = proc.getNumeroCpusFisicas();
            Integer cpusLogicas = proc.getNumeroCpusLogicas();
            String fabricante = proc.getFabricante();
            String nomeProc = proc.getNome();
            String so = sistema.getSistemaOperacional();
            String hD = Conversor.formatarBytes(disco.getTamanhoTotal()).replace("GiB", "").replace(",", ".");
            List discos = disco.getDiscos();
            List volumes = disco.getVolumes();
            
            gravarArqLog.print(String.format("\nCPU: %d, %d, %s, %s|\nRAM: %.0f GB|\nArmazenamento total: %s|\nVolumes: %s|\nDiscos: %s|\n SO: %s|\n %s|", cpusFisicos, cpusLogicas, fabricante, nomeProc,
                         memoriaAtual, hD, volumes, discos, so,
                hoursFormat.format(hours)));
            System.out.println( "RAM =" + memoriaAtual + "cpuFisico =" + cpusFisicos + "cpuLogico =" + cpusLogicas + "fabricante =" + fabricante + "nomeProcessador" + nomeProc +  "so =" + so);
                TimeUnit.SECONDS.sleep(1);
            
            

            for (int i = 0; i < 10; i++) {
                
// Iremos fazer um log de instalação/login, nele terá email e id da maquina do login, e dados do hardware atual da máquina pós iniciação ou manutenção
// total do HD, total da RAM, numero de CPUS, fabricante, nome do processador, frequencia e SO do sistema.
                System.out.println(i);
                Date newHours = new Date();
                String frequencia = Conversor.formatarBytes(proc.getFrequencia()).replace("GiB", "").replace(",", ".");
                String memoriaEmUso = Conversor.formatarBytes(memoria.getEmUso()).replace("GiB", "").replace(",", ".");
                Double cpuUso = proc.getUso();
                
                
                //exemplo
                
                gravarArqLog.print(String.format("\nFreq & Uso: %s, %.2f|\nMemUso: %s|\n %s|", frequencia, cpuUso, memoriaEmUso, 
                hoursFormat.format(newHours)));

                TimeUnit.SECONDS.sleep(1);
            }
            arqLog.close();
        }

        System.out.println("Seu log foi gravado com sucesso :)\n");

    }

    

}