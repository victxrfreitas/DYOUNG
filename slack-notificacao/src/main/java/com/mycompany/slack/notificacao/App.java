/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.slack.notificacao;

import java.io.IOException;
import org.json.JSONObject;

/**
 *
 * @author MU993HT
 */
public class App {

    /**
     *
     * @param args
     * @throws IOException
     * @throws InterruptedException
     */
    public static void main(String[] args)  throws IOException,InterruptedException {
        JSONObject json = new JSONObject();
        
        JSONObject put = json.put("text", "Olá Mundo!");
        Slack.enviarMensagem(json);
    }
}
