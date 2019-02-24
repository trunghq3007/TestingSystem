package com.cmcglobal.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.entity.Group;
import com.cmcglobal.repository.GroupRepository;
import com.cmcglobal.service.GroupService;

@Service
public class GroupServiceImpl implements GroupService {
	
	@Autowired
	private GroupRepository groupRepository;

	@Override
	public List<Group> getAllGroupUser() {
		// TODO Auto-generated method stub
		List<Group> list = new ArrayList<>();
		groupRepository.findAll().forEach(list::add);
		return list;
	}

	@Override
	public Optional<Group> findById(int id) {
		// TODO Auto-generated method stub
		Optional<Group> groupUser = groupRepository.findById(id);
		return groupUser;
	}

	@Override
	public Group saveGroupUser(Group object) {
		// TODO Auto-generated method stub
		return groupRepository.save(object);
	}

	@Override
	public void deleteGroupUserById(int id) {
		// TODO Auto-generated method stub
		groupRepository.deleteById(id);
	}

	@Override
	public void deleteAllGroupUser() {
		// TODO Auto-generated method stub
		groupRepository.deleteAll();
	}

	@Override
	public List<Group> findByGroupNameContaining(String name) {
		// TODO Auto-generated method stub
		List<Group> listgroupUser = groupRepository.findByGroupNameContaining(name);
		return listgroupUser;
	}

	@Override
	public Group findByGroupId(int groupUserId) {
		// TODO Auto-generated method stub
		Group groupUser = groupRepository.findByGroupId(groupUserId);
		return groupUser;
	}

	@Override
	public Group createGroupUser(Group groupUser) {
		// TODO Auto-generated method stub
		Group newGroupUser = groupRepository.save(new Group(groupUser.getCreateBy(), groupUser.getCreateDate(),groupUser.getGroupName()));
		return newGroupUser;
	}

	@Override
	public void addUserIntoGroup(int user_id, int group_id) {
		// TODO Auto-generated method stub
		groupRepository.addUserIntoGroup(user_id, group_id);
	}

	@Override
	public void removeUserIntoGroup(int user_id, int group_id) {
		// TODO Auto-generated method stub
		groupRepository.removeUserIntoGroup(user_id, group_id);
	}

}
