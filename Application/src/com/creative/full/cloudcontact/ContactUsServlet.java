package com.creative.full.cloudcontact;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class ContactUsServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		String fname = req.getParameter("txtfullname");
		String email = req.getParameter("txtemail");
		String message = req.getParameter("txtmessage");
		Entity contactus = null;
		if (fname != null || email != null || message != null) {
			contactus = new Entity("ContactUs", email);
			contactus.setProperty("Full name", fname);
			contactus.setProperty("Email", email);
			contactus.setProperty("Message", message);
			ds.put(contactus);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException err) {
				// TODO Auto-generated catch block
				err.printStackTrace();
			}
			resp.getWriter().println("Successfully data added");

		} else {
			resp.getWriter().println("nullvalue");
		}
	}

}
