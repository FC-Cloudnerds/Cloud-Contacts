$(document)
		.ready(
				function(e) {
					
					$('.ValidateNum')
							.keypress(
									function(keycode) {
										if ((keycode.which > 47 && keycode.which < 58)
												|| (keycode.which == 46 || keycode.which == 8)
												|| (keycode.which == 9)) {
											return true;
										} else {
											return false;
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
										if (email === "") {
											$(this).focus();
											$(this).css("background-color",
													"#ffb3b3");
										} else {
											$(this).css("background-color", "");
										}
										if (expression.test(email) === false) {
											$(this).focus();
											$(this).css("background-color","#ffb3b3");											
											$(this).attr("placeholder","Enter Valid Email Id");
											$(this).val("");
										}
										else{
											$(this).css("background-color","");											
											$(this).attr("placeholder","Enter Email Id");
										}
									});

					$(".txtmobileno").focusout(function() {
						var mobile = $(this).val();
						if (mobile === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('.txtpassword').focusout(function() {
						var password = $(this).val();
						if (password === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('.txtrepassword').focusout(function() {
						var repassword = $(this).val();
						var password = $('.txtpassword').val();
						if (repassword === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
						
						if(repassword !== password){
							$('.txtpassword').focus();
							$('.txtpassword').val("");
							$(this).val("");	
							$('.txtpassword').css("background-color", "#ffb3b3");
							$(this).css("background-color", "#ffb3b3");
						}
						else{
							$('.txtpassword').css("background-color", "");
							$(this).css("background-color", "");
						}
					});
					$('.ddbsequ').focusout(function() {
						var secqurityQue = $(this).val();
						if (secqurityQue === "--- Select ---") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
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
				});
