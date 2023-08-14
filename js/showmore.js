const butt = document.querySelector('.blog__btn');
const button = document.querySelector('.tags__li');
const but = document.querySelector('.tags__but');
const cards = Array.from(document.querySelectorAll('.blog__column'));
const tags = Array.from(document.querySelectorAll('.tags__link-r'));

function openCatalog(){
	butt.addEventListener("click", (event) => {
		event.preventDefault();
		cards.forEach(item => item.classList.remove('hidden'));
		butt.classList.add('hidden');
	});
	button.addEventListener("click", (event) => {
		event.preventDefault();
		tags.forEach(item => item.classList.remove('hidden'));
		button.classList.add('hidden');
		but.classList.remove('hidden');
	});
	but.addEventListener("click", (event) => {
		event.preventDefault();
		tags.forEach((item, index) => {
			item.classList.add('hidden');
			if(index <= 8){
				item.classList.remove('hidden');
			} else{
				but.classList.remove('hidden');
			}
		});
		but.classList.add('hidden');
	});
}

function response1() {
	if(window.innerWidth >= 1000){
		butt.classList.add('hidden');
		button.classList.add('hidden');
		but.classList.add('hidden');

		cards.forEach((item, index) => {
			item.classList.add('hidden');
			if(index <= 8){
				item.classList.remove('hidden');
			} else{
				butt.classList.remove('hidden');
			}
			openCatalog();
		});

		tags.forEach((item, index) => {
			item.classList.add('hidden');
			if(index <= 8){
				item.classList.remove('hidden');
			} else{
				button.classList.remove('hidden');
			}
			openCatalog();
		});
	}
}
response1();