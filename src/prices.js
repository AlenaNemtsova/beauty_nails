'use strict'

//JSON для комбинированных услуг
//Маникюр + покрытие
const combinedServiceManicureTop = [
    {
        name: 'Маникюр классический / комбинированный / аппаратный, покрытие гель-лак',
        price: '1700 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр бразильский, покрытие гель-лак',
        price: '1900 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр мужской, покрытие гель-лак',
        price: '1900 ₽',
        //currency: '₽'
    }
]

//Маникюр + покрытие + снятие

const combinedServiceManicureTopRemove = [
    {
        name: 'Маникюр классический / комбинированный / аппаратный + покрытие гель-лак + снятие',
        price: '1900 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр Бразильский + Покрытие гель-лак + Снятие',
        price: '2100 ₽',
        //currency: '₽'
    }
]

//Маникюр + покрытие + выравнивание

const combinedServiceManicureTopAlignment = [
    {
        name: 'Маникюр классический / комбинированный / аппаратный + покрытие гель-лак + выравнивание',
        price: '2300 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр + Выравнивание + Покрытие гель-лак Luxio',
        price: '2500 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр Бразильский + Выравнивание + Покрытие гель-лак',
        price: '2500 ₽',
        //currency: '₽'
    }
]

//Маникюр + покрытие + выравнивание + снятие

const combinedServiceManicureTopAlignmentRemove = [
    {
        name: 'Маникюр классический/ комбинированный/ аппаратный + выравнивание + покрытие гель-лак + снятие',
        price: '2400 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр Бразильский + Выравнивание + Покрытие гель-лак + Снятие',
        price: '2700 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр Бразильский + Выравнивание + Покрытие гель-лак Luxio + Снятие',
        price: '2900 ₽',
        //currency: '₽'
    }
]

//Маникюр + укрепление ногтевой пластины

const combinedServiceManicureStrengthening = [
    {
        name: 'Маникюр Классический/ Комбинированный/ Аппаратный + Укрепление ногтевой пластины IBX/ Vitagel/ Masura',
        price: '1200 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр Бразильский + Укрепление ногтевой пластины IBX/ Vitagel/ Masura',
        price: '1500 ₽',
        //currency: '₽'
    },
    {
        name: 'Выравнивание ногтевой пластины базой',
        price: '600 ₽',
        //currency: '₽'
    }
]

//Педикюр + покрытие

const combinedServicePedicureTop = [
    {
        name: 'Педикюр классический/ комбинированный/ аппаратный + покрытие гель-лак',
        price: '2500 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр классический/ комбинированный/ аппаратный + покрытие гель-лак Luxio',
        price: '2900 ₽',
        //currency: '₽'
    },
    {
        name: 'Глубокий эстетический педикюр Golden Trace + Покрытие гель-лак',
        price: '3200 ₽',
        //currency: '₽'
    },
    {
        name: 'Экспресс педикюр (только пальчики) + покрытие гель-лак',
        price: '2100 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр бразильский + покрытие гель-лак',
        price: '2600 ₽',
        //currency: '₽'
    },
    {
        name: 'Смарт педикюр с покрытием гель-лак',
        price: '2800 ₽',
        //currency: '₽'
    }
]

//Педикюр + покрытие + снятие

const combinedServicePedicureTopRemove = [
    {
        name: 'Педикюр классический/ комбинированный/ аппаратный + покрытие гель-лак + снятие',
        price: '2700 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Комбинированный + Гель-Лак + Снятие Гель-Лак',
        price: '2600 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Бразильский + Покрытие Гель-Лак + Снятие',
        price: '2700 ₽',
        //currency: '₽'
    },
    {
        name: 'Экспресс педикюр (только пальчики) + покрытие гель-лак + снятие',
        price: '2300 ₽',
        //currency: '₽'
    },
    {
        name: 'Снятие + Смарт педикюр + Покрытие гель-лак',
        price: '3000 ₽',
        //currency: '₽'
    }
]

//Педикюр + укрепление ногтевой пластины

