package com.creative.full.cloudcontact;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@SuppressWarnings("serial")
public class LogOffServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
					
		HttpSession session = req.getSession();
		session.removeAttribute("username");
		session.removeAttribute("userid");
		session.invalidate();
		resp.sendRedirect("/HTML/login.html");
			
		}
}
