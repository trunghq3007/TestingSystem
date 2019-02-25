package com.cmcglobal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmcglobal.entity.TestResult;

public interface TestResultRepository extends JpaRepository<TestResult, Integer> {
	
}
