/**
 * Create by: User - CMC
 * Create date: Feb 11, 2019
 * Modifier: User
 * Modified date: Feb 11, 2019
 * Description: ....
 * Version 1.0
 */
package com.cmcglobal.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.cmcglobal.entity.Category;

/**
 * Create by: thanhtd - CMC Create date: Feb 11, 2019 Modifier: thanhtd Modified
 * date: Feb 11, 2019 Description: .... Version 1.0
 */

public interface CategoryService {
	public List<Category> getAllCategory();

	void insertCategory(Category category);

	void deletebyId(Integer id);

	Category findById(Integer id);

	String editCategory(Integer id, Category newCategory);

	List<Category> searchByContent(String contentSearch, Pageable pageable);

	List<Category> pageQuestionCategory(Pageable pageable);

	String countQuestionCategory();

	String countSearchCategory(String content);
	
	Category getOneById(int categoryId);
	
	String editCate(Category newCategory);

}
