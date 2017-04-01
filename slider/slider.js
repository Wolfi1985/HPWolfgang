// check if photos are in portrait or landscape format
$( document ).ready(function() {
  	var img = $('.slide');
	var width = $('.slide').width()+5;
  img.each(function() {
    var $this = $(this),
        width = $this.children("img").prop('naturalWidth'),
        height = $this.children("img").prop('naturalHeight');
    if (width < height) {
      $this.children("img").addClass('portrait');
    } else {
      $this.children("img").addClass('landscape');
    }
  })
  
  // set size of pSlider
  $('.pSlider').each(function(){
	  	var numSlides = $(this).children('.slides').children().length;
	  	var thisLen =numSlides*305;
		var $curpSlider = $(this).children('.slides');
	  	$curpSlider.css('width',thisLen);
  });

// slide images on button click
	/*var width=$(".slide").width()+5;
	var animationSpeed=1000;
	var curSlide;
	var numSlides=Math.floor($(".pSlider").width()/width);

	if($(".pSlider").width()%width>=0.5){
		numSlides+=1;
	}
	var pSlideWidth;
	var slidecount=0;
	setSlideNumber();
	$(window).resize(setSlideNumber);
	
	// setting number of slides dynamically
	function setSlideNumber() {
		pSlideWidth=$(".pSlider").width();
		numSlides=Math.floor(pSlideWidth / width);
	};*/
	
		// placing bullets in slide Menu
	/*var $portfolio=$('.portfolio');
	var $slideMenu=$('.portfolio').children().children('.slideMenu');

	$portfolio.each( function(){
    	$('.bRight').before('<ul class="slideNav"></ul>');
	});
	$slideMenu.parent().children('.slides').each(function(){ 
		var len=$(this).children('.slide').length;
		var count=0;	// counter to bind bullet to image
		while(len>=0){
			var selectedItemSrc = $(this).children('.slide').attr('src');
			$(this).parent().children('.slideMenu').children('.slideNav').append('<li class="bullet"></li>');
			len-=1;

		}
	});
	
	function setActiveBullet(){
		$('.portfolio').children().children('.slideMenu').children('.slideNav').each(function(){ 
			console.log($(this).children('.slide'));
				//.addClass('activeBullet');
		});
	};*/
	

		/*var $slideMenu=$('.portfolio').children().children('.slideMenu');
	
		$slideMenu.each(function(){
			var len=$(this).parent().children('.slides').children('.slide').length;
			var start=$(this).data('sc');
			var end;
			start+=1;
			end=start+Math.floor(numSlides);
			$(this).children('.folNr').append('<p>'+start+' bis '+end+' von '+ len + '</p>');
		
		});*/
		
	var start,stop;
	$(".slides").draggable({

		axis: "x",
		start: function(event, ui) {
			$(".slide").unbind("click");
		},
		stop: function(event, ui) {
			 setTimeout(function() {
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
			}, 300);
		},
		drag: function(event, ui){
			var psliderL =$(this).parent().width();
			var maxLeft =$(this).width()*-1+psliderL;
		  	if(ui.position.left < maxLeft ){        
				ui.position.left =maxLeft-5;
			}
			if(ui.position.left>0){
				ui.position.left =0;
			}
    	}
	});

	
	
	// slide to the left
	/*$('.bLeft').on('click',function(){
		curSlide=$(this).parent().data('sc');
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
			if(curSlide<=0){
				$(this).css('visibility','hidden');
			}
		}
		//resetting bullets to left
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
			if(curSlide>=(length-numSlides)){
				$(this).css('visibility','hidden');
			}
		}
		//resetting bullets to right
	});*/
	// overlay on image click
	$('.slide').on('click',function(){
		$('.slide').unbind("click");
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
		$('.slide').bind("click");
	});
});