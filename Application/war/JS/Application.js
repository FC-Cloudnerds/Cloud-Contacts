$(document).ready(function() {
		$('#error').modal('hide');
		$('.ValidateNum').keypress(function(keycode) {
			if ((keycode.which > 47 && keycode.which < 58)|| (keycode.which == 46 || keycode.which == 8)|| (keycode.which == 9)) {
				return true;
			} 
			else {
					return false;
			}
});

$('#txtcontactname').keypress(function(keycode) {
	if ((keycode.which > 47 && keycode.which < 58)|| keycode.which == 13) {
		return false;
		} 
	else {
		return true;
		}
});
					

$('#txtcontactname').focusout(function() {
	name = $(this).val();
	if (name === "") {
		$(this).focus();
		$(this).css("background-color", "#ffb3b3");
	} 
	else {
		$(this).css("background-color", "");
	}
});



$('#inputMobile').focusout(function() {
	name = $(this).val();
	if (name === "") {
	$(this).focus();
	$(this).css("background-color", "#ffb3b3");
	}
	else {
	$(this).css("background-color", "");
	}
});
					

$('#inputLandline').focusout(function() {
	name = $(this).val();
	if (name === "") {
	$(this).focus();
	$(this).css("background-color", "#ffb3b3");
	}
	else {
		$(this).css("background-color", "");
	}
});
					

$('#inputEmail').focusout(function() {
	email = $(this).val();
	var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (email === "") {
		$(this).focus();
		$(this).css("background-color","#ffb3b3");
	}
	else {
			$(this).css("background-color", "");
	}
	if (expression.test(email) === false) {
		$(this).focus();
		$(this).css("background-color","#ffb3b3");
		$(this).attr("placeholder","Enter Valid Email Id");
		$(this).val("");
	}
	else {
			$(this).css("background-color", "");
			$(this).attr("placeholder","Enter Email Id");
	}
});


$('#inputAddress').focusout(function() {
	name = $(this).val();
	if (name === "") {
		$(this).focus();
		$(this).css("background-color", "#ffb3b3");
	}
	else {
			$(this).css("background-color", "");
	}
});


					var categorySelectCount = 0;
					var contactSelectCount = 0;
					var longpress = 300;
					var start;

					$('.category-panel').on('mousedown', '.list-group-item',function(e) {
								start = new Date().getTime();
					});

					$('.category-panel').on('mouseleave', '.list-group-item',function(e) {
								start = 0;
					});

					$('.category-panel').on('mouseup','.list-group-item',function(e) {
						if (new Date().getTime() >= (start + longpress)) {
						var hasclasscategory = $(this).hasClass('category');
						var deleteimage = $(this).find('.deleteimage');
						deleteimage.toggleClass('hidden');
							if (deleteimage.hasClass('hidden')) {
								if (hasclasscategory) {
									categorySelectCount = categorySelectCount - 1;
								} 
								else {
										contactSelectCount = contactSelectCount - 1;
								}
							} 
							else {
									if ($(this).hasClass('category')) {
										categorySelectCount = categorySelectCount + 1;
									} 
									else {
										contactSelectCount = contactSelectCount + 1;
									}
							}
							if (hasclasscategory) {
								if (categorySelectCount == 1) {
									$(this).closest('.category-panel').find('.button-delete-category').removeClass('hidden');
								} 
								else if (categorySelectCount == 0) {
								$(this).closest('.category-panel').find('.button-delete-category').addClass('hidden');
								}
							}

							else {
									if (contactSelectCount == 1) {
										$(this).closest('.category-panel').find('.button-delete-contact').removeClass('hidden');
									} 
									else if (contactSelectCount == 0) {
											$(this).closest('.category-panel')
															.find('.button-delete-contact')
															.addClass('hidden');
											}
									}

								}
					});

					loadContact();
					loadCategory();
					

					});

$('.category-panel').on('click', '.list-group-item', function() {
	$('.active').removeClass('active');
	$(this).addClass('active');

});

$('.editButton').click(function() {

	$('.addcontact').addClass('hidden');
	$('#inputMobile').prop('disabled', false);
	$('#inputLandline').prop('disabled', false);
	$('#inputEmail').prop('disabled', false);
	$('#inputAddress').prop('disabled', false);

});

$('.newContact').click(function() {
	$('#inputMobile').prop('disabled', false).val("");
	$('#inputLandline').prop('disabled', false).val("");
	$('#inputEmail').prop('disabled', false).val("");
	$('#inputAddress').prop('disabled', false).val("");

});


$('#profile_image').change( function(e) {
    var img = URL.createObjectURL(e.target.files[0]);
	  var formData = new FormData($('#myform')[0]);
	$.ajax({
	       url: $("#myform").attr('action'),
	       data: formData,
	       async: false,
	       contentType: false,
	       processData: false,
	       cache: false,
	       type: 'POST',
	       success: function(data)
	       {
	    	   $('.image').attr('src', "/serve?blob-key=" +data);
	       },
	     });
	});

