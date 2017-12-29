
//open side menu
function openSideMenu(){
	document.getElementById('side-menu').style.width = '250px';
	document.getElementById("main").style.marginLeft = '250px';
}

//close side menu
function closeSideMenu(){
	document.getElementById('side-menu').style.width = '0px';
	document.getElementById("main").style.marginLeft = '0px';
}


//glider

document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let toplayer = wrapper.querySelector('.top');
	let glider = wrapper.querySelector('.glider');
	let skew = 0;
	let delta = 0;

	if(wrapper.className.indexOf('skewed') != -1){
		skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;
		glider.style.left = e.clientX + delta + 'px';

		toplayer.style.width = e.clientX + skew + delta + 'px';
	});

});

//slideshow
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

	//clears images 
	function reset(){
		for(let i = 0; i < sliderImages.length; i++){
			sliderImages[i].style.display = 'none';
		}
	}

//moves to next image
	function slideLeft(){
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
	}

//moves to prev image
	function slideRight(){
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++;
	}

//givent left arrow a function
	arrowLeft.addEventListener('click', function(){
		if(current === 0){
			current = sliderImages.length;
		}
		slideLeft();
	});

//giving right arrow a function
	arrowRight.addEventListener('click', function(){
		if(current === sliderImages.length - 1){
			current = - 1
		}
		slideRight();
	});

//setting default image
	function startSlide(){
		reset();
		sliderImages[0].style.display = 'block';

	}	

	startSlide();

//adding google maps
function initMap(){
	var options = {
		zoom: 12,
		center:{lat:52.6369,lng:-1.1398}
	}
//creating new map
	var map = new google.maps.Map(document.getElementById('map'), options);

//adding location marker
	var marker = new google.maps.Marker({
        position:{lat:52.6298,lng:-1.1394},
        map: map,
        title: 'Click for more detials'
    });
//information window
    var infoWindow = new google.maps.InfoWindow({
    	content: '<div style = "height: 150px; width: 300px"><h1>AC AUTOMOTIVE</h1><h2>Opening Times</h2><p>Monday - Friday: 9AM - 5PM</p><p>Saturday: 9AM - 2PM</p><p>Sunday: Closed</p></div>'

    });
//window opens when clicked
    marker.addListener('click', function(){
    	infoWindow.open(map, marker);
    });

    
}




