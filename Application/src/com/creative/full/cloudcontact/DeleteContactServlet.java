package com.creative.full.cloudcontact;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.QueryResultIterable;
import com.google.appengine.api.datastore.QueryResultIterator;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.appengine.repackaged.com.google.gson.Gson;

@SuppressWarnings("serial")

public class DeleteContactServlet extends HttpServlet {
	
		public void doDelete (HttpServletRequest req, HttpServletResponse resp) throws IOException {

		BufferedReader reader = req.getReader();
		Gson gson = new Gson();
		DeleteContact delperson = gson.fromJson(reader, DeleteContact.class);
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		for (String todeletecontacts : delperson.delete_contact) {
			Filter propertyFilter = new FilterPredicate("Contact Name", FilterOperator.EQUAL, todeletecontacts);
			Query q = new Query("contact").setFilter(propertyFilter);
			PreparedQuery pq = datastore.prepare(q);
			QueryResultIterable<Entity> result = pq.asQueryResultIterable(FetchOptions.Builder.withChunkSize(500));
			QueryResultIterator<Entity> iterator = result.iterator();

			// delete one at a time
			while (iterator.hasNext()) {
			  datastore.delete(iterator.next().getKey());
			}
		}
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
