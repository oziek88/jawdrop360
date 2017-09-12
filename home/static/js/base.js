$(document).ready(function () {

	if (window.innerWidth < 850) {
		$("#headerBOX").css("width", "100%" );
	    $("#rightPage").css({"background-position": "0px 0px", "width": "100%", "border-left": "0px"});
	    $("#leftPage").css("width", "100%" );
	    $("#jawdropList").css("padding-top", "0px" );
	    $('#link2wedding').show();
	}

	$('#link2homeDemo').click(function() {
   		$('#leftPage').animate({
        	scrollTop: $("#homeDemo").offset().top -260
    	}, 2000);
	});

	$('#link2homeProcess').click(function() {
   		$('#leftPage').animate({
        	scrollTop: $("#homeProcess").offset().top -260
    	}, 2000);
	});

	$('#link2homeContact').click(function() {
   		$('#leftPage').animate({
        	scrollTop: $("#homeContact").offset().top -260
    	}, 2000);
	});

	$('#link2Contact').click(function() {
   		$('#leftPage').animate({
        	scrollTop: $("#homeContact").offset().top 
    	}, 2000);
	});

	$('#link2wedding').click(function() {
   		$('html, body').animate({
        	scrollTop: $("#rightPage").offset().top
    	}, 2000);
	});

});

window.onresize = function() {
	if (window.innerWidth < 850) {
		$("#headerBOX").css("width", "100%" );
	    $("#rightPage").css({"background-position": "0px 0px", "width": "100%", "border-left": "0px"});
	    $("#leftPage").css("width", "100%" );
	    $("#jawdropList").css("padding-top", "0px" );
	    $('#link2wedding').show("fade", 200); 
	} else {
		$("#headerBOX").css("width", "calc(50% - 4px)" );
	    $("#rightPage").css({"background-position": "350px 0px", "width": "50%", "border-left": "4px"});
	    $("#leftPage").css("width", "50%" );
	    $("#jawdropList").css("padding-top", "5px" );
	    $('#link2wedding').hide("fade", 200);
	}
};

///////////////////////////////

// random bitmoji pic in intro //
// window.onload = chooseBitmoji;

// var myPix = new Array("static/images/bitmoji/1.png","static/images/bitmoji/2.png","static/images/bitmoji/3.png","static/images/bitmoji/4.png","static/images/bitmoji/5.png","static/images/bitmoji/6.png","static/images/bitmoji/7.png","static/images/bitmoji/8.png","static/images/bitmoji/9.png","static/images/bitmoji/10.png","static/images/bitmoji/11.png","static/images/bitmoji/12.png",);

// function chooseBitmoji() {
//      var randomNum = Math.floor(Math.random() * myPix.length);
//      document.getElementById("intro_bitmoji").src = myPix[randomNum];
// }


/////////////////////////


// function map_init_basic (map, options) {

//   var pin = L.icon({
//         iconUrl: 'http://www.haipic.com/icon/30660/30660.png',
//         iconSize: [30, 30], // size of the icon
//   });


//   var bigHouse = L.marker([37.8310, -79.5620], {icon: pin}).addTo(map);
//   bigHouse.bindPopup(L.popup().setContent('<iframe width="250" height="250" src="https://www.youtube.com/embed/8DSdWSNYzYY" frameborder="0" allowfullscreen></iframe>'));

//   var Lazlos = L.marker([38.2673, -77.4524], {icon: pin}).addTo(map);
//   Lazlos.bindPopup(L.popup().setContent('<iframe width="250" height="250" src="https://www.youtube.com/embed/v0WI2N2ISkI" frameborder="0" allowfullscreen></iframe>'));


// }

