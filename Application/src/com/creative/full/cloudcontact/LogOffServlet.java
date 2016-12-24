package com.creative.full.servlet;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.appengine.repackaged.com.google.gson.Gson;


@SuppressWarnings("serial")


public class AddContactServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		BufferedReader reader = req.getReader();
		Gson gson = new Gson();
		Contacts person = gson.fromJson(reader, Contacts.class);
		
		String contactimage = person.contactimage;
		String contactname = person.contactname;
		String contactmobile = person.contactmobile;
		String contactlandline = person.contactlandline;
		String contactemail = person.contactemail;
		String contactaddress = person.contactaddress;
		String Sessionid= (String) req.getSession().getAttribute("userid");
		 
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Entity contact = new Entity("contact");
		contact.setProperty("Contact Name", contactname);
		contact.setProperty("Contact Mobile Number", contactmobile);
		contact.setProperty("Contact LandLine Number", contactlandline);
		contact.setProperty("Contact EMail-ID", contactemail);
		contact.setProperty("Contact Address", contactaddress);
		contact.setProperty("Contact Image", contactimage);
		contact.setProperty("Accountid", Sessionid);
		
		datastore.put(contact);
		
		resp.setContentType("application/json");
        JSONObject obj = new JSONObject();
        try {
			obj.put("Status", "0");

		} 
        catch (JSONException e) {
			e.printStackTrace();
		}
		resp.getWriter().println(obj);
		
		
	}
}
