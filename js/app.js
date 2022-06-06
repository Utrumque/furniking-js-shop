const headerDropdown = document.querySelector('.header__dropdown')
const headerDropdownBtn = document.querySelector('.header__dropdown-btn')
const headerDropdownItems = document.querySelector('.header__dropdown-items')
const headerDropdownItem = document.querySelectorAll('.header__dropdown-item')
const headerDropdownInput = document.querySelector('.header__dropdown-input')
const topProductsItem = document.querySelector('.topProductsItem')
const newArrivalsItem = document.querySelector('.newArrivalsItem')
const bestSellersItem = document.querySelector('.bestSellersItem')
const trendingBtns = document.querySelector('.trending__buttons')
const topProductsBtn = document.querySelector('.topProductsBtn')
const newArrivalsBtn = document.querySelector('.newArrivalsBtn')
const bestSellersBtn = document.querySelector('.bestSellersBtn')
const cart = document.querySelector('.cart')
const cartItems = document.querySelector('.cart__items');
const product = document.querySelector('.trending__product');
const basketBtn = document.querySelector('.basketBtn')
const basketBtnCount = document.querySelector('.basketBtn__count')

// Открыть/Закрыть 
headerDropdownBtn.addEventListener('click', () => {
	headerDropdownItems.classList.add('header__dropdown-items--visible');
});

// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
headerDropdownItem.forEach(function (e) {
	e.addEventListener('click', function (e) {
		e.stopPropagation();
		headerDropdownBtn.innerText = this.innerText;
		headerDropdownInput.value = this.dataset.value;
		headerDropdownItems.classList.remove('header__dropdown-items--visible');
	})
})

// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', (e) => {
	if (e.target !== headerDropdownBtn) {
		headerDropdownItems.classList.remove('header__dropdown-items--visible');
	}
});

//Слайдер в блоке .slider
const swiperFirst = new Swiper('.swiperFirst', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

//Слайдер в блоке .trending
const swiperSecond = new Swiper('.swiperSecond', {
	allowTouchMove: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<svg class="' + className + '" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/	2000/svg"><path d="M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.91345 7.4078C0.0051994 9.60051 -0.23244 12.0133 0.230582 14.3411C0.693604 16.6688 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9964 8.81851 22.7309 5.76838 20.4813 3.51873C18.2316 1.26908 15.1815 0.00362976 12 0ZM12 20.5714C10.3047 20.5714 8.64753 20.0687 7.23797 19.1269C5.82841 18.185 4.72979 16.8464 4.08104 15.2801C3.43229 13.7139 3.26254 11.9905 3.59327 10.3278C3.924 8.6651 4.74035 7.13782 5.93909 5.93908C7.13782 4.74035 8.6651 3.924 10.3278 3.59327C11.9905 3.26254 13.7139 3.43228 15.2801 4.08103C16.8464 4.72978 18.185 5.8284 19.1269 7.23797C20.0687 8.64753 20.5714 10.3047 20.5714 12C20.5687 14.2724 19.6648 16.451 18.0579 18.0579C16.451 19.6648 14.2724 20.5687 12 20.5714Z" id="greenColor" fill="#CCCCCC"/><circle id="greenColor" cx="12" cy="12" r="4" fill="#CCCCCC"/></svg>';
		},
	},
});

//Смена слайдер-свайперов в .trending
trendingBtns.addEventListener('click', function (btn) {
	for (let i = 0; i < trendingBtns.children.length; i++) {
		trendingBtns.children[i].classList.remove('trending__button--active')
	}
	btn.target.classList.add('trending__button--active')
	//Смена категорий
	if (bestSellersBtn.classList.contains('trending__button--active')) {
		topProductsItem.style.display = 'none'
		newArrivalsItem.style.display = 'none'
		bestSellersItem.style.display = 'block'
	} else if (newArrivalsBtn.classList.contains('trending__button--active')) {
		topProductsItem.style.display = 'none'
		newArrivalsItem.style.display = 'block'
		bestSellersItem.style.display = 'none'
	} else if (topProductsBtn.classList.contains('trending__button--active')) {
		topProductsItem.style.display = 'block'
		newArrivalsItem.style.display = 'none'
		bestSellersItem.style.display = 'none'
	}
})


