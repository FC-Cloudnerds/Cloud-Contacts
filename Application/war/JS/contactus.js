$(document)
		.ready(
				function(e) {

					$('#modal2').on('show.bs.modal', function() {
						$(".txtmessage").val("");
						$('.ValidateText').val("");
						$('.ValidateEmail').val("");
						$(".txtmessage").css('background-color', '');
						$(".txtfullname").css('background-color', '');
						$(".txtemail").css('background-color', '');

					});
					$('#modal2').on('shown.bs.modal', function() {
						$(".ValidateText").focus();
					});

					$('.submitClick')
							.click(
									function(e) {
										e.preventDefault();
										var fname = $(".txtfullname").val();
										var email = $(".txtemail").val();
										var mess = $(".txtmessage").val();
										if (fname === "" || email === ""
												|| mess === "") {
											// alert("Fill all the data..");
											$('.message')
													.css('display', 'block')
													.html(
															"<img src=\"../Resource/Image/error.png\" alt=\"error\" style=\"width: 5%\">&nbsp;<font color='red'><b>Fill all the data..</b></font> ")
													.delay(1000).fadeOut();

										} else {
											$('.ajaxprogress2').show();
											var send_data = {
												txtfullname : fname,
												txtemail : email,
												txtmessage : mess,
											};
											$
													.ajax({
														url : 'contactus_modal',
														contentType : 'application/json',
														type : 'POST',
														data : JSON
																.stringify(send_data),
														success : function(data) {
															// alert(data);
															$('.ajaxprogress2')
																	.hide();
															$('.message')
																	.css(
																			'display',
																			'block')
																	.html(
																			"<img src=\"../Resource/Image/successtick.png\" alt=\"successtick\" style=\"width: 5%\"><font color='green'><b>"
																					+ data
																					+ "</b></font>")
																	.delay(1000)
																	.fadeOut();
														},
														error : function(error) {
															$('.ajaxprogress2')
																	.hide();
															alert("Error..");
														},
														complete : function() {
															$('.ValidateText')
																	.val("");
															$('.ValidateEmail')
																	.val("");
															$(".txtmessage")
																	.val("");
														}
													});

										}
									});

					$('.ValidateText').keypress(
							function(keycode) {
								if ((keycode.which > 47 && keycode.which < 58)
										|| keycode.which == 13) {
									return false;
								} else {
									return true;
								}
							});
					$(".txtfullname").focusout(function() {
						var name = $(this).val();
						if (name === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});

					$(".txtemail")
							.focusout(
									function() {
										var email = $(this).val();
										var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
										if (email == "") {
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
					$('.txtmessage').focusout(function() {
						var msg = $(this).val();
						if (msg === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
				});