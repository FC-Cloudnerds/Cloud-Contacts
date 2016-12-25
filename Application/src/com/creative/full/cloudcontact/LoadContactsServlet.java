package com.creative.full.cloudcontact;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.repackaged.com.google.gson.Gson;


@SuppressWarnings("serial")
public class LoadContactsServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Query query = new Query("contact").addSort("Contact Name", SortDirection.ASCENDING);
		PreparedQuery preparedquery = datastore.prepare(query);
		
		
		Map<String,Contactsformap> contactsInnerMap =null;
		Map<String, Map<String,Contactsformap>> contactsoutermap = new TreeMap<>();
		
			
	//Full contacts loaded into the outerMap.
	for(Entity contact : preparedquery.asIterable()){
				String contactName =  (String) contact.getProperty("Contact Name");
				String firstletterOfContactsName = (contactName).substring(0, 1).toUpperCase();
				String ContactImage = (String) contact.getProperty("Contact Image");
				
				
				if(contactsoutermap.get(firstletterOfContactsName) == null){
					contactsInnerMap= new TreeMap<>();
					contactsInnerMap.put(contactName, new Contactsformap(ContactImage, contactName));
					contactsoutermap.put(firstletterOfContactsName, contactsInnerMap);
				}
				
				else
				{
					contactsoutermap.get(firstletterOfContactsName).put(contactName, new Contactsformap(ContactImage, contactName));
				}
			
			}
	
		//Now we need to send the contact name and Contact image for all contacts from loaded map to the client in the form of JSON.
	Gson gson = new Gson(); 
	String json = gson.toJson(contactsoutermap); 
    System.out.printf(json.toString() );
    
    resp.setContentType("application/json");
   
	resp.getWriter().println(json);
    
		}
}
