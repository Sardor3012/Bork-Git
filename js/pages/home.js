// КОД ДОМАШНЕЙ СТРАНИЦЫ
import { products, categories, cartElements, likedElements } from '../data.js'
import { countCart, countLiked, like_products_reload, like_products } from '../index.js'

// localStorage
let localStorageIds

if (!localStorage.cart || !localStorage.cart.length) {
    localStorage.cart = []
    localStorage.love = []
    localStorageIds = []
}
else localStorageIds = localStorage.cart.split(',')


// localStorage end

// CAROUSEL
let slideIndex = 1

// Next/previous controls
let showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 5000);
}

showSlides(slideIndex)
// CAROUSEL END

// CATEGORIES
let wrap_item = document.querySelector('.wrap_item')
let bottom_aside = document.querySelector('.bottom_aside')

let reload_categories = () => {
    let main_categories = document.createElement('a')
    let reload_page = document.createElement('img')

    wrap_item.innerHTML = ''
    bottom_aside.innerHTML = ''
    main_categories.setAttribute('href', '#')
    main_categories.innerHTML = 'Категории'
    main_categories.classList.add('item_title')
    reload_page.setAttribute('src', './icon/reload.png')
    reload_page.style.width = '50px'
    reload_page.style.height = '50px'
    reload_page.style.filter = "invert(1)"

    reload_page.onclick = () => {
        reload_products(products, 7)
    }

    wrap_item.append(reload_page)

    for (let item of categories) {
        let box = document.createElement('div')
        let img = document.createElement('img')
        let text = document.createElement('p')
        let main_text = document.createElement('a')

        main_text.classList.add('info_company')
        box.classList.add('one')
        img.setAttribute('src', '../img/coffee.png')
        img.style.filter = "invert(1)"

        main_text.setAttribute('href', '/categories/' + item.url)

        box.onclick = () => {
            filterBy(item.id)
        }

        text.innerText = item.title + products.filter(product => product.categorieId == item.id).length
        main_text.innerText = item.title

        box.append(img, text)
        wrap_item.append(box)
        bottom_aside.append(main_text)
    }
}

reload_categories()
// CATEGORIES END

// PRODUCTS
let grids_wrap_container = document.querySelector(".grids_wrap_container")

