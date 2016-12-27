package com.creative.full.cloudcontact;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.repackaged.com.google.gson.Gson;

@SuppressWarnings("serial")
public class LoadCategoryServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		Filter propertyFilter = new FilterPredicate("EmailID", FilterOperator.EQUAL, req.getSession().getAttribute("userid"));
		Query query = new Query("Category").setFilter(propertyFilter).addSort("CategoryName", Query.SortDirection.ASCENDING);
		PreparedQuery pq = ds.prepare(query);
		
		Map<String, List<String>> category_map = new TreeMap<String, List<String>>();
		List<String> category_list = new LinkedList<String>();
		
		for (Entity categorylist : pq.asIterable()) {
			String category_name = (String) categorylist.getProperty("CategoryName");
			category_list.add(category_name);
		}
		
		category_map.put("category_name", category_list);
		Gson gson = new Gson();
		String json = gson.toJson(category_map);
		System.out.printf("JSON: %s", json.toString());

		resp.setContentType("application/json");

		resp.getWriter().println(json);
	}

}
