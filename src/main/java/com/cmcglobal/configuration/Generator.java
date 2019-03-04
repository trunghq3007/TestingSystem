package com.cmcglobal.configuration;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author User
 *
 */
@Component
public class Generator {
	private String secret="gdp05";
	public String generator(UserC user) {
		//set user
		Claims claims= Jwts.claims()
				.setSubject(user.getEmail());
		claims.put("userId", String.valueOf(user.getUserId()));
		claims.put("role", user.getRoles());
				
		return Jwts.builder()
				.setClaims(claims)
				.setExpiration(createExpirationDate())
				.signWith(SignatureAlgorithm.HS512, generateShareSecret())
				.compact();
				
	}

	private Date createExpirationDate() {
		return new Date(System.currentTimeMillis()+8600000);
	}

	 private byte[] generateShareSecret() {
		    // Generate 256-bit (32-byte) shared secret
		    byte[] sharedSecret = new byte[32];
		    sharedSecret = secret.getBytes();
		    return sharedSecret;
		  }
}
