function sizeContent() {
  var newHeight = $("html").width()-50 + "";
	if($("html").width()<1500){
	  $(".pSlider").css("width", newHeight); 
	}else{
		$(".pSlider").css("width", '1500'); 
	}
};