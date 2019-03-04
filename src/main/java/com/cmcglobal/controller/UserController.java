package com.cmcglobal.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Consumer;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.configuration.Generator;
import com.cmcglobal.configuration.UserC;
import com.cmcglobal.entity.Menu;
import com.cmcglobal.entity.Role;
import com.cmcglobal.entity.User;
import com.cmcglobal.service.UserService;


@RestController
public class UserController {

	@Autowired
	UserService useService;

	@Autowired
	Generator generate;

	@GetMapping("/api/abc")
	public User sds() {	
		return useService.findEmail("thanh@gmail.com");
	}

	@PostMapping(value = "/login", produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> login(@RequestBody String user, HttpServletResponse response) {
		User usera = useService.findEmail(user);
		String token = "";
		if (usera != null) {
			List<String> roles= new ArrayList<>();
			
			usera.getRoles().forEach(new Consumer<Role>() {
				String role= "";
				@Override
				public void accept(Role t) {
					role = "ROLE_"+t.getRoleName(); 
					t.getMenus().forEach(new Consumer<Menu>() {
						@Override
						public void accept(Menu t) {
							// TODO Auto-generated method stub
							String role1 = role +"_" + t.getMenuName();
							roles.add(role1.toUpperCase());
						}
					});
				}
			});
			System.out.println(roles);
			token = generate.generator(new UserC(usera.getUserId(), usera.getEmail(), roles.toString()));
			response.addHeader("token", token);
			
			return new ResponseEntity<>(usera, HttpStatus.OK);
		} else
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
}
