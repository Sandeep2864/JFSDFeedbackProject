package com.example.spring_sr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.spring_sr.pojo.Feedback;
import com.example.spring_sr.service.FeedbackService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3001") // Adjust for frontend origin
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/register")
    public Feedback registerFeedback(@RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }
}
