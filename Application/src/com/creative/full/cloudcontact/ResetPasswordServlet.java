package com.creative.full.cloudcontact;

import java.io.IOException;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

@SuppressWarnings("serial")
public class ResetPasswordServlet extends HttpServlet {
	public void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html");

		String aoldpassword = req.getParameter("passoldpassword");
		String newpassword = req.getParameter("passnewpassword");
		String newrepassword = req.getParameter("passnewrepassword");
		String eoldpassword = null;
		String keyid = null;

		HttpSession session = req.getSession();
		keyid = (String) session.getAttribute("userid");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		Key key = KeyFactory.createKey("User", keyid);
		Entity user = null;
		try {
			user = datastore.get(key);
			eoldpassword = (String) user.getProperty("Password");
		} catch (EntityNotFoundException e) {
			e.printStackTrace();
		}
		if (eoldpassword.equals(aoldpassword)) {
			if (aoldpassword.equals(eoldpassword) && newrepassword.equals(newpassword)) {
				user.setProperty("Password", newrepassword);
				datastore.put(user);
			}
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			resp.getWriter().println("<img src=\"../Resource/Image/successtick.png\" alt=\"successtick\" style=\"width: 5%\"><font color=\"green\"><b>Successfully password changed</b></font>");
		}else{
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			resp.getWriter().println("<font color=\"red\"><b>Please enter currect old password</b></font>");
		}
	}
}