$('.addcontact').click(function(){
		var imgurl = $('.image').attr("src");
		var varName = $('#txtcontactname').val();   			
		var varMobile = $('#inputMobile').val();
			var varLandline = $('#inputLandline').val();
			var varEmail = $('#inputEmail').val();
			var varAddress = $('#inputAddress').val();
			 var contact = 
			{
				"contactimage": imgurl,
				"contactname": varName,
				"contactmobile":varMobile,
				"contactlandline":varLandline,
				"contactemail":varEmail,
				"contactaddress":varAddress
			};
			 function clear() {
					$('#txtcontactname').val("");
					$('#profile_image').val("");
					$('.image').attr('src', "../Resource/Image/nopic.png");
					$('#inputMobile').val("");
					$('#inputLandline').val("");
					$('#inputEmail').val("");
					$('#inputAddress').val("");
				};
				if (varName == "" || varMobile == "" || varLandline == ""|| varEmail == "" || varAddress == "") {
					 $('#error').modal('show');
					 return false;

					 } 
			 
		
			$.ajax({
    			type: "POST",
    			url: 'addcontact',
    			contentType: 'application/json',
    			dataType: 'json',
    			mimeType: 'application/json',
    			data: JSON.stringify(contact),
    			success: function(contact){
    				if(contact.Status == "0")
    					{
    					clear();
    					loadContact();
    					}
    			},
    			error: function(e){
    				alert("error message");
    			}
    		});
	});
	
	var loadContact = function() {
		$.ajax({
			type: "GET",
			url: "loadcontact",
			contentType: 'application/json',
			dataType: 'json',
			mimeType: 'application/json',
			data: JSON.stringify({"Status":"UpdatedMe"}),
			success: function(data){
				$('.contacts').empty();
				var template1 = $('#First_letter_template').html();
				var template = $('#templateid').html();
					 $.each(data, function(i, alphabet){
						 istring = Mustache.to_html(template1,i);
						 
						 $('.contacts').append(istring);
						 var initial ="$('."+i+"')";
				        $.each(alphabet, function(j, contact){
				             tstring = Mustache.to_html(template,contact);
							 var init = eval(initial);
							 $(init).closest('.insidefirstletter').append(tstring);
				            });
					 });
			},
			error: function(e){
				alert("error message");
			}
		});
	}
	
	
	$('.add-category').on('click','.add-button',function() {
		var ancestor = $(this).closest('.category-panel');
		var value = ancestor.find('.add-category').children('input').val();
		$('.add-category').children('input').val("");
		var category = {category_name : value};
			if (value.length > 0) {
				$.ajax({
					url : 'AddCategory',
					contentType : 'application/json',
					type : 'POST',
					dataType : 'json',
					data : JSON.stringify(category),
					success : function() {
					loadCategory();
					},
					error : function(e) {
					alert("error...");
					}
					});
			}
	});
	
	
	var loadCategory = function(){
		$.ajax({
		url : 'LoadCategory',
		contentType : 'application/json',
		type : 'GET',
		dataType : 'json',
		data : JSON.stringify({'Status' : 'UpdateCategory'}),
		success : function(data) {
			$('#load_cat_temp').empty();
			$('.category_dropdown').empty();
			var generic_cat_tamp = $('#load_cat_generic_temp').html();
			$.each(data,function(key, cat_name) {
				temp = Mustache.to_html(generic_cat_tamp, data);
				$('#load_cat_temp').append(temp);
				$('.category_dropdown').append("<option class='defaultcategory' value='' selected='selected' disabled>Category</option>");
				$('.category_dropdown').append("<option class='defaultcategory' value='All'>All</option>");
				for (var i = 0; i < cat_name.length; i++) {
					$('.category_dropdown').append("<option>" + cat_name[i]+ "</option>");
				}
			});
		},
		error : function(e) {
		alert("error...");
		}
		});	
	}
	
	
	$('.button-delete-contact').click(function(){
		var contacts_to_delete = [];
		$('.deleteimage:not(:hidden)').prev().text(function(i, txt) {
			contacts_to_delete.push(txt);
		});	
		var del_contact =
				{
				"delete_contact" : contacts_to_delete
				};
		
		
		$.ajax({
			type: "DELETE",
			url: 'deletecontact',
			contentType: 'application/json',
			dataType: 'json',
			mimeType: 'application/json',
			data: JSON.stringify(del_contact),
			success: function(contact){
				if(contact.Status == "0")
					{
					loadContact();
					}
			},
			error: function(e){
				alert("error message");
			}
		});
	});
	
	$('.button-delete-category').click(function(){
		var category_to_delete = [];
		$('.deleteimage').not('.hidden').next().text(function(i, txt) {
			category_to_delete.push(txt);
		});	
		var del_category =
				{
				"delete_category" : category_to_delete
				};
		
		
		$.ajax({
			type: "DELETE",
			url: 'deletecategory',
			contentType: 'application/json',
			dataType: 'json',
			mimeType: 'application/json',
			data: JSON.stringify(del_category),
			success: function(category){
				if(category.Status == "0")
					{
					
					loadCategory();
					}
			},
			complete:function(){
				$('.button-delete-category').addClass('hidden');
			},
			error: function(e){
				alert("error message");
			}
		});
	});
	
	
	
	

