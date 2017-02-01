var login = (function() {
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var error_modal,email_textbox,pass_textbox,submit_btn;
	var $password,$email;
	
	//Cache DOM
	error_modal=$('#error');
	email_textbox=$(".txtemail");
	pass_textbox=$('.txtpassword');
	submit_btn=$('.btnsubmit');
	
	//Binding events
	email_textbox.focusout(validateEmailID); 
	pass_textbox.focusout(validatePassword);
	submit_btn.on('click',function(e){
		$password= pass_textbox.val();
		$email=email_textbox.val();
		e.preventDefault();
		submitData($email,$password);
	});		
	
	//functions - sandbox
	function validatePassword() {
		$password = pass_textbox.val();
		if ($password === "") {
			$(this).focus()
				.css("background-color","#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function validateEmailID(){
		$email = email_textbox.val();
		if ($email === "") {
			$(this).focus()
				.css("background-color","#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (expression.test($email) === false) {
			$(this).focus()
				.css("background-color","#ffb3b3")
				.attr("placeholder","Enter Valid Email Id")
				.val("");
		} else {
			$(this).css("background-color", "")
				.attr("placeholder","Enter Email Id");
		}
	}	
	
	function submitData(email,password) {
		if( arguments.length != 2){
			console.log("Enter valid number of arguments.");
			return false;
		}
		else if (password === "" || email === "" ) {
			error_modal.modal('show')
				.find('.message').html("Fill all the details..");
		} else {
			submitDataAjaxCall(email,password);
		}
	}
	
	function submitDataAjaxCall(email,password){
		$.ajax({
			type : "GET",
			url : "login",
			data : "txtemail="+ email + "&txtpassword="+ password,
			success : function(e) {
					if (e === "incorrect_pass") {
						error_modal.modal('show')
							.find('.message').html("Please enter correct Password");
						pass_textbox.focus();
					}else if(e === "incoorect_EmailId"){
						error_modal.modal('show')
							.find('.message').html("Please enter correct Email ID");
						email_textbox.focus();
					}else{
						window.location.href = "../JSP/userscreen.jsp";
					}
					console.log(e);
				},
				error : function(e) {
					alert("Error in login page")
				},
			});
	}
	
	
	return{
		submitData : submitData,	
	};
})()

