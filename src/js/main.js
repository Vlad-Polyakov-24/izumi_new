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
	spaceBetween: 10,
	loop: false,
	autoplay: {
		delay: 500,

	},
	breakpoints: {
		375: {
			slidesPerView: 4,
			spaceBetween: 20,
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
		$('.portfolio__tabs-item').removeClass('portfolio__tabs-item--active');

		$(this).addClass('portfolio__tabs-link--active');
		$($(this).attr('href')).addClass('portfolio__tabs-item--active');
	});

	$('.portfolio__tabs-link:first').click();

	/*fancy*/
	$('[data-fancybox="images"]').fancybox({
		// Options will go here
		loop: false,
	});
	/*=======*/

	/*$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});*/

	$(document).ready(function () {
		$("#header__link, #top__link, #started__link").on("click", "a", function (event) {
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
document.getElementById('name').oninput = function () {
	document.getElementById('name__label').classList.add('name__label-active');
}

document.getElementById('email').oninput = function () {
	document.getElementById('email__label').classList.add('email__label-active');
}

document.getElementById('message').oninput = function () {
	document.getElementById('message__label').classList.add('message__label-active');
}
/*document.getElementById('message').onblur = function () {
	document.getElementById('message__label').classList.remove('message__label-active');
}*/
/*=======*/

/*ANIMATIONS*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
/*=======*/

const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	//настройки, см. API
});



