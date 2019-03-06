package com.cmcglobal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.service.RoleService;
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.UserService;
import com.cmcglobal.utils.Api;
import com.cmcglobal.utils.RoleName;
import com.cmcglobal.utils.request.SignUpFrom;
import com.cmcglobal.utils.response.ResponseMessage;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.cmcglobal.entity.Role;
import com.cmcglobal.entity.User;
import com.cmcglobal.repository.RoleRepository;

@RestController
@CrossOrigin(origins = Api.User.API_CROSS_ORIGIN, maxAge = 3600)
@RequestMapping(Api.User.API_URL_USERS)
public class UserController {
	
  @Autowired
  private UserService userService;
  
  @Autowired
  private RoleService roleService;
  
  @Autowired
  PasswordEncoder encoder;

@RequestMapping(value = "/users/{id}/semesters", method = RequestMethod.GET)
  public ResponseEntity<ServiceResult> getSemesterListByUserId(
      @PathVariable("id") String id) {
    return new ResponseEntity<ServiceResult>(
        userService.getSemseterListByUserId(id), HttpStatus.OK);
  }

@RequestMapping(value = "/semesters/{semesterId}/tests/", method = RequestMethod.GET)
  public ResponseEntity<ServiceResult> getTestListOfUser(
      @PathVariable("semesterId") String semesterId) {
    return new ResponseEntity<ServiceResult>(
        userService.getExamBySemesterExamId(semesterId), HttpStatus.OK);
  }

  @GetMapping(value = "/user/listUsers")
  public List<User> listUsers() {
    /*
     * cate.delete(cate.getOne(1)); cate.deleteAll();
     */

    return userService.findAll();
  }

  @GetMapping(value = "/user/{id}")
  public User getUser(@PathVariable int id) {
    return userService.findByID(id);
  }
  
	 /**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: show list user
	 */
	@GetMapping(value = Api.User.API_URL_LIST_USERS)
	public ResponseEntity<List<User>> viewListUser(){
		return new ResponseEntity<List<User>>(userService.findAll(),HttpStatus.OK);
	}
	
	
    @GetMapping(value = Api.User.API_URL_LIST_ROLES)
	public ResponseEntity<List<Role>> viewListRole(){
			return new ResponseEntity<List<Role>>(roleService.findAll(),HttpStatus.OK);
	}
	
	
	/**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: show list user
	 */
	@GetMapping(value = Api.User.API_URL_USERS_INFOR)
	public ResponseEntity<User> viewInfor(@PathVariable("id") int id) {
		if(userService.findUserById(id) == null) {
			return new ResponseEntity<User>(userService.findUserById(id),HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<User>(userService.findUserById(id),HttpStatus.OK);
		}
	}
	
	/**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: add user
	 */
	@PostMapping(value = Api.User.API_URL_USERS_ADD)
	public ResponseEntity<String> addUser(@RequestBody User user){
		String pass = encoder.encode(user.getPassword());
		user.setPassword(pass);
		userService.addUser(user);
		return new ResponseEntity<String>( HttpStatus.CREATED);

	}
	
//	@PostMapping(value = Api.User.API_URL_USERS_ADD)
//	public  ResponseEntity<?> registerUser(@Valid @RequestBody SignUpFrom signUpRequest){
//		// check email có tồn tại không
//				if (userService.existsByEmail(signUpRequest.getEmail())) {
//					return new ResponseEntity<>(new ResponseMessage("Faile -> Email is already token !"),
//							HttpStatus.BAD_REQUEST);
//				}
//				// creating users account
//				// add từ SignupForm vào user
//				User user = new User(signUpRequest.getEmail(), signUpRequest.getFullName(), signUpRequest.getMobile(),
//						encoder.encode(signUpRequest.getPassword()), signUpRequest.getStatus());
//				// tạo bộ nhớ lưu trữ
//				Set<String> strRoles = signUpRequest.getRole();
//
//				Set<Role> roles = new HashSet<>();
//				// kiểm tra role truộc 1 trong 3 role
//				strRoles.forEach(role -> {
//					switch (role) {
//					case "admin":
//						Role adminRole = roleService.findByRoleName(RoleName.ROLE_ADMIN)
//								.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role mng not find."));
//						roles.add(adminRole);
//						break;
//					case "mg":
//						Role mngRole = roleService.findByRoleName(RoleName.ROLE_MANAGER)
//								.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role mng not find."));
//						roles.add(mngRole);
//						break;
//
//					default:
//						Role mbRole = roleService.findByRoleName(RoleName.ROLE_MEMBER)
//								.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role mb not find."));
//						roles.add(mbRole);
//					}
//				});
//				// ---------------
//				user.setRoles(roles);
//				// lưu role
//				userService.addUser(user);
//				return new ResponseEntity<>(new ResponseMessage("User Registered successfully!"), HttpStatus.OK);
//
//	}
	
	/**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: edit user
	 */
	@PutMapping(value = Api.User.API_URL_USERS_UPDATE)
	public ResponseEntity<User> editUser(@RequestBody User user,@PathVariable("id") int userId) {
		if(userService.findUserById(userId) == null) {
			return new ResponseEntity<User>(user,HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<User>(userService.editUser(user,userId),HttpStatus.OK);
		}
	}
	
	/**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: delete user by id
	 */
	@DeleteMapping(value = Api.User.API_URL_USERS_DELETE)
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id) {
		if(userService.findUserById(id)  == null) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}else {
			userService.deleteUser(id);
			return new ResponseEntity<String>(HttpStatus.OK);
		}
		
	}
	
	/**
	 * Create by: HoangLinh - CMC
	 * Create date: Feb 25, 2019
	 * Modified date: Feb 25, 2019
	 * Description: searh user by fullName
	 */
	@GetMapping(value = Api.User.API_URL_USERS_SEARCH_BY_NAME)
	public ResponseEntity<List<User>> searchUserByName(@PathVariable("keyword") String keyword){
		return new ResponseEntity<List<User>>(userService.findByFullName(keyword),HttpStatus.OK);
	}
	
	
	
}
