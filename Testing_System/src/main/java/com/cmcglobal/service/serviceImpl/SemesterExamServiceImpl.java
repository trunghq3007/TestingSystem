package com.cmcglobal.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.entity.SemesterExam;
import com.cmcglobal.repository.SemesterExamRepository;
import com.cmcglobal.service.SemesterExamService;
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.ServiceResult.Status;

@Service
public class SemesterExamServiceImpl implements SemesterExamService {

	@Autowired
	private SemesterExamRepository examRepository;

	@Override
	public ServiceResult getAllSemesterExam() {
		ServiceResult result = new ServiceResult();
		result.setData(examRepository.findAll());
		return result;
	}

	@Override
	public ServiceResult create(SemesterExam semesterExam) {
		ServiceResult result = new ServiceResult();
		result.setData(examRepository.save(semesterExam));
		return result;
	}

	@Override
	public ServiceResult search(String keyword) {
		ServiceResult result = new ServiceResult();
		result.setData(examRepository.findByNameContaining(keyword));
		return result;
	}

	@Override
	public ServiceResult delete(String id) {
		ServiceResult result = new ServiceResult();
		SemesterExam semesterExam = examRepository.findById(id).orElse(null);
		if (semesterExam == null) {
			result.setMessage("Not Found object");
			result.setStatus(Status.FAILED);
		} else {
			examRepository.delete(semesterExam);
			result.setStatus(Status.SUCCESS);
			result.setData(examRepository.findAll());
		}
		return result;
	}

	@Override
	public ServiceResult findById(String id) {
		ServiceResult result = new ServiceResult();
		result.setData(examRepository.findById(id));
		return result;
	}

}
