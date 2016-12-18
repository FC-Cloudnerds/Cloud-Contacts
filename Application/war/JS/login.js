$(document)
		.ready(
				function(e) {
					var password, email;
					$(".txtemail")
							.focusout(
									function() {
										email = $(".txtemail").val();
										var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
										if (email === "") {
											$(this).focus();
											$(this).css("background-color",
													"#ffb3b3");
										} else {
											$(this).css("background-color", "");
										}
										if (expression.test(email) === false) {
											$(this).focus();
											$(this).css("background-color",
													"#ffb3b3");
											$(this).attr("placeholder",
													"Enter Valid Email Id");
											$(this).val("");
										} else {
											$(this).css("background-color", "");
											$(this).attr("placeholder",
													"Enter Email Id");
										}
									});
					$('.txtpassword').focusout(function() {
						password = $('.txtpassword').val();
						email = $(".txtemail").val();
						if (password === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('.btnsubmit')
							.click(
									function(e) {
										password = $('.txtpassword').val();
										email = $(".txtemail").val();
										e.preventDefault();
										if (password === "" || email === "") {
											$('#error').modal('show');
											$('#error').find('.message').html(
													"Fill all the details..");
											$('.txtpassword').val("");
										} else {
											$
													.ajax({
														type : "POST",
														url : "login",
														data : "txtemail="
																+ email
																+ "&txtpassword="
																+ password,
														success : function(e) {
															if (e == "incorrect_pass") {
																$('#error')
																		.modal(
																				'show');
																$('#error')
																		.find(
																				'.message')
																		.html(
																				"Please enter correct Password");
																$(
																		'.txtpassword')
																		.val("");
															}else{
																window.location.href = "../JSP/userscreen.jsp";
															}
														},
														error : function(e) {
															$('#error').modal(
																	'show');
															$('#error')
																	.find(
																			'.message')
																	.html(
																			"Please enter correct Email id");
															 
														},
													});

										}

									});
				});