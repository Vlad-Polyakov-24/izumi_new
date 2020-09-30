import $ from 'jquery';
window.$ = $;
window.jquery = $;
window.jQuery = $;

require('@fancyapps/fancybox');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

require('hystmodal/dist/hystmodal.min.css');
require('hystmodal/dist/hystmodal.min.js');

/*HEADER*/
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 620) $(".header").removeClass('header-scroll');
	else $(".header").addClass('header-scroll');
});
/*=======*/

/*SWIPER*/
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);
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
const swiper_2 = new Swiper('.swiper-container--clients', {
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
/*TABS-JS*/
/*document.querySelectorAll('.tabs__link').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs__link').forEach(
			(child) => child.classList.remove('tabs__link-active')
		);
		document.querySelectorAll('.tabs__item').forEach(
			(child) => child.classList.remove('tabs__item-active')
		);

		item.classList.add('tabs__link-active');
		document.getElementById(id).classList.add('tabs__item-active');
	})
);
document.querySelector('.tabs__link').click();*/
/*=======*/
/*TABS-SERVICES*/
$(document).ready(function () {
	$('.tabs__link').click(function (e) {
		e.preventDefault();

		$('.tabs__link').removeClass('tabs__link-active');
		$('.tabs__item').removeClass('tabs__item-active');

		$(this).addClass('tabs__link-active');
		$($(this).attr('href')).addClass('tabs__item-active');
	});

	$('.tabs__link:first').click();
});
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

	/*fancy*/
	$('[data-fancybox="images"]').fancybox({
		// Options will go here
		loop: false,
	});
	/*=======*/

	$(document).ready(function () {
		$("#header__link, #top__link, #started__link, #price__link").on("click", "a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});
});
/*=======*/
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
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 600, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
/*=======*/

/*POPUP*/
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	//настройки, см. API
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

