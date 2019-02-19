package com.cmcglobal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "test_id")
	private int testID;
	@Column(name = "test_name")
	private String testName;
	@Column(name = "status")
	private int status;

	@ManyToOne
	@JoinColumn(name = "exam_Id")
	private Exam exam;

	@ManyToOne
	@JoinColumn(name = "semester_exam_id")
	private SemesterExam semesterExam;

	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Test(int testID, int candidateTestID, String semesterExamID, String testName, int status, Exam exam) {
		super();
		this.testID = testID;
		this.testName = testName;
		this.status = status;
		this.exam = exam;
	}

	public int getTestID() {
		return testID;
	}

	public void setTestID(int testID) {
		this.testID = testID;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Exam getExam() {
		return exam;
	}

	public void setExam(Exam exam) {
		this.exam = exam;
	}

	public SemesterExam getSemesterExam() {
		return semesterExam;
	}

	public void setSemesterExam(SemesterExam semesterExam) {
		this.semesterExam = semesterExam;
	}

}