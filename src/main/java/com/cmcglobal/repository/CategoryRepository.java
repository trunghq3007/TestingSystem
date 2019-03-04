package com.cmcglobal.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cmcglobal.entity.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	@Query("select c from Category c where c.categoryName like ?1")
	List<Category> findByCategoryNameContaining(String contentSearch, Pageable pageable);

	@Query("SELECT c FROM Category c")
	List<Category> pageQuestionCategory(Pageable pageable);

	@Query("select count(category_id) from Category")
	String questionCategorySum();
	
	@Query("select c FROM Category c where status=1")
	List<Category> getListCategory();
	
	@Query("select count(category_id) from Category c where c.categoryName like ?1")
	String countSearchCategory(String content);
	

}