//Слайдер в блоке .trending
const swiperThird = new Swiper('.swiperThird', {
	allowTouchMove: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Слайдер в блоке .review
const swiperFourth = new Swiper('.swiperFourth', {
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//Обратный счет в .special
class CountdownTimer {
  constructor(deadline, cbChange, cbComplete) {
    this._deadline = deadline;
    this._cbChange = cbChange;
    this._cbComplete = cbComplete;
    this._timerId = null;
    this._out = {
      days: '', hours: '', minutes: '', seconds: '',
      daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
    };
    this._start();
  }
  static declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  _start() {
    this._calc();
    this._timerId = setInterval(this._calc.bind(this), 1000);
  }
  _calc() {
    const diff = this._deadline - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    this._out.days = days < 10 ? '0' + days : days;
    this._out.hours = hours < 10 ? '0' + hours : hours;
    this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
    this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
    this._out.daysTitle = CountdownTimer.declensionNum(days, ['days', 'days', 'days']);
    this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['hours', 'hours', 'hours']);
    this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['mins', 'mins', 'mins']);
    this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['secs', 'secs', 'secs']);
    this._cbChange ? this._cbChange(this._out) : null;
    if (diff <= 0) {
      clearInterval(this._timerId);
      this._cbComplete ? this._cbComplete() : null;
    }
  }
}
// 1. Получим элементы в которые нужно вывести оставшееся количество дней, часов, минут и секунд
const elDays1 = document.querySelector('.timer-1 .special__timer-days');
const elHours1 = document.querySelector('.timer-1 .special__timer-hours');
const elMinutes1 = document.querySelector('.timer-1 .special__timer-mins');
const elSeconds1 = document.querySelector('.timer-1 .special__timer-secs');

// 2. Установим время, например, на одну минуту от текущей даты
const deadline1 = new Date(Date.now() + ((60 * 1000 + 999)*1)); //99320 нужное колво минут с текущего дня

// 3. Создадим новый объект, используя new CountdownTimer()
new CountdownTimer(deadline1, (timer) => {
  elDays1.textContent = timer.days;
  elHours1.textContent = timer.hours;
  elMinutes1.textContent = timer.minutes;
  elSeconds1.textContent = timer.seconds;
  elDays1.dataset.title = timer.daysTitle;
  elHours1.dataset.title = timer.hoursTitle;
  elMinutes1.dataset.title = timer.minutesTitle;
  elSeconds1.dataset.title = timer.secondsTitle;
}, () => {
	document.querySelector('.cart__timer-inners').style.display = "none";
	document.querySelector('.timer-1 .timer__result').textContent = 'Time is over!';
});

// 1. Получим элементы в которые нужно вывести оставшееся количество дней, часов, минут и секунд
const elDays2 = document.querySelector('.timer-2 .special__timer-days');
const elHours2 = document.querySelector('.timer-2 .special__timer-hours');
const elMinutes2 = document.querySelector('.timer-2 .special__timer-mins');
const elSeconds2 = document.querySelector('.timer-2 .special__timer-secs');

// 2. Установим время, например, на одну минуту от текущей даты
const deadline2 = new Date(Date.now() + ((60 * 1000 + 999)*99320)); //99320 нужное колво минут с текущего дня

// 3. Создадим новый объект, используя new CountdownTimer()
new CountdownTimer(deadline2, (timer) => {
  elDays2.textContent = timer.days;
  elHours2.textContent = timer.hours;
  elMinutes2.textContent = timer.minutes;
  elSeconds2.textContent = timer.seconds;
  elDays2.dataset.title = timer.daysTitle;
  elHours2.dataset.title = timer.hoursTitle;
  elMinutes2.dataset.title = timer.minutesTitle;
  elSeconds2.dataset.title = timer.secondsTitle;
}, () => {
	document.querySelector('.cart__timer-inners').style.display = "none";
	document.querySelector('.timer-1 .timer__result').textContent = 'Time is over!';
});

const toggleBasket = () => {
	cart.classList.toggle('cart--active')
}
basketBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleBasket();
});
document.addEventListener('click', e => {
  let target = e.target;
  let its_cart = target == cart || cart.contains(target);
  let its_basketBtn = target == basketBtn;
  let cart_is_active = cart.classList.contains('cart--active');
  
  if (!its_basketBtn && !its_cart && cart_is_active) {
    toggleBasket();
  }
})

