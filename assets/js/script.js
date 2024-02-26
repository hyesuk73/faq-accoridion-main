window.addEventListener("DOMContentLoaded", (event) => {
	const faqItems = document.querySelectorAll('.faq-container__item');

	faqItems.forEach(item => {
		item.addEventListener('click', function(){
			isActive = this.classList.contains('is-active');

			faqItems.forEach(element => {
				element.classList.remove('is-active');
			});
			if(!isActive) {
				this.classList.add('is-active');
			}
		});
	});
});