var toggleShow = function(){
    var element = document.querySelector(".photo-caption");
    element.classList.toggle("photo-caption-show");
}

// check if photos are in portrait or landscape format
$( document ).ready(function() {
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

// placing bullets in slide Menu
$( document ).ready(function() {
	var $portfolio=$('.portfolio');
	var $slideMenu=$('.portfolio').children().children('.slideMenu');

	$portfolio.each( function(){
    	$('.bRight').before('<ul class="slideNav"></ul>');
	});
	$slideMenu.parent().children('.slides').each(function(){ 
		var len=$(this).children('.slide').length;
		while(len>=0){
			$(this).parent().children('.slideMenu').children('.slideNav').append('<li class="bullet"></li>');
			len-=1;
		}
	});
});

// slide images on button click
$( document ).ready(function() {
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
	// slide to the right
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
	// overlay on image click
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
	// on second click set to background
	$('.over-div').on('click',function(){
		$('.dim').removeClass('overlay');
		$('.over-div').css('visibility','hidden');
		$('.over-div').css('z-index','0');
	});
});