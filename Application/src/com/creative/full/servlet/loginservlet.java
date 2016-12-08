package com.creative.full.servlet;

import java.io.IOException;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@SuppressWarnings("serial")
public class loginservlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html");
		
		String amobilenumber = req.getParameter("txtusername");
		String apassword = req.getParameter("txtpassword");
		String emobilenumber=null;
		String epassword=null;
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Key key = KeyFactory.createKey("user", amobilenumber);
		try {
			emobilenumber=(String) datastore.get(key).getProperty("Mobile Number");
			epassword=(String) datastore.get(key).getProperty("Password");
//			System.out.println(epassword);
//			System.out.println(emobilenumber);
		} catch (EntityNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(amobilenumber.toLowerCase().equals(emobilenumber.toLowerCase()) && apassword.equals(epassword))
		{
			resp.sendRedirect("/HTML/userscreen.html");
			
		}
		else
		{
			System.out.println("Inside true");
			
		}
		//System.out.println("Full Name : "+req.getParameter("txtusername"));
		//System.out.println("email : "+req.getParameter("txtpassword"));
		
		resp.getWriter().println("<html><body><h1>Success from login servlet!Check the server console</h1></body></html>");
	}
}
