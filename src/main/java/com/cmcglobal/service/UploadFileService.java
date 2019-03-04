package com.cmcglobal.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
//Yen Trinh 
public interface UploadFileService {
	public String saveFile(MultipartFile file);
	Resource findFileByName(String nameFile);
	public String saveFileVer(MultipartFile file, String pathToSave);
}
