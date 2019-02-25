package com.cmcglobal.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.entity.Candidate;
import com.cmcglobal.entity.Exam;
import com.cmcglobal.entity.SemesterExam;
import com.cmcglobal.entity.Test;
import com.cmcglobal.entity.User;
import com.cmcglobal.repository.CandidateRepository;
import com.cmcglobal.repository.SemesterExamRepository;
import com.cmcglobal.repository.TestRepository;
import com.cmcglobal.repository.UserRepository;
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CandidateRepository candidateRepository;
	@Autowired
	private TestRepository testRepository;
	@Autowired
	private SemesterExamRepository semesterRepo;

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User findOne(int userId) {
		return userRepository.getOne(userId);
	}

}
