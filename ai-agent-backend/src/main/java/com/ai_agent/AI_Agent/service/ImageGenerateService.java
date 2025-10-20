package com.ai_agent.AI_Agent.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ImageGenerateService {

    @Value("${pollinations.image.url}")
    private String imgUrl;

    public String generateImage(String prompt){
        return imgUrl + "?prompt=" + prompt.replace(" ", "%20");
    }
}
