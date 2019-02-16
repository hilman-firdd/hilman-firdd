$(document).ready(function () {
	// Get the modal
	var modal = document.querySelectorAll('#myModal');
	// Get the button that opens the modal
	var btn = document.querySelectorAll("#myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close");

	// When the user clicks the button, open the modal 
	for (let i = 0; i < btn.length; i++) {
		btn[i].onclick = function () {
			modal[i].style.display = "block";
		}
	}
	// When the user clicks on <span> (x), close the modal
	for (let i = 0; i < btn.length; i++) {
		span[i].onclick = function () {
			modal[i].style.display = "none";
		}
	}


	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		for (let i = 0; i < btn.length; i++) {
			if (event.target == modal[i]) {
				modal[i].style.display = "none";
			}
		}
	}


	$('.page-scroll').on('click', function (event) {
		const hash = (this).hash;

		$('html , body').animate({
			scrollTop: $(hash).offset().top - 51
		}, 1200, 'easeInOutExpo');
	});

});

$(window).scroll(function () {
	const wScroll = $(this).scrollTop();
	$('.gambar').css({
		'transform': 'translate(0px, ' + wScroll / 5 + '%)'
	});
	$('header h2').css({
		'transform': 'translate(0px, ' + wScroll / 0.9 + '%)'
	});
	$('header h4').css({
		'transform': 'translate(0px, ' + wScroll / 3 + 'px)'
	});

	if (wScroll > $('#portfolio').offset().top - 200) {

		$('.portfolio .muncul').each(function (i) {
			// $('portfolio').addClass('.showing');
			setTimeout(function () {
				$('.portfolio .muncul').eq(i).addClass('op');
			}, 300 * (i + 1));
		});
	}

});
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

// let prevScrollpos = window.scrollY;
// window.onscroll = function() {
// 	let currentScrollPos = window.scrollY;
// 	if(prevScrollpos > currentScrollPos){
// 		document.getElementById('navbar-new').style.top = "0px";
// 		document.getElementById('navbar-new').style.transition = "all 0.7s ease-in-out ";
// 	}else{
// 		document.getElementById('navbar-new').style.top = "-50px";
// 		document.getElementById('navbar-new').style.transition = "all 0.7s ease-in-out ";
// 	}
// 	prevScrollpos = currentScrollPos;
// }