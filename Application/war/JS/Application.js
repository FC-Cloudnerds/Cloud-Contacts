		$(document).ready(function() {
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
           $(this).find('.deleteimage').toggleClass('hidden');
                $(this).closest('.category-panel').find('.button-delete-category').toggleClass('hidden');
        } 
    } );
            
            $('.add-category').on('click','.add-button',function(){
                var ancestor =$(this).closest('.category-panel');
                var value=ancestor.find('.add-category').children('input').val();
                if(value.length > 0)
                    {
                ancestor.find('.add-category').children('input').val("");
                var string=$('<li class="list-group-item"><span class="deleteimage hidden"><img src="../Resource/Image/delete.png" style="width: 7%"></span> '+value+'<span class="badge">0</span></li>')
                ancestor.find('.category-list-group').append(string);
            }
                
            });

        });


    $('.category-panel').on('click','.list-group-item',function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        
    });



/*

<li class="list-group-item active"><span class="deleteimage hidden">
<img src="../Resource/Image/delete.png" style="width: 7%"></span>All<span class="badge">7</span></li>

*/