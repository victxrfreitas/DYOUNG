/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.dyoung.project;

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
    
        private static HttpClient client = HttpClient.newHttpClient();
    private static final String url = "https://hooks.slack.com/services/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";


    public static void enviarMensagem (JSONObject content) throws IOException, InterruptedException{
        HttpRequest request = HttpRequest.newBuilder(URI.create(url))
                .header("accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(content.toString()))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(String.format("Status: %s", response.statusCode()));
        System.out.println(String.format("Response %s", response.body()));

    }
    
}
