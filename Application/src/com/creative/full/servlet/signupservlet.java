package com.creative.full.servlet;

import java.io.IOException;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

@SuppressWarnings("serial")
public class signupservlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html");
		String fullname = req.getParameter("_fullname");
		String email = req.getParameter("_email");
		String mobilenumber = req.getParameter("_mobilenumber");
		String password = req.getParameter("password");
		String reenterpassword = req.getParameter("reenterpassword");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Entity user = new Entity("user",46);
		user.setProperty("Full name", fullname);
		user.setProperty("Email", email);
		user.setProperty("Mobile Number", mobilenumber);
		user.setProperty("Password", password);
		datastore.put(user);
//		System.out.println("Full Name : "+fullname);
//		System.out.println("email : "+email);
//		System.out.println("mobile number : "+mobilenumber);
//		System.out.println("password : "+ password);
//		System.out.println("re enter password : "+ reenterpassword);
//		
		resp.getWriter().println("<html><body><h1>Success!Check the server console</h1></body></html>");
	}
}
