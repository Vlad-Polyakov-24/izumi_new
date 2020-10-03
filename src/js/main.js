import $ from 'jquery';
window.$ = $;
window.jquery = $;
window.jQuery = $;

require('@fancyapps/fancybox');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

require('hystmodal/dist/hystmodal.min.css');
require('hystmodal/dist/hystmodal.min.js');

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import objectFitImages from 'object-fit-images';



/*HEADER*/
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 620) $(".header").removeClass('header-scroll');
	else $(".header").addClass('header-scroll');
});
/*=======*/

/*SWIPER*/

/*PROJECT*/
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	loop: false,
	spaceBetween: 10,
	autoplay: {
		delay: 500,
	},
	breakpoints: {
		375: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 8,
		},
	},
});
/*=======*/

/*CLIENTS*/
const swiper_2 = new Swiper('.swiper-container__clients', {
	slidesPerView: 1,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
});
/*=======*/
/*=======*/

/*TABS*/
/*TABS-SERVICES*/
function servicesTabs() {
	let btnList = document.getElementsByClassName('tabs__list-btn-item');
	let contentList = document.getElementsByClassName('tabs__item');

	for (let i = 0; i < btnList.length; i++) {

		function hideTabs() {
			for (let i = 0; i < contentList.length; i++) {
				btnList[i].classList.remove('tabs__list-btn-item--active');
				contentList[i].classList.remove('tabs__item--active');
			}
		}

		function showTabs() {
			btnList[i].classList.add('tabs__list-btn-item--active');
			contentList[i].classList.add('tabs__item--active');
		}
		for (let i = 0; i < contentList.length; i++) {
			btnList[i].classList.remove('tabs__list-btn-item--active');
			contentList[i].classList.remove('tabs__item--active');
		}
		btnList[0].classList.add('tabs__list-btn-item--active');
		contentList[0].classList.add('tabs__item--active');
		btnList[i].addEventListener('click', (event) => {
			event.preventDefault();
			hideTabs();
			showTabs();
		});

	}
}

servicesTabs();
/*=======*/

/*TABS-PORTFOLIO-JS*/
/* function portfolioTabs() {
	let btnPortfolioList = document.getElementsByClassName('portfolio__tabs-link');
	let contentPortfolioList = document.getElementsByClassName('portfolio__item');

	for (let i = 0; i < btnPortfolioList.length; i++) {

		function hidePortfolioTabs() {
			for (let i = 0; i < contentPortfolioList.length; i++) {
				btnPortfolioList[i].classList.remove('portfolio__tabs-link--active');
				contentPortfolioList[i].classList.remove('portfolio__item--active');
			}
		}

		function showPortfolioTabs() {
			btnPortfolioList[i].classList.add('portfolio__tabs-link--active');
			contentPortfolioList[i].classList.add('portfolio__item--active');
		}
		for (let i = 0; i < contentPortfolioList.length; i++) {
			btnPortfolioList[i].classList.remove('portfolio__tabs-link--active');
			contentPortfolioList[i].classList.remove('portfolio__item--active');
		}
		btnPortfolioList[0].classList.add('portfolio__tabs-link--active');
		contentPortfolioList[0].classList.add('portfolio__item--active');
		btnPortfolioList[i].addEventListener('click', (event) => {
			event.preventDefault();
			hidePortfolioTabs();
			showPortfolioTabs();
		});

	}
}

portfolioTabs(); */
/*=======*/

/*TABS-PORTFOLIO*/
$(document).ready(function () {
	$('.portfolio__tabs-link').click(function (e) {
		e.preventDefault();

		$('.portfolio__tabs-link').removeClass('portfolio__tabs-link--active');
		$('.portfolio__list').removeClass('portfolio__list--active');

		$(this).addClass('portfolio__tabs-link--active');
		$($(this).attr('href')).addClass('portfolio__list--active');
	});

	$('.portfolio__tabs-link:first').click();
	/*=======*/

	/*fancy*/
	$('[data-fancybox="images"]').fancybox({
		// Options will go here
		loop: false,
	});
	/*=======*/

	/*SCROLL*/
	$(document).ready(function () {
		$("#header__link, #top__link, #started__link, #price__link, #footer__link").on("click", "a", function (event) {

			event.preventDefault();

			var id = $(this).attr('href'),

				top = $(id).offset().top;

			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});
});
/*=======*/

/*CONTACTS*/
let input = document.querySelectorAll('.input');
for (let i = 0; i < input.length; i++) {
	input[i].addEventListener('focus', function () {

		input[i].parentElement.classList.add('active');

	});
	input[i].addEventListener('blur', function () {

		if (input[i].value === '') {
			input[i].parentElement.classList.remove('active');
		}

	});
}
/*=======*/

/*ANIMATIONS*/
AOS.init({
	disable: false,
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,

	offset: 120,
	delay: 0,
	duration: 600,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom',

});
/*=======*/

/*POPUP*/
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
});
/*=======*/

/*PARALAX*/
function parallax() {
	let parallax = document.querySelectorAll('.parallax');

	window.addEventListener('scroll', setTransformValue);

	window.addEventListener('load', setTransformValue);

	function setTransformValue() {
		if (window.innerWidth < 769) return;
		for (let i = 0; i < parallax.length; i++) {
			parallax[i].style.transform = `translateY(${-(parallax[i].getBoundingClientRect().top / 2)}px)`;
		}
	}
}

parallax();
/*=======*/

objectFitImages();