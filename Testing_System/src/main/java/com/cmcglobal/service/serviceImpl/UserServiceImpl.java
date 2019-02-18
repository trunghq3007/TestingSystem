package com.cmcglobal.service.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.repository.UserRepository;
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public ServiceResult getSemseterListByUserId(int id) {
		ServiceResult result = new ServiceResult();
		result.setData(userRepository.findById(id).get());
		return result;
	}

}
