//elios file
function initMap() {
	//map options
    var options = {
        zoom: 14,
        center: { lat: 32.0853, lng: 34.7818 }
    }
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //add marker
    var marker= new google.maps.Marker({
    	position:{lat:32.0777, lng: 34.7867},
    	map:map,
    	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
    	content:'<h1>TLV Museum of Art</h1>'
    });

    marker.addListener('click', function(){
    	infoWindow.open(map, marker);
    }); 
}
