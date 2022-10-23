const cards = [
    {
    name: 'банк',
    url: 'https://bipbap.ru/wp-content/uploads/2018/07/1680f6da9922f1ead46a2e0917f07aff-640x601.jpg',
    pay: "600",
    currency: '$',
    from: 'other',
    },
    {
    name: 'игрушки',
    url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
    pay: "100",
    currency: '$',
    from: 'Russia',
    },
    {
    name: 'школа',
    url: 'https://klike.net/uploads/posts/2019-10/1571385428_2.jpg',
    pay: "200",
    currency: '₽',
    from: 'Russia',
    },
    {
    name: 'стройка',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn-Sjn0Wwl8he8tyLhhekIDxDK38rBmG-NnYd0vTD&s',
    pay: "300",
    currency: '₽',
    from: 'Russia',
    },
    {
    name: 'золото',
    url: 'https://klike.net/uploads/posts/2020-02/1581844900_1.jpg',
    pay: "150",
    currency: '₽',
    from: 'other',
    },
    {
    name: 'бриллианты',
    url: 'https://catalogmineralov.ru/pic/2015/b_121155101115.jpg',
    pay: "100",
    currency: '$',
    from: 'other',
    },
    {
    name: 'парк',
    url: 'https://png.pngtree.com/png-vector/20200214/ourlarge/pngtree-amusement-park-carnival-or-festive-fair-cartoon-png-image_2146927.jpg',
    pay: "350",
    currency: '$',
    from: 'Russia',
    },
    {
    name: 'еда',
    url: 'https://klike.net/uploads/posts/2019-06/1559545703_14.jpg',
    pay: "100",
    currency: '₽',
    from: 'Russia',
    },
    {
    name: 'отель',
    url: 'https://st.depositphotos.com/2288675/2455/i/450/depositphotos_24553989-stock-photo-hotel.jpg',
    pay: "100",
    currency: '₽',
    from: 'Russia',
    },
    {
    name: 'ферма',
    url: 'https://kartinkin.net/uploads/posts/2022-03/1647858539_1-kartinkin-net-p-kartinki-fermi-1.jpg',
    pay: "100",
    currency: '₽',
    from: 'Russia',
    }
]

const cardList = document.querySelector('.card__list');
const adminBtn = document.querySelector('.admin__button');

// const card1 = {
//     name: 'бриллианты',
//     url: 'https://catalogmineralov.ru/pic/2015/b_121155101115.jpg',
//     pay: "100",
//     currency: '$',
//     from: 'other',
//     }

    const createCard = (obj) => {
        const block = document.createElement('div');
        block.className = 'card__item';
        const name = document.createElement('span');
        name.className = 'card__name';
        name.textContent = obj.name;
        const img = document.createElement('img');
        img.className = 'card__logo';
        img.src = obj.url;
        const pay = document.createElement('span');
        pay.className = 'card__pay';
        pay.textContent = obj.pay;
        const currency = document.createElement('span');
        currency.className = 'card__currency';
        currency.textContent = obj.currency;
        const from = document.createElement('span');
        from.className = 'card__from';
        from.textContent = obj.from;
        const button = document.createElement('button');
        button.className = 'card__btn';
        button.textContent = 'Удалить';

        block.append(name);
        block.append(img);
        block.append(pay);
        block.append(currency);
        block.append(from);
        block.append(button);
        //console.log(block);
        return block;
    }

    const addCard = (objItem, container) => {
        const item = createCard(objItem);
        container.append(item);
    }

    //тут циклом проходимся по JSON-у,  чтобы отрисовать каждую карточку
    document.addEventListener('DOMContentLoaded', () => {
        cards.forEach((element) => {
            addCard(element, cardList);
        })
    })
    
    //ловим клик по кнопке event.target, удаляем элемент по кнопке
    cardList.addEventListener('click', (event) => {
        if (event.target.classList.contains('card__btn')) {
            event.target.parentNode.remove();
        }
    })

    //доабвляем новую карточку по кнопке Добавить
    adminBtn.addEventListener('click', () => {
        let cur;
        if (document.getElementById('newCurrency').value == 'ruble') {
            cur = '₽';
        } else {
            cur = '$';
        }
        const obj = {
    name: document.getElementById('newNameCompany').value,
    url: document.getElementById('newLogoCompany').value,
    pay: document.getElementById('newPay').value,
    currency: cur,
    from: document.getElementById('type').value,
        }
        addCard(obj, cardList);
    })