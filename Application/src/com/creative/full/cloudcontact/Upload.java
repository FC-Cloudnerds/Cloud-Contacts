package com.creative.full.cloudcontact;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;
@SuppressWarnings("serial")
public class Upload extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException {

    	 BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
 		Map<String, List<BlobKey>> blobs = blobstoreService.getUploads(req);
 		List<BlobKey> blobKeys = blobs.get("cimage");
 		if (blobKeys == null || blobKeys.isEmpty()) {
 		    resp.sendRedirect("/");
 		} else {
 		   resp.getWriter().println(blobKeys.get(0).getKeyString());
 		}	
    }
}
