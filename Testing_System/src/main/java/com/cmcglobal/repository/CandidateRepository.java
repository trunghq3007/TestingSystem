package com.cmcglobal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmcglobal.entity.Candidate;
import com.cmcglobal.entity.SemesterExam;

public interface CandidateRepository extends JpaRepository<Candidate, Integer>{
	public List<Candidate> findBySemesterExam(SemesterExam semesterExam);
}
