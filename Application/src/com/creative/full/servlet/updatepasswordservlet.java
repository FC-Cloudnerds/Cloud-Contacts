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
		String keyid = null;
		//System.out.println(aoldpassword);
		//System.out.println(newpassword);
		
		HttpSession session = req.getSession();
		keyid = (String) session.getAttribute("userid");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Key key = KeyFactory.createKey("user", keyid);
		Entity user =null;
		try {
			user = datastore.get(key);
			eoldpassword=(String) user.getProperty("Password");
			
//			System.out.println(aoldpassword);
//			System.out.println(newpassword);
		} catch (EntityNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(aoldpassword.equals(eoldpassword) && newrepassword.equals(newpassword))
		{
			user.setProperty("Password", newrepassword);
			datastore.put(user);
			
		}
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		resp.getWriter().println("Successfully password changed");
//		System.out.println("Full Name : "+req.getParameter("txtusername"));
//		System.out.println("email : "+req.getParameter("txtpassword"));
		
		}
}
