package com.creative.full.cloudcontact;

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
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;

public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@SuppressWarnings("deprecation")
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		String fname = req.getParameter("txtfullname");
		String email = req.getParameter("txtemail");
		String mno = req.getParameter("txtmobileno");
		String password = req.getParameter("txtpassword");
		String sequ = req.getParameter("ddbsequ");
		String ans = req.getParameter("txtanswer");
		email = email.trim();
		if (fname != null && email != null && mno != null && password != null && sequ != null && ans != null) {
			Query query = new Query("User");
			query.addFilter("Email", FilterOperator.EQUAL, email);
			PreparedQuery pq = ds.prepare(query);
			int count = pq.countEntities();
			if (count > 0) {
				res.getWriter().print("0");
			} else {
				Entity user = new Entity("User", email);
				user.setProperty("Full name", fname);
				user.setProperty("Email", email);
				user.setProperty("Mobile no", mno);
				user.setProperty("Password", password);
				user.setProperty("Security que", sequ);
				user.setProperty("Answer", ans);

				ds.put(user);
				res.getWriter().print("1");
			}

		}
	}
}
