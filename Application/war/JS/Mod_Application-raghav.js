/*
*@Project: CloudContacts
*@Author: RAGHAVENDRA
*@Date: 31-12-2016
*
*@Description:
*This is for category Module which is the first column of userscreen page.
*In this module, 
*				user will be searching category.
*				user will be adding category(Front end & using API).
*				user will be deleting category(Front end & using API).
*				user will be adding Bulk category(using API).
*				User will be deleting Bulk category(using API). 
*
*
*@API Available:
*1.addCategory(category)-For adding a category and adding bulk category in the form of array Object.
*2.deleteCategory(category)-For deleting a category using its name,Deleting a category using its index and Bulk deleting a category using Array Object.
*3.setLongPressdelay(milliseconds).
*4.searchCategory(category).--- pending
*/
var category_module=(function(){

	//Default Configurations
	var longpress = 200; 
	var start_time = 0;
	var categorySelectCount = 0;
	var contactSelectCount = 0;
    var category = [];

    
/***********************************************************************************************************************/    
    //CacheDOM
    	//elements caching
	var $addCategoryButton = $('.add-category');
	var $addCategoryTextField = $('.add-button').next();
	var $categoryinsert = $('#load_cat_temp');
	var $deleteimage = $('.deleteimage');
	var $category_delete_button = $('.button-delete-category');
	var $active = $('.active');
	var $categorypanel = $('.category-panel');
	var deleteCategoryArray = [];

	// templates caching
	var category_template = $('#load_cat_generic_temp').html();
/** ******************************************************************************************************************** */    
    
    
    //Binding Events
	$addCategoryButton.on('click', '.add-button', addCategory);
	$category_delete_button.on('click', deleteCategory);
	$categorypanel.on('mousedown', '.list-group-item', setStartTime);
	$categorypanel.on('mouseleave', '.list-group-item', resetStartTime);
	$categorypanel.on('mouseup', '.list-group-item', showDeleteIcon);
	$categorypanel.on('click', '.list-group-item', clickActivation);
	 
        
    //render
    function render()
    {
    	$categoryinsert.html(Mustache.render(category_template, {Category: category }));
    }
    
    //init function
    loadCategory();
    
    
    //sandBox
    function setLongPressdelay(milliseconds){
        longpress = milliseconds;
    }
    
    function getLongPressdelay(){
        return longpress;
    }

	 function addCategory(category_name) {
		typeof category_name === "string" ? addCategoryTocategoryArray(category_name)
								          : (category_name.hasOwnProperty('originalEvent')) ? addCategoryTocategoryArray($addCategoryTextField.val())
								        		  											: addArrayTocategoryArray(category_name);
		$addCategoryTextField.val("");
	}

	 function addCategoryTocategoryArray(value) {
		if (value.length > 0) {
			findCategoryAlreadyPresent(value) ? alert("Category Already Present")
											  : addcategoryAjaxCall(value);
		}
	}

	 function addArrayTocategoryArray(object) {
		for ( var value in object) {
			addCategoryTocategoryArray(object[value]);
		}
	}
        

	 function addcategoryAjaxCall(value) {
		$.ajax({
			url : 'AddCategory',
			contentType : 'application/json',
			type : 'POST',
			dataType : 'json',
			data : JSON.stringify({
				category_name : value
			}),
			success : function() {
				loadCategory();
			},
			error : function(e) {
				alert("error...");
			}
		});
	}
        
	function deleteCategoryAjaxCall(del_category) {
		$.ajax({
			type : "DELETE",
			url : 'deletecategory',
			contentType : 'application/json',
			dataType : 'json',
			mimeType : 'application/json',
			data : JSON.stringify({
				"delete_category" : del_category
			}),
			success : function(contact) {
				if (contact.Status == "0") {
					loadCategory();
				}
			},
			error : function(e) {
				alert("error message");
			}
		});
	}        	
    
    function loadCategory(){
		$.ajax({
		url : 'LoadCategory',
		contentType : 'application/json',
		type : 'GET',
		dataType : 'json',
		data : JSON.stringify({'Status' : 'UpdateCategory'}),
		success : function(data) {
			$('.category_dropdown').empty();
			$.each(data,function(key, cat_name) {
				$('.category_dropdown').append("<option class='defaultcategory' value='' selected='selected' disabled>Category</option>");
				$('.category_dropdown').append("<option class='defaultcategory' value='All'>All</option>");
				category = [];
				for (var i = 0; i < cat_name.length; i++) {
					category.push(cat_name[i]);
					$('.category_dropdown').append("<option>" + cat_name[i]+ "</option>");
				}
			    render();
			});
		},
		error : function(e) {
		alert("error...");
		}
		});	
	}
    
	function deleteCategory(event) {
		 deleteCategoryArray = [];
		(typeof event === "number")? deleteByCategoryNumber(event):(typeof event === "string")?deleteByCategoryName(event):(event.hasOwnProperty('originalEvent'))?deleteByCategoryDeleteEvent():deleteCategoryByObject(event);
		deleteCategoryAjaxCall(deleteCategoryArray);
		renderDeleteButton.call(this);
	}

	function deleteByCategoryNumber(index){
		 deleteCategoryArray.push(category[index]);
		}
	 
	function findCategoryAlreadyPresent(Name)
	 {
		 for (var i = 0; i < $categoryinsert.find('li').length; i++) {
				if (($categoryinsert.find('li').eq(i).find('span').eq(1).text()) == Name) {
				return true;
				}
		 }
	 }
	 
	function deleteByCategoryName(Name){
			for (var i = 0; i < $categoryinsert.find('li').length; i++) {
				if (($categoryinsert.find('li').eq(i).find('span').eq(1).text()) == Name) {
					deleteByCategoryNumber(i);
				}
			}
		}
	function deleteCategoryByObject(object){
	 		for (var value in object ){
	 			deleteByCategoryName(object[value]);
     		}
	 	}
		
	function deleteByCategoryDeleteEvent() {
		var category_to_delete = [];
		$('.deleteimage').not('.hidden').next().text(function(i, txt) {
			category_to_delete.push(txt);
		});
		deleteCategoryByObject(category_to_delete);
		categorySelectCount--;
	}
 
 	function setStartTime(){
		start_time = getTime();
 	}
 	
 	function resetStartTime(){
 		start_time = 0;
 	}
 	
 	function getTime(){
 		return new Date().getTime();
 	}
 	
	function showDeleteIcon(e) {
		if (categorySelectCount >= 1) {
			showIcon.call(this);
		} else {
			if (getTime() >= (start_time + getLongPressdelay())) {
				showIcon.call(this);
			}
		}
	}
	
	function clickActivation() {
		$('.active').removeClass('active');
		$(this).addClass('active');
		}
 	
	 	function showIcon(){
 		var deleteicon = $(this).find('.deleteimage');
 		deleteicon.toggleClass('hidden');
 		deleteicon.hasClass('hidden')?categorySelectCount--:categorySelectCount++;
		renderDeleteButton.call(this);
				
	}
	
	function renderDeleteButton()
	 	{
	(categorySelectCount == 1)?($category_delete_button.removeClass('hidden')):((categorySelectCount == 0)?$category_delete_button.addClass('hidden'):"");
	 	}

 	
    return {
        setLongPressdelay: setLongPressdelay,
        addCategory: addCategory,
        deleteCategory:deleteCategory,
    }
})()


/*
*@Project:
*@Author:
*@Date:
*
*@Description:
*
*
*
*@API Available:
*
*
*/
var contacts_module=(function(){
    
    return {
        
    }
})()




/*
*@Project:
*@Author:
*@Date:
*
*@Description:
*
*
*
*@API Available:
*
*
*/
var manipulate_contacts_module=(function(){
    
     {
        
    }
})()