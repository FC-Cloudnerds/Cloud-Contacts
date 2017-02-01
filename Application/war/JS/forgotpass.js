var forgotPasseord = (function(){
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var $email,$answer,$getQue_btn,$submit_btn,$lblpass,email_val,answer_val;
	
	//Cache DOM
	$email = $(".txtemail");
	$answer = $('.txtanswer');
	$getQue_btn = $('.btngetque');
	$submit_btn =$('.btnsubmit');
	$lbl_password=$('#lblpassword');
	$txt_security_que=$('.txtsecque');
	answer_val = $('.txtanswer').val();
	email_val = $(".txtemail").val();
	
	//Binds events
	$email.focusout(validateEmail);
	$answer.focusout(validateAnswer);
	$getQue_btn.on('click',function(e) {
		e.preventDefault();
		getSecutiyQue(email_val);
	});
	$submit_btn.on('click',function(e) {
		e.preventDefault();
		submitData(email_val,answer_val);
	});
		
	//Functions - sandbox
	function validateEmail() {
		email_val = $(this).val();
		if (email_val === "") {
			$(this).focus()
				.css("background-color","#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (expression.test(email_val) === false) {
			$(this).focus()
				.css("background-color","#ffb3b3")
				.attr("placeholder","Enter Valid Email Id")
				.val("");
		} else {
			$(this).css("background-color", "")
				.attr("placeholder","Enter Email Id");
		}
	}
	
	function validateAnswer() {
		answer_val = $(this).val();
		if (answer_val === "") {
			$(this).focus()
				.css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
}
	function getSecutiyQue(email_val){
		if (email_val === "") {
			$('#error').modal();
			$('#error_data').html("<span style='color: red;'><p>Enter email id..</p></span>");
		} else {
			getSecutiyQueAjaxCall(email_val);
		}
	}

	function submitData(email_val,answer_val){
		if(arguments.length != 2){
			console.log("Enter valid number of arguments.");
			return false;
		}
		$lbl_password.val("")
			.show();
		if (answer_val === "") {
			$('#error').modal();
			$('#error_data').html("<span style='color: red;'><p>Answer should not be blank..</p></span>");
		} else {
			submitDataAjaxCall(email_val,answer_val);
		}
	}
	
	function getSecutiyQueAjaxCall(email_val){
		$.ajax({
			url : 'forgotpass',
			type : 'GET',
			data : "txtemail="+ email_val,
			success : function(data) {
				if (data == "0") {
					error(data);
				} else {
					$txt_security_que.val(data);
					$answer.removeAttr('disabled')
						.focus();
					$submit_btn.removeAttr('disabled');
					$email.attr("disabled","disabled");
				}
			},
			error : function(error) {
				alert("Error in getting security question...");
			}
		});
	}
	

	function submitDataAjaxCall(email_val,answer_val){
		$.ajax({
			url : 'forgotpass',
			type : 'GET',
			data : "txtemail="+ email_val + "&txtanswer="+ answer_val,
			success : function(data) {
				if(data == "0"){
					error(data);
				}
				$lbl_password.removeAttr('type','hidden')
					.css("color","red")
					.val(data)
					.delay(3000).fadeOut();
			},
			error : function(error) {
				alert("Error in getting answer...");
			},
			complete : function() {
				$answer.val("");
			}
			});
	}
	function error(data){
		$('#error').modal();
		$('#error_data').html("<span style='color: red;'><p>You are not registered user..</p></span>");
	}
	
	return{
		submitData : submitData,
	};
})()
