package com.creative.full.cloudcontact;

import java.io.IOException;
import javax.servlet.http.*;

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
