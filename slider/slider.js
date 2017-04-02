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
	$(window).on('popstate', function(event) {
 		$('.dim').removeClass('overlay');
		$('.over-div').css('visibility','hidden');
		$('.over-div').css('z-index','0');
		$('.slide').bind("click");
	});
});