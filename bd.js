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
        name: 'Samsung'
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
    //1
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 4,
        title: 'Холодильник GN-C372SBCN',
        price: 626,
        sale: 2,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'https://tezz.uz/uploads/images/product/519/thumbs/205292-10501050.jpg',
            'https://ikarvon.uz/wp-content/uploads/2020/11/605.jpg',
            'https://techno.uz/image/cache/catalog/i/na/jo/422c93e986946d74048b9dc8a170f661-700x500.jpg'
        ],

        comments: [
            {
                name: 'Иван Иваныч',
                like: true,
                text: 'Первых холодлиьник который можно сравнить с советским'
            },
            {
                name: 'Ирина Васильевна',
                like: true,
                text: 'Помещаются все продукты купленные на новый год'
            },
        ],
        likeProcent: 0
    },
    // 2
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 1,
        title: 'UA32H3200 Smart',
        price: 300,
        sale: 3,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/ArtelTV/Artel_UA32H3200_Smart.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/szw9rJL1OSsVpZT9dO_LAzjjWW4FBPxL.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/o6ApqqKsRTY-GOhFG4nzNbsITUkVJWox.jpg'
        ],

        comments: [
            {
                name: 'Джамхур',
                like: true,
                text: 'Очень хороший телевизор по такой цене и главное отечественного производства'
            },
            {
                name: 'Ксения',
                like: false,
                text: 'Очень хрупкий телевизор, при падении с точки опоры разбился полностью'
            },
        ],
        likeProcent: 0
    },
    //3
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 5,
        title: 'Redmi AirDots 2 True Wireless Bluetooth Headset',
        price: 20,
        sale: 0,
        saleEnd: 0,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Naushnikiikolonki/bluetooth/redmi_airdots/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset_ava_2-60x60_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Naushnikiikolonki/bluetooth/redmi_airdots/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset_ava_4-60x60_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Naushnikiikolonki/bluetooth/redmi_airdots/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset_ava_3-60x60_wmark.jpg'
        ],

        comments: [
            {
                name: 'Александр',
                like: false,
                text: 'быстро ухудшается батарейка, а для меня это очень важно'
            },
            {
                name: 'Мария',
                like: true,
                text: 'По отношению цены-качества очень даже неплохо'
            },
        ],
        likeProcent: 0
    },
    //4
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 5,
        title: 'Galaxy Buds',
        price: 172,
        sale: 10,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/Naushniki/Samsung_Galaxy_Buds.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/hYUGaYiiJaKw1tzwQk0jutDJzfvKmd8h.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/fF-DzffCgK9lHoeq4uhNYtB7_ul6Mkiy.jpg'
        ],

        comments: [
            {
                name: 'Диляфруз',
                like: false,
                text: 'Не подходит на кнопочный телефон'
            },
            {
                name: 'Дарья',
                like: true,
                text: 'Все очень даже хорошо. Удобно, приятный звук и стильно. Спасибки^_^'
            },
        ],
        likeProcent: 0
    },
    //5
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 1,
        title: 'UML-422-90 42',
        price: 250,
        sale: 3,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
            'https://i.ebayimg.com/images/g/QSYAAOSwoEFb~~d2/s-l1600.jpg'
        ],

        comments: [
            {
                name: 'Кирилл',
                like: false,
                text: 'Плохая акустика данного телевизора'
            },
            {
                name: 'Надежда',
                like: true,
                text: 'Легкий по весу, в чем его плюс для переезда'
            },
        ],
        likeProcent: 0
    },
    //6
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 2,
        title: 'LG G7 fit',
        price: 220,
        sale: 6,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://avatars.mds.yandex.net/get-mpic/4493022/img_id521260780176003010.jpeg/13hq',
            'https://avatars.mds.yandex.net/get-mpic/4721581/img_id8794716655444553679.jpeg/13hq',
            'https://avatars.mds.yandex.net/get-mpic/3927509/img_id5956923352264415846.jpeg/13hq'
        ],

        comments: [
            {
                name: 'Дамир',
                like: false,
                text: 'Противоударность на низком уровне, уснул на нем, треснул'
            },
            {
                name: 'Феруза',
                like: true,
                text: 'Идеальный подарок для второй половинки'
            },
        ],
        likeProcent: 0
    },
    //7
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 3,
        title: 'Ноутбук Xiaomi Mi Notebook Pro 15',
        price: 1200,
        sale: 5,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Plansheti/noutbuki/mi_notebook_pro_15_enhanced_edition/mi_notebook_pro_15_enhanced_edition_ava_1-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Plansheti/noutbuki/mi_notebook_pro_15_enhanced_edition/mi_notebook_pro_15_enhanced_edition_ava_3-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Plansheti/noutbuki/mi_notebook_pro_15_enhanced_edition/mi_notebook_pro_15_enhanced_edition_ava_2-700x700_wmark.jpg'
        ],

        comments: [
            {
                name: 'Фируз',
                like: true,
                text: 'комфортный и легкий для мобильности'
            },
            {
                name: 'Дильдора',
                like: false,
                text: 'Дорогой'
            },
        ],
        likeProcent: 0
    },
    //8
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 2,
        title: 'Quadro',
        price: 150,
        sale: 4,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://www.artelgroup.org/upload/gallery_pictures/1_zzbTezu.png',
            'https://www.artelgroup.org/upload/gallery_pictures/3_qmC8PRC.png',
            'https://www.artelgroup.org/upload/gallery_pictures/6_QsEVWc1.png'
        ],

        comments: [
            {
                name: 'Ойбой',
                like: true,
                text: 'Телефон бомба честно говоря'
            },
            {
                name: 'Тимур',
                like: false,
                text: 'ужасный телефон. В нем из хорошего только название'
            },
        ],
        likeProcent: 0
    },
    //9
    {
        id: +Math.random().toString().slice(3),
        brandId: 5,
        categorieId: 3,
        title: 'MacBook Pro 13 M1/8/512GB Touch Bar',
        price: 1750,
        sale: 10,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/Notebook/Apple_MacBook_Pro_13_M1-8-512GB_Touch_Bar_(2020).jpg',
            'https://mediapark.uz/upload/file/mp/products/images/GGAFc21GoeSBMdaryMFgUbld1V5iCwqC.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/M_tNG26RivKU73TFn4YofwjpkfD8MlTK.jpg'
        ],

        comments: [
            {
                name: 'Денис',
                like: true,
                text: 'Нет слов. Все как всегда.'
            },
            {
                name: 'Зарнигор',
                like: false,
                text: 'Непонятное и неудобное ПО'
            },
        ],
        likeProcent: 0
    },
    //10
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 2,
        title: 'Redmi Note 10S 6/64GB',
        price: 300,
        sale: 5,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://m.openshop.uz/public/uploads/products/photos/202106/J1dJwOoJ3S6LB71Xru6CuNqDPrF9TLh3bm6PBUeY.jpg',
            'https://opt-1739925.ssl.1c-bitrix-cdn.ru/upload/iblock/0d6/0t8xg09i3hz7lx3f3i4rz7see6vsh7d2.jpg?162271847718258',
            'data:image/jpeg;base64,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'
        ],

        comments: [
            {
                name: 'Джонибек',
                like: true,
                text: 'Вся моя семья пользуется телефона от этой компании и все отлично'
            },
            {
                name: 'Татьяна',
                like: false,
                text: 'Айфон лучшу'
            },
        ],
        likeProcent: 0
    },
    //11
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Пылесос BGС05AAA1',
        price: 135,
        sale: 2,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://bosch-uzbekistan.uz/d/8d4a1a9b42abb362806dfc5981e650f1.jpg',
            'https://bosch-uzbekistan.uz/thumb/2/WhgjW5N4Ht0Q2EzEAA9ZIw/3520r2350/d/bosch_bgc05aaa1_images_10781181489.jpg',
            'data:image/jpeg;base64,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'
        ],

        comments: [
            {
                name: 'Рита',
                like: true,
                text: 'Работая домработницей скажу одно, лучшее приобретение'
            },
            {
                name: 'Комиль',
                like: false,
                text: 'шумит ужасно, каждое утро начинается не с кофе'
            },
        ],
        likeProcent: 0
    },
    //12
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 3,
        title: 'Galaxy Book Flex',
        price: 950,
        sale: 5,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://www.ixbt.com/img/n1/news/2020/7/5/galaxy-book-flex-5g_large.jpg',
            'https://mobile-review.com/news/wp-content/uploads/Galaxy-Book-Flex13_2.jpg',
            'https://mobile-review.com/news/wp-content/uploads/Galaxy-Book-Flex13_1.jpg'
        ],

        comments: [
            {
                name: 'Санёк',
                like: false,
                text: 'Минус в его сгибании. Ребенок сломал все равно'
            },
            {
                name: 'Анастасия',
                like: true,
                text: 'Дизайн на высшем уровне. А работоспособность не отстает'
            },
        ],
        likeProcent: 0
    },
    //12
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Беспроводной пылесос Dreame V10 Vacuum Cleaner',
        price: 200,
        sale: 3,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/pilesos/dreame_v10/dreame_v10_ava1-340x420_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/pilesos/dreame_v10/ruchnoi_pylesos_dreame_v10_ava2-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/pilesos/dreame_v10/dreame_v10_ava3-700x700_wmark.jpg'
        ],

        comments: [
            {
                name: 'Галя',
                like: false,
                text: 'Пыталась найти провод. Ненашла и выкинула. Требуется за такую стоимость полная комплектация'
            },
            {
                name: 'Арслан',
                like: true,
                text: 'Лучший подарок жене. Пылесошу в итоге сам'
            },
        ],
        likeProcent: 0
    },
    //13
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 1,
        title: 'LG LM57 43" FHD телевизор',
        price: 500,
        sale: 7,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://www.lg.com/ru/images/televisions/md07535367/gallery/large02.jpg',
            'https://www.lg.com/ru/images/televisions/md07535367/gallery/large10.jpg',
            'https://www.lg.com/ru/images/televisions/md07535367/gallery/large11.jpg'
        ],

        comments: [
            {
                name: 'Боря',
                like: true,
                text: 'Смотреть футбик на нем одно удовольствие, наконец-то вижу передвижение мяча'
            },
            {
                name: 'Лариса',
                like: false,
                text: 'Не могу оторвать мужа от телевизора, целый день смотрит футбол'
            },
        ],
        likeProcent: 0
    },
    //14
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: 'Galaxy A72 6Gb/128Gb Dual LTE Lavender',
        price: 550,
        sale: 5,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://www.cifrus.ru/photos/medium/samsung/samsung-galaxy-a72-6gb-128gb-dual-lte-lavender-rst-1.jpg',
            'https://www.cifrus.ru/photos/medium/samsung/samsung-galaxy-a72-6gb-128gb-dual-lte-lavender-rst-4.jpg',
            'https://www.cifrus.ru/photos/medium/samsung/samsung-galaxy-a72-6gb-128gb-dual-lte-lavender-rst-5.jpg'
        ],

        comments: [
            {
                name: 'Дима',
                like: true,
                text: 'Крутой и современного стиля телефон. Спасибо'
            },
            {
                name: 'Кирилл',
                like: true,
                text: 'Хорошая оптимизация и прекрасная камера'
            },
        ],
        likeProcent: 0
    },
    //15
    {
        id: +Math.random().toString().slice(3),
        brandId: 4,
        categorieId: 4,
        title: 'ART HD316FN S steel',
        price: 380,
        sale: 5,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/artelholodilniki/FN316.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/9PV58Wdv-Lkcw-BVoCEYuro8OT40w7ob.jpg',
            'https://mediapark.uz/upload/file/mp/products/artelholodilniki/FN316.jpg'
        ],

        comments: [
            {
                name: 'Жорик',
                like: false,
                text: 'у меня мороженное тает постоянно, невозможно'
            },
            {
                name: 'Гриша',
                like: false,
                text: 'Сгорел при первом скачке напряжения'
            },
        ],
        likeProcent: 0
    },
    //16
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: ' Galaxy S21 Plus',
        price: 1000,
        sale: 3,
        saleEnd: 0.5,

        isCart: false,

        isLove: false
        ,

        images: [
            'https://ru.etoren.com/upload/images/0.67783000_1610614368_samsung-galaxy-s21-plus-5g-dual-sim-g996b-256gb-black-8gb-ram.jpg',
            'https://cdn-files.kimovil.com/phone_front/0005/53/thumb_452032_phone_front_big.jpeg',
            'https://www.cifrus.ru/photos/big/samsung/samsung-galaxy-s21-plus-4.jpg'
        ],

        comments: [
            {
                name: 'Екатерина',
                like: false,
                text: 'За такую цену не лучше ли купить продукцию от apple?'
            },
            {
                name: 'Фама',
                like: true,
                text: 'Нормальный аппарат на днях гопнул у одного вот гоняю с ним'
            },
        ],
        likeProcent: 0
    },
    //17
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 4,
        title: 'Холодильник RB29FSRNDSA/WT',
        price: 540,
        sale: 0,
        saleEnd: 0,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/holodilniki/Samsung_RB29FSRNDSA-WT_11.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/JVPKWMD7T3sGftK2fNfJbg4uOU5h_rc_.jpg',
            'https://mediapark.uz/upload/file/mp/products/holodilniki/Samsung_RB29FSRNDSA-WT_11.jpg'
        ],

        comments: [
            {
                name: 'Неизвестный',
                like: false,
                text: 'Плохой'
            },
            {
                name: 'Пётр',
                like: true,
                text: 'Подарили на свадьбу. До сих пор пользуемся, советую'
            },
        ],
        likeProcent: 0
    },
    //18
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 2,
        title: 'Black Shark 4',
        price: 500,
        sale: 5,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'https://phonesdata.com/files/models/Xiaomi-Black-Shark-4-733.jpg',
            'https://phonesdata.com/files/models/Xiaomi-Black-Shark-4-277.jpg',
            'https://phonesdata.com/files/models/Xiaomi-Black-Shark-4-629.jpg'
        ],

        comments: [
            {
                name: 'Николай',
                like: false,
                text: 'Нету на Узбекском рынке'
            },
            {
                name: 'Филипп',
                like: true,
                text: 'Стиль как у телефонов будущего. Молодцы!'
            },
        ],
        likeProcent: 0
    },
    //19
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 4,
        title: ' ART ME83ARW/BW',
        price: 160,
        sale: 10,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://mediapark.uz/upload/file/mp/products/microvolnovki/SAMSUNG-ARTME83ARW.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/6RqBxNKUtmFw1p9QULoxw8KExmwHlO5U.jpg',
            'https://mediapark.uz/upload/file/mp/products/images/tpk8svWIy8kUFsx7-VuJxG4jNNYfnGsm.jpg'
        ],

        comments: [
            {
                name: 'Константин',
                like: true,
                text: 'Отличная покупка. Работаю повором и пользуюсь только этой моделью'
            },
            {
                name: 'Георгий',
                like: false,
                text: 'Закинул голубя и поставил на 30 минут. Не приготовился.'
            },
        ],
        likeProcent: 0
    },
    //20
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 4,
        title: ' Smart Inverter MS2536GIK',
        price: 240,
        sale: 15,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://www.lg.com/ru/images/microwaves/md07533350/gallery/NeoChef_MS2536GIK_SkinBeige_Russian_Front_180.jpg',
            'https://www.lg.com/ru/images/microwaves/md07533350/gallery/small02.jpg',
            'https://www.lg.com/ru/images/microwaves/md07533350/gallery/small03.jpg'
        ],

        comments: [
            {
                name: 'Владимир',
                like: true,
                text: 'Лучше чем самсунг'
            },
            {
                name: 'Алексей',
                like: true,
                text: 'В ней даже мини-пиццу можно приготовить'
            },
        ],
        likeProcent: 0
    },
    //21
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 1,
        title: 'Mi TV 4S 50',
        price: 550,
        sale: 3,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://fractus.pro/store/product/16/42/33786/media/md/33786_63874.jpg',
            'data:image/jpeg;base64,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',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnVoezbAQlfm2cOYi0ytqhohGOuzUyOcfyA&usqp=CAU'
        ],

        comments: [
            {
                name: 'Вова',
                like: true,
                text: 'Кайф гонять плойку на нем'
            },
            {
                name: 'Сергей',
                like: true,
                text: 'удобный. Подключается ко всем устройства от xiaomi'
            },
        ],
        likeProcent: 0
    },
    //22
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 4,
        title: 'пылесос 2000w',
        price: 150,
        sale: 5,
        saleEnd: 0, 5 ,

        isCart: false,

        isLove: false,

        images: [
            'https://olcha.uz/image/original/products/aU0wZq0zQ6GAh429UWVWS6HVqiKJg5NTFx0yz9QHewK6vrAOmJLWoafIGeII.jpg',
            'https://olcha.uz/image/original/products/3f8euMzpzevVOxnQaU5XMSEJ0U43MuLDnoC8270VU6rKFtUTug8PgNHBbiXj.jpg',
            'https://tovar.uz/images/company/1281/tovar/57772/o_606fe4f466145.jpg'
        ],

        comments: [
            {
                name: 'Надя',
                like: false,
                text: 'Сгорел на 3 день работы, обратно не принимают даже по гарантии'
            },
            {
                name: 'Гена',
                like: true,
                text: 'Лучшее для холостяка'
            },
        ],
        likeProcent: 0
    },
    //23
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Фен для волос Soocas Anions Hair Dryer H3S',
        price: 30,
        sale: 5,
        saleEnd: 0.25,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/Drugoe/feny/soocare_hairh3/fen_soocareh3_2-700x700_wmark.png',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/Drugoe/feny/soocare_hairh3/fen_soocareh3_4-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/Drugoe/feny/soocare_hairh3/fen_soocare_3-700x700_wmark.png'
        ],

        comments: [
            {
                name: 'Наташа',
                like: true,
                text: 'Сушит очень быстро. Спасибо'
            },
            {
                name: 'Джавид',
                like: true,
                text: 'Сушу даже волосы на ногах'
            },
        ],
        likeProcent: 0
    },
    //24
    {
        id: +Math.random().toString().slice(3),
        brandId: 1,
        categorieId: 2,
        title: 'Galaxy M32 SM-M325F/DS 128Gb+6Gb LTE',
        price: 350,
        sale: 5,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://www.cifrus.ru/photos/big/samsung/samsung-galaxy-m32-sm-m325f-ds-128gb-6gb-lte-white-rst-1.jpg',
            'https://www.cifrus.ru/photos/big/samsung/samsung-galaxy-m32-sm-m325f-ds-128gb-6gb-lte-white-rst-2.jpg',
            'https://www.cifrus.ru/photos/big/samsung/samsung-galaxy-m32-sm-m325f-ds-128gb-6gb-lte-white-rst-3.jpg'
        ],

        comments: [
            {
                name: 'Костя',
                like: false,
                text: 'Пропускает воду'
            },
            {
                name: 'Никита',
                like: true,
                text: 'Ложь! Не пропускает никак воду'
            },
        ],
        likeProcent: 0
    },
    //25
    {
        id: +Math.random().toString().slice(3),
        brandId: 2,
        categorieId: 3,
        title: 'gram 17” 16:10',
        price: 600,
        sale: 15,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://www.lg.com/ru/images/laptops/md07522859/gallery/medium02.jpg',
            'https://www.lg.com/ru/images/laptops/md07522859/gallery/medium01.jpg',
            'https://www.lg.com/ru/images/laptops/md07522859/gallery/medium03.jpg'
        ],

        comments: [
            {
                name: 'Шоха',
                like: false,
                text: 'За такую сумму и получше можно найти'
            },
            {
                name: 'Шерзад',
                like: false,
                text: 'Переоценили'
            },
        ],
        likeProcent: 0
    },
    //26
    {
        id: +Math.random().toString().slice(3),
        brandId: 3,
        categorieId: 4,
        title: 'Микроволновая печь HMT72G420',
        price: 200,
        sale: 5,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://bosch-uzbekistan.uz/thumb/2/Ofkfqhn3Am6z7jp8Ixhm4Q/3520r2350/d/mcsa029022_hmt72g420_def.jpg',
            'https://bosch-uzbekistan.uz/thumb/2/iLOm_qMeu989sryxACrSWQ/3520r2350/d/mcsa00677392_e2852_hmt75m651_330328_midea17l_def.jpg',
            'https://bosch-uzbekistan.uz/thumb/2/wYepYSQNVREUjzZJSLHAIw/3520r2350/d/mcsa00677390_e2851_hmt75m650_330326_midea17l_def.jpg'
        ],

        comments: [
            {
                name: 'Амир',
                like: false,
                text: 'В руках еда быстрее греется чем в ней'
            },
            {
                name: 'Петя',
                like: true,
                text: 'Норм. 4 из 5'
            },
        ],
        likeProcent: 0
    },
    //27
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Робот-пылесос Xiaomi Mijia Sweeping Robot 1S',
        price: 250,
        sale: 10,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/robotpylesos/mijia_1s/pylesos_mijia_1s_ava_2-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/robotpylesos/mijia_1s/pylesos_mijia_1s_ava_1-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/robotpylesos/mijia_1s/pylesos_mijia_1s_ava_5-700x700_wmark.jpg'
        ],

        comments: [
            {
                name: 'Женя',
                like: false,
                text: 'Убил моих домашних муравьев'
            },
            {
                name: 'Диля',
                like: false,
                text: 'Оторвал комок шерсти у кота, который спал. Веник лучше'
            },
        ],
        likeProcent: 0
    },
    //28
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Умный чайник Xiaomi Mi Smart Kettle',
        price: 50,
        sale: 5,
        saleEnd: 1,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/chainik/xiaomichainikd-700x700_wmark.png',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/chainik/xiaomichainika-700x700_wmark.png',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/chainik/xiaomichainikb-700x700_wmark.png'
        ],

        comments: [
            {
                name: 'Маша',
                like: false,
                text: 'Он не умный. Задачи по математике 6 класса не решил'
            },
            {
                name: 'Саша',
                like: true,
                text: 'КРУТО! Всем советую. Только не дарите бабушкам'
            },
        ],
        likeProcent: 0
    },
    //29

    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Блендер Xiaomi Circle Kitchen',
        price: 25,
        sale: 0,
        saleEnd: 0,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/blender/blender_1-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/blender/blender_1-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/blender/blender_1-700x700_wmark.jpg'
        ],

        comments: [
            {
                name: 'Шавкат',
                like: true,
                text: 'Советую всем шеф поворам'
            },
            {
                name: 'Отабек',
                like: true,
                text: 'xiaomi производят крутую технику'
            },
        ],
        likeProcent: 0
    },
    //30
    {
        id: +Math.random().toString().slice(3),
        brandId: 6,
        categorieId: 4,
        title: 'Электробритва Xiaomi Mijia Electric Shaver S500',
        price: 30,
        sale: 5,
        saleEnd: 0.5,

        isCart: false,

        isLove: false,

        images: [
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/britva/mijia_s500/mijia_electric_shaver_s500_ava_1-700x700_wmark.png',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/britva/mijia_s500/mijia_electric_shaver_s500_ava_3-700x700_wmark.jpg',
            'https://ru-mi.com/image/cache/data/Tovari/Gadjeti/UmniiDom/bytovayatehnica/britva/mijia_s500/mijia_electric_shaver_s500_ava_4-700x700_wmark.jpg'
        ],

        comments: [
            {
                name: 'Шахзода',
                like: true,
                text: 'Лучшая для ног!'
            },
            {
                name: 'Азим',
                like: true,
                text: 'Лезвия долго держатся и сама машинка еще ни разу не ломалась и самый большой плюс она беспроводная'
            },
        ],
        likeProcent: 0
    }]

