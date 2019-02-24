package com.cmcglobal.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "user_group")
public class User_Group implements Serializable{

private static final long serialVersionUID = 1L;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	@JsonIgnoreProperties("userGroups")
	private User user;
	
	
	@Id
	@ManyToOne
	@JoinColumn(name = "group_id", referencedColumnName = "group_id")
	@JsonIgnoreProperties("userGroups")
	private Group group;

	public User_Group() {
		super();
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Group getGroup() {
		return group;
	}


	public void setGroup(Group group) {
		this.group = group;
	}

	
}
