package com.example.spring_sr.service;

import org.springframework.stereotype.Service;
import com.example.spring_sr.pojo.Faculty;
import com.example.spring_sr.repository.FacultyRepository;

@Service
public class FacultyService {
    private final FacultyRepository facultyRepository;

    public FacultyService(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    public Faculty saveFaculty(Faculty faculty) {
        return facultyRepository.save(faculty);
    }
}