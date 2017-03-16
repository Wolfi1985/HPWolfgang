var toggleShow = function(){
    var element = document.querySelector(".photo-caption");
    element.classList.toggle("photo-caption-show");
}

$(function() {
  var img = $('.slide');
  img.each(function() {
    var $this = $(this),
        width = $this.children("img").prop('naturalWidth'),
        height = $this.children("img").prop('naturalHeight');
    if (width < height) {
      $this.children("img").addClass('portrait');
    } else {
      $this.children("img").addClass('landscape');
    }
  });
});



$(function(){
	var width=305;
	var animationSpeed=1000;
	var curSlide;
	var numSlides=5;
	
	

	// slide to the left
	$('.bLeft').on('click',function(){
		curSlide=$(this).parent().data('sc');
		console.log("jetzt:"+curSlide);
		var $slider=$(this).parent().parent();
		var $slidercontainer = $slider.children('.slides');
		var $slides = $slidercontainer.children();
		
		var length =$slides.length;
		totalLength=length*width;
		$slidercontainer.width(totalLength);
		
		if(curSlide<=0){
		}else{
			$(this).parent().children('.bRight').css('visibility','visible');
			$slidercontainer.animate({'margin-left':'+='+width},animationSpeed);
			$(this).parent().data('sc',curSlide-=1);
			console.log(curSlide);
			if(curSlide<=0){
				$(this).css('visibility','hidden');
			}
		}
		
	});
	
	$('.bRight').on('click',function(){
		curSlide=$(this).parent().data('sc');
		var $slider=$(this).parent().parent();
		var $slidercontainer = $slider.children('.slides');
		var $slides = $slidercontainer.children();
		
		var length =$slides.length;
		totalLength=length*width;
		$slidercontainer.width(totalLength);
		
			
		if(curSlide>=(length-numSlides)){
		}else{
			$(this).parent().children('.bLeft').css('visibility','visible');
			$slidercontainer.animate({'margin-left':'-='+width},animationSpeed);
			$(this).parent().data('sc',curSlide+=1);
			console.log(curSlide);
			if(curSlide>=(length-numSlides)){
				$(this).css('visibility','hidden');
			}
		}
	});
	$('.slide').on('click',function(){
		$('.dim').addClass('overlay');
		$('.over-div').css('visibility','visible');
		$('.over-div').css('z-index','10');

		var image = document.createElement("IMG");
		image.alt = "Image not able to be loaded"
		image.setAttribute('class', 'photo');
		image.src=$(this).children("img").attr("src");
		$('.over-div').html(image);
		
		var $this = $('.over-div'),
        width = $this.children("img").prop('naturalWidth'),
        height = $this.children("img").prop('naturalHeight');
    	if (width < height) {
      		$this.children("img").addClass('portrait');
			$this.css('margin-top','-480px');
    	} else {
			$this.children("img").addClass('landscape');
			$this.css('margin-top','-270px');
    	}
	});
	
	$('.over-div').on('click',function(){
		$('.dim').removeClass('overlay');
		$('.over-div').css('visibility','hidden');
		$('.over-div').css('z-index','0');
	});
});