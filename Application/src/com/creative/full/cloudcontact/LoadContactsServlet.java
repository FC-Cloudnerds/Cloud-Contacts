package com.creative.full.servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.repackaged.com.google.gson.Gson;


@SuppressWarnings("serial")
public class LoadContactsServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
					System.out.println("test");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Query query = new Query("contact");
		PreparedQuery preparedquery = datastore.prepare(query);
		
		
		Map<String,Contactsformap> contactsInnerMap =null;
		Map<String, Map<String,Contactsformap>> contactsoutermap = new HashMap<>();
		
			
	//Full contacts loaded into the outerMap.
	for(Entity contact : preparedquery.asIterable()){
				String contactName =  (String) contact.getProperty("Contact Name");
				String firstletterOfContactsName = (contactName).substring(0, 1);
				String ContactImage = (String) contact.getProperty("Contact Image");
				
				
				if(contactsoutermap.get(firstletterOfContactsName) == null){
					contactsInnerMap= new HashMap<>();
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
    System.out.printf( "JSON: %s", json.toString() );
    
    resp.setContentType("application/json");
   
	resp.getWriter().println(json);
    
		}
}
