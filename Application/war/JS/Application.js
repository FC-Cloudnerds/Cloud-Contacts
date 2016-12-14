		$(document).ready(function() {
			alert("load over");
			var categorySelectCount = 0;
			var contactSelectCount =0;
			
			        // how many milliseconds is a long press?
    var longpress = 300;
    // holds the start time
    var start;

			$('.category-panel').on('mousedown','.list-group-item',function(e){
        start = new Date().getTime();
    } );

			$('.category-panel').on('mouseleave','.list-group-item',function(e){
        start = 0;
    } );

			
			$('.category-panel').on('mouseup','.list-group-item',function(e){
				
        if ( new Date().getTime() >= ( start + longpress )  ) {
        	var hasclasscategory = $(this).hasClass('category');
        	var deleteimage = $(this).find('.deleteimage');
        	deleteimage.toggleClass('hidden');
           if(deleteimage.hasClass('hidden'))
        	   {
        	   alert("hidden added");
        	   if(hasclasscategory)
        		   {
        		   alert("has category");

        	   categorySelectCount = categorySelectCount - 1;
        	   alert(categorySelectCount);
        		   }
        	   else
        		   {
        		   alert("doesn't has category");
        		   contactSelectCount = contactSelectCount - 1;
        		   alert(contactSelectCount);
        		   }
        	   }
           else
        	   {
        	   alert("hidden removed");

        	   if($(this).hasClass('category'))
        		   {
        		   alert("has category");
        	   categorySelectCount = categorySelectCount + 1;
        	   alert(categorySelectCount);
        		   }
        	   else
        		   {
        		   alert("doen't category");
        		   contactSelectCount = contactSelectCount + 1;
        		   alert(contactSelectCount);
        		   }
        	   }
           if(hasclasscategory)
           {
           if(categorySelectCount == 1)
        	   {
        	  
        	   $(this).closest('.category-panel').find('.button-delete-category').removeClass('hidden');
        	  alert("inside categorySelectCount ==1 ");
        	   }
           else if(categorySelectCount == 0 )
        	   {
        	   $(this).closest('.category-panel').find('.button-delete-category').addClass('hidden');
        	   alert("inside categorySelectCount == 0");
        	   }
           }
            
           else
        	  {
        	   if (contactSelectCount == 1 )
        	   {
        	   $(this).closest('.category-panel').find('.button-delete-category').removeClass('hidden');
        	   alert("inside contactSelectCount ==1 ");
        	   }
           else if (contactSelectCount == 0)
        	   {
        	   $(this).closest('.category-panel').find('.button-delete-category').addClass('hidden');
        	   alert("inside contactSelectCount ==0 ");
        	   }
        	  }
        
        } 
    } );
			
			
            
            $('.add-category').on('click','.add-button',function(){
                var ancestor =$(this).closest('.category-panel');
                var value=ancestor.find('.add-category').children('input').val();
                if(value.length > 0)
                    {
                ancestor.find('.add-category').children('input').val("");
                var string=$('<li class="list-group-item category"><span class="deleteimage hidden"><img src="../Resource/Image/delete.png" style="width: 7%"></span> '+value+'<span class="badge">0</span></li>')
                ancestor.find('.category-list-group').append(string);
            }
                
            });

        });


    $('.category-panel').on('click','.list-group-item',function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        
    });

    	$('#submit').click(function(){
    		alert("submit clicked");
    		
    		var oldpassword = $('#oldpassword').val();
    		var newpassword = $('#newpassword').val();
    		var newrepassword= $('#newrepassword').val();
    		alert("var " + oldpassword );
    		$.ajax({
    			type: "POST",
    			url: "changepassword",
    			data: "passoldpassword=" + oldpassword + 
    				  "&passnewpassword=" + newpassword +
    				  "&passnewrepassword=" + newrepassword ,
    			success: function(datas){
    				alert(datas);
    			},
    			error: function(e){
    				alert("error message");
    			}
    			
    		});
    		
    	});


/*

<li class="list-group-item active"><span class="deleteimage hidden">
<img src="../Resource/Image/delete.png" style="width: 7%"></span>All<span class="badge">7</span></li>

*/