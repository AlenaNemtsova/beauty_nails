'use strict'
//генерация прайса
const priceList = `[
    {
    "name": "Маникюр классический/ комбинированный/ аппаратный (без покрытия)",
    "price": "800р" 
    },{
    "name": "Маникюр бразильский (без покрытия)",
    "price": "1000р"  
    },{
    "name": "Педикюр классический/комбинированный/аппаратный (без покрытия)",
    "price": "1600р"
    },{
    "name": "Педикюр бразильский (без покрытия)",
    "price": "1800р"  
    }]`

document.addEventListener('DOMContentLoaded', (event) => {
    let items = JSON.parse(priceList);
    let priceContent = '';
    for (let item of items) {
        priceContent += `
        <div class="item">
            <p class="item_title">${item.name}</p>
            <p class="item_price">${item.price}</p>
            <button class="button btn-booking">Записаться</button>
        </div>
        `
    }
    document.querySelector('.price').innerHTML = priceContent;
});


//при нажатии на любую кнопку записаться должно всплывать модальное окно
const openPopupButtons = document.querySelectorAll('.popup__open'); //кнопки-ссылки открытия
const closePopupButtons = document.querySelectorAll('.popup__close'); //кнопки-ссылки закрытия

for (let openPopupButton of openPopupButtons) {
    openPopupButton.addEventListener('click', (event) => {
        //так как в ссылке на попап указано его айди, то получаем ссылку и извлекаем из нее айди
        const popupName = openPopupButton.getAttribute('href').replace('#', '');
        //определяем текущим попап с именем, полученным из ссылки
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        //блокируем работу ссылки
        event.preventDefault;
    })
}

for (let closePopupButton of closePopupButtons) {
    closePopupButton.addEventListener('click', (event) => {
        popupClose(event.target.closest('.popup'));
        event.preventDefault;
    })
}

const popupOpen = (currentPopup) => {
    if (currentPopup) {
        const popupActive = document.querySelector('.popup.open');
        // если существует элемент с классом open, то закрываем его
        if (popupActive) {
            popupClose(popupActive, false);
        }
    }

    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', (event) => {
        //если у кликнутого объекта нет в родителях объекта с классом .popup__content,
        //а это все объекты за пределами <div class="popup__content">, 
        if (!event.target.closest('.popup__content')) {
            //то мы этот попап закрываем, то есть передаем в функцию закрытия ближайший объект с классом .popup
            popupClose(event.target.closest('.popup'));
        }
    })
}
const popupClose = (popupActive) => {
    popupActive.classList.remove('open');
}

//выбор мастера и услуги
let types = ["Выбрать услуги", "Маникюр", "Педикюр"];

const selectedType = (sender) => {
    if (sender.options[sender.selectedIndex].value == 'none') {
        document.querySelector('.choose_date').style.display = 'none';
    } else {
        document.querySelector('.choose_date').style.display = 'block';
    };
}

const selectedMaster = (sender) => {
    if (sender.options[sender.selectedIndex].value == 'none') {
        document.querySelector('.choose_type').style.display = 'none';
    } else {
        document.querySelector('.choose_type').style.display = 'block';
    };

    let typesString = '';
    if (sender.options[sender.selectedIndex].value !== 'none') {
        for (let type of types) {
            typesString += `<option>${type}</option>`;
        }
    }
    document.querySelector('.choose_type').innerHTML = typesString;
    selectedType();
}

//отправка формы
document.querySelector('.booking').addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(booking)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('.confirmation').textContent = `${data.form.username}, вы записаны к ${data.form.person} на  на сеанс ${data.form.procedure}`
        })
        .catch(err => console.log(err));
})

//стилизовать кнопки под ссылки
//получиь данные из формы  - если у опшенов есть вэлью, то берет значения и них, подумать, где могут понадобиться вэлью и если нигде не нужны - удалить
