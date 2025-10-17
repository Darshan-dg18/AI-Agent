package com.ai_agent.AI_Agent.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SpeechToTextService {

    @Value("${pollinations.text.url}")
    private String pollinationsTextUrl;

    public String analyzeSpeech(String speechText) {
        try {

            String url = pollinationsTextUrl + speechText;

            RestTemplate restTemplate = new RestTemplate();
            return restTemplate.getForObject(url, String.class);
        } catch (Exception e) {
            return "Error analyzing speech: " + e.getMessage();
        }
    }
}
