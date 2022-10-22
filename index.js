'use strict'
//прайс
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
            <button class="button">Записаться</button>
        </div>
        `
        }
        document.querySelector('.price').innerHTML = priceContent;
    })
    