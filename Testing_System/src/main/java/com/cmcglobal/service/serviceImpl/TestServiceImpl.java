package com.cmcglobal.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmcglobal.entity.Test;
import com.cmcglobal.repository.TestRepository;
import com.cmcglobal.service.TestService;

@Service
@Transactional
public class TestServiceImpl implements TestService{

    @Autowired
    private TestRepository testRepository;
    
    @Override
    public List<Test> findAll() {
        // TODO Auto-generated method stub
        return testRepository.findAll();
    }

    @Override
    public void inserTest(Test test) {
        testRepository.save(test);
        
    }

    @Override
    public void deleteTestID(Integer id) {
        testRepository.deleteById(id);
        
    }

}