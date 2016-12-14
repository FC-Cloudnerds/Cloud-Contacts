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
public class updatepasswordservlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html");
		
		String aoldpassword = req.getParameter("passoldpassword");
		String newpassword = req.getParameter("passnewpassword");
		String newrepassword=req.getParameter("passnewrepassword");
		String eoldpassword=null;
		
		System.out.println(aoldpassword);
		System.out.println(newpassword);
		
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Key key = KeyFactory.createKey("user", "12345");
		Entity user = new Entity("user", "12345");
		try {
			eoldpassword=(String) datastore.get(key).getProperty("Password");
			
			System.out.println(aoldpassword);
			System.out.println(newpassword);
		} catch (EntityNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(aoldpassword.equals(eoldpassword) && newrepassword.equals(newpassword))
		{
			user.setProperty("Password", newrepassword);
			datastore.put(user);
			
		}
		resp.getWriter().println("Successfully password changed");
		System.out.println("Full Name : "+req.getParameter("txtusername"));
		System.out.println("email : "+req.getParameter("txtpassword"));
		
		}
}
