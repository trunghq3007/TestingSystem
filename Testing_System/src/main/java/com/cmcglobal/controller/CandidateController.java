package com.cmcglobal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.Candidate;
import com.cmcglobal.service.CandidateService;
import com.cmcglobal.service.ServiceResult;

@RestController
@RequestMapping("/candidate")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class CandidateController {

    @Autowired
    private CandidateService candidateService;
    
    
    @GetMapping(value = "/listCandidate")
    public List<Candidate> ListCandidate() {
        return candidateService.findAllCandidate();
    }

    @GetMapping(value = "/listCandidate/{id}")
    public Optional<Candidate> ListByCandidateID(Integer id) {
        return candidateService.findByCandidateID(id);
    }

    @GetMapping(value = "/listBySemester/{id}")
    public List<Candidate> listBySemester(@PathVariable("id") String id) {
        return candidateService.findBySemesterID(id);
    }

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ServiceResult> insertCandidate(@RequestBody Candidate candidate) {
        return new ResponseEntity<ServiceResult>(candidateService.insertCandidate(candidate), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<ServiceResult> deleteCandidate(@PathVariable Integer id) {
        return new ResponseEntity<ServiceResult>(candidateService.deleteCandidate(id), HttpStatus.OK);
    }
}
