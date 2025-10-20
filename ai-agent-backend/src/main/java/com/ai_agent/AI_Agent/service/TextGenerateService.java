package com.ai_agent.AI_Agent.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
public class TextGenerateService {

    @Value("${pollinations.text.url}")
    private String textBaseUrl;

    private final WebClient webClient;

    public TextGenerateService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Mono<String> generateText(String prompt) {
        try {
            String encodedPrompt = URLEncoder.encode(prompt, StandardCharsets.UTF_8.toString());

            String url = textBaseUrl + "?prompt=" + encodedPrompt;
            return webClient.get()
                    .uri(url)
                    .retrieve()
                    .bodyToMono(String.class);
        } catch (Exception e) {
            return Mono.error(e);
        }
    }
}
