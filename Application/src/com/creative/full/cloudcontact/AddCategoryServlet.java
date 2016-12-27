package com.creative.full.cloudcontact;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
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

public class AddCategoryServlet extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		BufferedReader reader = req.getReader();
		Gson gson = new Gson();
		Category category = gson.fromJson(reader, Category.class);
		String keyid = (String) req.getSession().getAttribute("userid");
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();

		Entity entity_category = new Entity("Category");
		entity_category.setProperty("EmailID", keyid);
		entity_category.setProperty("CategoryName", category.category_name);
		ds.put(entity_category);

		resp.setContentType("application/json");
		JSONObject obj = new JSONObject();
		try {
			obj.put("Status", "0");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		resp.getWriter().println(obj);
	}

}
