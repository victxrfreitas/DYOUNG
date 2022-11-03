/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.dyoung.project;

import java.io.IOException;
import org.json.JSONObject;

/**
 *
 * @author MU993HT
 */
public class AppSlack {

    public static void main(String[] args) throws IOException, InterruptedException {
        
        JSONObject json = new JSONObject();
        
        json.put("text", "Easy? :shrug:");
        
        Slack.sendMessage(json);
    }
}