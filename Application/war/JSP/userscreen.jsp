<%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>

<%
    BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
%>
<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>
<link rel="icon" type="image/gif/png"
	href="../Resource/Image/Appicon.png">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link rel="stylesheet" href="../CSS/contactus.css" />


</head>
<body style="background-color: #E0E0E0">
	<%
		if (session.getAttribute("username") == null && session.getAttribute("userid") == null) {
			response.sendRedirect("../HTML/login.html");
		}
	%>
	<header>
		<div class="navbar navbar-default navbar-fixed navbar-inverse">
			<div class="container-fuild">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse"
						data-target="#example">
						<span class="icon-bar"> </span> <span class="icon-bar"> </span> <span
							class="icon-bar"> </span>
					</button>
					<a href="" class="navbar-brand"> <span> <img
							src="../Resource/Image/Appicon.png" style="width: 7%">
					</span> Cloud Contacts
					</a>
				</div>
				<div class="collapse navbar-collapse pull-right " id="example">

					<ul class="nav navbar-nav">
						<li><a href="#">Welcome, <%
							out.print(session.getAttribute("username"));
						%></a></li>
						<li class="active"><a href="">Home</a></li>
						<li><a href="#modal1" data-toggle="modal">Change Password</a></li>
						<li><a href="#modal2" data-toggle="modal">Contact Us</a></li>
						<li><form action="logoff" method="post">
								<button type="submit" class="btn btn-primary navbar-btn">Log
									Off</button>
							</form></li>
					</ul>
				</div>
			</div>
		</div>

	</header>

	<section>
		<div class="modal fade" id="error" role="dialog" data-keyboard="false"
			data-backdrop="static">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">
							<img src="../Resource/Image/error.png" alt="Error Image"
								width="7%">&nbsp;Error
						</h4>
					</div>
					<div class="modal-body">
						<b><span style="color: red;" class="message"> Fill all the data</span></b>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"
							autofocus="autofocus">Close</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3 column1">

			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-default category-panel">
						<div class="panel-body">

							<div class="input-group">
								<span class="input-group-addon" id="basic-addon1"><span
									class=" glyphicon glyphicon-search"></span></span> <input type="text"
									class="form-control active" placeholder="Search Category"
									aria-describedby="basic-addon1">
							</div>
							<div class="page-header " style="margin-top: 8px">Category</div>
							<ul class="list-group category-list-group"
								style="height: 210px; overflow: auto">
								<li class="list-group-item category active"><span
									class="deleteimage hidden"> <img
										src="../Resource/Image/delete.png" style="width: 7%"></span>
									All<span class="badge">7</span></li>
							</ul>
							</br> </br> </br>

							<div class="input-group pull-bottom add-category">
								<span class="input-group-addon add-button" id="basic-addon1">
									<span class=" glyphicon glyphicon-plus"></span>
								</span> <input type="text" class="form-control active"
									placeholder="Add Category" aria-describedby="basic-addon1">
							</div>
							</br>
							<div class="row">
								<div class="col-md-12">
									<button class="btn btn-danger button-delete-category hidden"
										style="width: 100%">DELETE CATEGORY</button>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-default category-panel">
						<div class="panel-body">

							<div class="input-group">
								<span class="input-group-addon" id="basic-addon1"><span
									class=" glyphicon glyphicon-search"></span></span> <input type="text"
									class="form-control active" placeholder="Search Contacts"
									aria-describedby="basic-addon1">
							</div>
							<hr>

							<ul class="list-group contacts"
								style="height: 310px; overflow: auto">
								
								
							</ul>

							<br> <br>
							<div class="row">
								<div class="col-md-12">
									<button class="btn btn-danger button-delete-category hidden"
										style="width: 100%">DELETE CONTACT</button>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>


		</div>
		</div>

		<div class="col-md-6">
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-default">
						<div class="panel-body">
							<div class="row">

								<div class="col-md-3">
									<img src="../Resource/Image/nopic.png" class="image img-circle"
										style="vertical-align: middle; display: inline; width: 120px; height: 120px">
								</div>

								<div class="col-md-7" style="vertical-align: middle;">
									<p class="h1">
										<input type="text" id="txtcontactname" placeholder="Name"
											style="border: 0px" autofocus="autofocus"">
									</p>
									<p class="h4">
										<select class="form-control category_dropdown">
											<option value="" selected="selected" disabled>Category</option>
											<option value="All">All</option>
										</select>
									</p>
									<form action="<%= blobstoreService.createUploadUrl("/uploads") %>" method="post"  id="myform" enctype="multipart/form-data">
									<input type="file" id="profile_image" name="cimage">
									</form>
									<br> <br>
									<br> <br> <a
										class="glyphicon glyphicon-plus-sign hidden newContact"
										href='#'></a> </span>
								</div>

								<div class="col-md-1">
									<span> <a
										class="glyphicon glyphicon-pencil hidden editButton" href='#'></a>
									</span>
								</div>

							</div>

							<div class="row">
								<div class="col-md-12">
									<form class="form-horizontal">

										<div class="form-group">
											<label for="inputPassword3" class="col-sm-2 control-label">Mobile</label>
											<div class="col-sm-10">
												<input type="text" class="form-control ValidateNum"
													id="inputMobile" placeholder="Enter Mobile Number" value=""
													maxlength="10">
											</div>
										</div>

										<div class="form-group">
											<label for="inputPassword3" class="col-sm-2 control-label">LandLine</label>
											<div class="col-sm-10">
												<input type="text" class="form-control ValidateNum"
													id="inputLandline" placeholder="Enter Landline Number"
													value="" maxlength="10">
											</div>
										</div>

										<div class="form-group">
											<label for="inputPassword3" class="col-sm-2 control-label">E-Mail</label>
											<div class="col-sm-10">
												<input type="text" class="form-control " id="inputEmail"
													placeholder="Enter E-Mail Address">
											</div>
										</div>

										<div class="form-group">
											<label for="inputPassword3" class="col-sm-2 control-label">Address</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="inputAddress"
													placeholder="Enter the Address" value="">
											</div>
										</div>
									</form>
								</div>
							</div>
							</br>
							<div class="row">
								<div class="col-md-12">
									<button class="btn btn-primary addcontact" style="width: 100%">ADD
										CONTACT</button>
									<button class="btn btn-primary savecontact hidden"
										style="width: 100%">SAVE CONTACT</button>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<footer>
		<div class="navbar navbar-inverse navbar-fixed-bottom">
			<div class="container-fuild">
				<p class="navbar-text">&#169; Copyrights Cloud Contacts,2016</p>
			</div>
		</div>
	</footer>

	<!-- 	Code for reset password modal -->

	<div class="modal fade" id="modal1" role="dialog" data-keyboard="false"
		data-backdrop="static">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h3 class="modal-title">Reset Password</h3>
						<div id="outputdiv">
							<div class="success1"></div>
							<div class="ajaxprogress1"
								style="display: none; text-align: center">
								<h3>Please Wait...</h3>
								<img src="../Resource/Image/loading.gif" alt="loading">
							</div>
						</div>
					</div>

					<div class="modal-body">
						<div class="form-group">
							<label for="inputUserOldPassword">Current Password</label> <input
								autofocus="autofocus" id="oldpassword"
								class="form-control txtoldpassword"
								placeholder="Enter Old Password" name="passoldpassword"
								type="password" maxlength="8"> <label
								for="inputNewPassword">New Password</label> <input
								id="newpassword" class="form-control txtnewpassword"
								placeholder="Enter Password" name="passnewpassword"
								type="password" maxlength="8"> <label
								for="inputConfirmNewPassword">Confirm Password</label> <input
								id="newrepassword" class="form-control txtconfirmpassword"
								placeholder="Re-Enter Password" name="passnewrepassword"
								type="password" maxlength="8">
						</div>
						<div class="modal-footer">
							<a href="#" class="btn btn-danger" data-dismiss="modal">Close</a><a
								id="submit" class="btn btn-primary">Submit</a>
						</div>

					</div>
				</form>
			</div>
		</div>
	</div>

	<!-- 	Code for contact us modal -->

	<div class="modal fade" id="modal2" role="dialog" data-keyboard="false"
		data-backdrop="static">
		<div class="modal-dialog modal-lg">
			<form method="POST">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h3 class="modal-title">Contact Us</h3>
						<div id="outputdiv">
							<div class="message"></div>
							<div class="ajaxprogress2"
								style="display: none; text-align: center">
								<h3>Please Wait...</h3>
								<img src="../Resource/Image/loading.gif" alt="loading">
							</div>
						</div>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-md-6">
									<h2 align="center">
										<u>MAIL</u>
									</h2>
								</div>
								<div class="col-md-4 col-md-offset-2">
									<h2 align="center">
										<u>ELSEWHERE</u>
									</h2>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">

									<div class="form-group">
										<div class="table-responsive">
											<table class="table table-borderless">
												<tbody>
													<tr>
														<td><div class="input-group">
																<span class="input-group-addon" id="basic-addon1"><span
																	class=" glyphicon glyphicon-user"></span></span> <input
																	type="text" class="form-control txtfullname"
																	value=<%out.print(session.getAttribute("username"));%>
																	aria-describedby="basic-addon1" name="txtfullname"
																	disabled="disabled">
															</div></td>
													</tr>
													<tr>

														<td><div class="input-group">
																<span class="input-group-addon" id="basic-addon1">@</span>
																<input type="text" class="form-control txtemail"
																	value=<%out.print(session.getAttribute("userid"));%>
																	aria-describedby="basic-addon1" name="txtfullname"
																	disabled="disabled">
															</div></td>

													</tr>
													<tr>
														<td colspan="2"><div class="form-group">
																<textarea class="form-control txtmessage" rows="5"
																	placeholder="Enter Your Message" name="txtmessage"
																	autofocus="autofocus"></textarea>
															</div></td>
													</tr>

												</tbody>
											</table>
										</div>
									</div>
								</div>


								<div class="col-md-4  col-md-offset-2">
									<a href="https:/www.facebook.com" data-toggle="tooltip"
										data-placement="bottom" title="Facebook"><img
										src="../Resource/Image/icon-facebook.png" alt="Facebook"
										class="img-circle  img-orient  img-inline">Facebook</a><br>
									<br> <a href="https:/www.twitter.com"
										data-toggle="tooltip" data-placement="bottom" title="Twitter"><img
										src="../Resource/Image/icon-twitter.jpg" alt="Twitter"
										class=" img-circle  img-orient">Twitter</a><br> <br>
									<a href="https:/www.instagram.com" data-toggle="tooltip"
										data-placement="bottom" title="Instagram"><img
										src="../Resource/Image/icon-instagram.jpg" alt="Instagram"
										class=" img-circle  img-orient">Instagram</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<a href="#" class="btn btn-danger" data-dismiss="modal">Close</a>
						<input type="submit" value="Submit"
							class="btn btn-primary submitClick">
					</div>
				</div>
			</form>
		</div>
	</div>
	
	<script id="First_letter_template" type="mustache/x-tmpl">
<div class="page-header insidefirstletter" style="margin-top: 8px">
<span class="{{.}}">{{.}}</span>
</div>
</script>
	
	<script id="templateid" type="mustache/x-tmpl">
		<li class="list-group-item">
		<ul class="nav ">
		<li>
			<img src="{{contactimage}}"style="vertical-align: middle; display: inline;width: 40px;height: 40px" class="img-circle img-responsive">
		 	<span style="vertical-align: middle">{{contactname}}</span>
			<span class="deleteimage hidden"><img src="../Resource/Image/delete.png" class="pull-right" style="width: 7%; vertical-align: middle; padding-top: 9px">
			</span>
		</li>
		</ul>
		</li>
		</script>

	<script
		src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
	<script type="text/javascript"
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="../JS/resetpass.js" type="text/javascript"></script>
	<script type="text/javascript" src="../JS/Application.js"></script>
	<script type="text/javascript" src="../JS/contactus.js"></script>
	<script type="text/javascript" src="../JS/resetpass.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"
		type="text/javascript"></script>
</body>
</html>