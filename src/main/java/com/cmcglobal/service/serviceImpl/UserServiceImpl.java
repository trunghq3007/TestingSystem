/**
 * 
 */
package com.cmcglobal.service.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmcglobal.entity.User;
import com.cmcglobal.repository.UserRepository;
import com.cmcglobal.service.UserService;


/**
 * @author User
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public User findEmail(String email) {
		// TODO Auto-generated method stub
		
		Optional<User> user = userRepository.findByEmail(email);
		if(user.isPresent()) {
			return user.get();
		}
		else
			return null;
	}

}
