package com.example.spring_sr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.spring_sr.pojo.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Long> {

}