$(document).ready(function(e) {
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
	$('.txtconfirmpassword').focusout(function() {
		var password = $(this).val();
		var repassword=$('.txtnewpassword').val();
		if (password === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		
		if(repassword !== password){
			$('.txtnewpassword').focus();
			$('.txtnewpassword').val("");
			$(this).val("");	
			$('.txtnewpassword').css("background-color", "#ffb3b3");
			$(this).css("background-color", "#ffb3b3");
		}
		else{
			$('.txtnewpassword').css("background-color", "");
			$(this).css("background-color", "");
		}
	});
});