package com.cmcglobal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.Test;
import com.cmcglobal.service.TestService;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class TestController {

    @Autowired
    TestService testService;

    @GetMapping(value = "/listTest")
    public List<Test> listTest() {
        return testService.findAll();
    }
}