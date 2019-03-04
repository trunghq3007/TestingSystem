package com.cmcglobal.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cmcglobal.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, String> {

	
	@Query("select q from Question q where q.questionId = ?1 ")
	Question getOne(String id);
	
	@Query("SELECT q FROM Question q WHERE q.content LIKE %?1%")
	List<Question>  findByContentContaining(String contentSearch, Pageable pageable);


	@Query("SELECT q FROM Question q")
	List<Question> pageQuestion(Pageable pageable);

	@Query("select count(questionId) from Question")
	String questionSum();

	@Query("select count(questionId) from Question where content like ?1")
	String countSearchQuestion(String content);	
	
	List<Question> filterQuestion(String userName, Date dateCreated, Integer tagId, Integer levelId, 
			Integer categoryId, Integer typeId, Pageable pageable);

}
