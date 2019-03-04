package com.cmcglobal.configuration;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;	

/**
 * custion validate
 * read token
 * @author User
 *
 */
@Component
public class CustomValidator {
	
	private String secret="gdp05";
	
	
	 private byte[] generateShareSecret() {
		    // Generate 256-bit (32-byte) shared secret
		    byte[] sharedSecret = new byte[32];
		    sharedSecret = secret.getBytes();
		    return sharedSecret;
		  }
	 
	// 
	public UserC validate(String token) {
		
		UserC customUserDetails =null;
		
		try {
			Claims body = Jwts.parser()
					.setSigningKey(generateShareSecret())
					.parseClaimsJws(token)
					.getBody();
			
			if(isTokenExpired(body.getExpiration())) {
				customUserDetails=new UserC();
				customUserDetails.setEmail(body.getSubject());
				customUserDetails.setUserId(Integer.parseInt((String) body.get("userId")));
				customUserDetails.setRoles((String) body.get("roles"));	
			}
			return customUserDetails;
		}catch (Exception e) {
			System.out.println(e);
			return null;
		}
		
	}
	
	private boolean isTokenExpired(Date tokenDate) {
		return tokenDate.after(new Date());
	}
	
}
