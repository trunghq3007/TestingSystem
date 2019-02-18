package com.cmcglobal.entity;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "candidate")
public class Candidate_bk implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "candidate_id")
	private int id;

	@ManyToOne()
	@JoinColumn(name ="user_id")
	@JsonIgnoreProperties("semester")
	private User user;

	@ManyToOne()
	@JoinColumn(name ="semester_exam_id")
	@JsonIgnoreProperties("semester")
	private SemesterExam semesterExam;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public SemesterExam getSemesterExam() {
		return semesterExam;
	}

	public void setSemesterExam(SemesterExam semesterExam) {
		this.semesterExam = semesterExam;
	}
	
	

}