const combinedServicePedicureStrengthening = [
    {
        name: 'Педикюр Классический/ Комбинированный + Укрепление ногтевой пластины IBX/ Vitagel/ Masura',
        price: '1900 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Аппаратный + Укрепление ногтевой пластины IBX/ Vitagel/ Masura',
        price: '1900 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Аппаратный + Укрепление ногтевой пластины IBX/ Vitagel/ Masura + Снятие',
        price: '2200 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Бразильский + Укрепление ногтевой пластины IBX/ Vitagel/ Masur',
        price: '2100 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр Бразильский + Укрепление ногтевой пластины IBX/ Vitagel/ Masura + Снятие',
        price: '2400 ₽',
        //currency: '₽'
    },
    {
        name: 'Экспресс Педикюр (только пальчики) + Укрепление ногтевой пластины IBX/ Vitagel/ Masura',
        price: '1600 ₽',
        //currency: '₽'
    }
]

//Моноуслуги
//Маникюр

const monoServiceManicure = [
    {
        name: 'Маникюр классический/ комбинированный/ аппаратный (без покрытия)',
        price: '800 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр бразильский (без покрытия)',
        price: '1000 ₽',
        //currency: '₽'
    },
    {
        name: 'Маникюр мужской (без покрытия)',
        price: '1000 ₽',
        //currency: '₽'
    }
]

//Педикюр

const monoServicePedicure = [
    {
        name: 'Педикюр классический/комбинированный/аппаратный (без покрытия)Маникюр классический/ комбинированный/ аппаратный (без покрытия)',
        price: '1600 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр бразильский (без покрытия)',
        price: '1800 ₽',
        //currency: '₽'
    },
    {
        name: 'Экспресс педикюр (только пальчики)',
        price: '1100 ₽',
        //currency: '₽'
    },
    {
        name: 'Глубокий эстетический педикюр Golden trace (без покрытия)',
        price: '2500 ₽',
        //currency: '₽'
    },
    {
        name: 'Педикюр мужской',
        price: '2000 ₽',
        //currency: '₽'
    },
    {
        name: 'Смарт педикюр без покрытия',
        price: '1900 ₽',
        //currency: '₽'
    }
]

//Покрытие

const monoServiceTop = [
    {
        name: 'Покрытие гель-лак',
        price: '1400 ₽',
        //currency: '₽'
    },
    {
        name: 'Покрытие гель-лак Luxio',
        price: '1600 ₽',
        //currency: '₽'
    },
    {
        name: 'Покрытие гель-лак френч',
        price: '1800 ₽',
        //currency: '₽'
    },
    {
        name: 'Укрепление ногтевой пластины Vitagel/IBX/ Masura',
        price: '600 ₽',
        //currency: '₽'
    },
    {
        name: 'Акриловое укрепление',
        price: '600 ₽',
        //currency: '₽'
    },
    {
        name: 'Гелевое укрепление',
        price: '1000 ₽',
        //currency: '₽'
    },
    {
        name: 'Матовый топ/ Кошачий глаз/ Светоотражающий топ',
        price: '100 ₽',
        //currency: '₽'
    }
]

//Дизайн (за 1 ноготь)
const monoServiceDesign = [
    {
        name: 'Более 3-х цветов',
        price: '200 ₽',
        //currency: '₽'
    },
    {
        name: 'Слайдеры',
        price: '100 ₽',
        //currency: '₽'
    },
    {
        name: 'Дизайн простой/ дизайн средний/ дизайн сложный',
        price: '50/100/200'
        //currency: '₽'
    }
]

//Уход
const monoServiceCare = [
    {
        name: 'Спа-уход/ скраб',
        price: '500/300',
        //currency: '₽'
    },
    {
        name: 'Парафинотерапия (холодный парафин)',
        price: '400 ₽',
        //currency: '₽'
    },
    {
        name: 'Массаж рук/ массаж ног',
        price: '200/500',
        //currency: '₽'
    },
    {
        name: 'Удаление вросшего ногтя',
        price: '200 ₽',
        //currency: '₽'
    },
    {
        name: 'Скраб для ног',
        price: '300 ₽',
        //currency: '₽'
    },
    {
        name: 'Удаление Натоптыша/ Мозоли',
        price: '200 ₽',
        //currency: '₽'
    }
]

