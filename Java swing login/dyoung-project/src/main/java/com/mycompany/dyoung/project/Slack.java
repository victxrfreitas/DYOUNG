/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.dyoung.project;

import com.azure.core.http.HttpClient;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONObject;

/**
 *
 * @author MU993HT
 */
public class Slack {

    private static final java.net.http.HttpClient client = java.net.http.HttpClient.newHttpClient();
    private static final String URL = "https://hooks.slack.com/services/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";
    //

    public static void sendMessage(JSONObject content) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder(
                URI.create(URL))
                .header("accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(content.toString()))
                .build();
        
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(String.format("Status: %s", response.statusCode()));
        System.out.println(String.format("Response: %s", response.body()));
    }
}
