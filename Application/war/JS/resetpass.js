$(document)
		.ready(
				function(e) {
					$('#modal1').on('show.bs.modal', function() {
						$(".txtoldpassword").val("");
						$(".txtnewpassword").val("");
						$(".txtconfirmpassword").val("");
						$('.txtoldpassword').css("background-color","");
						$('.txtnewpassword').css("background-color","");
						$('.txtconfirmpassword').css("background-color","");
						$(".txtoldpassword").focus();
					});
					$('.txtoldpassword').focusout(function() {
						var password = $(this).val();
						if (password === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('.txtnewpassword').focusout(function() {
						var password = $(this).val();
						if (password === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('.txtconfirmpassword').focusout(
							function() {
								var password = $(this).val();
								var repassword = $('.txtnewpassword').val();
								if (password === "") {
									$(this).focus();
									$(this).css("background-color", "#ffb3b3");
								} else {
									$(this).css("background-color", "");
								}
								if (password != repassword) {
									$('.txtnewpassword').focus();
									$('.txtnewpassword').val("");
									$('.txtconfirmpassword').val("");
									$('.txtnewpassword').css(
											"background-color", "#ffb3b3");
									$('.txtconfirmpassword').css(
											"background-color", "#ffb3b3");
								}
							});

					$('#submit')
							.click(
									function(e) {
										e.preventDefault();

										var pass = $('.txtoldpassword').val();
										var npass = $('.txtnewpassword').val();
										var cpass = $('.txtconfirmpassword')
												.val();

										if (pass === "" || npass === ""
												|| cpass === "") {
											// alert("Fill all the details..");
											$('.success1')
													.css('display', 'block')
													.html(
															"<img src=\"../Resource/Image/error.png\" alt=\"error\" style=\"width: 5%\"><font color='red'><b>Fill all the details..</b></font>")
													.delay(1000).fadeOut();
										} else {
											$('.ajaxprogress1').show();

											$
													.ajax({
														type : "POST",
														url : "changepassword",
														data : "passoldpassword="
																+ pass
																+ "&passnewpassword="
																+ npass
																+ "&passnewrepassword="
																+ cpass,
														success : function(
																datas) {
															$('.ajaxprogress1')
																	.hide();
															$('.success1')
																	.css(
																			'display',
																			'block')
																	.html(
																			"<img src=\"../Resource/Image/successtick.png\" alt=\"successtick\" style=\"width: 5%\"><font color='green'><b> "
																					+ datas
																					+ "</b></font>")
																	.delay(1000)
																	.fadeOut();

														},
														error : function(e) {
															alert("error message");
														}

													});
										}

									});
				});