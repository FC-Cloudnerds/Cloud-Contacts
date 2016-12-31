var user_signup= (function(){
	var $name,$email,$mobile,$password,$repassword,$securityQue,$answer;
	var name,email,mobile,password,repassword,securityQue,answer;
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	$name = $('.txtfullname');
	$email=$('.txtemail');
	$mobile= $('.txtmobileno');
	$password=$('.txtpassword');
	$repassword=$('.txtrepassword');
	$securityQue=$('.ddbsequ');
	$answer=$('.txtanswer');
	$sumbmit_btn=$('.btnsubmit');
	
	$name.focusout(validateName);		
	$email.focusout(validateEmail);
	$mobile.focusout(validateMobileNo);		
	$password.focusout(validatePassword);	
	$repassword.focusout(validateRePassword);
	$securityQue.focusout(validateSecQue);
	$answer.focusout(validateAnswer);
	
	$('.ValidateNum').keypress(allow_number_only);
	$('.ValidateText').keypress(allow_character_only);
	
	$sumbmit_btn.on('click',function(e){
		e.preventDefault();
		name = $name.val();
		email = $email.val();
		mobile = $mobile.val();
		password = $repassword.val();
		securityQue = $securityQue.val();
		answer = $answer.val();
		createAccount(name,email,mobile,password,securityQue,answer);
	});
	
	function validateName() {
		name = $(this).val();
		if (name === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}

	function validateEmail() {
		email = $(this).val();
		if (email === "") {
			$(this).focus();
			$(this).css("background-color","#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (expression.test(email) === false) {
			$(this).focus();
			$(this).css("background-color","#ffb3b3");
			$(this).attr("placeholder","Enter Valid Email Id");
			$(this).val("");
		} else {
			$(this).css("background-color", "");
			$(this).attr("placeholder","Enter Email Id");
		}
	}

	function validateMobileNo() {
		mobile = $(this).val();
		if (mobile === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function validatePassword() {
		password = $(this).val();
		if (password === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
		$(this).css("background-color", "");
		}
	}
	
	function validateRePassword() {
		repassword = $repassword.val();
		password = $password.val();
		if (repassword === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
		if (repassword !== password) {
			$password.focus();
			$password.val("");
			$(this).val("");
			$password.css("background-color","#ffb3b3");
			$(this).css("background-color", "#ffb3b3");
		} else {
			$password.css("background-color","");
			$(this).css("background-color", "");
		}
	}
	
	function validateSecQue() {
		securityQue = $(this).val();
		if (securityQue === "--- Select ---") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function validateAnswer() {
		answer = $(this).val();
		if (answer === "") {
			$(this).focus();
			$(this).css("background-color", "#ffb3b3");
		} else {
			$(this).css("background-color", "");
		}
	}
	
	function allow_number_only(keycode) {
		if ((keycode.which > 47 && keycode.which < 58) || (keycode.which == 46 || keycode.which == 8)|| (keycode.which == 9)) {
			return true;
		} else {
			return false;
		}
	}

	function allow_character_only(keycode) {
		if ((keycode.which > 47 && keycode.which < 58) || keycode.which == 13) {
			return false;
		} else {
			return true;
		}
	}
	function allow_sec_que(index){
		var que_list = [],que,c=0;
		$('.ddbsequ').find('option').text(function(i,val){
			que_list.push(val);
		});
		if(typeof index== "number"){
			if(index>0 && index<=6)
			{
			que=que_list[index];
			c=1;
			}			
		}
		else{
		for(var i=1;i<=que_list.length;i++){
			if(index == que_list[i]){
				que=que_list[i];
				c=1;
				break;
		}
		}
		}
		if(c==1){
			return que;
			c=0;
		}else{
			return false;
		}
	}
	function validateMobileForApi(mobile){		 
	        var filter = /^[0-9]+$/;
	        if (filter.test(mobile)) {
	            return true;
	        }
	        else {
	            return false;
	        }
	}
	function validateNameForApi(name){
 		var numbers = /^[a-zA-Z]+$/; ;  
	      if(name.match(numbers))  {  
	      return true;  
	      }  
	      else {  
	      return false;  
	      }  
		
	}
	function createAccount(name,email,mobile,password,securityQue,answer) {
		if (name === "" || email === "" || mobile === "" || password === "" ||  securityQue === "" || answer === "" || arguments.length !== 6) {
			$('#error').modal('show');
			return false;
		} else {
			var name_bool=validateNameForApi(name);
			var mobile_bool=validateMobileForApi(mobile);
			var que_bool=allow_sec_que(securityQue);
			if(name_bool == false){
				console.log("Name is not correct");
			}
			else if(mobile_bool==false){
				console.log("Mobile no is not correct");
			}
			else if(que_bool==false){
					console.log("For security Quetion enter only value between 1 to 6");
				}else{
					securityQue = que_bool;
				}
			}
			if(name_bool === true && mobile_bool===true && que_bool !== false){
			$.ajax({
					type : "POST",
					url : "signup",
					data : "txtfullname=" + name + "&txtemail=" + email + "&txtmobileno=" + mobile + "&txtpassword=" + password + "&ddbsequ=" + securityQue + "&txtanswer=" + answer,
					success : function(e) {
						if(e === 1){
							$('#success').modal('show');
						}else if(e== 0){
							$('#error').find('.message').html("<b>Email id already exits..</b>");
							$('#error').modal('show');
						}
						
					},
					error : function(e) {
						alert("Error in signup...");
					}
				});	
			}
		}
	
	return{
		createAccount : createAccount
	}
})()			
