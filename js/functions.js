/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

function showTestimonial(item){
  if(item != " "){
    for(var i = 1; i <= 3; i++){
      document.getElementById(i).style.display = "none";
    }
    document.getElementById(item).style.display = "block";
    document.getElementById("icon"+item).style.transform = "scale(1)";
    document.getElementById("icon"+item).style.opacity: = 1;
  }
}

$("#headContainer").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 2000);
});
