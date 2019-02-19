package com.cmcglobal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmcglobal.entity.Test;

public interface TestRepository extends JpaRepository<Test, Integer> {
    
}