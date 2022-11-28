package com.softwaresecurity.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RestController
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    //Add question
    @RequestMapping(method = RequestMethod.POST, path = "/patients")
    public ResponseEntity addQuestion(@RequestBody Patient patient) {
        try {
            patientRepository.save(patient);
            return new ResponseEntity("Created Successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(String.format("%s", e.getMessage()), HttpStatus.BAD_REQUEST);
        }

    }

    //Get questions
    @GetMapping("/questions")
    public List<Patient> getQuestions(){
        List<Patient> patientList = new ArrayList<>();
        patientRepository.findAll().forEach((q)-> patientList.add(q));
        return patientList;
    }

    //Update question
    @RequestMapping(method = RequestMethod.PATCH, path = "/patients")
    public ResponseEntity updateQuestion(@RequestBody Patient patient) {
        try {
            patientRepository.save(patient);
            return new ResponseEntity("Updated Successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(String.format("%s", e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    //Delete question
    @RequestMapping(method = RequestMethod.DELETE, path = "/deletePatient/{id}")
    public ResponseEntity deleteQuestion(@PathVariable int id){
        try {
            patientRepository.deleteById(id);
            return new ResponseEntity("Deleted Successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity(String.format("%s", e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
}
