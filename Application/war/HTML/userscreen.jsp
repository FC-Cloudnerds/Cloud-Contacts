
<!DOCTYPE html>
<html data-brackets-id='3522'>
<head>
<title data-brackets-id='3525'>Welcome</title>


<link data-brackets-id='3527' rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">


</head>
<body data-brackets-id='3528' style="background-color: #E0E0E0">
	<%
	 	if(session.getAttribute("username") == null && session.getAttribute("userid") == null )
	{
		response.sendRedirect("login.html");
	}
	%>
	<header data-brackets-id='3529'>
		<div data-brackets-id='3530'
			class="navbar navbar-default navbar-fixed navbar-inverse">
			<div data-brackets-id='3531' class="container-fuild">
				<div data-brackets-id='3532' class="navbar-header">
					<button data-brackets-id='3533' type="button" class="navbar-toggle"
						data-toggle="collapse" data-target="#example">
						<span data-brackets-id='3534' class="icon-bar"> </span> <span
							data-brackets-id='3535' class="icon-bar"> </span> <span
							data-brackets-id='3536' class="icon-bar"> </span>
					</button>
					<a data-brackets-id='3537' href=""
						class="navbar-brand"> <span data-brackets-id='3538'> <img
							data-brackets-id='3539' src="../Resource/Image/Appicon.png"
							style="width: 7%">
					</span> Cloud Contacts
					</a>
				</div>
				<div data-brackets-id='3540'
					class="collapse navbar-collapse pull-right " id="example">
						
					<ul data-brackets-id='3541' class="nav navbar-nav">
						<li><a href="#">Welcome, <% out.print(session.getAttribute("username")); %></a></li>
						<li data-brackets-id='3542' class="active"><a
							data-brackets-id='3543' href="">Home</a></li>
						<li data-brackets-id='3544'><a data-brackets-id='3545'
							href="#modal1" data-toggle="modal">Change Password</a></li>
						<li data-brackets-id='3546'><form action="logoff"
								method="post">
								<button data-brackets-id='3547' type="submit"
									class="btn btn-primary navbar-btn">Log Off</button>
							</form></li>
					</ul>
				</div>
			</div>
		</div>
		
	</header>

	<section data-brackets-id='3548'>

				<div data-brackets-id='3551' class="col-md-3 column1">
					<div data-brackets-id='3552' class="row">
						<div data-brackets-id='3553' class="col-md-12">
							<div data-brackets-id='3554'
								class="panel panel-default category-panel">
								<div data-brackets-id='3555' class="panel-body">

									<div data-brackets-id='3556' class="input-group">
										<span data-brackets-id='3557' class="input-group-addon"
											id="basic-addon1"><span data-brackets-id='3558'
											class=" glyphicon glyphicon-search"></span></span> <input
											data-brackets-id='3559' type="text"
											class="form-control active" placeholder="Search Category"
											aria-describedby="basic-addon1">
									</div>
									<div data-brackets-id='3560' class="page-header "
										style="margin-top: 8px">Category</div>
									<ul data-brackets-id='3561'
										class="list-group category-list-group"
										style="height: 210px; overflow: auto">
										<li data-brackets-id='3562' class="list-group-item category active"><span
											data-brackets-id='3563' class="deleteimage hidden"> <img
												data-brackets-id='3564' src="../Resource/Image/delete.png"
												style="width: 7%"></span> All<span data-brackets-id='3565'
											class="badge">7</span></li>
									</ul>
									</br></br></br>
									
									<div data-brackets-id='3566'
										class="input-group pull-bottom add-category">
										<span data-brackets-id='3567'
											class="input-group-addon add-button" id="basic-addon1">
											<span data-brackets-id='3568'
											class=" glyphicon glyphicon-plus"></span>
										</span> <input data-brackets-id='3569' type="text"
											class="form-control active" placeholder="Add Category"
											aria-describedby="basic-addon1">
									</div>
									</br>
									<div data-brackets-id='3570' class="row">
										<div data-brackets-id='3571' class="col-md-12">
											<button data-brackets-id='3572'
												class="btn btn-danger button-delete-category hidden"
												style="width: 100%">DELETE CATEGORY</button>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div data-brackets-id='3573' class="col-md-3">
					<div data-brackets-id='3574' class="row">
						<div data-brackets-id='3575' class="col-md-12">
							<div data-brackets-id='3576'
								class="panel panel-default category-panel">
								<div data-brackets-id='3577' class="panel-body">

									<div data-brackets-id='3578' class="input-group">
										<span data-brackets-id='3579' class="input-group-addon"
											id="basic-addon1"><span data-brackets-id='3580'
											class=" glyphicon glyphicon-search"></span></span> <input
											data-brackets-id='3581' type="text"
											class="form-control active" placeholder="Search Contacts"
											aria-describedby="basic-addon1">
									</div>
									<hr>
