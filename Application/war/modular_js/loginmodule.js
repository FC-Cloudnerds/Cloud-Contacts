var login = (function() {
	var password, email;
	var $password = $('.txtpassword').val();
	var $email =$(".txtemail").val();
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	
	$(".txtemail").focusout(validatemail); 
	$('.txtpassword').focusout(validatpassword);
	$('.btnsubmit').click(submitdata);
	
	function validatePassword() {
		if ($password === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	function validateEmail(){
		if ($email === "") {
			$(this).focus();
			$(this).css("background-color",	"#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (expression.test($email) === false) {
			$(this).focus();
			$(this).css("background-color","#ffb3b3");
			$(this).attr("placeholder","Enter Valid Email Id");
			$(this).val("");
		} else {
			$(this).css("background-color", "");
			$(this).attr("placeholder",	"Enter Email Id");
		}
	}
	function sumbmitData() {
		e.preventDefault();
		if ($password === "" || $email === "") {
			$('#error').modal('show');
			$('#error').find('.message').html("Fill all the details..");
			$('.txtpassword').val("");
		} else {
			$.ajax({
					type : "GET",
					url : "login",
					data : "txtemail="+ $email + "&txtpassword="	+ $password,
					success : function(e) {
							if (e == "incorrect_pass") {
								$('#error')	.modal(	'show');
								$('#error').find('.message').html("Please enter correct Password");
								$('.txtpassword').val("");
							}else{
								window.location.href = "../JSP/userscreen.jsp";
							}
						},
						error : function(e) {
							$('#error').modal('show');
							$('#error').find('.message').html("Please enter correct Email id");
							 
						},
					});
		}
	}
	login.submitData();
})()