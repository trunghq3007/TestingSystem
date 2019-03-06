package com.cmcglobal.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.Group;
import com.cmcglobal.entity.User;
import com.cmcglobal.entity.User_Group;
import com.cmcglobal.service.GroupService;
import com.cmcglobal.utils.Api;


@CrossOrigin(origins = Api.Group.API_CROSS_ORIGIN)
@RestController
@RequestMapping(value = Api.Group.API_URL_GROUPS)
public class GroupController {

	@Autowired
	GroupService groupService;
	
	
	@GetMapping(value = Api.Group.API_URL_LIST_GROUPS)
	public List<Group> getAllGroupUsers() {
		System.out.println("Get all Group Users...");
		return groupService.getAllGroupUser();
	}
	
	@PutMapping(value = Api.Group.API_URL_GROUPS_UPDATE)
	public ResponseEntity<Group> updateGroupUser(@PathVariable("id") int id, @RequestBody Group customer) {
		System.out.println("Update GroupUser with ID = " + id + "...");
 
		Optional<Group> groupUserData = groupService.findById(id);
 
		if (groupUserData.isPresent()) {
			Group groupUser = groupUserData.get();
			groupUser.setGroupName(customer.getGroupName());
			groupUser.setCreateBy(customer.getCreateBy());
			groupUser.setCreateDate(customer.getCreateDate());
			return new ResponseEntity<>(groupService.saveGroupUser(groupUser), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = Api.Group.API_URL_GROUPS_ADD)
	public Group createGroupUser(@RequestBody Group groupUser) {

		return groupService.createGroupUser(groupUser);
	}

	@DeleteMapping(value = Api.Group.API_URL_GROUPS_DELETE)
	public ResponseEntity<String> deleteGroupUser(@PathVariable("id") int id) {
		System.out.println("Delete GroupUser with ID = " + id + "...");

		groupService.deleteGroupUserById(id);

		return new ResponseEntity<>("GroupUser has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping(value = Api.Group.API_URL_GROUPS_DELETE_ALL)
	public ResponseEntity<String> deleteAllGroupUsers() {
		System.out.println("Delete All Customers...");

		groupService.deleteAllGroupUser();

		return new ResponseEntity<>("All group-users have been deleted!", HttpStatus.OK);
	}

	@GetMapping(value = Api.Group.API_URL_GROUPS_DETAIL)
	public Group getGroupUserById(@PathVariable("id") int id) {
		System.out.println("Get Group User By Id..." + id + "...");

		return groupService.findByGroupId(id);
	}

	@GetMapping(value = Api.Group.API_URL_GROUPS_SEARCH_BY_NAME)
	public List<Group> findByGroupNameContaining(@PathVariable("name") String name) {
		return groupService.findByGroupNameContaining(name);
	}
	
//	@GetMapping("/detail/{id}/users")
//	public Set<User> getUserFromGroup(@PathVariable("id") int id) {
//		System.out.println("Get Group User By Id..." + id + "...");
//
//		Group groupUser = groupService.findByGroupId(id);
//		Set<User_Group> list = groupUser.getUserGroups();
//		
//		Set<User> users = new HashSet<>();
//		
//		for(User_Group user_group : list) {
//			users.add(user_group.getUser());
//		}
//		
//		return users;
//	}
//	
//	@GetMapping("/add/{group_id}/users/{user_id}")
//	public Set<User> addUserIntoGroup(@PathVariable("group_id") int group_id, @PathVariable("user_id") int user_id) {
//		System.out.println("ADD USER INTO GROUP BY ID ... GROUP_ID = " + group_id + "... USER_ID = " + user_id);
//		groupService.addUserIntoGroup(user_id, group_id);
//		Group groupUser = groupService.findByGroupId(group_id);
//		Set<User_Group> list = groupUser.getUserGroups();
//		
//		Set<User> users = new HashSet<>();
//		
//		for(User_Group user_group : list) {
//			users.add(user_group.getUser());
//		}
//		
//		return users;
//	}
	
//	@GetMapping("/delete/{group_id}/users/{user_id}")
//	public Set<User> removeUserIntoGroup(@PathVariable("group_id") int group_id, @PathVariable("user_id") int user_id) {
//		System.out.println("ADD USER INTO GROUP BY ID ... GROUP_ID = " + group_id + "... USER_ID = " + user_id);
//		groupService.removeUserIntoGroup(user_id, group_id);
//		Group groupUser = groupService.findByGroupId(group_id);
//		Set<User_Group> list = groupUser.getUserGroups();
//		
//		Set<User> users = new HashSet<>();
//		
//		for(User_Group user_group : list) {
//			users.add(user_group.getUser());
//		}
//		
//		return users;
//	}
}
