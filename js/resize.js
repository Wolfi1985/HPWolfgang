function sizeContent() {
  var newHeight = $("html").width()-50 + "px";
	if($("html").width()<1500){
		console.log(newHeight );
	  $(".pSlider").css("width", newHeight); 
	}else{
		$(".pSlider").css("width", '1500px'); 
	}
};