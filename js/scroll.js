$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$('nav a').click(function(e){
		e.preventDefault();
		var sectionID=e.currentTarget.id+"Section";
		$("#"+e.currentTarget.id).parents().children().removeClass('active');
		console.log($("#"+e.currentTarget.id));
		$("html, body, nav").animate({ 
			scrollTop: $("#"+sectionID).offset().top 
		}, 1000);  
		$("#"+e.currentTarget.id).addClass('active');
	});
};