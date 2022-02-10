
function setStorage(variable, value1){
	localStorage.setItem(variable, value1);
}

function getStorage(variable){
	return localStorage.getItem(variable);
}

function pageLocation(pageName){
	return window.location.pathname.includes(pageName);
}

$(document).ready(function(){

	// when navbar mobile button clicked
	
	$('.mobile').click(function(){
		$('.blackMask').toggleClass('blackMask-e');
		$('.sideBar').toggleClass('show');
	});
	
	// when black mask clicked
	
	$('.blackMask').click(function(){
		$('.blackMask').toggleClass('blackMask-e');
		$('.sideBar').removeClass('show');
	});
	
	// when the view-port size changing
	
	$(window).resize(function(){
		var width = $(window).width(); // x
		var height = $(window).height(); // y
		
		if($(window).width() >= 768){
			$('.sideBar').removeClass('show'); // hide sidebar
			$('.blackMask').removeClass('blackMask-e'); // hide blackmask
		}
	});

});
