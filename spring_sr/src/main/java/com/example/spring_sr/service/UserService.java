package com.example.spring_sr.service;

import com.example.spring_sr.pojo.User;
import java.util.Optional;

public interface UserService {
    User signup(User user) throws Exception;
    Optional<User> authenticate(String userId, String password);
}
