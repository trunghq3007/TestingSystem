package com.cmcglobal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.User;
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.UserService;

@RestController
@RequestMapping(value = "user")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/listuser")
    public List<User> listUser() {
        return userService.findAll();
    }

    @RequestMapping(value = "/users/{id}/semesters", method = RequestMethod.GET)
    public ResponseEntity<ServiceResult> getSemesterListByUserId(@PathVariable("id") String id) {
        return new ResponseEntity<ServiceResult>(userService.getSemseterListByUserId(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/semesters/{semesterId}/tests/", method = RequestMethod.GET)
    public ResponseEntity<ServiceResult> getTestListOfUser(@PathVariable("semesterId") String semesterId) {
        return new ResponseEntity<ServiceResult>(userService.getExamBySemesterExamId(semesterId), HttpStatus.OK);
    }
}
