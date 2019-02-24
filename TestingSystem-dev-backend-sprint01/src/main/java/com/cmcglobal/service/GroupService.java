package com.cmcglobal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestBody;

import com.cmcglobal.entity.Group;



public interface GroupService {
	
	List<Group> getAllGroupUser();
	
	Optional<Group> findById(int id);
	
	Group saveGroupUser(Group object);
	
	void deleteGroupUserById(int id);
	
	void deleteAllGroupUser();
	
	List<Group> findByGroupNameContaining(String name);
		
	Group findByGroupId(int groupUserId);
	
	Group createGroupUser(@RequestBody Group groupUser);
	
	void addUserIntoGroup(int user_id, int group_id);
	
	void removeUserIntoGroup(int user_id, int group_id);

}
