/**
 * 
 */
package com.cmcglobal.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author User
 *
 */
@Entity
@Table(name = "menu")
public class Menu {

	@Id
	@Column
	private int menuId;
	
	@Column
	private String menuName;
	
	@Column
	private String menuDescription;
	
	@Column
	private String menuFunction;
	
	@ManyToMany(mappedBy = "menus", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Role> roles = new HashSet<>();

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(int menuId, String menuName, String menuDescription, String menuFunction, Set<Role> roles) {
		super();
		this.menuId = menuId;
		this.menuName = menuName;
		this.menuDescription = menuDescription;
		this.menuFunction = menuFunction;
		this.roles = roles;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getMenuDescription() {
		return menuDescription;
	}

	public void setMenuDescription(String menuDescription) {
		this.menuDescription = menuDescription;
	}

	public String getMenuFunction() {
		return menuFunction;
	}

	public void setMenuFunction(String menuFunction) {
		this.menuFunction = menuFunction;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
}
