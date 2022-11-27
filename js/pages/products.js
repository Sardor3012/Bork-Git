import { products, categories, cartElements, likedElements } from '../data.js'
import { SendMessage} from '../telegramm.js'
let countCart = header.querySelector('[data-count="countCart"]')
let countLiked = header.querySelector('[data-count="countLiked"]')

let url = +window.location.hash.slice(1)
let pageProduct = products[url]

if(url >= products.length) {
    document.body.innerHTML = 'ERROR PAGE IS NOT DEFINED'
}

let newComment = document.forms.newComment

document.querySelector('.first_screen h2').innerHTML = pageProduct.title
document.querySelector(".span_price").innerHTML = pageProduct.price
document.querySelector(".span_sale").innerHTML = pageProduct.price - (pageProduct.price/100 * pageProduct.sale)
document.querySelector(".first_screen").style.backgroundImage = "url"+"(" + pageProduct.images[0] + ")"
let button_report = document.querySelector('.report_button')
button_report.onclick = () =>{
    SendMessage({
        title: pageProduct.title,
        price: pageProduct.price + '$'
    })
}
let comment = document.querySelector(".comment")

let regex_age = /^[0-9]*$/
let regex_name = /^[A-Za-z]+$/
let regex_text = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


newComment.onsubmit = () => {
    event.preventDefault()

    let need = newComment.querySelectorAll('input').length
    let result = 0

    let obj = {}
    obj.like = false

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        let regex = eval('regex_' + key)
        let field = newComment.querySelector(`input[name=${key}]`)

        if(regex.test(value)) {
            field.style.border = '1px solid grey'
            obj[key] = value
            result++
        }
        else field.style.border = '3px solid red'
    })


    // IF ALL IS OKEY
    if(result == need) {
        // JS IS OKEY
        pageProduct.comments.push(obj)

        // HTML IS NOT OKEY
        reload_comment()
    } else {
        console.log('ALL IS NOT OK')
    }
}

let reload_comment = () =>{
    comment.innerHTML = ""
    for(let item of pageProduct.comments){
        let div1 = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let img = document.createElement("img")

        div1.classList.add("comment_item")
        p1.classList.add("name")

        p1.innerText = item.name
        p2.innerText = item.text

        img.setAttribute("height","30")
        img.setAttribute("src", "./img/like (2).svg")

        if(item.like == false){
            img.style.transform = "rotate(180deg)"
        } else img.style.transform = "rotate(0deg)"

        div1.append(p1,p2,img)
        comment.append(div1)
    }

}

reload_comment()

let check = document.querySelectorAll('.chek')
let report = document.querySelectorAll('.report')
for (let item of check) {
    item.onclick = () => {
        item.setAttribute('src', '../img/iconfinder_checkmark-24_103184.png')
        console.log(123);
    }
}

let aa = document.querySelector('.cl-2')
let aa1 = document.querySelector('.cl-3')
let map = document.querySelector('.map')
let map1 = document.querySelector('.one')
let cl_4 = document.querySelector('.cl-4')
let two = document.querySelector('.two')

aa.onmouseenter = () => {
    map.style.opacity = '1'
    map.style.top = '50%'
}
aa.onmouseleave = () => {
    map.style.opacity = '0'
    map.style.top = '50%'
}


aa1.onmouseenter = () => {
    map1.style.opacity = '1'
    map1.style.top = '50%'
}
aa1.onmouseleave = () => {
    map1.style.opacity = '0'
    map1.style.top = '50%'
}
cl_4.onmouseenter = () => {
    two.style.opacity = '1'
    two.style.top = '50%'
}
cl_4.onmouseleave = () => {
    two.style.opacity = '0'
    two.style.top = '50%'
}

let grids_wrap1 = document.querySelector(".grids_wrap1")
let select_sorting = document.querySelector(".select_sorting")
document.querySelector(".categorieId").setAttribute("value",pageProduct.categorieId)
document.querySelector(".brandId").setAttribute("value",pageProduct.brandId)
let filter_brandId= products.filter(item => item.brandId == pageProduct.brandId)
let filter_categorieId= products.filter(item => item.categorieId == pageProduct.categorieId)

console.log(filter_brandId)

let reload_select_sorting = (arr,count) =>{
    grids_wrap1.innerHTML = ""
    count = count || arr.length
    arr = arr.slice(0, count)

    for(let item of arr){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img1 = document.createElement("img")
        let img2 = document.createElement("img")
        let img3 = document.createElement("img")
        let img4 = document.createElement("img")
        let img5 = document.createElement("img")
        let b = document.createElement("b")
        let p = document.createElement("p")

        div1.classList.add("grid_item1")
        div2.classList.add("plus_block2")
        div3.classList.add("img_block_in_grid1")
        div3.classList.add("blackBg1")
        div4.classList.add("img_block_in_grid1")
        div4.classList.add("secondBl1")
        img1.classList.add("chek")
        img2.classList.add("report")
        img4.classList.add("report")
        img5.classList.add("report")

        let number = 0
        img5.onclick = () => {
            event.preventDefault()
            number = number + 1
            // UI
            countCart.innerHTML = +countCart.innerHTML + 1
            // JS
            cartElements.push(item)
            console.log(cartElements)
        }
 
        img4.onclick = () =>{
            event.preventDefault()

            
    
            if(number > 0){
                countCart.innerHTML = +countCart.innerHTML - 1
                delete cartElements[cartElements.indexOf(item)]
            } else console.log("error")
            
            number = number - 1

            console.log(cartElements)

        }
        img2.onclick = () => {
            event.preventDefault()

            item.isLove = !item.isLove

            if(item.isLove == false){
                img2.setAttribute("src", "./icon/3643770-48.png")
            } else img2.setAttribute("src", "./icon/3844433-48.png")

            if(item.isLove == true){
                countLiked.innerHTML = +countLiked.innerHTML + 1
            } else countLiked.innerHTML = +countLiked.innerHTML - 1
            // UI
            // JS
            // if(likedElements.includes(item)) console.log('ERROR')
            // else likedElements.push(item)
            if(item.isLove == true) likedElements.push(item)
            else delete likedElements[arr.indexOf(item)]  
            
            console.log(likedElements)
        }

        img1.setAttribute("src", "./icon/622414-48.png")
        img2.setAttribute("src", "./icon/3643770-48.png")
        img4.setAttribute("src", "./icon/211863-48.png")
        img5.setAttribute("src", "./icon/134224-48.png")
        img3.setAttribute("src",item.images[0])


        b.innerText = item.title
        p.innerText = item.price + "$"

        div4.append(b,p)
        div3.append(img3)
        div2.append(img5,img1,img4,img2)
        div1.append(div2,div3,div4)
        grids_wrap1.append(div1)
    }
}

reload_select_sorting(filter_brandId ,4)

select_sorting.addEventListener('change', () => {
    let value = event.target.value

    if(value == pageProduct.brandId) reload_select_sorting(filter_brandId,4)
    else  reload_select_sorting(filter_categorieId,4)
})