package com.cmcglobal.configuration;

public class UserC {

	private int userId;
	private String email;
	private String roles;
	public UserC() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserC(int userId, String email, String roles) {
		super();
		this.userId = userId;
		this.email = email;
		this.roles = roles;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
}
