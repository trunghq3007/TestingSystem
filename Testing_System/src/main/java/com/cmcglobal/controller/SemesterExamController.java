package com.cmcglobal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.SemesterExam;
import com.cmcglobal.service.SemesterExamService;
import com.cmcglobal.service.ServiceResult;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/semesterexam")
public class SemesterExamController {
	@Autowired
	private SemesterExamService examService;

	/**
	 * Create by: dvthuan - CMC
	 * Create date: Feb 16, 2019
	 * Modifier: dvthuan
	 * Modified date: Feb 16, 2019
	 * Description: GET ALL SEMESTER Exam Service
	 * Version 1.0
	 * @return
	 */
	@GetMapping("/all")
	public ResponseEntity<ServiceResult> findAllCustomer() {
		return new ResponseEntity<ServiceResult>(examService.getAllSemesterExam(), HttpStatus.OK);
	}

	/**
	 * Create by: dvthuan - CMC
	 * Create date: Feb 16, 2019
	 * Modifier: dvthuan
	 * Modified date: Feb 16, 2019
	 * Description: CREATE NEW SEMESTER Exam
	 * Version 1.0
	 * @param semesterExam
	 * @return
	 */
	@PostMapping("/add")
	public ResponseEntity<ServiceResult> create(@RequestBody SemesterExam semesterExam) {
		semesterExam.setCreator("1");
		return new ResponseEntity<ServiceResult>(examService.create(semesterExam), HttpStatus.OK);
	}

	/**
	 * Create by: dvthuan - CMC
	 * Create date: Feb 16, 2019
	 * Modifier: dvthuan
	 * Modified date: Feb 16, 2019
	 * Description: SEARCH SEMESTER Exam
	 * Version 1.0
	 * @param keyword
	 * @return
	 */
	@PostMapping("/search")
	public ResponseEntity<ServiceResult> search(@RequestBody String keyword) {
		return new ResponseEntity<ServiceResult>(examService.search(keyword), HttpStatus.OK);
	}

	/**
	 * Create by: dvthuan - CMC
	 * Create date: Feb 16, 2019
	 * Modifier: dvthuan
	 * Modified date: Feb 16, 2019
	 * Description: DELETE SEMESTER Exam
	 * Version 1.0
	 * @param id
	 * @return
	 */
	@PostMapping("/delete")
	public ResponseEntity<ServiceResult> delete(@RequestBody String id) {
		return new ResponseEntity<ServiceResult>(examService.delete(id), HttpStatus.OK);
	}
}
