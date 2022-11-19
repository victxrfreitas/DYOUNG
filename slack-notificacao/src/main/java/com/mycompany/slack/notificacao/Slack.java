/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.slack.notificacao;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONObject;

/**
 *
 * @author MU993HT
 */
public class Slack {

    private static final HttpClient client = HttpClient.newHttpClient();
    private static final String URL=  "https://hooks.slack.com/services/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";

    public static void enviarMensagem(JSONObject content) throws IOException,InterruptedException {
        HttpRequest request =  HttpRequest.newBuilder(URI.create(URL))
                .header("accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(content.toString()))
                .build();
        
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        
        System.out.println(String.format("Status: %s", response.statusCode()));
        System.out.println(String.format("Response: %s", response.body()));
    }
}
        

