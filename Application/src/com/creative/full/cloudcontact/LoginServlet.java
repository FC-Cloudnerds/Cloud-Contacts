package com.creative.full.cloudcontact;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		res.setContentType("text/html");

		String dbemail = null, dbpass = null, email, pass, username = null;

		email = req.getParameter("txtemail");
		pass = req.getParameter("txtpassword");
		Key key = KeyFactory.createKey("User", email);
		if (email != null) {
			try {
				Entity e = ds.get(key);
				dbemail = e.getProperty("Email").toString();
				dbpass = e.getProperty("Password").toString();
				username = (String) ds.get(key).getProperty("Full name");
				if (email.toLowerCase().equals(dbemail.toLowerCase())) {
					if (pass.equals(dbpass) == true) {
						res.getWriter().print("success");
						HttpSession session = req.getSession();
						session.setAttribute("username", username);
						session.setAttribute("userid", email);
					} else {
						res.getWriter().print("incorrect_pass");
					}
				}

			} catch (EntityNotFoundException e) {
				res.getWriter().print("incoorect_EmailId");
			}
		}
	}
}
