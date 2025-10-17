package com.ai_agent.AI_Agent.controller;

import com.ai_agent.AI_Agent.service.ImageGenerateService;
import com.ai_agent.AI_Agent.service.SpeechToTextService;
import com.ai_agent.AI_Agent.service.TextGenerateService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class GenerateAIController {

    private final ImageGenerateService imageGenerateService;
    private final TextGenerateService textGenerateService;
    private final SpeechToTextService speechToTextService;

    public GenerateAIController(ImageGenerateService imageGenerateService, TextGenerateService textGenerateService, SpeechToTextService speechToTextService){
        this.imageGenerateService = imageGenerateService;
        this.textGenerateService = textGenerateService;
        this.speechToTextService = speechToTextService;
    }

    @GetMapping("/text")
    public Mono<String> generateText(@RequestParam String prompt) {
        return textGenerateService.generateText(prompt);
    }


    @GetMapping("/image")
    public String generateImage(@RequestParam String prompt) {
        return imageGenerateService.generateImage(prompt);
    }

    @GetMapping("/speech")
    public String analyzeSpeech(@RequestParam String text) {
        return speechToTextService.analyzeSpeech(text);
    }
}


