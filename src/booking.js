'use strict'
//Всплывающее окно с формой записи 
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
/* let types = ["Выбрать услуги", "Маникюр", "Педикюр", "Наращивание ногтей"];

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
} */

/* const masters_json =`[
    {
        "person": "Мария Усманова",
        "procedure": "Маникюр, педикюр",
        "ava_url": "./images/mariya_ava.jpg"
    },
    {
        "person": "Ирина Петрова",
        "procedure": "Маникюр, педикюр, наращивание ногтей",
        "ava_url": "./images/irina_ava.jpg" 
    },
    {
        "person": "Татьяна Лютова",
        "procedure": "Маникюр, педикюр, наращивание ногтей",
        "ava_url": "./images/tatiana_ava.jpg"
    }
]`;

const procedures_json=`[
    {
    "type": "Маникюр" 
    },
    {
    "type": "Педикюр" 
    },
    {
    "type": "Наращивание ногтей" 
    }
]`;

const showMaster=()=>{
    let masters = JSON.parse(masters_json);
    console.log(masters);
    let content = ''; 
    for (let master of masters){
        content +=`
        <div class="master">
            <img src="${master.ava_url}" alt="${master.person}" class="ava">
            <div class="text">
                <h5>${master.procedure}</h5>
                <h4>${master.person}</h4>
            </div>
        </div>
        `
    };
document.querySelector('.persons').innerHTML = content;
}

const showType=()=>{
    let procedures = JSON.parse(procedures_json);
    let content = ''; 
    for (let procedure of procedures){
        content +=`
        <div class="type">
            <p class="type_name">${procedure.type}</p>
        </div>
        `
    };
    document.querySelector('.types').innerHTML = content;
} */



//отправка формы
document.querySelector('.confirm').addEventListener('click', (e) => {
    e.preventDefault();
 
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(booking)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('.confirmation').innerHTML = `
            <span>${data.form.username}</span>, Вы записаны на <span>18-30</span> <span>${formatDate(data.form.date)}</span> на процедуры:
                  <span>${data.form.procedure}</span>.<br> Ваш мастер: <span>${data.form.person}</span>
            `
        })
        .catch(err => console.log(err));
 
})
 
const formatDate = (dateStr) => {
    let day = dateStr.split('-').reverse().join('.');
    return day;
}

//стилизовать ссылки под кнопки
//при нажатии на любую кнопку записаться должно всплывать модальное окно

//календарь
