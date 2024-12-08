package com.example.spring_sr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring_sr.pojo.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	
}