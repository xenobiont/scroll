const $ = window.$;

const scrollButton = $('#scroll-btn');

$(window).scroll(function() {
	/* Более простое решение (кнопка появляется при первом скролле) */
	// const offsetTop = $(window).scrollTop();

	// if (offsetTop > 0) {
	//   scrollButton.fadeIn(200);
	// } else {
	//   scrollButton.fadeOut(200);
	// }

	/* Более сложное решение (кнопка появляется после прокрутки первого окна) */
	console.log($(window).height());
	const windowHeight = $(window).height();
	const windowOffsetTop = $(window).scrollTop();

	if (windowOffsetTop > windowHeight) {
		scrollButton.fadeIn(200);
	} else {
		scrollButton.fadeOut(200);
	}
});

scrollButton.click(function() {
	$(document.scrollingElement).animate({ scrollTop: 0 }, 400);
});
