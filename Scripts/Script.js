$(document).ready(function(){




	$("#start").click(function(){
		$(".showBox").fadeOut();
        $(".loginBox").slideDown("slow");
    });
    $("#login").click(function(){
    	window.location.replace("Pages/Base.html");
    })




});