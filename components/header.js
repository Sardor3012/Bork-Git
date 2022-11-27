let header = document.querySelector('.header_wrapper')

header.innerHTML = `
    <div class="header">
        <div class="left_side">
            <div class="menu menu_icon"><img src="./icon/menu.png"
                    style="width: 22px; height: 22px; margin-right: 10px;"></div>

            <div class="location"><img src="./icon/location.png"
                    style="width: 20px; margin-right: 10px; height: 20px;"></div>

            <div class="number">
                <a href="#">8 800 500 88 99</a>
            </div>
        </div>

        <div class="middle_side">
            <a href="./index.html">
                <img src="./img/logo-white.svg" alt="">
            </a>
        </div>

        <div class="right_side">
            <a href="./basket.html">
                <div>
                    <span data-count="countCart">0</span>
                    <img src="./icon/korzina.png" style="width: 32px; height: 25px; margin-right: 5px;">
                </div>
            </a>

            <div class="love_products">
                <span data-count="countLiked">0</span>
                <img src="./icon/3643770-48.png" style="width: 22px; height: 23px; margin-right: 10px;">
            </div>

            <div>
                <img src="./icon/search.png" class="search" style="width: 22px; height: 22px; margin-right: 10px;">
            </div>

            <a href="./admin.html">
                <div>
                    <img src="./icon/account.png" style="width: 20px; height: 20px">
                </div>
            </a>
        </div>
    </div>
`