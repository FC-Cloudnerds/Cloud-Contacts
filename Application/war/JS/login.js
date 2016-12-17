$(document).ready(function(e) {
	$(".txtemail").focusout(function() {
		var email = $(this).val();
		var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (email === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (expression.test(email) === false) {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
			$(this).attr("placeholder", "Enter Valid Email Id");
			$(this).val("");
		} else {
			$(this).css("background-color", "");
			$(this).attr("placeholder", "Enter Email Id");
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
});