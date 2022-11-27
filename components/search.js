let search = document.querySelector('.search_widget')

search.innerHTML = `
    <div class="cont">
        <img src="./img/close.svg" class="x" alt="">
        <div class="search_box">
        <form name="search_form">
            <input type="text" placeholder="Поиск по каталогу" class="input_search">
        </form>    
            <img src="./img/search.png" class="search_img" alt="">
        </div>
    </div>
    </div>
    <div class="container_search">

    <div class="content_search">
        <div class="categories_search">

            <div class="border-line"></div>
        </div>
        <div class="margin_1"></div>
        <p class="title">Популярные товары</p>
        <div class="search_products">

        </div>
    </div>
`


