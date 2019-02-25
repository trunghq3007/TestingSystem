package com.cmcglobal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmcglobal.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, String> {

}
