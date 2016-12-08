package com.creative.full.servlet;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class loginservlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html");
		System.out.println("Full Name : "+req.getParameter("	_fullname"));
		System.out.println("email : "+req.getParameter("_email"));
		System.out.println("mobile number : "+req.getParameter("_mobilenumber"));
		System.out.println("password : "+req.getParameter("password"));
		System.out.println("re enter password : "+req.getParameter("reenterpassword"));
		
		resp.getWriter().println("<html><body><h1>Success!Check the server console</h1></body></html>");
	}
}
