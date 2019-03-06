/**
 * Project name: Testing_System
 * Package name: com.cmcglobal.utils
 * File name: Api.java
 * Author: Sanero.
 * Created date: Feb 20, 2019
 * Created time: 10:56:12 AM
 */

package com.cmcglobal.utils;

/*
 * @author Sanero.
 * Created date: Feb 20, 2019
 * Created time: 10:56:12 AM
 * Description: TODO - API.
 */

public interface Api {
  public static final String BASE_URL_CORS = "http://localhost:4200";

  /*
   * @author Sanero.
   * Created date: Feb 20, 2019
   * Created time: 10:56:37 AM
   * Description: TODO - API of Exam Module.
   */
  interface Exam {
    public static final String BASE_URL = "/exam";
    public static final String CREATE = "/create";
    public static final String GET_ALL = "/listExams";
    public static final String GET_BY_PAGE = "listExams/pagination";
    public static final String EXPORT = "/export/{id}";
    public static final String GET_ONE = "/{id}";
    public static final String APPROVE = "/approve";
    public static final String REMOVE_QUESTION = "/remove-question";
    public static final String ADD_QUESTION = "/add-question";
    public static final String RANDOM_QUESTION = "/random-question";
    public static final String IS_EMPTY_QUESTION = "/is-empty/{examId}";
    public static final String FILTER = "/filter";
    public static final String UPDATE_COMMON = "/update/update-common/{examId}";
    public static final String IMPORT_EXCEL = "/import-excel-file";
  }
  
  
  
 /**
 * @author HoangLinh
 * Create date: Feb 24, 2019
 */
  interface User {
	  public final static String API_CROSS_ORIGIN = "http://localhost:4200";
	  public final static String API_URL_USERS = "/admin/user";
	  public final static String API_URL_LIST_USERS = "/list";
	  public final static String API_URL_USERS_ADD = "/add";
	  public final static String API_URL_USERS_UPDATE = "/{id}/edit";
	  public final static String API_URL_USERS_DELETE = "/{id}/delete";
	  public final static String API_URL_USERS_INFOR = "/{id}/infor";
	  public final static String API_URL_USERS_SEARCH_BY_NAME = "/search/{keyword}";
	  public final static String API_URL_LIST_ROLES = "/role";
  }
  
  interface Group {
	  public final static String API_CROSS_ORIGIN = "http://localhost:4200";
	  public final static String API_URL_GROUPS = "/admin/group";
	  public final static String API_URL_LIST_GROUPS = "/list";
	  public final static String API_URL_GROUPS_ADD = "/add";
	  public final static String API_URL_GROUPS_UPDATE = "/{id}/edit";
	  public final static String API_URL_GROUPS_DELETE = "/{id}/delete";
	  public final static String API_URL_GROUPS_DETAIL = "/{id}/detail";
	  public final static String API_URL_GROUPS_SEARCH_BY_NAME = "/search/{name}";
	  public final static String API_URL_GROUPS_DELETE_ALL = "/delete";
	  
  }
  
  interface Menu {
	  public final static String API_CROSS_ORIGIN = "http://localhost:4200";
	  public final static String API_URL_MENUS = "/admin/menu";
	  public final static String API_URL_LIST_MENUS = "/list";
	  public final static String API_URL_MENUS_ADD = "/add";
	  public final static String API_URL_MENUS_UPDATE = "/{id}/edit";
	  public final static String API_URL_MENUS_DELETE = "/{id}/delete";
	  public final static String API_URL_MENUS_DETAIL = "/{id}/detail";
	  public final static String API_URL_MENUS_SEARCH_BY_NAME = "/search/{name}";
	  public final static String API_URL_MENUS_DELETE_ALL = "/delete";
  }
  
  
}