<!-- 									<div data-brackets-id='3582' class="page-header" -->
<!-- 										style="margin-top: 8px"> -->
<!-- 										A -->
										<ul class="list-group contacts" style="height: 310px; overflow: auto">
										
                                            
                                            
										</ul>
										<br><br>
										<div data-brackets-id='3614' class="row">
										<div data-brackets-id='3615' class="col-md-12">
											<button data-brackets-id='3616'
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

				<div data-brackets-id='3617' class="col-md-6">
					<div data-brackets-id='3618' class="row">
						<div data-brackets-id='3619' class="col-md-12">
							<div data-brackets-id='3620' class="panel panel-default">
								<div data-brackets-id='3621' class="panel-body">
									<div data-brackets-id='3622' class="row">

										<div data-brackets-id='3623' class="col-md-3">
											<img src="../Resource/Image/nopic.png" class="image img-circle" style="vertical-align: middle; display: inline;width: 120px;height: 120px">
                                        </div>

										<div data-brackets-id='3625' class="col-md-7"
											style="vertical-align: middle;">
											<p class="h1"><input type="text" id="txtcontactname" placeholder="Name" style="border: 0px"></p>
											<p data-brackets-id='3627' class="h4">
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

									<div data-brackets-id='3628' class="row">
										<div data-brackets-id='3629' class="col-md-12">
											<form data-brackets-id='3630' class="form-horizontal">

											
                                                
                                                <div data-brackets-id='3635' class="form-group">
													<label data-brackets-id='3636' for="inputPassword3"
														class="col-sm-2 control-label">Mobile</label>
													<div data-brackets-id='3637' class="col-sm-10">
														<input data-brackets-id='3638'  type="text"
															class="form-control" id="inputMobile"
															placeholder="Enter Mobile Number" value="">
													</div>
												</div>



												<div data-brackets-id='3635' class="form-group">
													<label data-brackets-id='3636' for="inputPassword3"
														class="col-sm-2 control-label">LandLine</label>
													<div data-brackets-id='3637' class="col-sm-10">
														<input data-brackets-id='3638'  type="text"
															class="form-control" id="inputLandline"
															placeholder="Enter Landline Number" value="">
													</div>
												</div>




												<div data-brackets-id='3639' class="form-group">
													<label data-brackets-id='3640' for="inputPassword3"
														class="col-sm-2 control-label">E-Mail</label>
													<div data-brackets-id='3641' class="col-sm-10">
														<input data-brackets-id='3642'  type="text"
															class="form-control " id="inputEmail"
															placeholder="Enter E-Mail Address"
															value="">
													</div>
												</div>

												<div data-brackets-id='3643' class="form-group">
													<label data-brackets-id='3644' for="inputPassword3"
														class="col-sm-2 control-label">Address</label>
													<div data-brackets-id='3645' class="col-sm-10">
														<input data-brackets-id='3646'  type="text"
															class="form-control" id="inputAddress"
															placeholder="Enter the Address"
															value="">
													</div>
												</div>


											</form>

										</div>

									</div>

</br>

									<div data-brackets-id='3650' class="row">
										<div data-brackets-id='3651' class="col-md-12">
											<button data-brackets-id='3652' class="btn btn-primary addcontact"
												style="width: 100%">ADD CONTACT</button>
											<button data-brackets-id='3652' class="btn btn-primary savecontact hidden"
												style="width: 100%">SAVE CONTACT</button>
										</div>
									</div>

								</div>
							</div>
						</div>


					</div>


				</div>
	</section>
	<footer data-brackets-id='3653'>
		<div data-brackets-id='3654'
			class="navbar navbar-inverse navbar-fixed-bottom">
			<div data-brackets-id='3655' class="container-fuild">
				<p data-brackets-id='3656' class="navbar-text">&#169; Copyrights
					Cloud Contacts,2016</p>
			</div>
		</div>
	</footer>
	<div data-brackets-id='3657' class="modal fade" id="modal1"
		role="dialog" data-keyboard="false" data-backdrop="static">
		<div data-brackets-id='3658' class="modal-dialog">
			<div data-brackets-id='3659' class="modal-content">
			<form>
				<div data-brackets-id='3660' class="modal-header">
					<button data-brackets-id='3661' type="button" class="close"
						data-dismiss="modal">&times;</button>
					<h3 data-brackets-id='3662' class="modal-title">Reset Password</h3>
					<div id="outputdiv">
						<div class="success" style="color: green">
						
						</div>
						<div class="ajaxprogress" style="display: none;text-align: center">
						<h3>Please Wait...</h3>
						<img src="../Resource/Image/loading.gif" alt="loading">
						</div>
					</div>
				</div>

				<div data-brackets-id='3663' class="modal-body">
<!-- 					<form data-brackets-id='3664'> -->
						<div data-brackets-id='3665' class="form-group">
							<label data-brackets-id='3666' for="inputUserOldPassword">Current
								Password</label> <input id="oldpassword" class="form-control"
								placeholder="Enter Old Password" name="passoldpassword"
								type="password" id="inputUserOldPassword"> <label
								data-brackets-id='3668' for="inputNewPassword">New
								Password</label> <input id="newpassword" class="form-control"
								placeholder="Enter Password" name="passnewpassword"
								type="password" id="inputUserNewPassword"> <label
								data-brackets-id='3670' for="inputConfirmNewPassword">Confirm
								Password</label> <input id="newrepassword" class="form-control"
								placeholder="Re-Enter Password" name="passnewrepassword"
								type="password" id="inputConfirmNewPassword">
						</div>
						<div data-brackets-id='3672' class="modal-footer">
							<a href="#" class="btn btn-danger" data-dismiss="modal">Close</a><a id="submit" class="btn btn-primary">Submit</a>
						</div>
					
				</div>
				</form>
			</div>
		</div>
	</div>
	<script data-brackets-id='3675' type="text/javascript"
		src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script data-brackets-id='3676' type="text/javascript"
		src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script data-brackets-id='3677' type="text/javascript"
		src="../JS/Application.js"></script>

</body>
</html>