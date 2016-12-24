package com.creative.full.cloudcontact;


/*
 * *
 * 
 */
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.repackaged.com.fasterxml.jackson.core.JsonParser;


public class ForgotPassServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();

		resp.setContentType("text/html");
		String dbemail, email, dbseq, ans, dbans, dbpass;
		email = req.getParameter("txtemail");
		ans = req.getParameter("txtanswer");
		
		
		Key key = KeyFactory.createKey("User", email);

		try {

			Entity e = ds.get(key);
			dbemail = e.getProperty("Email").toString();
			dbseq = e.getProperty("Security que").toString();
			dbans = e.getProperty("Answer").toString();
			dbpass = e.getProperty("Password").toString();
			if (ans != null) {
				if (ans.equals(dbans) && email.equals(dbemail)) {
					resp.getWriter().print("Password is : "+ dbpass);
				}
				else{
					resp.getWriter().print("Enter Correct Password");
				}
			} else {
				if (email.equals(dbemail)) {
					resp.getWriter().print(dbseq);
				}
			}
		} catch (EntityNotFoundException e) {
			e.printStackTrace();
		}
	}

}
