

function openSideMenu(){
	document.getElementById('side-menu').style.width = '250px';
	document.getElementById("main").style.marginLeft = '250px';
}


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

	function slideLeft(){
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
	}

	function slideRight(){
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++;
	}

	arrowLeft.addEventListener('click', function(){
		if(current === 0){
			current = sliderImages.length;
		}
		slideLeft();
	});

	arrowRight.addEventListener('click', function(){
		if(current === sliderImages.length - 1){
			current = - 1
		}
		slideRight();
	});


	function startSlide(){
		reset();
		sliderImages[0].style.display = 'block';

	}	

	startSlide();




