var link = document.querySelector('.login');
var popup = document.querySelector('.modal_content');
var close = popup.querySelector('.modal_content_close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var linkMap = document.querySelector('.js_open_map');
var popupMap = document.querySelector('.modal_content_map');
var closeMap = popupMap.querySelector('.modal_content_close');

link.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.add('modal_content_show');
	login.focus();
});


close.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.remove('modal_content_show');
	popup.classList.remove('modal_error');
});

form.addEventListener('submit', function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add('modal_error');
	} else {
		localStorage.setItem('login', login.value);
	}
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains('modal_content_show')) {
			popup.classList.remove('modal_content_show');
			popup.classList.remove('modal_error');
		}
	}
});

linkMap.addEventListener('click', function(event) {
	event.preventDefault();
	popupMap.classList.add('modal_content_show');
});

closeMap.addEventListener('click', function(event) {
	event.preventDefault();
	popupMap.classList.remove('modal_content_show');
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (popupMap.classList.contains('modal_content_show')) {
			popupMap.classList.remove('modal_content_show');
		}
	}
});
