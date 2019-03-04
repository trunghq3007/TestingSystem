package com.cmcglobal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "tag", schema = "TESTING_SYSTEM_DATABASE")
public class QuestionTag {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "tag_id", nullable = false)
	private int tagId;

	@NotBlank
	@Column(name = "tag_name")
	private String tagName;

	@Column(name = "description")
	private String tagDescription;

	@Column(name = "status")
	private int status;

//	 @OneToMany(mappedBy = "questionTag", fetch = FetchType.EAGER,cascade = CascadeType.DETACH)
//     @JsonBackReference
//     private List<Question> questionT;

	public QuestionTag(int tagId, String tagName, String tagDescription, int status) {
		super();
		this.tagId = tagId;
		this.tagName = tagName;
		this.tagDescription = tagDescription;
		this.status = status;
	}

	public QuestionTag(String tagName, String tagDescription, int status) {
		super();
		this.tagName = tagName;
		this.tagDescription = tagDescription;
		this.status = status;
	}

	public QuestionTag() {
		super();
	}

	/**
	 * @return the tagId
	 */
	public int getTagId() {
		return tagId;
	}

	/**
	 * @param tagId the tagId to set
	 */
	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public String getTagDescription() {
		return tagDescription;
	}

	public void setTagDescription(String tagDescription) {
		this.tagDescription = tagDescription;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}