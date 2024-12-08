package com.example.spring_sr.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import com.example.spring_sr.pojo.Student;
import com.example.spring_sr.repository.StudentRepository;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student) {
        return ((CrudRepository<Student, Long>) studentRepository).save(student);
    }
}