let reload_products = (arr, count) => {
    grids_wrap_container.innerHTML = ""
    count = count || arr.length
    arr = arr.slice(0, count)

    for (let item of arr) {
        let a = document.createElement("a")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img1 = document.createElement("img")
        let img2 = document.createElement("img")
        let b = document.createElement("b")
        let p = document.createElement("p")
        let img3 = document.createElement("img")
        let img4 = document.createElement("img")
        let img5 = document.createElement("img")
        let span = document.createElement("span")

        a.classList.add("grid_item")
        div2.classList.add("plus_block")
        div3.classList.add("img_block_in_grid")
        div3.classList.add("blackBg")
        div4.classList.add("img_block_in_grid")
        div4.classList.add("secondBl")
        // img5.classList.add("report")
        img2.classList.add("report")
        span.style.display = "none"
        img5.style.display = "none"
        img4.style.display = "none"
        img1.style.display = "inline"
        let number = 1
        span.innerText = 1

        // Plus
        let counter = products.indexOf(item)
        
        img5.onclick = () => {
            event.preventDefault()

            number = number + 1

            if (cartElements.includes(item)) cartElements[cartElements.indexOf(item)].isCart = number
            else cartElements.push(item)

            span.innerText = number

            countCart.innerHTML = +countCart.innerHTML + 1

            localStorageIds.push(counter)
            localStorage.cart = localStorageIds

            console.log(products[products.indexOf(item)])


            console.log(cartElements);
        }

        // Minus
        img4.onclick = () => {
            event.preventDefault()

            let idx = cartElements.indexOf(item)

            // JS
            if (cartElements.includes(item)) {
                cartElements[idx].isCart--
                countCart.innerHTML = cartElements[idx].isCart

                // UI
                span.innerText = cartElements[idx].isCart
                // UI END

                if (cartElements[idx].isCart <= 0) cartElements.splice(idx, 1)
                else if (cartElements[idx].isCart > 0) console.log('Its Okey');
                else throw new Error('Fucking error!')
            } else {
                span.innerText = 0

                throw new Error('JS is not like an UI!')
            }
        }
        img4.onclick = () => {
            event.preventDefault()
            let findCount = cartElements[cartElements.indexOf(item)]

            number = number - 1

    

            if (findCount.isCart >= 1) {
                findCount.isCart -= 1
                console.log('НЕ НОЛЬ');
            } else {
                console.log('НОЛЬ')
                cartElements.splice(findCount, 1)
            }

            if (findCount.isCart === 0) {
                console.log('HELLO');
            }

            console.log(cartElements[0])
        }

        // Favourite
        img2.onclick = () => {
            event.preventDefault()

            item.isLove = !item.isLove

            if (item.isLove == false) {
                img2.setAttribute("src", "./icon/3643770-48.png")
            } else img2.setAttribute("src", "./icon/3844433-48.png")

            if (item.isLove == true) {
                countLiked.innerHTML = +countLiked.innerHTML + 1
            } else countLiked.innerHTML = +countLiked.innerHTML - 1

            if (item.isLove == true) likedElements.push(item)
            else likedElements.splice(likedElements.indexOf(item), likedElements.indexOf(item) + 1)

            console.log(likedElements)

            like_products_reload()
        }

        // Cart icon
        img1.onclick = () => {
            event.preventDefault()

            img5.style.display = "inline"
            img4.style.display = "inline"
            img1.style.display = "none"
            span.style.display = "inline"

            item.isCart = number
            cartElements.push(item)

            countCart.innerHTML = +countCart.innerHTML + 1
        }

        img1.setAttribute("src", "./icon/622414-48.png")
        if (item.isLove == false) {
            img2.setAttribute("src", "./icon/3643770-48.png")
        } else img2.setAttribute("src", "./icon/3844433-48.png")
        img4.setAttribute("src", "./icon/211863-48.png")
        img5.setAttribute("src", "./icon/134224-48.png")
        img3.setAttribute("src", item.images[0])
        a.setAttribute("href", `/products.html#${products.indexOf(item)}`)
        a.style.textDecoration = "none"

        b.innerText = item.title
        p.innerText = item.price + "$"

        div4.append(b, p)
        div3.append(img3)
        div2.append(img5, span, img1, img4, img2)
        div1.append(div2, div3, div4)
        a.append(div1)
        grids_wrap_container.append(a)

    }
}

let reload_products_arr = products.slice(0, 7)

reload_products(reload_products_arr)

let filterBy = (by) => {
    let filtered_arr = products.filter(item => item.categorieId == by)

    reload_products(filtered_arr, 7)
}
// PRODUCTS END

let price = document.querySelector(".price")
let sale = document.querySelector(".sale")
let tab_switcher = document.querySelector(".product-carousel .content")

let reload_products_2 = (arr, count) => {
    tab_switcher.innerHTML = ""
    count = count || arr.length
    arr = arr.slice(0, count)

    for (let item of arr) {
        let div1 = document.createElement("a")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let img = document.createElement("img")
        let div4 = document.createElement("div")
        let img2 = document.createElement("img")
        let p = document.createElement("p")
        let h6 = document.createElement("h6")
        let span = document.createElement("span")

        div1.style.display = "block"

        div1.classList.add("item")
        div2.classList.add("product-img")
        div3.classList.add("description-product")
        div4.classList.add("add-product")

        p.innerText = item.title
        h6.innerText = item.price + "$"
        span.innerText = item.sale + "%"

        div1.setAttribute("href", `/products.html#${products.indexOf(item)}`)
        div1.style.textDecoration = "none"

        img.setAttribute("src", item.images[0])
        img2.setAttribute("src", "./img/plus.svg")

        h6.append(span)
        div3.append(p, h6)
        div4.append(img2)
        div2.append(img, div4)
        div1.append(div2, div3)
        tab_switcher.append(div1)
    }
}
reload_products_2(products.sort((a, b) => a.price < b.price ? 1 : -1), 4)

price.onclick = () => {
    let arr_price = products.sort((a, b) => a.price < b.price ? 1 : -1)
    reload_products_2(arr_price, 4)
}

sale.onclick = () => {
    let arr_sale = products.sort((a, b) => a.sale < b.sale ? 1 : -1)
    reload_products_2(arr_sale, 4)
}

export {  reload_products_arr }


