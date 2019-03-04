package com.cmcglobal.controller;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.Answer;
import com.cmcglobal.service.serviceImpl.AnswerServiceImpl;

@RestController
public class AnswerController {
	@Autowired
	private AnswerServiceImpl answerServiceImpl;
	
	
	@RequestMapping(value = "answer", method = RequestMethod.GET)
	private List<Answer> getAllAnswer() {
		return answerServiceImpl.getAllAnswer();
	}
	
	@RequestMapping(value = "answer/{id}", method = RequestMethod.GET)
	public Answer getAById(@PathVariable("id") String id) {
		return answerServiceImpl.findById(id);
	}
	
	
	@RequestMapping(value = "answer/add", method = RequestMethod.POST)
	public void insert(@RequestBody Answer answer) {
		answerServiceImpl.insertAnswer(answer);
	}
	
	@RequestMapping(value = "answer/delete/{answerID}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("answerID") String answerID) {
		 answerServiceImpl.deletebyId(answerID);
	}
	
	@PutMapping("/answer/edit/{answerID}")
	private String editAnswer(@PathVariable("answerID") String answerID, @RequestBody Answer newAnswer) {
		return answerServiceImpl.editAnswer(answerID, newAnswer);

	}
	
}
