var resetpass=(function(){
	var $oldpass,$newpass,$confirmpass,oldpass_val,newpass_val,confirmpass_val;
	
	//Cache DOM
	$oldpass=$(".txtoldpassword");
	$newpass=$(".txtnewpassword");
	$confirmpass=$(".txtconfirmpassword");
	$submit_btn= $('#submit');
	pass_val = $oldpass.val();
	newpass_val = $newpass.val();
	confirmpass_val =  $confirmpass.val();
	
	//Binding events
	$('#modal1').on('show.bs.modal', modalShownEvent);
	$oldpass.focusout(validateOldPass);
	$newpass.focusout(validateNewPass);
	$confirmpass.focusout(validateconfirmPass);
	$submit_btn.click(function(e){
		e.preventDefault();
		changePassword(pass_val,newpass_val,confirmpass_val);
	});
	
	//Functions - sandbox
	function modalShownEvent() {
		$oldpass.val("")
			.css("background-color","")
			.focus();
		$newpass.val("")
			.css("background-color","");
		$confirmpass.val("")
			.css("background-color","");
	}
	
	function validateOldPass() {
		pass_val = $(this).val();
		if (pass_val === "") {
			$(this).focus()
				.css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}

	function validateNewPass() {
		newpass_val = $(this).val();
		if (newpass_val === "") {
			 $(this).focus()
			 	.css("background-color", "#ffb3b3");
		 } else {
			 $(this).css("background-color", "");
		 }
	 }

	function validateconfirmPass() {
		confirmpass_val = $(this).val();
		newpass_val = $newpass.val();
		if (confirmpass_val === "") {
			$(this).focus()
				.css("background-color", "#ffb3b3");
		}else {
			$(this).css("background-color", "");
			checkPassEquality(newpass_val,confirmpass_val);
		 }
	 }
	
	function checkPassEquality(newpass_val,confirmpass_val){
		if (confirmpass_val != newpass_val) {
			$newpass.focus()
				.val("")
				.css("background-color", "#ffb3b3");
			$confirmpass.val("")
				.css("background-color", "#ffb3b3");
			return false;
		}else{
			$newpass.css("background-color","");
			$confirmpass.css("background-color", "");
			return true;
		}
	}
	
	function changePassword(pass,npass,cpass) {
		if(arguments.length != 3){
			console.log("Enter valid numbers of arguments..");
			return false;
		}else {
		var ans=checkPassEquality(npass,cpass);
		if(ans == false ){
			console.log("New password and confirm passeord should be same.");
			return false;
		}
	}
	if (pass === "" || npass === "" || cpass === "") {
			$('.success1').css('display', 'block').html("<img src=\"../Resource/Image/error.png\" alt=\"error\" style=\"width: 5%\"><font color='red'><b>Fill all the details..</b></font>").delay(1000).fadeOut();
			console.log("Enter all details...");
	} else {
			$('.ajaxprogress1').show();
			changePassAjaxCall(pass,npass,cpass);
		}
	}

	function changePassAjaxCall(pass,npass,cpass){
		$.ajax({
			type : "PUT",
			url : "changepassword",
			data : "passoldpassword=" + pass + "&passnewpassword=" + npass + "&passnewrepassword=" + cpass,
			success : function(datas) {
				$oldpass.val("");
				$newpass.val("");
				$confirmpass.val("");
				$('.ajaxprogress1').hide();
				$('.success1').css('display','block')
						.html(datas)
						.delay(1000)
						.fadeOut();
				var start_str=datas.search("<b>");
				var end_str=datas.search("</b>");
				var str=datas.slice(start_str+3,end_str);
				console.log(str);
			},
			error : function(e) {
				alert("Error in change password..");
			}
		});
}
	return{
		changePassword : changePassword,
	};
})()

