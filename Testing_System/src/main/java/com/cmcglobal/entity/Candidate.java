package com.cmcglobal.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "candidate")
public class Candidate implements Serializable {
    
    private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "candidate_id")
	private int id;

	@ManyToOne(cascade=CascadeType.DETACH)
	@JoinColumn(name = "semester_exam_id")
	@JsonIgnoreProperties("candidates")
	private SemesterExam semesterExam;

	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties("candidates")
	private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public SemesterExam getSemesterExam() {
		return semesterExam;
	}

	public void setSemesterExam(SemesterExam semesterExam) {
		this.semesterExam = semesterExam;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