//Моделирование и коррекция
const monoServiceCorrection = [
    {
        name: 'Наращивание* + покрытие гель-лак',
        price: '4000 ₽',
        //currency: '₽'
    },
    {
        name: 'Снятие нарощенных ногтей/ гелевого укрепления',
        price: '500 ₽',
        //currency: '₽'
    },
    {
        name: 'Донаращивание 1 ногтя',
        price: '400 ₽',
        //currency: '₽'
    },
    {
        name: 'Изменение формы ногтей',
        price: '100 ₽',
        //currency: '₽'
    }
]

//контейнер для карточек комбинированных услуг Маникюр + Покрытие
const combinedServiceListManicureTop = document.querySelector('.service__list_manicure-top');

//контейнер для карточек комбинированных услуг Маникюр + Покрытие + Снятие
const combinedServiceListManicureTopRemove = document.querySelector('.service__list_manicure-top-remove');

//контейнер для карточек комбинированных услуг Маникюр + Покрытие + Выравнивание
const combinedServiceListManicureTopAlignment = document.querySelector('.service__list_manicure-top-alignment');

//контейнер для карточек комбинированных услуг Маникюр + Покрытие + Выравнивание
const combinedServiceListManicureTopAlignmentRemove = document.querySelector('.service__list_manicure-top-alignment-remove');

//контейнер для карточек комбинированных услуг Маникюр + Укрепление ногтевой пластины
const combinedServiceListManicureStrengthening = document.querySelector('.service__list_manicure-strengthening');

//контейнер для карточек комбинированных услуг Педикюр + покрытие
const combinedServiceListPedicureTop = document.querySelector('.service__list_pedicure-top');

//контейнер для карточек комбинированных услуг Педикюр + покрытие + снятие
const combinedServiceListPedicureTopRemove = document.querySelector('.service__list_pedicure-top-remove');

//контейнер для карточек комбинированных услуг Педикюр + укрепление ногтевой пластины
const combinedServiceListPedicureStrengthening = document.querySelector('.service__list_pedicure-strengthening');

//контейнер для карточек моноуслуг Маникюр
const monoServiceListManicure = document.querySelector('.service__list_manicure');

//контейнер для карточек моноуслуг Педикюр
const monoServiceListPedicure = document.querySelector('.service__list_pedicure');

//контейнер для карточек моноуслуг Покрытие
const monoServiceListTop = document.querySelector('.service__list_top');

//контейнер для карточек моноуслуг Дизайн
const monoServiceListDesign = document.querySelector('.service__list_design');

//контейнер для карточек моноуслуг Дизайн
const monoServiceListCare = document.querySelector('.service__list_care');

//контейнер для карточек моноуслуг Моделирование и коррекция
const monoServiceListCorrection = document.querySelector('.service__list_correction');

//создаем карточки
const createCard = (obj) => {
    const block = document.createElement('div');
    block.className = 'card__item';
    const name = document.createElement('span');
    name.className = 'card__name';
    name.textContent = obj.name;
    const price = document.createElement('span');
    price.className = 'card__price';
    price.textContent = obj.price;
    const line = document.createElement('hr');
    line.className = 'card__line';
    // console.log(line);
    // const currency = document.createElement('span');
    // currency.className = 'card__currency';
    // currency.textContent = obj.currency;
    // const button = document.createElement('button');
    // button.className = 'card__btn';
    // button.textContent = 'Записаться';
    // const button = document.createElement('hr');
    // button.className = 'card__btn';
    // button.textContent = 'Записаться';
    // button.href = 'https://librobeauty.ru/uslugi';

    block.append(name);
    block.append(price);
    block.append(line);
    //block.append(currency);
    // block.append(button);
    // console.log(block);
    return block;
}

