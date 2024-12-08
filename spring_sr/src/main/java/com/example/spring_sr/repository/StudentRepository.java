package com.example.spring_sr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.spring_sr.pojo.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
	
}