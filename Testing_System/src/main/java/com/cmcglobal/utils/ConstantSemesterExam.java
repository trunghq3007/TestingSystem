package com.cmcglobal.utils;

import java.util.HashMap;

public class ConstantSemesterExam {
	
	public static HashMap<Integer, String> statusSemesterExam(){
		HashMap<Integer, String>  status = new HashMap<>();
		status.put(0, "Draft");
		status.put(1, "Public");
		status.put(2, "Done");
		return status;
	}

}
