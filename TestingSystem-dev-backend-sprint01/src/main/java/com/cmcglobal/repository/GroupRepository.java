package com.cmcglobal.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cmcglobal.entity.Group;


@Repository
public interface GroupRepository extends JpaRepository<Group, Integer>{
	
	@Query(value = "SELECT g FROM Group g where g.groupName like %:name% or g.createBy like %:name% or g.createDate like %:name%",nativeQuery = true)
	List<Group> findByGroupNameContaining(String name);
	
	@Transactional
	@Modifying
	@Query(value = "insert into user_group values ( :user_id, :group_id )",nativeQuery = true)
	void addUserIntoGroup(@Param("user_id") int user_id, @Param("group_id") int group_id);
	
	@Transactional
	@Modifying
	@Query(value = "delete from user_group where user_id = :user_id and group_id = :group_id",nativeQuery=true)
	void removeUserIntoGroup(@Param("user_id") int user_id, @Param("group_id") int group_id);
	
	Group findByGroupId(int id);

}
