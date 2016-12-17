$(document)
		.ready(
				function(e) {

					$('.submitClick')
							.click(
									function(e) {
										$('.ajaxprogress').show();
										var fname = $(".txtfullname").val();
										var email = $(".txtemail").val();
										var mess = $(".txtmessage").val();

										$
												.ajax({
													url : 'contactus_modal',
													type : 'POST',
													data : "txtfullname="
															+ fname
															+ "&txtemail="
															+ email
															+ "&txtmessage="
															+ mess,
													success : function(data) {
														// alert(data);

														$('.ajaxprogress')
																.hide();
														$('.success')
																.css('display',
																		'block')
																.html(
																		"<img src=\"../Resource/Image/successtick.png\" alt=\"successtick\" style=\"width: 10%\"> "
																				+ data)
																.delay(1000)
																.fadeOut();
													},
													error : function(error) {
														alert("Error..");
													}
												});
										e.preventDefault();
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