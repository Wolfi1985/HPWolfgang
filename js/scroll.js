$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$('nav a').click(function(e){
		e.preventDefault();
		var sectionID=e.currentTarget.id+"Section";
		$("#"+e.currentTarget.id).parents().children().removeClass('active');
		$("html, body, nav").animate({ 
			scrollTop: $("#"+sectionID).offset().top 
		}, 1000);  
		$("#"+e.currentTarget.id).addClass('active');
	});
	
	$(window).scroll(function(){
		var top=$('#homeSection').height();
		//var about=$('#aboutSection').height();
		var portfolio=$('#portfolioSection').height();
		var position=document.body.scrollTop;
		
		if (position <top-5) {
			$("#home").parents().children().removeClass('active');
			$('#home').addClass('active');
		} else if(position >=top && position <(top+portfolio)) {
			$("#portfolio").parents().children().removeClass('active');
			$('#portfolio').addClass('active');

		}
		/*else if(position >=(top+portfolio-about)){
			$("#about").parents().children().removeClass('active');
			$('#about').addClass('active');

		}*/
	});
};