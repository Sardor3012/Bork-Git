// ТОЛЬКО УНИВЕРСАЛЬНЫЙ КОД
import { products , categories,cartElements,likedElements} from './data.js'

// FOOTER
let show_one = document.querySelector('.one_one')
let show_two = document.querySelector('.one_two')
let show_the = document.querySelector('.one_the')
let show_four = document.querySelector('.one_four')
let show_five = document.querySelector('.one_five')

let reload_footer = () => {
    for (let item of products) {
        let a = document.createElement('a')

        a.setAttribute('href', '#')

        if (show_one.id == item.categorieId) {
            a.innerText = item.title
            show_one.append(a)
        }
        else if (show_two.id == item.categorieId) {
            a.innerText = item.title
            show_two.append(a)
        }
        else if (show_the.id == item.categorieId) {
            a.innerText = item.title
            show_the.append(a)
        }
        else if (show_four.id == item.categorieId) {
            a.innerText = item.title
            show_four.append(a)
        }
        else{
            a.innerText = item.title
            show_five.append(a)
        }
    }
}

reload_footer()
// FOOTER END

// MENU

let dark_bc = document.querySelector(".dark_bc")
let arrow_icon = document.querySelector(".arrow_icon")
let menu = document.querySelector("aside")
let menu_icon = document.querySelector(".menu_icon")

menu_icon.onclick = () => {
    dark_bc.classList.add("active")
    menu.classList.add("active")
}

arrow_icon.onclick = () => {
    dark_bc.classList.remove("active")
    menu.classList.remove("active")
}

dark_bc.onclick = () => {
    dark_bc.classList.remove("active")
    menu.classList.remove("active")
}
// MENU END
let search = document.querySelector(".search")
let search_widget = document.querySelector(".search_widget")
let body_home = document.querySelector(".body-home")
let footer = document.querySelector("footer")
let x = document.querySelector(".x")
let input_search = document.querySelector(".input_search")

search.onclick =() =>{
    search_widget.classList.add("active")
    body_home.style.display = "none"
    footer.style.display = " none"
}
x.onclick = () =>{
    search_widget.classList.remove("active")
    body_home.style.display = "block"
    footer.style.display = "block" 
}

input_search.onkeyup = () => {
    let text = event.target.value.toLowerCase()
    let find_elements = products.filter(item => item.title.toLowerCase().includes(text))

    reload_search(find_elements)


}
let search_products = document.querySelector(".search_products")

let reload_search = (arr, count) =>{
    search_products.innerHTML = ""
    count = count || arr.length
    arr = arr.slice(0,count)
    for(let item of arr){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img1 =  document.createElement("img")
        let img2 =  document.createElement("img")
        let b = document.createElement("b")
        let p = document.createElement("p")

        div1.classList.add("product")
        div2.classList.add("blackBg")
        div3.classList.add("price")
        div4.classList.add("plus_block")
        img1.setAttribute("src","./icon/622414-48.png")
        img2.setAttribute("src", item.images[0])
        img2.setAttribute("width", "100px")
        img2.setAttribute("height", "100px")
        img2.classList.add("content")
        b.innerText = item.title
        p.innerText = item.price + "$"

        div3.append(b,p)
        div4.append(img1)
        div2.append(div4,img2)
        div1.append(div2, div3)
        search_products.append(div1)
    }
}

reload_search(products,10)

let bottom_aside = document.querySelector('.bottom_aside')
let categories_search = document.querySelector(".categories_search")

let reload_categories = () => {
 
    bottom_aside.innerHTML = ''
 
    categories_search.innerHTML = ""
    let p = document.createElement("p")
    p.innerText = "Категории"
    p.classList.add("title")
    categories_search.append(p)

    for (let item of categories) {

        let main_text = document.createElement('a')

        main_text.classList.add('info_company')
      

        main_text.setAttribute('href', '/categories/' + item.url)

       
        bottom_aside.append(main_text)

        let p1 = document.createElement("a")
        p1.innerText = item.title
        p1.setAttribute("href", '/categories/' + item.url)
        p1.classList.add("pc_text")
        categories_search.append(p1)

    }
}

reload_categories()

let like_icon = document.querySelector(".love_products")
let like = document.querySelector(".like")
let a = true

like_icon.onclick = () =>{
    if(a == true) like.classList.add("active")
    else like.classList.remove("active")

    a = !a

}
let like_products = document.querySelector(".like_products")



let header = document.querySelector('.header')
let countCart = header.querySelector('[data-count="countCart"]')
let countLiked = header.querySelector('[data-count="countLiked"]')

let like_products_reload = () =>{
    like_products.innerHTML = ""
    for(let item of likedElements){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let img1 = document.createElement("img")
        let div4 = document.createElement("div")
        let img2 = document.createElement("img")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")

        div1.classList.add("like_item")
        div2.classList.add("like_img")
        div3.classList.add("like_info")
        div4.classList.add("like_info_product")
        p1.classList.add("like_name")
        p2.classList.add("like_price")
        img2.classList.add("img_love")

        img1.setAttribute("src", item.images[0])
        img2.setAttribute("src", "./icon/3844433-48.png")

        img2.onclick = () =>{
            item.isLove = false

            reload_products(reload_products_arr)

            likedElements.splice(likedElements.indexOf(item),likedElements.indexOf(item)+1) 

            countLiked.innerHTML = +countLiked.innerHTML - 1

            like_products_reload()
            
        }

        p1.innerText = item.title
        p2.innerText = item.price

        div4.append(p1,p2)
        div3.append(div4, img2)
        div2.append(img1)
        div1.append(div2,div3)
        like_products.append(div1)
    }

}



like_products_reload()

// HEADER LOGIC END



export { countCart, countLiked,like_products_reload ,like_products}