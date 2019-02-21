package com.cmcglobal.service;

import java.util.List;

import com.cmcglobal.entity.User;

public interface UserService {
	ServiceResult getSemseterListByUserId(String id);

	ServiceResult getExamBySemesterExamId(String id);
	
	List<User> findAll();
}
