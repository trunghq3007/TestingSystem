package com.cmcglobal.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The persistent class for the group_name database table.
 * 
 */
@Entity
@Table(name = "`group`")
public class Group implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "group_id")
	private int groupId;

	@Column(name = "create_by")
	private int createBy;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "group_name")
	private String groupName;

	// bi-directional many-to-many association to User
	@ManyToMany(mappedBy = "groups")
	@JsonIgnoreProperties("groups")
	private List<User> users;
	
	@OneToMany( mappedBy="group",fetch=FetchType.EAGER,cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnoreProperties("group")
	private Set<User_Group> userGroups;

	public Group() {
		super();
	}
	
	public Group(int createBy, Date createDate, String groupName) {
		super();
		this.createBy = createBy;
		this.createDate = createDate;
		this.groupName = groupName;
	}

	public Set<User_Group> getUserGroups() {
		return userGroups;
	}

	public void setUserGroups(Set<User_Group> userGroups) {
		this.userGroups = userGroups;
	}

	public int getGroupId() {
		return this.groupId;
	}

	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}

	public int getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(int createBy) {
		this.createBy = createBy;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getGroupName() {
		return this.groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public List<User> getUsers() {
		return this.users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	
}