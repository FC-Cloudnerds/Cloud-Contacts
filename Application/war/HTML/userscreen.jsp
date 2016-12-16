
<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>


<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">


</head>
<body c style="background-color: #E0E0E0">
	<%
	 	if(session.getAttribute("username") == null && session.getAttribute("userid") == null )
	{
		response.sendRedirect("login.html");
	}
	%>
	<header >
		<div 
			class="navbar navbar-default navbar-fixed navbar-inverse">
			<div class="container-fuild">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle"
						data-toggle="collapse" data-target="#example">
						<span class="icon-bar"> </span> <span
							class="icon-bar"> </span> <span
							class="icon-bar"> </span>
					</button>
					<a href=""
						class="navbar-brand"> <span > <img
							src="../Resource/Image/Appicon.png"
							style="width: 7%">
					</span> Cloud Contacts
					</a>
				</div>
				<div 
					class="collapse navbar-collapse pull-right " id="example">
						
					<ul class="nav navbar-nav">
						<li><a href="#">Welcome, <% out.print(session.getAttribute("username")); %></a></li>
						<li class="active"><a
							href="">Home</a></li>
						<li ><a 
							href="#modal1" data-toggle="modal">Change Password</a></li>
						<li ><form action="logoff"
								method="post">
								<button type="submit"
									class="btn btn-primary navbar-btn">Log Off</button>
							</form></li>
					</ul>
				</div>
			</div>
		</div>
		
	</header>

	<section >

				<div class="col-md-3 column1">
					<div class="row">
						<div class="col-md-12">
							<div 
								class="panel panel-default category-panel">
								<div class="panel-body">

									<div class="input-group">
										<span class="input-group-addon"
											id="basic-addon1"><span 
											class=" glyphicon glyphicon-search"></span></span> <input
											type="text"
											class="form-control active" placeholder="Search Category"
											aria-describedby="basic-addon1">
									</div>
									<div class="page-header "
										style="margin-top: 8px">Category</div>
									<ul 
										class="list-group category-list-group"
										style="height: 210px; overflow: auto">
										<li class="list-group-item category active"><span
											class="deleteimage hidden"> <img
												src="../Resource/Image/delete.png"
												style="width: 7%"></span> All<span 
											class="badge">7</span></li>
									</ul>
									</br></br></br>
									
									<div 
										class="input-group pull-bottom add-category">
										<span 
											class="input-group-addon add-button" id="basic-addon1">
											<span 
											class=" glyphicon glyphicon-plus"></span>
										</span> <input type="text"
											class="form-control active" placeholder="Add Category"
											aria-describedby="basic-addon1">
									</div>
									</br>
									<div class="row">
										<div class="col-md-12">
											<button 
												class="btn btn-danger button-delete-category hidden"
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
							<div 
								class="panel panel-default category-panel">
								<div class="panel-body">

									<div class="input-group">
										<span class="input-group-addon"
											id="basic-addon1"><span 
											class=" glyphicon glyphicon-search"></span></span> <input
											type="text"
											class="form-control active" placeholder="Search Contacts"
											aria-describedby="basic-addon1">
									</div>
									<hr>
<!-- 									<div class="page-header" -->
<!-- 										style="margin-top: 8px"> -->
<!-- 										A -->
										<ul class="list-group contacts" style="height: 310px; overflow: auto">
										
                                            
                                            
										</ul>
										<br><br>
										<div class="row">
										<div  class="col-md-12">
											<button 
												class="btn btn-danger button-delete-category hidden"
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
											<img src="../Resource/Image/nopic.png" class="image img-circle" style="vertical-align: middle; display: inline;width: 120px;height: 120px">
                                        </div>

										<div class="col-md-7"
											style="vertical-align: middle;">
											<p class="h1"><input type="text" id="txtcontactname" placeholder="Name" style="border: 0px"></p>
											<p class="h4">
                                                <select class="form-control category_dropdown" >
                                                 <option value="" selected disabled>Category</option>
                                                 <option value="All">All</option>
                                                </select>
                                            </p>
                                           <input type="file" id="profile_image"><br><br><br><br>
										<a class="glyphicon glyphicon-plus-sign hidden newContact" href='#' ></a> 
										</span>
										</div>
										
										<div class="col-md-1">
										<span>
										<a class="glyphicon glyphicon-pencil hidden editButton" href='#'></a>
										</span>
										</div>
										
									</div>

									<div class="row">
										<div class="col-md-12">
											<form class="form-horizontal">

											
                                                
                                                <div class="form-group">
													<label for="inputPassword3"
														class="col-sm-2 control-label">Mobile</label>
													<div class="col-sm-10">
														<input  type="text"
															class="form-control" id="inputMobile"
															placeholder="Enter Mobile Number" value="">
													</div>
												</div>



												<div class="form-group">
													<label for="inputPassword3"
														class="col-sm-2 control-label">LandLine</label>
													<div class="col-sm-10">
														<input  type="text"
															class="form-control" id="inputLandline"
															placeholder="Enter Landline Number" value="">
													</div>
												</div>




												<div class="form-group">
													<label for="inputPassword3"
														class="col-sm-2 control-label">E-Mail</label>
													<div class="col-sm-10">
														<input  type="text"
															class="form-control " id="inputEmail"
															placeholder="Enter E-Mail Address"
															value="">
													</div>
												</div>

												<div class="form-group">
													<label for="inputPassword3"
														class="col-sm-2 control-label">Address</label>
													<div class="col-sm-10">
														<input  type="text"
															class="form-control" id="inputAddress"
															placeholder="Enter the Address"
															value="">
													</div>
												</div>


											</form>

										</div>

									</div>

</br>

									<div class="row">
										<div class="col-md-12">
											<button class="btn btn-primary addcontact"
												style="width: 100%">ADD CONTACT</button>
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
	<footer >
		<div 
			class="navbar navbar-inverse navbar-fixed-bottom">
			<div class="container-fuild">
				<p class="navbar-text">&#169; Copyrights
					Cloud Contacts,2016</p>
			</div>
		</div>
	</footer>
	<div class="modal fade" id="modal1"
		role="dialog" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog">
			<div class="modal-content">
			<form>
				<div class="modal-header">
					<button type="button" class="close"
						data-dismiss="modal">&times;</button>
					<h3 class="modal-title">Reset Password</h3>
					<div id="outputdiv">
						<div class="success" style="color: green">
						
						</div>
						<div class="ajaxprogress" style="display: none;text-align: center">
						<h3>Please Wait...</h3>
						<img src="../Resource/Image/loading.gif" alt="loading">
						</div>
					</div>
				</div>

				<div class="modal-body">
<!-- 					<form > -->
						<div class="form-group">
							<label for="inputUserOldPassword">Current
								Password</label> <input id="oldpassword" class="form-control"
								placeholder="Enter Old Password" name="passoldpassword"
								type="password" id="inputUserOldPassword"> <label
								for="inputNewPassword">New
								Password</label> <input id="newpassword" class="form-control"
								placeholder="Enter Password" name="passnewpassword"
								type="password" id="inputUserNewPassword"> <label
								for="inputConfirmNewPassword">Confirm
								Password</label> <input id="newrepassword" class="form-control"
								placeholder="Re-Enter Password" name="passnewrepassword"
								type="password" id="inputConfirmNewPassword">
						</div>
						<div class="modal-footer">
							<a href="#" class="btn btn-danger" data-dismiss="modal">Close</a><a id="submit" class="btn btn-primary">Submit</a>
						</div>
					
				</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript"
		src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="../JS/Application.js"></script>

</body>
</html>