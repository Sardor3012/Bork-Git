// Массив с пользователями, два пользователя уже зарегистрированы
let users = [
    {
        id: +Math.random().toString().slice(3),
        name: 'Alex Adams',
        login: 'hi_alex@mail.com',
        password: 'hi_alex',
        cart: [],
        love: []
    },
    {
        id: +Math.random().toString().slice(3),
        name: 'Barbara Adams',
        login: 'hi_barb@outlook.com',
        password: 'hi_barb',
        cart: [],
        love: []
    },
]

let brands = [
    {
        id: 1,
        name: 'Samsung'
    },
    {
        id: 2,
        name: 'LG'
    },
    {
        id: 3,
        name: 'Bosch'
    },
    {
        id: 4,
        name: 'Artel'
    },
    {
        id: 5,
        name: 'Apple'
    },
    {
        id: 6,
        name: 'Xiaomi'
    },
]

let categories = [
    {
        id: 1,
        title: 'Телевизоры'
    },
    {
        id: 2,
        title: 'Смартфоны'
    },
    {
        id: 3,
        title: 'Ноутбуки'
    },
    {
        id: 4,
        title: 'Бытовая техника'
    },
    {
        id: 5,
        title: 'Аксессуары'
    },
]

let products = [
    // Пример объекта, ключи не менять и не удалять. Ключи у объектов должны быть абсолютно одинаковыми
    // Цены ставьте примерно реальные
    // Окончание скидки (дедлайн) должен быть в часах. 0.5 равно 30 минутам, 1 равно 1 часу
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 5,
        title: 'iPhone 12 Pro Max',
        price: 1299,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },

    //1
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG Nano80 2020',
        price: 590,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://i.rtings.com/assets/products/8CfGZVom/lg-nano80-2020/design-medium.jpg',
            'https://ultrahd.su/wp-content/uploads/2020/05/02-ultrahd.su-nano80-obzor.jpg',
            'https://lh3.googleusercontent.com/proxy/LE2zh_fIX-NilziE3WB3n2aDUXG4g-w9dZ1tFUcvoOX6csaosyqpYVLPLNfEwhFQHLipHzsnRoR61JZGb4U9ANjltBWQW7qgt9K3RAZgU3jGoDb37S_QlVcNsXXFo5_yueRx'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Владимир Д.',
                like: true,
                text: 'Хорошая картинка, если правильно настроить свето передачу.'
            },
            {
                name: 'Игорь Анатольевич',
                like: true,
                text: 'Качественное изображение,хороший звук,стильный дизайн.'
            },
            {
                name: 'Василий',
                like: false,
                text: 'Качество не очень'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 1,
        title: '40 m 5070',
        price: 400,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://esavdo.uz/storage/product_images/product_20206/23eaa18e-10f7-45bf-bc60-d4009064a931.png',
            'https://univershop.uz/wp-content/uploads/2020/07/5e15bcc63ac00.jpg',
            'https://apollo-olx.cdnvideo.ru/v1/files/tu7vrhdms35f-UZ/image;s=644x461'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: false,
                text: 'качество не очень'
            },
            {
                name: 'Владимир Д',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 11',
        price: 820,
        sale: 3,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://elmakon.uz/image/original/c9ScPAzqAdhAz67YUKfhK5qvBxSoiUxSWyVdvn8Hgvn3KIL2PHm765F',
            'https://files.glotr.uz/company/000/001/689/products/2019/09/25/15694152810501-c596ee717802677cb9838e164aee70dc.jpg?_=ozbol',
            'https://www.ixbt.com/img/x780x600/r30/00/02/23/14/Appleiphone11familylineup091019.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Игорь Анатольевич',
                like: true,
                text: 'Отличная камера'
            },
            {
                name: 'Дмитрий',
                like: false,
                text: 'Не нравится, что нет в комплекте адаптера и наушников. Но это нарекания к самой apple'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Samsung Galaxy S21',
        price: 1000,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://cdnimg.rg.ru/i/photogallery/2021/01/14/4a1f722db95c3b4/4a1f722db95c3b41610628492.JPG',
            'https://c.dns-shop.ru/original/st4/867934187c35d175977019125d68319f/57ad304cf33ba0a8fbef49d64e7ffd1a1740601b23ff2dcb17e00d03b34aabc2.jpg',
            'https://img.mvideo.ru/Pdb/30054907b.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Отличный телефон'
            },
            {
                name: 'Владимир Д',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 3,
        title: 'Xiaomi Mi Notebook Pro',
        price: 820,
        sale: 3,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://mishka-shop.com/upload/resize_cache/webp/iblock/7e6/1090_800_1/0.webp',
            'https://myxiaomi.uz/wp-content/uploads/2019/07/36c45c8dd36e83f95d12f4a9f00fcc0b.jpg',
            'https://m.media-amazon.com/images/I/61nJ41joQ9L._AC_SX522_.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Денис',
                like: true,
                text: 'Отличный ноут'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Samsung Notebook 9 Pro',
        price: 900,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg',
            'https://tehnografi.com/wp-content/uploads/2019/09/Samsung-Notebook-9-Pro-13-%D0%B4%D1%8E%D0%B9%D0%BC%D0%BE%D0%B2-2019.jpeg',
            'https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Он как 12, только в более приятном корпусе.Батарею держит полтора дня'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'Оптимальный телефон по цене-качество. Покупал при наличии в продаже 12-х моделей. Но отличия не стоят денег, которые за них просят.'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'миксер bosch bs-1629',
        price: 15,
        sale: 1,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://yukber.uz/image/cache/catalog/product/YK3667/3667-600x600.jpg',
            'https://img5.lalafo.com/i/posters/original/7d/cc/ea/65b245a964773b28a96685c652.jpeg',
            'https://images.satu.kz/135918333_w200_h200_mikser-ruchnoj-bosch.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Barbara',
                like: true,
                text: 'Отличный миксер'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'ЧАЙНИК BOSCH TWK70B03',
        price: 200,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://object.pscloud.io/cms/cms/Photo/img_0_35_380_2.png',
            'https://bosch-uzbekistan.uz/thumb/2/RsfruFgk_oqCDd31rqsrdw/600r600/d/mcsa02665290_i7799_2017554_twk70b03_def.jpg',
            'https://kontakt.az/wp-content/uploads/2020/06/MCSA02630111_BO_K_15_KWE_other_TWK70B03_picture_KF2_perspective_ENG_230318_def.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
            {
                name: 'Сергей',
                like: false,
                text: 'качество не очень'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'Xiaomi MI Redmi AirDots',
        price: 30,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://archa.uz/image/cache/catalog/xiaomi/airdots/xiaomi-mi-airdots-black-right-500x500.jpg',
            'https://elmakon.uz/image/original/YgDgiqGKvQD7A5jiEmvLoaKf3oP6R26MjTZ1yoJKs9tE0rfwfVYpqjL27VtA.jpeg',
            'https://archa.uz/image/cache/catalog/xiaomi/airdots/xiaomi-mi-airdots-black-perspective-500x500.jpgg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Денис',
                like: true,
                text: 'Звук громкий и качество неплохое, кнопки удобные, сами наушники выглядят стильно'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 5,
        title: 'Samsung U Flex Headphones',
        price: 55,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://avatars.mds.yandex.net/get-mpic/4397006/img_id4562519566324025753.jpeg/orig',
            'https://images.samsung.com/is/image/samsung/ru-u-flex-headphones-eo-bg950-eo-bg950cwegru-dynamicivorywhite-72436365?$720_576_PNG$',
            'https://images.samsung.com/is/image/samsung/ru-u-flex-headphones-eo-bg950-eo-bg950cbegru-dynamicblack-72436270?$720_576_PNG$'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Хороший звук; автономность; отличный прием сигнала и радиус действия'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'Продолжительное воспроизведение музыки, удобные, быстрый заряд.'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG',
        price:250,
        sale: 9,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images:  ['https://ae04.alicdn.com/kf/HTB1y2PZaPDuK1RjSszdq6xGLpXag/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/HTB16_n2aLfsK1RjSszgq6yXzpXah/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/HTB1iWabaA9E3KVjSZFGq6A19XXag/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 12 Pro Max',
        price: 1600,
        sale: 15,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images:['https://ae04.alicdn.com/kf/Hed3f30f124ac488aaf30dfbf00aadbb7u/iPhone-12-Pro-Max.jpeg_50x50.jpeg','https://ae04.alicdn.com/kf/H1fc23e049c9147bf8c4fa021772b9d41l/iPhone-12-Pro-Max.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hec5b2c51255247acb2cbd190538d5f89G/iPhone-12-Pro-Max.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Galaxy S20 Ultra 5G G988U1',
        price: 800,
        sale: 12,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images:['https://ae04.alicdn.com/kf/Hd7a17366c2a14544be28ec995ae0f1b8h/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.png_50x50.png', 'https://ae04.alicdn.com/kf/Had729598855f4bcba154bbf478bd15f0E/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H0b83fc8202da459aa3d6c3f854bf0be0A/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Intel Core I5-5257U',
        price: 550,
        sale: 12,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [ 'https://ae04.alicdn.com/kf/H7291f3430fbe4a11ac37cf434b8ae1dez/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H233a782787b0453588da010701dea092G/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Ha400a7ecbc76400a93d4d37f95667c90a/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 3,
        title: 'Xiaomi RedmiBook Pro 15',
        price: 1100,
        sale: 15,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://ae04.alicdn.com/kf/Hfaa22dbfa957407cb8f6753cace48065M/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg',
            'https://ae04.alicdn.com/kf/H8b37f4e8cbd44d178088754ab9488e2c6/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg',
            'https://ae04.alicdn.com/kf/H23bf88063e484d5892ee2e74a3771bedB/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Liectroux ZK901',
        price: 336,
        sale: 20,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images:['https://ae04.alicdn.com/kf/H7e6f05174df049ecb8ed01bdef82d2bfd/Liectroux-ZK901.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hfc12cb0c32ff41d2a2f73c33c3bf1adaX/Liectroux-ZK901.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hcbf731ef71634db8a55f4e93e47ba89cS/Liectroux-ZK901.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'SaengQ',
        price: 31,
        sale: 8,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [ 'https://ae04.alicdn.com/kf/Ha707ee79da10455197f7b764d9c3206eY/saengQ.jpg_50x50.jpg ', 'https://ae04.alicdn.com/kf/H91139bf9eae74001a66b953a0e299ed4y/saengQ.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hc26769622dd649d0bdea994b2372b1e6m/saengQ.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'Vention Micro USB',
        price: 10,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hc5d0d372de5048508497b599999769e83/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H47f43baddf7347a7b2a962579401fabcR/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H71a403bf9b524d46b8c2da60fda83c9ds/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'ATNJ',
        price: 80,
        sale: 5,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hf52790403f5f4958b069a5f6d1e09f3d2/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hd97c897f234549278ccf3c0dc29ef26fs/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H8238513194cb4ef38d445614ccedd9aak/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'ALLPOWERS',
        price: 470,
        sale: 10,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/H151029c9fafb4ebf94fee1a381483a80Q/S-110-220.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H89e6d6c532a142ed8e055da2701d0954q/S-110-220.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hd81345e725d64021908e4dcdce12339bo/S-110-220.jpg_50x50.jpg' ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 12 Pro Max',
        price: 1299,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Телефон хорош'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Не за свои деньги это существо'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone X ',
        price: 400,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Неплох'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Samsung Smart Tv',
        price: 1099,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Широченный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Мой интернет не тянет, по этому плох'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Samsung Uhd TV',
        price: 990,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Широченный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'LG Gram',
        price: 700,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Мощный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, даже ГТА 4 не тянет'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'LG Gram Notebook',
        price: 750,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Wash Machine WAW32760ME',
        price: 850,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
         isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Жена стирает на УРА'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Жена бьет, стираю сам'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'Coffee Machine TKA6A041',
        price: 1250,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'За то есть кофе '
            },
            {
                name: 'Barbara',
                like: false,
                text: 'не вкусный кофе'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 5,
        title: 'Mi Air Dods',
        price: 50,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Звук приятный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Звук больной собаки'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 5,
        title: 'Xiaomi Mi Band',
        price: 350,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
         // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Главное время'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 5,
        title: 'iPhone 12 Pro Max',
        price: 1299,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },

    //1
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG Nano80 2020',
        price: 590,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://i.rtings.com/assets/products/8CfGZVom/lg-nano80-2020/design-medium.jpg',
            'https://ultrahd.su/wp-content/uploads/2020/05/02-ultrahd.su-nano80-obzor.jpg',
            'https://lh3.googleusercontent.com/proxy/LE2zh_fIX-NilziE3WB3n2aDUXG4g-w9dZ1tFUcvoOX6csaosyqpYVLPLNfEwhFQHLipHzsnRoR61JZGb4U9ANjltBWQW7qgt9K3RAZgU3jGoDb37S_QlVcNsXXFo5_yueRx'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Владимир Д.',
                like: true,
                text: 'Хорошая картинка, если правильно настроить свето передачу.'
            },
            {
                name: 'Игорь Анатольевич',
                like: true,
                text: 'Качественное изображение,хороший звук,стильный дизайн.'
            },
            {
                name: 'Василий',
                like: false,
                text: 'Качество не очень'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 1,
        title: '40 m 5070',
        price: 400,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://esavdo.uz/storage/product_images/product_20206/23eaa18e-10f7-45bf-bc60-d4009064a931.png',
            'https://univershop.uz/wp-content/uploads/2020/07/5e15bcc63ac00.jpg',
            'https://apollo-olx.cdnvideo.ru/v1/files/tu7vrhdms35f-UZ/image;s=644x461'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: false,
                text: 'качество не очень'
            },
            {
                name: 'Владимир Д',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 11',
        price: 820,
        sale: 3,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://elmakon.uz/image/original/c9ScPAzqAdhAz67YUKfhK5qvBxSoiUxSWyVdvn8Hgvn3KIL2PHm765F',
            'https://files.glotr.uz/company/000/001/689/products/2019/09/25/15694152810501-c596ee717802677cb9838e164aee70dc.jpg?_=ozbol',
            'https://www.ixbt.com/img/x780x600/r30/00/02/23/14/Appleiphone11familylineup091019.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Игорь Анатольевич',
                like: true,
                text: 'Отличная камера'
            },
            {
                name: 'Дмитрий',
                like: false,
                text: 'Не нравится, что нет в комплекте адаптера и наушников. Но это нарекания к самой apple'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Samsung Galaxy S21',
        price: 1000,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://cdnimg.rg.ru/i/photogallery/2021/01/14/4a1f722db95c3b4/4a1f722db95c3b41610628492.JPG',
            'https://c.dns-shop.ru/original/st4/867934187c35d175977019125d68319f/57ad304cf33ba0a8fbef49d64e7ffd1a1740601b23ff2dcb17e00d03b34aabc2.jpg',
            'https://img.mvideo.ru/Pdb/30054907b.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Отличный телефон'
            },
            {
                name: 'Владимир Д',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 3,
        title: 'Xiaomi Mi Notebook Pro',
        price: 820,
        sale: 3,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://mishka-shop.com/upload/resize_cache/webp/iblock/7e6/1090_800_1/0.webp',
            'https://myxiaomi.uz/wp-content/uploads/2019/07/36c45c8dd36e83f95d12f4a9f00fcc0b.jpg',
            'https://m.media-amazon.com/images/I/61nJ41joQ9L._AC_SX522_.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Денис',
                like: true,
                text: 'Отличный ноут'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Samsung Notebook 9 Pro',
        price: 900,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://www.notebookcheck-ru.com/typo3temp/_processed_/4/b/csm_SamsungNotebook9Pro13__1__88bb908012.jpg',
            'https://tehnografi.com/wp-content/uploads/2019/09/Samsung-Notebook-9-Pro-13-%D0%B4%D1%8E%D0%B9%D0%BC%D0%BE%D0%B2-2019.jpeg',
            'https://www.ixbt.com/img/n1/news/2019/0/2/Notebook-9-Pro_main_1_large.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Он как 12, только в более приятном корпусе.Батарею держит полтора дня'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'Оптимальный телефон по цене-качество. Покупал при наличии в продаже 12-х моделей. Но отличия не стоят денег, которые за них просят.'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'миксер bosch bs-1629',
        price: 15,
        sale: 1,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://yukber.uz/image/cache/catalog/product/YK3667/3667-600x600.jpg',
            'https://img5.lalafo.com/i/posters/original/7d/cc/ea/65b245a964773b28a96685c652.jpeg',
            'https://images.satu.kz/135918333_w200_h200_mikser-ruchnoj-bosch.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Barbara',
                like: true,
                text: 'Отличный миксер'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'ЧАЙНИК BOSCH TWK70B03',
        price: 200,
        sale: 3,
        saleEnd: 1,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://object.pscloud.io/cms/cms/Photo/img_0_35_380_2.png',
            'https://bosch-uzbekistan.uz/thumb/2/RsfruFgk_oqCDd31rqsrdw/600r600/d/mcsa02665290_i7799_2017554_twk70b03_def.jpg',
            'https://kontakt.az/wp-content/uploads/2020/06/MCSA02630111_BO_K_15_KWE_other_TWK70B03_picture_KF2_perspective_ENG_230318_def.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
            {
                name: 'Сергей',
                like: false,
                text: 'качество не очень'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'Xiaomi MI Redmi AirDots',
        price: 30,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://archa.uz/image/cache/catalog/xiaomi/airdots/xiaomi-mi-airdots-black-right-500x500.jpg',
            'https://elmakon.uz/image/original/YgDgiqGKvQD7A5jiEmvLoaKf3oP6R26MjTZ1yoJKs9tE0rfwfVYpqjL27VtA.jpeg',
            'https://archa.uz/image/cache/catalog/xiaomi/airdots/xiaomi-mi-airdots-black-perspective-500x500.jpgg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Денис',
                like: true,
                text: 'Звук громкий и качество неплохое, кнопки удобные, сами наушники выглядят стильно'
            },
            {
                name: 'Дмитрий',
                like: true,
                text: 'Замечательное соотношение цена/качество'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 5,
        title: 'Samsung U Flex Headphones',
        price: 55,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://avatars.mds.yandex.net/get-mpic/4397006/img_id4562519566324025753.jpeg/orig',
            'https://images.samsung.com/is/image/samsung/ru-u-flex-headphones-eo-bg950-eo-bg950cwegru-dynamicivorywhite-72436365?$720_576_PNG$',
            'https://images.samsung.com/is/image/samsung/ru-u-flex-headphones-eo-bg950-eo-bg950cbegru-dynamicblack-72436270?$720_576_PNG$'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Влад',
                like: true,
                text: 'Хороший звук; автономность; отличный прием сигнала и радиус действия'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'Продолжительное воспроизведение музыки, удобные, быстрый заряд.'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG',
        price: 250,
        sale: 9,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/HTB1y2PZaPDuK1RjSszdq6xGLpXag/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/HTB16_n2aLfsK1RjSszgq6yXzpXah/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/HTB1iWabaA9E3KVjSZFGq6A19XXag/22-24-26-28-32-HD-T2-andriod-Wi-Fi.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 12 Pro Max',
        price: 1600,
        sale: 15,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hed3f30f124ac488aaf30dfbf00aadbb7u/iPhone-12-Pro-Max.jpeg_50x50.jpeg', 'https://ae04.alicdn.com/kf/H1fc23e049c9147bf8c4fa021772b9d41l/iPhone-12-Pro-Max.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hec5b2c51255247acb2cbd190538d5f89G/iPhone-12-Pro-Max.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Galaxy S20 Ultra 5G G988U1',
        price: 800,
        sale: 12,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hd7a17366c2a14544be28ec995ae0f1b8h/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.png_50x50.png', 'https://ae04.alicdn.com/kf/Had729598855f4bcba154bbf478bd15f0E/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H0b83fc8202da459aa3d6c3f854bf0be0A/Samsung-Galaxy-S20-5G-G988U1-G988U-90-6-9-128GB-ROM-12.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Intel Core I5-5257U',
        price: 550,
        sale: 12,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/H7291f3430fbe4a11ac37cf434b8ae1dez/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H233a782787b0453588da010701dea092G/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Ha400a7ecbc76400a93d4d37f95667c90a/Intel-Core-I5-5257U-15-6-8-128-256-SSD.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 3,
        title: 'Xiaomi RedmiBook Pro 15',
        price: 1100,
        sale: 15,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://ae04.alicdn.com/kf/Hfaa22dbfa957407cb8f6753cace48065M/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg',
            'https://ae04.alicdn.com/kf/H8b37f4e8cbd44d178088754ab9488e2c6/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg',
            'https://ae04.alicdn.com/kf/H23bf88063e484d5892ee2e74a3771bedB/2021-Xiaomi-RedmiBook-Pro-15-Intel-Core-i7-11370H-MX450-16.jpg_50x50.jpg'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Liectroux ZK901',
        price: 336,
        sale: 20,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/H7e6f05174df049ecb8ed01bdef82d2bfd/Liectroux-ZK901.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hfc12cb0c32ff41d2a2f73c33c3bf1adaX/Liectroux-ZK901.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hcbf731ef71634db8a55f4e93e47ba89cS/Liectroux-ZK901.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'SaengQ',
        price: 31,
        sale: 8,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Ha707ee79da10455197f7b764d9c3206eY/saengQ.jpg_50x50.jpg ', 'https://ae04.alicdn.com/kf/H91139bf9eae74001a66b953a0e299ed4y/saengQ.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hc26769622dd649d0bdea994b2372b1e6m/saengQ.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'Vention Micro USB',
        price: 10,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hc5d0d372de5048508497b599999769e83/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H47f43baddf7347a7b2a962579401fabcR/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H71a403bf9b524d46b8c2da60fda83c9ds/Vention-Micro-USB-3A-USB-Type.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'ATNJ',
        price: 80,
        sale: 5,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/Hf52790403f5f4958b069a5f6d1e09f3d2/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hd97c897f234549278ccf3c0dc29ef26fs/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H8238513194cb4ef38d445614ccedd9aak/ATNJ-AS-D3-70-2-2G-4G-SMA.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'ALLPOWERS',
        price: 470,
        sale: 10,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: ['https://ae04.alicdn.com/kf/H151029c9fafb4ebf94fee1a381483a80Q/S-110-220.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/H89e6d6c532a142ed8e055da2701d0954q/S-110-220.jpg_50x50.jpg', 'https://ae04.alicdn.com/kf/Hd81345e725d64021908e4dcdce12339bo/S-110-220.jpg_50x50.jpg'],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 12 Pro Max',
        price: 1299,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Телефон хорош'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Не за свои деньги это существо'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone X ',
        price: 400,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Неплох'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Samsung Smart Tv',
        price: 1099,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Широченный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Мой интернет не тянет, по этому плох'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Samsung Uhd TV',
        price: 990,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Широченный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'LG Gram',
        price: 700,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Мощный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, даже ГТА 4 не тянет'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'LG Gram Notebook',
        price: 750,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Wash Machine WAW32760ME',
        price: 850,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Жена стирает на УРА'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Жена бьет, стираю сам'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'Coffee Machine TKA6A041',
        price: 1250,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'За то есть кофе '
            },
            {
                name: 'Barbara',
                like: false,
                text: 'не вкусный кофе'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 5,
        title: 'Mi Air Dods',
        price: 50,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Звук приятный'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Звук больной собаки'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 5,
        title: 'Xiaomi Mi Band',
        price: 350,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Главное время'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Телевизор Samsung 50TU8000UZ 4K UHD',
        price: 600,
        sale: 5,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            "https://mediapark.uz/upload/file/mp/products/TV/Samsung_50TU8000UZ_4K_UHD.jpg",
            "https://mediapark.uz/upload/file/mp/products/images/y6jPIhDsdDBOq56AyHTUijvz32KiKgh0.jpg",
            "https://mediapark.uz/upload/file/mp/products/images/feyeRpzAJ204wSczfkldcWHzayAm_uW9.jpg"
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: '4K UHD Кайф !'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Мне всё не нравится вроде'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: 'Samsung Galaxy A52',
        price: 300,
        sale: 3,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            "https://www.cifrus.ru/photos/small/samsung/samsung-galaxy-a52-4gb-128gb-dual-lte-lavender-rst-2.jpg",
            "https://www.cifrus.ru/photos/small/samsung/samsung-galaxy-a52-4gb-128gb-dual-lte-lavender-rst-5.jpg",
            "https://www.cifrus.ru/photos/medium/samsung/samsung-galaxy-a52-4gb-128gb-dual-lte-lavender-rst-3.jpg"
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'был на обзоре на канале "Не шарю!"'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'потёртости на хромированной кромке телефона'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Samsung book s',
        price: 749,
        sale: 1,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            "https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/galaxy-book-s/wi-fi/71620/BookSWiFi_Featured_LeaveChargeratHome_D.jpg?$cm-g-fb-full-bleed-img-jpg$",
            "https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/galaxy-book-s/wi-fi/071520/BookSWiFi_Bundle_MoreFeatures_01_DoitAll_D.jpg?$feature-benefit-bundle-jpg$",
            "https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/galaxy-book-s/wi-fi/071520/BookSWiFi_2UpContentBlock_01_AKG_D.jpg?$cm-g-content-block-two-block-jpg$"
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Easily stay on top of your home, right from your PC.'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Заказал ПК а принесли это :('
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 4,
        title: 'Стиральная машинка с технологиями Eco Bubble™',
        price: 314,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/wd10t754cbx-ld/gallery/uz-ru-combo-wd10t754dbhs3-wd10t754cbx-ld-463336110?$684_547_PNG$",
            "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/wd10t754cbx-ld/gallery/uz-ru-combo-wd10t754dbhs3-wd10t754cbx-ld-463336090?$684_547_PNG$",
            "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/wd10t754cbx-ld/gallery/uz-ru-combo-wd10t754dbhs3-wd10t754cbx-ld-463336091?$684_547_PNG$"
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Сам сушит одежду после стирки'
            },
            {
                name: 'Barbara',
                like: false,
                text: ''
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 4,
        title: 'Чехол Smart Clear View Cover S21+',
        price: 314,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-smart-clear-view-cover-galaxy-s21-plus-5g-ef-zg996cbegru-363806207?$684_547_PNG$",
            "https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-smart-clear-view-cover-galaxy-s21-plus-5g-ef-zg996cbegru-363806196?$684_547_PNG$",
            "https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-smart-clear-view-cover-galaxy-s21-plus-5g-ef-zg996cbegru-363806197?$684_547_PNG$"
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Антибактериальное покрытие'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Быстрый просмотр уведомлений'
            },

        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 11 128 ГБ',
        price: 650,
        sale: 3,
        saleEnd: 2,
        isCart: false,
        isLove: true,
        images: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-green-select-2019_GEO_EMEA?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1567021766404'
        ],
        comments: [
            {
                name: 'Александр',
                like: true,
                text: 'говорят что в линейки с 10 айфона в этом году убрали зарядное устройство и наушники , это правда ?'
            },
            {
                name: 'Саша',
                like: false,
                text: 'Телефон не плохой, но смущает очень сильно то что слабая зарядка, вот хотел спросить, можно ли купить зарядку как у айфон 12 про макс и не переплачивать за диагональ которая мне толком не нужна'
            },
            {
                name: 'Юрий',
                like: false,
                text: 'Думаю какуй лучше iPhone подарить на НГ 11 на 128 гб памяти или 12.'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG OLED 48CX',
        price: 750,
        sale: 5,
        saleEnd: 1,
        isCart: true,
        isLove: false,
        images: [
            'https://mzimg.com/big/u1/ghdsu3bedu1.jpg'
        ],
        comments: [
            {
                name: 'ТЕХНО-КОТИК',
                like: true,
                text: 'Когда официальный старт продаж в Украине?'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'Какова ширина, глубина, и высота данного телевизора?'
            },
            {
                name: 'Yurii',
                like: false,
                text: 'USB 2.0 или больше?'
            },
            {
                name: 'Владлен В.',
                like: false,
                text: 'Вижу, что есть модель OLED65CX6LA и OLED65CX3LA а в чем между ними разница? Кроме того, что на OLED65CX3LA можно найти цену поприятнее'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Xiaomi MiJia Robot Vacuum Cleaner 1C',
        price: 130,
        sale: 2,
        saleEnd: 2,
        isCart: false,
        isLove: true,
        images: [
            'https://img.gkbcdn.com/s3/p/2019-10-19/xiaomi-mijia-1c-robot-vacuum-cleaner-white-1574132836326.jpg'
        ],
        comments: [
            {
                name: 'Светлана',
                like: true,
                text: 'Подскажите чем отличаются версии у пылесоса SKV4073CN от SKV4093GL?'
            },
            {
                name: 'Андрей',
                like: false,
                text: 'С начало все работало замечательно но спустя несколько месяцев он перестал мыть катает за собой полный бачек'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Bosch HNG 6764B6',
        price: 2000,
        sale: 3,
        saleEnd: 0.5,
        isCart: false,
        isLove: true,
        images: [
            'https://media3.bosch-home.com/Product_Shots/435x515/MCSA00766729_411061_HNG6764B6_def.png'
        ],
        comments: [
            {
                name: 'Серый',
                like: false,
                text: 'Стоит ли покупать? Можете посоветовать?'
            },
            {
                name: 'Юлия',
                like: false,
                text: 'Почти не чем не отличается от Bosch CMG 636BB1'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Samsung Galaxy Book Pro 360 15',
        price: 1120,
        sale: 2,
        saleEnd: 1,
        isCart: true,
        isLove: true,
        images: [
            'https://image-us.samsung.com/SamsungUS/home/computing/windows-laptop/glxy-book-pro-360/mars/new/jpg/Mars15_WiFi_Navy_020_Front-Open-With-S-Pen_US.jpg?$product-details-jpg$'
        ],
        comments: [
            {
                name: 'Сашка',
                like: true,
                text: 'Отличное обновление поколения! Менял со старого самсунг 940 pro . Круто что стал на много лечше! Я использую функцию 360 в работе, остальным подумайте нужна ли она Вам реально, есть модель book pro которая легче на 300 грамм и дешевле тысяч на 20 -) при том же железе + у нее яркость чуть выше по тестам. Уже немного приложил его, думал краска слезет, нет все норм! Если средства позволяют и особенно если у Вас телефон Самсунг - только эта модель!!'
            },
            {
                name: 'Андрей',
                like: false,
                text: 'Отличный ноут куплю как только будут в наличии'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 4,
        title: 'LG GC-B247SEDC',
        price: 780,
        sale: 1,
        saleEnd: 0.5,
        isCart: true,
        isLove: false,
        images: [
            'https://image-us.samsung.com/SamsungUS/home/computing/windows-laptop/glxy-book-pro-360/mars/new/jpg/Mars15_WiFi_Navy_020_Front-Open-With-S-Pen_US.jpg?$product-details-jpg$'
        ],
        comments: [
            {
                name: 'anonim',
                like: false,
                text: 'Буква С после G -страна производства. В данном случае Китай'
            },
            {
                name: 'Юмилия',
                like: true,
                text: 'Мне нравится размеры'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'Apple iPad Pro 11 2021 128 ГБ',
        price: 830,
        sale: 1,
        saleEnd: 0.5,
        isCart: false,
        isLove: true,
        images: [
            'https://spb.apple-market.net/files/products/ipad-pro-2021-m1-11-12.9-6.800x600.jpg'
        ],
        comments: [
            {
                name: 'Дмитрий',
                like: false,
                text: 'Как думаете стоит ли покупать?'
            },
            {
                name: 'Герман',
                like: true,
                text: 'Однозначно стоит'
            },
            {
                name: 'Амин',
                like: false,
                text: 'Я бы поспорил'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 2,
        title: 'Xiaomi Redmi Note 10 Pro 64 ГБ',
        price: 250,
        sale: 1,
        saleEnd: 0.5,
        isCart: false,
        isLove: false,
        images: [
            'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-10-774.jpg'
        ],
        comments: [
            {
                name: 'Ярослав Кицюк',
                like: false,
                text: 'Кто знает когда будет 8/128 в наличии в Украине ????? Или вобще не будет??? Не черта не понятно:('
            },
            {
                name: 'Павло',
                like: false,
                text: 'Напишите полностью что есть в коробке, особенно интересует блок, шнур и лоток симок'
            },
            {
                name: 'Ричард',
                like: false,
                text: 'Я бы пПодскажите, что же всё-таки взять и почему? Цена - не вопрос. Я понимаю, что в целом, Ми 10Т лучше, но меня смущает, что он довольно громоздкий и тяжёлый, и экран IPS, а не AMOLED(чувствительности к ШИМ’у лично у меня нет).оспорил'
            },
            {
                name: 'Николай',
                like: false,
                text: 'В slow-motion он снимает не в 120 к/с, а в 960.'
            },
            {
                name: 'LEXA81',
                like: false,
                text: 'В Xiaomi Redmi Note 10 Pro Замедленная съемка (slow-mo) 120 к/с / 720р Описание неправильное или там действительно 120 кадров ?'
            },

        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Samsung Galaxy S20 Ultra 256 ГБ',
        price: 850,
        sale: 0,
        saleEnd: 0,
        isCart: false,
        isLove: true,
        images: [
            'https://images.samsung.com/ru/smartphones/galaxy-s20/buy/carousel/mobile/1-18-hubble-z3-cosmic-gray-gallery-pc-img.jpg'
        ],
        comments: [
            {
                name: 'Amous',
                like: false,
                text: 'Когда будет в наличии S20 Ultra 512GB?'
            },
            {
                name: 'Сашка Захарчук-Симонов',
                like: false,
                text: '4g работает?'
            },
            {
                name: 'Silver',
                like: false,
                text: 'Лучше ли он Huawei p40 pro plus'
            },
            {
                name: 'Uchiha',
                like: false,
                text: 'Камера такая же,как и заявлено? Хорошо видно при 100 зуме? Стоит брать? Или лучше взять версию 20+?'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 4,
        title: 'Bosch WLG 20265 белый',
        price: 210,
        sale: 0,
        saleEnd: 0,
        isCart: true,
        isLove: true,
        images: [
            'https://otziv-otziv.ru/assets/cache/images/9/89/3223-fa71969fd198814b3d468c760923bee1-600x600-33b.jpg'
        ],
        comments: [
            {
                name: 'Ксюша',
                like: false,
                text: 'Почему на панели управления END.'
            },
            {
                name: 'Павел В',
                like: false,
                text: 'END - окончание программы'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 1,
        title: 'Xiaomi Mi Gaming Display 27',
        price: 280,
        sale: 1,
        saleEnd: 0.5,
        isCart: false,
        isLove: false,
        images: [
            'https://www.ixbt.com/img/n1/news/2020/5/3/a4Wl85DEbLKBApOu.jpg'
        ],
        comments: [
            {
                name: 'Павел',
                like: false,
                text: 'Как включить 144 гц'
            },
            {
                name: 'Егор',
                like: false,
                text: 'Не совсем понятно, есть ли технология Flicker-Free в данном мониторе, тк информация о ее наличии встречается только на екаталоге. В других обзорах или характеристиках на сторонних сайтах об этом ничего не указано'
            },
            {
                name: 'Никола',
                like: false,
                text: 'Друзья, подскажите, поддерживает ли монитор G-Sync Compatible с видеокартой GeForce RTX 3070?'
            },
            {
                name: 'Дмитрий К',
                like: false,
                text: 'Монитор поддерживает входной 4к сигнал? Скажем, чтобы PS4 Pro и PS5 имели опцию вывода изображения в 2160p на этот монитор'
            },
            {
                name: 'Амина',
                like: false,
                text: 'Указан размер с подставкой или нет?'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 1,
        title: 'Xiaomi Redmi TV Max 98 ',
        price: 5170,
        sale: 0,
        saleEnd: 0,
        isCart: false,
        isLove: true,
        images: [
            'https://cdn.lifehacker.ru/wp-content/uploads/2020/03/IMG_6687-1536x768-2_1585041341.jpg'
        ],
        comments: [
            {
                name: 'Denis',
                like: true,
                text: 'Напишите размер ширина/высота/глубина без подставок.'
            },
            {
                name: 'Евгений',
                like: false,
                text: 'Какая прошивка в данном тв, global?'
            },
            {
                name: 'Арсик',
                like: false,
                text: 'Какая технология LED, OLED?'
            },
            {
                name: 'Женя',
                like: false,
                text: 'Когда цена снизится в два раза, и станет как в Китае?'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Xiaomi Scooter 1S',
        price: 300,
        sale: 1,
        saleEnd: 0.5,
        isCart: true,
        isLove: false,
        images: [
            'https://cdn-reichelt.de/bilder/web/xxl_ws/E910/XIAOMI_SCOOTER1S_01.png'
        ],
        comments: [
            {
                name: 'Типичный КеК Изгой',
                like: true,
                text: 'Идет ли зарядка в комплекте? Как его вообще заряжать? Если не в комплекте , то где можно взять?'
            },
            {
                name: '《lega Si》',
                like: false,
                text: 'Сколько уйдет электро энергии за несколько ( 20) заряжаний'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 4,
        title: 'Xiaomi Mi Gaming Laptop',
        price: 790,
        sale: 1,
        saleEnd: 0.5,
        isCart: true,
        isLove: true,
        images: [
            'https://akket.com/wp-content/uploads/2019/07/Xiaomi-Mi-Gaming-Laptop-3-1.jpg'
        ],
        comments: [
            {
                name: 'Илья Кубарев',
                like: true,
                text: 'На аллиэкспрес уже в продаже правда 99 000 руб +'
            },
            {
                name: 'anonim',
                like: true,
                text: 'Когда появится в продаже, и предположительная цена какая?'
            },
            {
                name: 'Фёдор',
                like: true,
                text: 'Максимальная Частота обновления экрана # 144, или 60 HZ?мально кол-во герцов у ОЗУ?'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 4,
        title: 'Samsung POWERbot VR-20R7260WC',
        price: 210,
        sale: 0,
        saleEnd: 0,
        isCart: true,
        isLove: false,
        images: [
            'https://images.samsung.com/is/image/samsung/ru-vr20r7260wc-vr20r7260wc-ev-frontsilver-174602215?$720_576_PNG$'
        ],
        comments: [
            {
                name: 'Маша',
                like: false,
                text: 'пользуюсь Samsung POWERbot VR-20R7260WC неделю рекомендую купить обязательно'
            },
            {
                name: 'Паша',
                like: false,
                text: 'Когда выбирали он хорошо упал в цене и взяли эту модель хотя изначально он был намного дороже и думали брать модель VR20M7070. Но оно даже и к лучшему так как этот уже и разговаривает и две щётки в комплекте. В целом пылесосом довольны, убирает быстро и хорошо. Очень важно! В обзорах говорили что он не очень убирает по сравнению с сяоми, важно что самсунг должен поездить пару дней и нарисовать себе визуальную карту, тогда он очень быстро и эффективно убирает чем при покупке.'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 1,
        title: 'LG UltraGear 27GL850 27',
        price: 400,
        sale: 0,
        saleEnd: 0,
        isCart: true,
        isLove: true,
        images: [
            'https://www.lg.com/us/images/monitors/md06064916/gallery/desktop-01.jpg'
        ],
        comments: [
            {
                name: 'Максим',
                like: false,
                text: 'Стабильно ли работают 2k + 144 Гц? Кто-то писал , что в таком разрешении количество герц понижается до 100, правда ли это?'
            },
            {
                name: 'Камиль',
                like: false,
                text: 'В одном их отзывов я узнал, что реальный отклик 8.3 МС, но так ли это?'
            },
            {
                name: 'Никита Родин',
                like: false,
                text: 'Интересно на этом мониторе пикселя долговечные?'
            },
            {
                name: 'Oleg Rusalkov',
                like: false,
                text: 'Когда запланирован старт продаж в России?'
            },
            {
                name: 'Саша Чапалюк',
                like: false,
                text: 'Я хотел бы узнать нет ли засветов у данного монитора.'
            },
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 3,
        title: 'Apple MacBook Pro 13 (2020) M1',
        price: 1780,
        sale: 0,
        saleEnd: 0,
        isCart: true,
        isLove: true,
        images: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604347427000'
        ],
        comments: [
            {
                name: 'Данила',
                like: false,
                text: 'Когда стоит ожитдать его уже в продаже?'
            },
            {
                name: 'Влад',
                like: false,
                text: 'Ожидается в нналичии с 4 декабря у главных дистрибьютов.'
            },
            {
                name: 'Валентин К.',
                like: false,
                text: 'К сожалению конкретных дат вам не подскажем. Следите за обновлениями на нашем сайте.'
            }
        ],
        likeProcent: 0
    },

    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 1,
        title: 'Apple MacBook Pro 13 (2020) M1',
        price: 400,
        sale: 1,
        saleEnd: 0.5,
        isCart: true,
        isLove: true,
        images: [
            'https://www.e-katalog.ru/jpg_zoom1/1780801.jpg'
        ],
        comments: [
            {
                name: 'ДанилаВладимир Морозов',
                like: true,
                text: 'В чем отличие моделей 55TU8500 от 55TU8570'
            },
            {
                name: 'ZooM',
                like: false,
                text: 'Имеет ли этот телевизор матрицу 10 бит ??'
            },
            {
                name: 'Ищу телевизор',
                like: false,
                text: 'Есть ли поддержка AirPlay или AirPlay 2? В таблице технических особенностей упоминания об этом нет. А вот в прошлогодней модели Samsung UE-55TU8000 55" такая поддержка есть. Кто владеет или кто компетентен подскажите.'
            },
            {
                name: 'Николай Синица',
                like: false,
                text: 'смогу ли я подключить беспроводную мышь?'
            },
            {
                name: 'Григорий',
                like: false,
                text: 'Поддерживает ли данная модель частоту 5Ггц?'
            },
            {
                name: 'Артем',
                like: true,
                text: 'В этой модели присутствует игровой режим?'
            },
        ],
        likeProcent: 0
    },
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 5,
        title: 'iPhone 12 Pro Max',
        price: 1299,
        sale: 4,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Alex',
                like: true,
                text: 'Лучший ноут эвер'
            },
            {
                name: 'Barbara',
                like: false,
                text: 'Зря купил, хрень какая-то'
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 2,
        title: 'iPhone 10 Pro ',
        price: 1499,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: true,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Ярослав',
                like: true,
                text: 'Лучший ноут ,очень красивый'
            },
            {
                name: 'Майя',
                like: false,
                text: 'Очень плохая вещь'
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 2,
        title: 'Xiomi not 4',
        price: 9900,
        sale: 2,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Тимур',
                like: true,
                text: 'Очень быстрая скарость '
            },
            {
                name: ' Владимир',
                like: false,
                text: 'Очень сильно логает'
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 2,
        title: 'Xiomi A 10',
        price: 1000,
        sale: 7,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Ксения',
                like: true,
                text: 'Высокая скорость интернета'
            },
            {

                name: '  Елизавета',
                like: true,
                text: 'Много памяти '
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: 'samsung e1232',
        price: 360,
        sale: 24,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Давид',
                like: true,
                text: 'Хорошая производительнсть'
            },
            {

                name: '  Анатолий',
                like: true,
                text: 'Много памяти, красивый вид '
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: 'Samsung S3600 Silver',
        price: 530,
        sale: 14,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: false,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Анна',
                like: true,
                text: 'Хорошая производительнсть,не выснет '
            },
            {

                name: '  Сергей',
                like: false,
                text: 'Просто ужасная Упаковка ' 
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Smart TV TU8500 Series.',
        price: 530,
        sale: 14,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: false,
        // Добавлено ли в избранное
        isLove: true,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Григорий',
                like: true,
                text: 'Очень большой'
            },
            {

                name: '  Дамир',
                like: false,
                text: 'Нету 4K' 
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 1,
        title: 'Smart TV TU8500 Series.',
        price: 530,
        sale: 14,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: true,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Виктория',
                like: true,
                text: 'Очень большой,И есть 4K'
            },
            {

                name: '  Ангелина',
                like: false,
                text: 'Плохой звук' 
            },
        ],
        likeProcent: 0
    }, {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 5,
        title: 'CERULEAN',
        price: 530,
        sale: 14,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: true,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Виктория',
                like: true,
                text: 'Красивый чехол'
            },
            {

                name: '  Ангелина',
                like: false,
                text: 'Плохо держится в руке ' 
            },
        ],
        likeProcent: 0
    },{
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 5,
        title: ' Samsung Fast Charge',
        price: 530,
        sale: 14,
        saleEnd: 0.5,
        // Добавлено ли в корзину
        isCart: true,
        // Добавлено ли в избранное
        isLove: true,
        // Массив с картинками от двух и более
        images: [
            'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        // Массив с комментариями, внутри объекты. Впишите от двух и более комментариев
        comments: [
            {
                name: 'Даниил',
                like: true,
                text: 'Быстро заряжает тел'
            },
            {

                name: '  Мирон',
                like: false,
                text: 'Сразу же сгорел на первый день' 
            },
        ],
        likeProcent: 0
    }
]

export { brands, users, categories, products }
