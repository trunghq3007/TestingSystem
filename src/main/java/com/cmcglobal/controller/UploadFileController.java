/**
 * Create by: yentrinh - CMC
 * Create date: Feb 21, 2019
 * Modifier: yentrinh
 * Modified date: Feb 21, 2019
 * Description: ....
 * Version 1.0
 */
package com.cmcglobal.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cmcglobal.service.UploadFileService;

@RestController
public class UploadFileController {

	@Autowired
	UploadFileService uploadFileService;

	List<String> files = new ArrayList<>();

	@PostMapping(value="/uploadfile")
	public ResponseEntity<String> handleFileUpload(@RequestParam("files") MultipartFile file) {
		String extension = FilenameUtils.getExtension(file.getOriginalFilename());
		System.out.println("Extension: " +extension);
		System.out.println( !(("xlsx".equals(extension)) || ("xls".equals(extension))) );
		
		if( !(("xlsx".equals(extension)) || ("xls".equals(extension))) ) {
			String mess = "Not matching extension file";
			return ResponseEntity.status(HttpStatus.OK).body(mess);
		}
		String message = "";
		try {
			uploadFileService.saveFile(file);
			files.add(file.getOriginalFilename());
			message = "successfully uploaded" + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body("OK");
		} catch (Exception e) {
			message = "ERROR! can't upload " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		}
	}
}
