package com.creative.full.cloudcontact;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
//		res.setContentType("application/json");
		String fname = req.getParameter("txtfullname");
		String email = req.getParameter("txtemail");
		String mno = req.getParameter("txtmobileno");
		String password = req.getParameter("txtpassword");
		String sequ = req.getParameter("ddbsequ");
		String ans = req.getParameter("txtanswer");

		if (fname != null && email != null && mno != null && password != null && sequ != null && ans != null) {
			Entity user = new Entity("User", email);
			user.setProperty("Full name", fname);
			user.setProperty("Email", email);
			user.setProperty("Mobile no", mno);
			user.setProperty("Password", password);
			user.setProperty("Security que", sequ);
			user.setProperty("Answer", ans);

			ds.put(user);
		res.getWriter().print("Successfully data added..");
		}
	}
}
