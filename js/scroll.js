$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$('nav a').click(function(e){
		e.preventDefault();
		var sectionID=e.currentTarget.id+"Section";
		console.log(sectionID);
		$("html, body, nav").animate({ 
			scrollTop: $("#"+sectionID).offset().top 
		}, 1000);     
	});
};