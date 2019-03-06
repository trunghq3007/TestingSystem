package com.cmcglobal.service.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.entity.Role;
import com.cmcglobal.repository.RoleRepository;
import com.cmcglobal.service.RoleService;
import com.cmcglobal.utils.RoleName;

@Service
public class RoleServiceImpl implements RoleService{
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Optional<Role> findByRoleName(RoleName roleName) {
		// TODO Auto-generated method stub
		return roleRepository.findByRoleName(roleName);
	}

	@Override
	public List<Role> findAll() {
		// TODO Auto-generated method stub
		return roleRepository.findAll();
	}

}
