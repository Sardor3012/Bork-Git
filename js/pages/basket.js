import {
    products,
    cartElements
} from '../data.js'
import {SendMessage} from '../telegramm.js'
let purchases = document.querySelector('.purchases')
let cart = localStorage.cart.split(',')
let totalCart = []
let totalPrice = 0

// FROM LOCALSTORAGE TO NORMAL ARRAY

for (let item of cart) {
    if (item.length < 1 && typeof (item) !== 'number') {
        throw new Error('SHIT ' + item)
    } else {
        // SAVE PRICE
        totalPrice += products[item].price

        if(totalCart.includes(products[item])) {
            if(products[item].isCart == 0) {
                products[item].isCart = 2
            } else products[item].isCart++
        } else totalCart.push(products[item])
    }
}
// FROM LOCALSTORAGE TO NORMAL ARRAY END

// 
let payment = document.createElement('div')
let all_price = document.createElement('div')
let text = document.createElement('p')
let price_of_all = document.createElement('p')
let button = document.createElement('button')

payment.classList.add('payment')
all_price.classList.add('all-price')
text.classList.add('text')
price_of_all.classList.add('price_of_all')

text.innerText = 'К оплате $' + totalPrice

button.innerText = 'Оформить'
button.onclick = () => {
    SendMessage({
        title: 'первые места на мероприятие Wepro',
        price: '500$'
    })
}
purchases.parentNode.append(payment)
payment.append(all_price, button)
all_price.append(text, price_of_all)

let countCart = header.querySelector('[data-count="countCart"]')

// Show element at cart
let cart_reload = () => {
    for (let element of totalCart) {
        let item = document.createElement('div')
        let basket_content_left = document.createElement('div')
        let img_of_product = document.createElement('img')
        let title_of_product = document.createElement('p')
        let basket_content_right = document.createElement('div')
        let price_of_product = document.createElement('p')
        let icon_of_close = document.createElement('img')

        item.classList.add('item')
        basket_content_left.classList.add('basket-content-left')
        img_of_product.classList.add('img_of_product')
        title_of_product.classList.add('title_of_product')
        basket_content_right.classList.add('basket-content-right')
        price_of_product.classList.add('price_of_product')
        icon_of_close.classList.add('icon_of_close')

        img_of_product.setAttribute('src', element.images[0])
        title_of_product.innerText = element.title + ' ' + element.isCart
        price_of_product.innerText = (element.price * element.isCart) + ' $'
        icon_of_close.setAttribute('src', './img/close.svg')

        purchases.append(item)
        item.append(basket_content_left, basket_content_right)
        basket_content_left.append(img_of_product, title_of_product)
        basket_content_right.append(price_of_product, icon_of_close)

        countCart.innerHTML = +countCart.innerHTML + 1

        icon_of_close.style.cursor = 'pointer'

        icon_of_close.onclick = () => {
            totalCart.splice(element, 1)
            item.style.display = 'none'

            localStorage.cart = totalCart
        }
    }
}

cart_reload()

console.log(cartElements);