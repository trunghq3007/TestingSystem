package com.cmcglobal.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The persistent class for the menu database table.
 * 
 */
@Entity
public class Menu implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "menu_id")
	private int menuId;

	@Column(name = "menu_description")
	private String menuDescription;

	@Column(name = "menu_function")
	private String menuFunction;

	@Column(name = "menu_name")
	private String menuName;

	// bi-directional many-to-many association to Role
	@ManyToMany(mappedBy = "menus")
	@JsonIgnoreProperties("menus")
	private List<Role> roles;

	public Menu() {
	}
	
	public Menu(String menuDescription, String menuFunction, String menuName) {
		super();
		this.menuDescription = menuDescription;
		this.menuFunction = menuFunction;
		this.menuName = menuName;
	}

	public int getMenuId() {
		return this.menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public String getMenuDescription() {
		return this.menuDescription;
	}

	public void setMenuDescription(String menuDescription) {
		this.menuDescription = menuDescription;
	}

	public String getMenuFunction() {
		return this.menuFunction;
	}

	public void setMenuFunction(String menuFunction) {
		this.menuFunction = menuFunction;
	}

	public String getMenuName() {
		return this.menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public List<Role> getRoles() {
		return this.roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

}