function toggleCartStatus() {

    const cartEmptyActive = document.querySelector('.cart__empty--active');
    const orderForm = document.querySelector('.cart__order-form');
    const cartDelivery = document.querySelector('.cart__delivery');
    const cartSummary = document.querySelector('.cart__summary');

    if (cartItems.children.length > 0) {
        cartEmptyActive.classList.add('none');
        orderForm.classList.remove('none');
        cartDelivery.classList.remove('none');
        cartSummary.classList.remove('none');
    } else {
        cartEmptyActive.classList.remove('none');
        orderForm.classList.add('none');
        cartDelivery.classList.add('none');
        cartSummary.classList.add('none');
    }

}

function calcCartPriceAndDelivery() {
	const cartItems = document.querySelector('.cart__items');
	const priceElements = cartItems.querySelectorAll('.cart__item-price');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('.cart__delivery');

	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.closest('.cart__item').querySelector('.cart__item-counter__value');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;

	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываем стоимость доставки
	if (priceTotal >= 600) {
		deliveryCost.classList.add('delivery-default');
		deliveryCost.innerText = 'free';
	} else {
		deliveryCost.classList.remove('delivery-default');
		deliveryCost.innerText = '500$';
	}
}
// Счетчик
window.addEventListener('click', function (event) {
		// Объявляем переменную для счетчика
		let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим обертку счетчика
		const counterWrapper = event.target.closest('.cart__item');
		// Находим див с числом счетчика
    counter = counterWrapper.querySelector('.cart__item-counter__value');
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
		basketBtnCount.innerText = parseInt(basketBtnCount.innerText) + parseInt(1);
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {
		basketBtnCount.innerText = parseInt(basketBtnCount.innerText) - parseInt(1);
		// Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart__items') && parseInt(counter.innerText) === 1) {
			// Удаляем товар из корзины
			event.target.closest('.cart__item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

	}

	// Проверяем клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart__items')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});

// Добавление товара в корзниу
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.classList.contains('cartAddBtnSvg')) {
		event.target.classList.add('scale-up-center')
		setTimeout(() => {
  		event.target.classList.remove('scale-up-center')
		}, 400)

		basketBtnCount.innerText = parseInt(basketBtnCount.innerText) + parseInt(1);

		// Находим карточку с товаром, внутри котрой был совершен клик
		const product = event.target.closest('.trending__product');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			imgSrc: product.querySelector('.trending__product-img').getAttribute('src'),
			title: product.querySelector('.trending__product-name').innerText,
			price: product.querySelector('.trending__product-price').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartItems.querySelector(`[data-id="${productInfo.title}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('.cart__item-counter__value');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(1);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = 
				`<div class="cart__item" data-id="${productInfo.title}">
					<div class="cart__item-img">
						<img src="${productInfo.imgSrc}" alt="${productInfo.title}" />
					</div>
					<div class="cart__item-name">${productInfo.title}</div>
					<div class="cart__item-price">${productInfo.price}</div>
					<div class="cart__item-counter">
						<button class="cart__item-counter__plus" data-action="plus" type="menu">+</button>
						<div class="cart__item-counter__value">1</div>
						<button class="cart__item-counter__minus" data-action="minus" type="menu">-</button>
					</div>
				</div>`;

			// Отобразим товар в корзине
			cartItems.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

	}
});

//Избранное
const favouriteBtn = document.querySelectorAll('.favouriteBtn')
favouriteBtn.forEach((btn,index)=>{
	btn.addEventListener('click', e => btn.classList.toggle('favouriteBtn--active'))
	btn.addEventListener('click', e => {
		btn.classList.add('scale-up-center')
		setTimeout(() => {
  		btn.classList.remove('scale-up-center')
		}, 400)
	})
})

//Modal .trending
window.addEventListener('click', function (event) {
	const modal = document.querySelector('#modalOne');

	if (event.target.classList.contains('viewBtnSvg')){
		//Открыть модалку
		modal.classList.remove('none')
		//Собираем инфу о товаре
		const product = event.target.closest('.trending__product');
		const productImg = {
			imgSrc: product.querySelector('.trending__product-img').getAttribute('src'),
			title: product.querySelector('.trending__product-name').innerText,
		}
		const addImg = `<img classname="img-modal__inner" src="${productImg.imgSrc}" alt="${productImg.title}" />`
		modal.insertAdjacentHTML('beforeend', addImg);
		// Закрыть Модалку
		modal.addEventListener('click', function (e) {
			if(e.target !== modal){
				return false
			} else{
				modal.classList.add('none')
			}
			modal.innerHTML = ''
		})
	}
})