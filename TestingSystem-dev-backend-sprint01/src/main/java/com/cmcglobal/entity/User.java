package com.cmcglobal.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class User implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;
	@Column(name = "full_name")
	private String fullName;
	private String email;
	private String mobile;
	private String password;
	private int status;
	@OneToMany(mappedBy = "userCreated", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("user")
	private List<Exam> exams;

	// thap them
	@ManyToMany
	@JoinTable(name = "user_group", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "group_id") })
	@JsonIgnoreProperties("users")
	private List<Group> groups;

	@ManyToMany
	@JoinTable(name = "user_role", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "role_id") })
	@JsonIgnoreProperties("users")
	private Set<Role> roles = new HashSet<>();
	
	@OneToMany(mappedBy = "user", orphanRemoval = true, fetch = FetchType.EAGER)
	@JsonIgnoreProperties("user")
	private Set<User_Group> userGroups;

//	public Set<User_Group> getUserGroups() {
//		return userGroups;
//	}
//
//	public void setUserGroups(Set<User_Group> userGroups) {
//		this.userGroups = userGroups;
//	}

	public List<Group> getGroups() {
		return groups;
	}

	public void setGroups(List<Group> groups) {
		this.groups = groups;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public User(String email, String fullName, String mobile, String password, int status) {
		super();
		this.email = email;
		this.fullName = fullName;
		this.mobile = mobile;
		this.password = password;
		this.status = status;
	}

//	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @JoinTable(name = "candidate", joinColumns = { @JoinColumn(name = "user_id") },inverseJoinColumns = { @JoinColumn(name = "semester_exam_id") })
//	private List<Semester> semester= new ArrayList<Semester>();

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
