package com.cmcglobal.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "semester_exam")
public class SemesterExam {
	@Id
	@Column(name = "semester_exam_id")
	@GeneratedValue(generator = "auto_increase")
	@GenericGenerator(name = "auto_increase", strategy = "com.cmcglobal.utils.AutoIncreaseId")
	private String id;
	@Column(name = "semester_exam_name")
	private String name;
	@Column(name = "semester_description")
	private String description;
//	@Column(name = "create_by")
//	private String creator;
	@Column(name = "status")
	private int status;
	@Column(name = "start_at")
	private Date startTime;
	@Column(name = "end_at")
	private Date endTime;
	@ManyToOne
	@JoinColumn(name = "create_by")
	private User userOfSemester;

	public User getUserOfSemester() {
		return userOfSemester;
	}

	public void setUserOfSemester(User userOfSemester) {
		this.userOfSemester = userOfSemester;
	}

	public SemesterExam(String id, String name, String description, String creator, int status, Date startTime,
			Date endTime) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
//		this.creator = creator;
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public SemesterExam() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public String getCreator() {
//		return creator;
//	}
//
//	public void setCreator(String creator) {
//		this.creator = creator;
//	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
//
//	@Override
//	public String toString() {
//		return this.id + " - " + this.name + " - " + this.description + " - " + this.creator + " - " + this.startTime
//				+ " - " + this.endTime;
//	}
}
