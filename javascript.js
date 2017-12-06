

var handle = document.querySelector('.handle');

var menu = document.querySelector('.menu');

var close = document.querySelector('.close');

handle.addEventListener('click', function(){
	menu.className += ' show';
})

close.addEventListener('click', function(){
	menu.className = ' menu';
})

