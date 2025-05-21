import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP } from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
    openSelectOption();
    countUpInit();
    buttonToTop();
    disableLink();
});

function disableLink() {
    const links = $('section a');
    links.on('click', function(e) {
        e.preventDefault();
    })
}

function openSelectOptions () {
	const selectOptions = $('.form-select-primary')
	selectOptions.on('click', function () {
		$(this).toggleClass('active')
	})
	detectCloseElement('.form-select-primary', '.arrow', function () {
		selectOptions.removeClass('active')
	})
}


/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
