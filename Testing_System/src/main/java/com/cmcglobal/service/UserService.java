package com.cmcglobal.service;

import java.util.List;

import com.cmcglobal.entity.User;

public interface UserService {
	List<User> findAll();

	User findOne(int userId);
}
