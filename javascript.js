

function openSideMenu(){
	document.getElementById('side-menu').style.width = '250px';
	document.getElementById("main").style.marginLeft = '250px';
}


function closeSideMenu(){
	document.getElementById('side-menu').style.width = '0px';
	document.getElementById("main").style.marginLeft = '0px';
}


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


