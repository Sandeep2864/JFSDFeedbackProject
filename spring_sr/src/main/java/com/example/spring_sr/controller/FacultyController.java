package com.example.spring_sr.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.spring_sr.pojo.Faculty;
import com.example.spring_sr.service.FacultyService;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = "http://localhost:3001") // Allow frontend to communicate with backend
public class FacultyController {

    private final FacultyService facultyService;

    public FacultyController(FacultyService facultyService) {
        this.facultyService = facultyService;
    }

    @PostMapping("/add")
    public ResponseEntity<Faculty> addFaculty(@RequestBody Faculty faculty) {
        Faculty savedFaculty = facultyService.saveFaculty(faculty);
        return ResponseEntity.ok(savedFaculty);
    }
}