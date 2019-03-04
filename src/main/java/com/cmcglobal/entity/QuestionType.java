package com.cmcglobal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "question_type", schema = "TESTING_SYSTEM_DATABASE")
public class QuestionType {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "type_id", nullable = false)
	private int typeId;

	@Column(name = "type_name")
	private String typeName;

	@Column(name = "status")
	private int status;

//	@OneToMany(mappedBy = "questionType", fetch = FetchType.EAGER,cascade = CascadeType.DETACH)
//    @JsonBackReference
//    private List<Question> questionTs;

	public QuestionType(int typeId, String typeName, int status) {
		super();
		this.typeId = typeId;
		this.typeName = typeName;
		this.status = status;
	}

	public QuestionType() {
		super();
	}

	/**
	 * @return the typeId
	 */
	public int getTypeId() {
		return typeId;
	}

	/**
	 * @param typeId the typeId to set
	 */
	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
