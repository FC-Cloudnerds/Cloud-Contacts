$(document)
		.ready(
				function() {
					$('#error').modal('hide');
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

					$('#txtcontactname').keypress(
							function(keycode) {
								if ((keycode.which > 47 && keycode.which < 58)
										|| keycode.which == 13) {
									return false;
								} else {
									return true;
								}
							});
					$('#txtcontactname').focusout(function() {
						name = $(this).val();
						if (name === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('#inputMobile').focusout(function() {
						name = $(this).val();
						if (name === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('#inputLandline').focusout(function() {
						name = $(this).val();
						if (name === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					$('#inputEmail')
							.focusout(
									function() {
										email = $(this).val();
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
											$(this).css("background-color",
													"#ffb3b3");
											$(this).attr("placeholder",
													"Enter Valid Email Id");
											$(this).val("");
										} else {
											$(this).css("background-color", "");
											$(this).attr("placeholder",
													"Enter Email Id");
										}
									});
					$('#inputAddress').focusout(function() {
						name = $(this).val();
						if (name === "") {
							$(this).focus();
							$(this).css("background-color", "#ffb3b3");
						} else {
							$(this).css("background-color", "");
						}
					});
					var categorySelectCount = 0;
					var contactSelectCount = 0;

					// how many milliseconds is a long press?
					var longpress = 300;
					// holds the start time
					var start;

					$('.category-panel').on('mousedown', '.list-group-item',
							function(e) {
								start = new Date().getTime();
							});

					$('.category-panel').on('mouseleave', '.list-group-item',
							function(e) {
								start = 0;
							});

					$('.category-panel')
							.on(
									'mouseup',
									'.list-group-item',
									function(e) {

										if (new Date().getTime() >= (start + longpress)) {
											var hasclasscategory = $(this)
													.hasClass('category');
											var deleteimage = $(this).find(
													'.deleteimage');
											deleteimage.toggleClass('hidden');
											if (deleteimage.hasClass('hidden')) {
												// alert("hidden added");
												if (hasclasscategory) {
													// alert("has category");

													categorySelectCount = categorySelectCount - 1;
													// alert(categorySelectCount);
												} else {
													// alert("doesn't has
													// category");
													contactSelectCount = contactSelectCount - 1;
													// alert(contactSelectCount);
												}
											} else {
												// alert("hidden removed");

												if ($(this)
														.hasClass('category')) {
													// alert("has category");
													categorySelectCount = categorySelectCount + 1;
													// alert(categorySelectCount);
												} else {
													// alert("doen't category");
													contactSelectCount = contactSelectCount + 1;
													// alert(contactSelectCount);
												}
											}
											if (hasclasscategory) {
												if (categorySelectCount == 1) {

													$(this)
															.closest(
																	'.category-panel')
															.find(
																	'.button-delete-category')
															.removeClass(
																	'hidden');
													// alert("inside
													// categorySelectCount ==1
													// ");
												} else if (categorySelectCount == 0) {
													$(this)
															.closest(
																	'.category-panel')
															.find(
																	'.button-delete-category')
															.addClass('hidden');
													// alert("inside
													// categorySelectCount ==
													// 0");
												}
											}

											else {
												if (contactSelectCount == 1) {
													$(this)
															.closest(
																	'.category-panel')
															.find(
																	'.button-delete-category')
															.removeClass(
																	'hidden');
													// alert("inside
													// contactSelectCount ==1
													// ");
												} else if (contactSelectCount == 0) {
													$(this)
															.closest(
																	'.category-panel')
															.find(
																	'.button-delete-category')
															.addClass('hidden');
													// alert("inside
													// contactSelectCount ==0
													// ");
												}
											}

										}
									});

					$('.add-category')
							.on(
									'click',
									'.add-button',
									function() {
										var ancestor = $(this).closest(
												'.category-panel');
										var value = ancestor.find(
												'.add-category').children(
												'input').val();
										if (value.length > 0) {
											ancestor.find('.add-category')
													.children('input').val("");
											var string = $('<li class="list-group-item category"><span class="deleteimage hidden"><img src="../Resource/Image/delete.png" style="width: 7%"></span> '
													+ value
													+ '<span class="badge">0</span></li>');
											var string2 = $('<option value=\"'
													+ value + '\">' + value
													+ '</option>');
											ancestor.find(
													'.category-list-group')
													.append(string);
											alert(string2);
											$('.category_dropdown').append(
													string2);
										}

									});

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

$('#profile_image').change(function(e) {

	var img = URL.createObjectURL(e.target.files[0]);
	$('.image').attr('src', img);
});

$('.addcontact').click(
		function() {

			// alert("clicked");
			var imgurl = $('.image').attr('src');
			var varName = $('#txtcontactname').val();
			var varMobile = $('#inputMobile').val();
			var varLandline = $('#inputLandline').val();
			var varEmail = $('#inputEmail').val();
			var varAddress = $('#inputAddress').val();
			if (varName == "" || varMobile == "" || varLandline == ""
					|| varEmail == "" || varAddress == "") {
				$('#error').modal('show');

			} else if (varName != "" && varMobile != "" && varLandline != ""
					&& varEmail != "" && varAddress != "") {

				var list = {
					imageurl : imgurl,
					name : varName
				};
				generic_tamp = $('#template').html();
				Mustache.parse(generic_tamp);
				temp = Mustache.render(generic_tamp, list);
				$('.return_tamp').append(temp);
				clear();

			}
			function clear() {
				$('#txtcontactname').val("");
				$('#profile_image').val("");
				$('.image').attr('src', "../Resource/Image/nopic.png");
				$('#inputMobile').val("");
				$('#inputLandline').val("");
				$('#inputEmail').val("");
				$('#inputAddress').val("");
			}
		});