//функция для создания карточки комбинированных услуг
const addCard = (objItem, container) => {
    const item = createCard(objItem);
    container.append(item);
}

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Маникюр + Покрытие
document.addEventListener('DOMContentLoaded', () => {
    combinedServiceManicureTop.forEach((element) => {
        addCard(element, combinedServiceListManicureTop);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Маникюр + Покрытие + Снятие
document.addEventListener('DOMContentLoaded', () => {
    combinedServiceManicureTopRemove.forEach((element) => {
        addCard(element, combinedServiceListManicureTopRemove);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Маникюр + Покрытие + Выравнивание
document.addEventListener('DOMContentLoaded', () => {
    combinedServiceManicureTopAlignment.forEach((element) => {
        addCard(element, combinedServiceListManicureTopAlignment);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Маникюр + Покрытие + Выравнивание + Снятие
document.addEventListener('DOMContentLoaded', () => {
    combinedServiceManicureTopAlignmentRemove.forEach((element) => {
        addCard(element, combinedServiceListManicureTopAlignmentRemove);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Маникюр + Укрепление ногтевой пластины
document.addEventListener('DOMContentLoaded', () => {
    combinedServiceManicureStrengthening.forEach((element) => {
        addCard(element, combinedServiceListManicureStrengthening);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Педикюр + Покрытие
document.addEventListener('DOMContentLoaded', () => {
    combinedServicePedicureTop.forEach((element) => {
        addCard(element, combinedServiceListPedicureTop);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Педикюр + Покрытие + Снятие
document.addEventListener('DOMContentLoaded', () => {
    combinedServicePedicureTopRemove.forEach((element) => {
        addCard(element, combinedServiceListPedicureTopRemove);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для комбинированных услуг Педикюр + Укрепление ногтевой пластины
document.addEventListener('DOMContentLoaded', () => {
    combinedServicePedicureStrengthening.forEach((element) => {
        addCard(element, combinedServiceListPedicureStrengthening);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Маникюр
document.addEventListener('DOMContentLoaded', () => {
    monoServiceManicure.forEach((element) => {
        addCard(element, monoServiceListManicure);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Педикюр
document.addEventListener('DOMContentLoaded', () => {
    monoServicePedicure.forEach((element) => {
        addCard(element, monoServiceListPedicure);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Покрытие
document.addEventListener('DOMContentLoaded', () => {
    monoServiceTop.forEach((element) => {
        addCard(element, monoServiceListTop);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Дизайн
document.addEventListener('DOMContentLoaded', () => {
    monoServiceDesign.forEach((element) => {
        addCard(element, monoServiceListDesign);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Уход
document.addEventListener('DOMContentLoaded', () => {
    monoServiceCare.forEach((element) => {
        addCard(element, monoServiceListCare);
    })
})

//тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку для моноуслуг Моделирование и коррекция
document.addEventListener('DOMContentLoaded', () => {
    monoServiceCorrection.forEach((element) => {
        addCard(element, monoServiceListCorrection);
    })
})

//аккордеон 
class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
                }
            }
            elHeader.parentElement.classList.toggle('accordion__item_show');
        });
    }
}

new ItcAccordion('#accordion-1', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-2', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-3', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-4', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-5', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-6', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-7', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-8', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-9', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-10', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-11', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-12', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-13', {
    alwaysOpen: false
});

new ItcAccordion('#accordion-14', {
    alwaysOpen: false
});

const certificate = document.getElementById('sertificate');
const certificateTwo = document.getElementById('sertificate2');
const certificateThree = document.getElementById('sertificate3');
const certificateFour = document.getElementById('sertificate4');
const certificateFive = document.getElementById('sertificate5');

certificate.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-sertificate_text')) {
        alert('Сертификат на 1000 рублей добавлен в корзину');
    }
})

certificateTwo.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-sertificate_text2')) {
        alert('Сертификат на 3000 рублей добавлен в корзину');
    }
})

certificateThree.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-sertificate_text3')) {
        alert('Сертификат на 5000 рублей добавлен в корзину');
    }
})

certificateFour.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-sertificate_text4')) {
        alert('Сертификат на 7000 рублей добавлен в корзину');
    }
})

certificateFive.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-sertificate_text5')) {
        alert('Сертификат на 10000 рублей добавлен в корзину');
    }
})


