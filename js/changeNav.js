var curCount; // maximum number of images in slider
var max=8;	// maximum number of images in slider
$(function () {
    $('.clickMe').click(function () {
        var str = $(this).text();

		if( $(this).is('.active') ) {
        	$(this).removeClass( "active" );
    	}
		else {
			$( "li.active" ).removeClass( "active" );
			$(this).addClass( "active" );
			
			var text=$(this).text();
			switch(text){
				case 'Home':initHome();break;
				case 'Portfolio':initPortfolio();break;
				case 'Blog':initBlog();break;
				case 'About':initAbout();break;
				case 'Contact':initContact();break;
			}

		}
		$('body').removeClass('Home Portfolio Blog About Contact').addClass($(this).text());
    });
});
function initHome(){
	curCount=0;
	$('main').append( "<div id='headline'><h2>Wolfgang|Heindl</h2><h3>Photography</h3></div>");
	$('main').append("<div class='leftArrow slider'></div><div class='rightArrow slider'></div>");
	$('main').css("background-image", "url('img/BarcelonaTrip/"+curCount+".jpg')");  
	initPortfolio();
};
function initPortfolio(){
	for(var i=0;i<4;i++){
		$('#fcbarcelona'+i).css("background-image", "url('img/fcbarcelona/fcbarcelona"+i+".jpg')"); 
		$('#barcelona2017'+i).css("background-image", "url('img/barcelona2017/barcelona2017"+i+".jpg')"); 
	}
}
$(function slider() {
    $('.slider').click(function () {
		if( $(this).is('.leftArrow') ) {
			curCount-=1;
			if(curCount<0){
				curCount=max;
			}
		}else{
			curCount+=1;
			if(curCount>max){
				curCount=0;
			}
		}
		$('main').css("background-image", "url('img/BarcelonaTrip/"+curCount+".jpg')");  
    });
});
