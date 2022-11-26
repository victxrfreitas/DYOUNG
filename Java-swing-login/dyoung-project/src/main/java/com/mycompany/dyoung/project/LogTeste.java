/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.dyoung.project;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author XY379RX
 */
public class LogTeste {
    public static void main(String[] args) throws IOException{
        File arquivo = new File("LOG.txt");

                 if( !arquivo.exists()){
                     arquivo.createNewFile();
                 }
                 List<String> lista = new ArrayList<>();
                 lista.add("LOG - D'Young");
                 lista.add("Usuario: PoupaTempo Pinheiros, Máquina 02 Fez uma alteração neste hora: "
                         + LocalDateTime.now().format(DateTimeFormatter.BASIC_ISO_DATE.ofLocalizedDate(FormatStyle.FULL)));

                  Files.write(Paths.get(arquivo.getPath()), lista, StandardOpenOption.APPEND);
    }
}
