package com.cmcglobal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "question_level", schema = "TESTING_SYSTEM_DATABASE")
public class QuestionLevel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "level_id", nullable = false)
	private int levelId;

	@Column(name = "level_name")
	private String levelName;

	@Column(name = "status")
	private int status;
//	
//	 @OneToMany(mappedBy = "questionLevel", fetch = FetchType.EAGER,cascade = CascadeType.DETACH)
//     @JsonBackReference
//     private List<Question> questionL;

	public QuestionLevel(int levelId, String levelName, int status) {
		super();
		this.levelId = levelId;
		this.levelName = levelName;
		this.status = status;
	}

	public QuestionLevel() {
		super();
	}

	/**
	 * @return the levelId
	 */
	public int getLevelId() {
		return levelId;
	}

	/**
	 * @param levelId the levelId to set
	 */
	public void setLevelId(int levelId) {
		this.levelId = levelId;
	}

	public String getLevelName() {
		return levelName;
	}

	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
