
function getPrice() {
    let prices = document.querySelectorAll('.select-val');

    let sum = 0;
    for (p of prices) {
        let currentPrice;

        if (p.type == "checkbox") {
            if (p.checked) {
                currentPrice = Number(p.value);
            }
            else {
                currentPrice = 0;
            }
        } else {
            currentPrice = Number(p.value);
        }

        sum += currentPrice;
    }
    document.querySelector('#js-result-sum').innerText = sum + " руб.";

}

