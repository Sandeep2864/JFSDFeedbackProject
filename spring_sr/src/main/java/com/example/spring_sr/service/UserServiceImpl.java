package com.example.spring_sr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.spring_sr.pojo.User;
import com.example.spring_sr.repository.UserRepository;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User signup(User user) throws Exception {
        // Add logic to check if user already exists and throw exception if necessary
        if (userRepository.findByUserId(user.getUserId()).isPresent()) {
            throw new IllegalArgumentException("User ID already exists");
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> authenticate(String userId, String password) {
        Optional<User> user = userRepository.findByUserId(userId);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
