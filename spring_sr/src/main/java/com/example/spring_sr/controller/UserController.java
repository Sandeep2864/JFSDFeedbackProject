package com.example.spring_sr.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_sr.pojo.User;
import com.example.spring_sr.service.UserService;

import java.util.Optional;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User userRequest) {
        try {
            // Call the service layer to save the user
            User savedUser = userService.signup(userRequest);
            return ResponseEntity.ok(savedUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred during signup");
        }
    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody User loginRequest) {
        Optional<User> user = userService.authenticate(loginRequest.getUserId(), loginRequest.getPassword());

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }

        return ResponseEntity.status(401).body("Invalid user ID or password");
    }
}