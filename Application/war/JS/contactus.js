var contactus=(function (){
	var name_val,email_val,message_val,$name,$email,$message,$name_welcomepage,$email_welcomepage;
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	//Cache DOM
	$name=$(".txtfullname");
	$email=$(".txtemail");
	$message=$(".txtmessage");
	$name_welcomepage=$('.ValidateText');
	$email_welcomepage=$('.ValidateEmail');
	name_val=$name.val();
	email_val=$email.val();
	message_val=$message.val();

	//Binds events 
	$('#modal2').on('show.bs.modal', modalShownEvent);
	$('#modal2').on('shown.bs.modal', function() {
		$name_welcomepage.focus();
	});
	$name_welcomepage.focusout(validateName);
	$name_welcomepage.keypress(allow_character_only);
	$email_welcomepage.focusout(validateEmail);
	$message.focusout(validateMessage);
	$('.submitClick').click(function(e){
		e.preventDefault();
		submitData(name_val,email_val,message_val);
	});
	//Functions - sandbox
	function modalShownEvent() {
		$message.val("");
		$name_welcomepage.val("");
		$email_welcomepage.val("");
		$message.css('background-color', '');
		$name.css('background-color', '');
		$email.css('background-color', '');
	}
	
	function validateName() {
		name_val = $(this).val();
		if (name_val === "") {
			$(this).focus()
				.css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function allow_character_only(keycode){
		if ((keycode.which > 47 && keycode.which < 58)
				|| keycode.which == 13) {
			return false;
		} else {
			return true;
		}
	}
	
	function validateEmail() {
		email_val = $(this).val();
		if (email_val == "") {
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
	
	function validateMessage() {
		message_val = $(this).val();
		if (message_val === "") {
			$(this).focus()
				.css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function submitData(name_val,email_val,message_val) {
		if(arguments.length !=3){
			console.log("Enter valid numbers of arguments..");
			return false;
		}
		else if (name_val === "" || email_val === "" || message_val === "") {
			$('.message')
				.css('display', 'block')
				.html("<img src=\"../Resource/Image/error.png\" alt=\"error\" style=\"width: 5%\">&nbsp;<font color='red'><b>Fill all the data..</b></font> ")
				.delay(1000).fadeOut();
		} else {
			$('.ajaxprogress2').show();
			var send_data = {
				txtfullname : name_val,
				txtemail : email_val,
				txtmessage : message_val,
			};
			submitDataAjaxCall(send_data);
		}
	}
	function submitDataAjaxCall(send_data){
		$.ajax({
			url : 'contactus_modal',
			contentType : 'application/json',
			type : 'POST',
			data : JSON.stringify(send_data),
			success : function(data) {
				$('.ajaxprogress2').hide();
				$('.message').css('display','block')
					.html("<img src=\"../Resource/Image/successtick.png\" alt=\"successtick\" style=\"width: 5%\"><font color='green'><b>"+ data+ "</b></font>")
					.delay(1000)
					.fadeOut();
			},
			error : function(error) {
				$('.ajaxprogress2').hide();
				alert("Error in contact us page..");
			},
			complete : function() {
				$name_welcomepage.val("");
				$email_welcomepage.val("");
				$message.val("");
			}
		});
	}
	return {
		submitData : submitData,
	};
})()
