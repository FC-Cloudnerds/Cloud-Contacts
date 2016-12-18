$(document)
		.ready(
				function(e) {
					$(".txtemail")
							.focusout(
									function() {
										var email = $(this).val();
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
					$('.btngetque')
							.click(
									function(e) {

										var email = $(".txtemail").val();
										e.preventDefault();
										if (email === "") {
											$('#error').modal();
											$('#error_data')
													.html(
															"<span style='color: red;'><p>Enter email id..</p></span>");
										} else {

											$
													.ajax({
														url : 'forgotpass',
														type : 'POST',
														data : "txtemail="
																+ email,
														success : function(data) {
															if (data === "") {
																$('#error')
																		.modal();
																$('#error_data')
																		.html(
																				"<span style='color: red;'><p>You are not registered user..</p></span>");
															} else {
																$('.ddbsequ')
																		.val(
																				data);
																$('.txtanswer')
																		.removeAttr(
																				'disabled');
																$('.btnsubmit')
																		.removeAttr(
																				'disabled');
																$('.txtanswer')
																		.focus();
																$('.txtemail')
																		.attr(
																				"disabled",
																				"disabled");
															}
														},
														error : function(error) {
															alert("Error...");
														}
													});
										}
									});
					$('.txtanswer').focusout(function() {
						var answer = $(this).val();
						if (answer === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});

					$('.btnsubmit')
							.click(
									function(e) {
										$('#lblpassword').val("");
										$('#lblpassword').show();
										var answer = $('.txtanswer').val();
										var email = $(".txtemail").val();
										e.preventDefault();
										if (answer === "") {
											$('#error').modal();
											$('#error_data')
													.html(
															"<span style='color: red;'><p>Answer should not be blank..");

										} else {

											$.ajax({
														url : 'forgotpass',
														type : 'POST',
														data : "txtemail="
																+ email
																+ "&txtanswer="
																+ answer,
														success : function(data) {
//															alert(data);
															$('#lblpassword')
																	.removeAttr(
																			'type',
																			'hidden');
															$('#lblpassword')
																	.css(
																			"color",
																			"red");
															$('#lblpassword')
																	.val(data);
															$('#lblpassword').delay(3000).fadeOut();
														},
														error : function(error) {
															alert("Error...");
														},
														complete : function() {
															$('.txtanswer')
																	.val("");

														}
													});

										}
									});

				});