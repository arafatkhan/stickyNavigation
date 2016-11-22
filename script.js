jQuery(document).ready(function(){
   
    
 touchit = $('nav').offset().top;
        
});
        
 jQuery(document).scroll(function(){
     
    var scrollamount = $(document).scrollTop();
   if(scrollamount >= touchit){

       $('nav').addClass('fixed_matter');
       $('fixed_matter').wrap('<div class="nav"></div>');
     
       
   }else{
       $('nav').removeClass('fixed_matter');
   }
});

jQuery(document).ready(function(){
    
   jQuery('.menu-triger').click(function(){
       jQuery("nav").slideToggle(400,function(){
           
           jQuery(this).toggleClass('nav-expanded').css('display','');
       });
       
   }); 
    
    
});

//click and hide the article
jQuery(document).ready(function(){
    jQuery('.ui-massage').append('<span class="ui-cross">x</span>');
    
    jQuery(".ui-cross").click(function(){
        jQuery(this).parent('.ui-massage').fadeOut();
        
    });
  
    
});

// toggle answer
jQuery(document).ready(function(){
    jQuery('.answer').hide();
    jQuery('.ques').click(function(){
        jQuery(this).next().slideToggle();
        
    });
    
});







