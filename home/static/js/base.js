$(document).ready(function () {

    $('#headerBOX').show("fade", 1000);

});

///////////////////////////////

// random bitmoji pic in intro //
window.onload = chooseBitmoji;

var myPix = new Array("static/images/bitmoji/1.png","static/images/bitmoji/2.png","static/images/bitmoji/3.png","static/images/bitmoji/4.png","static/images/bitmoji/5.png","static/images/bitmoji/6.png","static/images/bitmoji/7.png","static/images/bitmoji/8.png","static/images/bitmoji/9.png","static/images/bitmoji/10.png","static/images/bitmoji/11.png","static/images/bitmoji/12.png",);

function chooseBitmoji() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("intro_bitmoji").src = myPix[randomNum];
}


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

