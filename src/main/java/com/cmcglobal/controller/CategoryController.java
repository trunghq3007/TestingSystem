/**
 * Create by: User - CMC
 * Create date: Feb 11, 2019
 * Modifier: User
 * Modified date: Feb 11, 2019
 * Description: ....
 * Version 1.0
 */
package com.cmcglobal.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cmcglobal.entity.Category;
import com.cmcglobal.entity.Question;
import com.cmcglobal.service.CategoryService;

/**
 * Create by: thanhtd - CMC
 * Create date: Feb 11, 2019
 * Modifier: thanhtd
 * Modified date: Feb 11, 2019
 * Description: ....
 * Version 1.0
 */
@RestController
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(value = "category/sum", method = RequestMethod.GET)
	private void sumCategory(HttpServletResponse responseHeaders) {
		responseHeaders.addHeader("SumCategory", categoryService.countQuestionCategory());
	}

	@RequestMapping(value = "category/count-search-category", method = RequestMethod.GET)
	private void countCategory(HttpServletResponse responseHeaders,@RequestParam String content) {
		responseHeaders.addHeader("CountSearchCategory", categoryService.countSearchCategory(content));
	}
	
	
	@RequestMapping(value = "category/pagination", method = RequestMethod.GET)
	private List<Category> getPageCategory(
	        @RequestParam(name = "page", required = false, defaultValue = "0") Integer page,
	        @RequestParam(name = "size", required = false, defaultValue = "5") Integer size){
		Pageable pageable = PageRequest.of(page, size);
		return categoryService.pageQuestionCategory(pageable);
	}
		
	@RequestMapping(value="/category", method = RequestMethod.GET)
	public List<Category> getAllCategories(){
		return categoryService.getAllCategory();
	}
	

	@RequestMapping(value = "category/{id}", method = RequestMethod.GET)
	public Category getCById(@PathVariable("id") Integer id) {
		return categoryService.findById(id);
	}

	@RequestMapping(value = "category/search-by-content", method = RequestMethod.GET)
	private List<Category> searchByContent(@RequestParam(defaultValue="") String contentSearch,
	        @RequestParam(name = "page", required = false, defaultValue = "0") Integer page,
	        @RequestParam(name = "size", required = false, defaultValue = "5") Integer size) {
		Pageable pageable = PageRequest.of(page, size);
		String content = contentSearch.trim();
		if(content.equals("")) {
			return categoryService.pageQuestionCategory(pageable);
		}
		return categoryService.searchByContent(content, pageable);
	}

	@RequestMapping(value = "/category", method = RequestMethod.POST)
	public void insert(@RequestBody Category category) {
		categoryService.insertCategory(category);
	}

	@RequestMapping(value = "category/{id}", method = RequestMethod.DELETE)
	public void deleteCategory(@PathVariable("id") Integer id) {
		categoryService.deletebyId(id);
	}

	@RequestMapping(value = "category/{id}", 
	method = RequestMethod.PATCH)
	private String editCategory(@PathVariable("id") Integer id, @RequestBody Category newCategory) {
		return categoryService.editCategory(id, newCategory);
	}
	@PutMapping(value = "category/edit")
	private String editCategory(@RequestBody Category newCategory) {
		return categoryService.editCate(newCategory);
	}


}
