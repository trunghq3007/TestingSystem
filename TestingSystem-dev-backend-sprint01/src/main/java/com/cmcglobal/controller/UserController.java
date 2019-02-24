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
import com.cmcglobal.service.ServiceResult;
import com.cmcglobal.service.UserService;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.cmcglobal.entity.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserController {
  @Autowired
  private UserService userService;
  
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
  
  @GetMapping("/user")
	public ResponseEntity<List<User>> viewListUser(){
		return new ResponseEntity<List<User>>(userService.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}/infor")
	public ResponseEntity<User> viewInfor(@PathVariable("id") int id) {
		if(userService.findUserById(id) == null) {
			return new ResponseEntity<User>(userService.findUserById(id),HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<User>(userService.findUserById(id),HttpStatus.OK);
		}
	}
	
	@PostMapping("/user/create")
	public ResponseEntity<String> addUser(@RequestBody User user){
		String pass = encoder.encode(user.getPassword());
		user.setPassword(pass);
		userService.addUser(user);
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}
	
	@PutMapping("/user/{userId}/edit")
	public ResponseEntity<User> editUser(@RequestBody User user,@PathVariable("userId") int userId) {
		if(userService.findUserById(userId) == null) {
			return new ResponseEntity<User>(user,HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<User>(userService.editUser(user,userId),HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/user/{id}/delete")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id) {
		if(userService.findUserById(id)  == null) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}else {
			userService.deleteUser(id);
			return new ResponseEntity<String>(HttpStatus.OK);
		}
		
	}
}
