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
// const select = (sender) => {
//     sender.classList.toggle('selected');
// }

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
            <span>${data.form.username}</span>, Вы записаны на <span>${data.form.time}</span> <span>${data.form.selection}</span> на процедуры:
                  <span>${data.form.procedure}</span>.<br> Ваш мастер: <span>${data.form.person}</span>
            `
        })
        .catch(err => console.log(err));
})


//валидация формы
//даты раньше текущей - неактивны
//выбранное время - неактивно - локал сторидж?
//при выборе времени менять фон контейнера