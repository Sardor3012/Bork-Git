
import {author_musics, like} from './data.js'

import {new_playlist, new_playlists} from './other.js'

author_musics.sort(function (a, b) {
    if (a.number_id > b.number_id) {
        return 1;
    }
    if (a.number_id < b.number_id) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

let body = document.body
let love_img = document.querySelectorAll('.love_img')
let header = document.querySelector('header')
let more_img = document.querySelector('.more ')
let more_img1 = document.querySelector('.more1 ')
let modal_window_div = document.querySelector('.modal_window_div')
let second_in_ten = document.querySelector('.second_in_ten')
let settings_text = document.querySelector('.settings_text')
let settings_block = document.querySelector('.settings_block')
let main = document.querySelector('main')
let home_page_text = document.querySelector('.home_page_text')
let playlist_text = document.querySelector('.playlist_text')
let pseudo_main = document.querySelector('.pseudo_main')
let two_blocks_in_main = document.querySelectorAll('.two_blocks_in_main')
let checkbox = document.querySelector('.ios-toggle')
let free_user = document.querySelector('.free_user')
let premium_user = document.querySelector('.premium_user')
let form = document.forms.settings_name
let name_b = document.querySelector('.name_b')
let new_name = document.querySelector('.new_name')
let like_and_text = document.querySelector('.like_and_text')
let liked_songs_block = document.querySelector('.liked_songs_block')
let favorite_songs = document.querySelector('.favorite_songs')
let favorite_songs_block = document.querySelector('.favorite_songs_block')
let dancing_text = document.querySelector('.dancing_text')
let dancing_block = document.querySelector('.dancing_block')
let north_kavkaz = document.querySelector('.north_kavkaz')
let north_kavkaz_block = document.querySelector('.north_kavkaz_block')
let typing = document.querySelector('.typing')
let input_in_header = document.querySelector('.input_in_header')
let create_playlist = document.querySelector('.create_playlist')
let add_to_playlist_button = document.querySelector('.add_to_playlist_button')
let add_to_playlist_modal_window = document.querySelector('.add_to_playlist_modal_window')
let opacity_block = document.querySelector('.opacity_block')
let div_for_blur_bg = document.querySelector('.div_for_blur_bg')
let close_img = document.querySelector('.close_img')
let flexx = document.querySelector('.flexx')
let aside = document.querySelector('aside')
let search_icon = document.querySelector('.search_icon')
// let form = document.forms.add_to_playlist
let menu_active = document.querySelector('.menu_active')
let oneOne = document.querySelector('.oneOne')
let twoTwo = document.querySelector('.twoTwo')
let threeThree = document.querySelector('.threeThree')
// let third_block = document.querySelector('.third_block')
let logo_in_header = document.querySelector('.logo_in_header')
let blue_block = document.querySelectorAll('.blue_block')
let search_button = document.querySelector('.search_button')
let footer = document.querySelector('.first_footer')
let player_list = document.querySelector('.player_list')
let go_back = document.querySelector('.go_back')
let footer_wrap = document.querySelector('footer')
let div_text_name = document.querySelector('.div_text_name')
for(let name_item of author_musics){
    let idMusic = author_musics.indexOf(name_item)
    let author1 = document.querySelector('.author1')
    let music1 = document.querySelector('.music1')
    author1.innerHTML = name_item.author
    music1.innerHTML = name_item.songs_name
}
footer.onclick = () => {
    console.log('footer');
    player_list.classList.add('player_list_active')
    main.classList.add('main_diactive')
           
    settings_block.classList.remove('settings_active')
    north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    favorite_songs_block.classList.remove('favorite_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    favorite_songs_block.classList.add('display_none_block')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    favorite_songs.style.color = '#ffffff'
    north_kavkaz.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    footer_wrap.classList.add('footer_opacity')
}
go_back.onclick = () => {
    player_list.classList.remove('player_list_active')
    main.classList.remove('main_diactive')
           footer_wrap.classList.remove('footer_opacity')
    settings_block.classList.remove('settings_active')
    north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    favorite_songs_block.classList.remove('favorite_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    favorite_songs_block.classList.add('display_none_block')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    favorite_songs.style.color = '#ffffff'
    north_kavkaz.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
}
search_icon.onclick = () =>{
    header.classList.add('header_Zindex')
    name_b.classList.toggle('name_b1')
    free_user.classList.toggle('free_user1')
    input_in_header.classList.toggle('width_100')
   aside.classList.toggle('aside_active1')
   typing.classList.toggle('input_active')
   
   // aside.style.opacity = '0'
   flex_block_in_header_2.style.opacity = '0'
console.log('650px');
}
search_button.onclick = () => {
    typing.classList.toggle('input_active')
    // aside.style.opacity = '0'
    flex_block_in_header_2.style.opacity = '0'
}
menu_active.onclick = () =>{
    div_text_name.classList.toggle('div_text_name_act')
    aside.classList.toggle('aside_active')
    console.log('meuu');
}
for(let blue_bg of blue_block){
    blue_bg.onclick = () => {
        blue_bg.classList.toggle('blue_block_active')
        console.log(12222222);
    }
}

// add_to_playlist_button.onclick = () =>{



//     // add_to_playlist_modal_window.classList.add('add_to_playlist_modal_window_active')
//     // div_for_blur_bg.classList.add('blur_bg_active')
// }
create_playlist.onclick = () => {
    add_to_playlist_modal_window.classList.toggle('add_to_playlist_modal_window_active1')
    opacity_block.classList.toggle('opacity_block_active')
}
close_img.onclick = () => {
    add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active')
    div_for_blur_bg.classList.remove('blur_bg_active')
    add_to_playlist_modal_window.style.height = '403px'
    opacity_block.classList.remove('opacity_block_active')
    add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active1')
}

div_for_blur_bg.onclick = () => {
    add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active')
    div_for_blur_bg.classList.remove('blur_bg_active')
    add_to_playlist_modal_window.style.height = '403px'
    opacity_block.classList.remove('opacity_block_active')
}
input_in_header.onkeyup = () =>{
    input_in_header.style.height = '208px'
    flex_block_in_header_2.style.opacity = '1'
        let text = event.target.value.toLowerCase()
        let find_elements = author_musics.filter(item => item.songs_name.toLowerCase().includes(text))
        reload_search(find_elements)
}
let flex_block_in_header_2 = document.querySelector('.flex_block_in_header_2')
let reload_search = (arr) =>{
    flex_block_in_header_2.innerHTML = ""
    for(let item of arr){
        let p = document.createElement("p")
        p.innerText = item.songs_name + ' '+  '-' + ' '+ item.author + ' ' + item.time_line
    p.style.color = 'white'
    p.style.fontSize = '18px'
    p.onmouseenter = () => {
        p.style.color = '#00ecbe'
        p.style.textDecoration = 'underline'
    }
    p.onmouseleave = () => {
        p.style.color = 'white'
        p.style.textDecoration = 'none'
    }
        flex_block_in_header_2.append(p)
    }
}
body.onclick = () => {
    input_in_header.style.height = '50px'
    

}
favorite_songs_block.classList.add('display_none_block')
form.onsubmit = () => {
    event.preventDefault()

    let obj = {}
    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        obj[key] = value
    })

    name_b.innerHTML = new_name.value
}
   
oneOne.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    main.classList.add('main_diactive')
    body.style.height = '100vh'
    player_list.classList.remove('player_list_active')
    favorite_songs_block.classList.remove('favorite_songs_block_active')
    settings_block.classList.remove('settings_active')
    north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
    pseudo_main.classList.remove('pseudo_main_active')
    dancing_block.classList.remove('dancing_block_active')
    liked_songs_block.classList.add('liked_songs_block_active')
    favorite_songs_block.classList.add('display_none_block')
    settings_text.style.color = '#ffffff'
home_page_text.style.color = '#ffffff'
like_and_text.style.color = '#00ECBE'
playlist_text.style.color = '#ffffff'
favorite_songs.style.color = '#ffffff'
dancing_text.style.color = '#ffffff'
new_playlist.style.color = '#ffffff'
north_kavkaz.style.color = '#ffffff'
new_playlists.classList.remove('new_playlists_active')
}

twoTwo.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    body.style.height = '100vh'
    player_list.classList.remove('player_list_active')
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    north_kavkaz_block.classList.add('north_kavkaz_block_active')            
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    favorite_songs_block.classList.remove('favorite_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    favorite_songs_block.classList.add('display_none_block')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#00ECBE'
    like_and_text.style.color = '#ffffff'
    favorite_songs.style.color = '#ffffff'
    north_kavkaz.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}

threeThree.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    body.style.height = '100vh'
    player_list.classList.remove('player_list_active')
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    favorite_songs_block.classList.remove('favorite_songs_block_active')
    dancing_block.classList.add('dancing_block_active')
    favorite_songs_block.classList.add('display_none_block')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#00ECBE'
    like_and_text.style.color = '#ffffff'
    favorite_songs.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    north_kavkaz.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}

 logo_in_header.onclick = () =>{
    footer_wrap.classList.remove('footer_opacity')
 main.classList.remove('main_diactive')
 player_list.classList.remove('player_list_active')
settings_block.classList.remove('settings_active')
north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
pseudo_main.classList.remove('pseudo_main_active')
liked_songs_block.classList.remove('liked_songs_block_active')
favorite_songs_block.classList.remove('favorite_songs_block_active')
dancing_block.classList.remove('dancing_block_active')
favorite_songs_block.classList.add('display_none_block')
home_page_text.style.color = '#00ECBE'
settings_text.style.color = '#ffffff'
playlist_text.style.color = '#ffffff'
dancing_text.style.color = '#ffffff'
like_and_text.style.color = '#ffffff'
favorite_songs.style.color = '#ffffff'
north_kavkaz.style.color = '#ffffff'
new_playlist.style.color = '#ffffff'

}

    more_img.onclick = () => {
        console.log(1222);
        // modal_window_div.classList.toggle('active_modal_window')
    }
    more_img1.onclick = () => {
        console.log(1222);
        // modal_window_div.classList.toggle('active_modal_window')
    }
    
    
        settings_text.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            main.classList.add('main_diactive')
            settings_block.classList.add('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.remove('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            settings_text.style.color = '#00ECBE'
            home_page_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
             dancing_text.style.color = '#ffffff'
             like_and_text.style.color = '#ffffff'
             favorite_songs.style.color = '#ffffff'
             north_kavkaz.style.color = '#ffffff'
             new_playlist.style.color = '#ffffff'
             
             new_playlists.classList.remove('new_playlists_active')
        }
        
        home_page_text.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            main.classList.remove('main_diactive')
           
            settings_block.classList.remove('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.remove('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            home_page_text.style.color = '#00ECBE'
            settings_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
            dancing_text.style.color = '#ffffff'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            north_kavkaz.style.color = '#ffffff'
            new_playlist.style.color = '#ffffff'
            new_playlists.classList.remove('new_playlists_active')
        }
       
            playlist_text.onclick = () => {
                footer_wrap.classList.remove('footer_opacity')
                player_list.classList.remove('player_list_active')
                body.style.height = '100vh'
                main.classList.add('main_diactive')
                settings_block.classList.remove('settings_active')
                north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
                pseudo_main.classList.add('pseudo_main_active')
                liked_songs_block.classList.remove('liked_songs_block_active')
                favorite_songs_block.classList.remove('favorite_songs_block_active')
                dancing_block.classList.remove('dancing_block_active')
                favorite_songs_block.classList.add('display_none_block')
                settings_text.style.color = '#ffffff'
            home_page_text.style.color = '#ffffff'
            playlist_text.style.color = '#00ECBE'
             dancing_text.style.color = '#ffffff'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            new_playlist.style.color = '#ffffff'
            north_kavkaz.style.color = '#ffffff'
            new_playlists.classList.remove('new_playlists_active')
        }

        checkbox.onclick = () => {
            body.classList.toggle('checkbox_on')
            body.style.transition = '300ms'
            free_user.innerHTML = 'Premium user'
            free_user.style.color = 'white'
        }
     
        like_and_text.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            main.classList.add('main_diactive')
            body.style.height = '100vh'
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            settings_block.classList.remove('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            dancing_block.classList.remove('dancing_block_active')
            liked_songs_block.classList.add('liked_songs_block_active')
            favorite_songs_block.classList.add('display_none_block')
            settings_text.style.color = '#ffffff'
        home_page_text.style.color = '#ffffff'
        like_and_text.style.color = '#00ECBE'
        playlist_text.style.color = '#ffffff'
        favorite_songs.style.color = '#ffffff'
        dancing_text.style.color = '#ffffff'
        new_playlist.style.color = '#ffffff'
        north_kavkaz.style.color = '#ffffff'
        new_playlists.classList.remove('new_playlists_active')
        }

        // favorite_songs.onclick = () => {
        //     body.style.height = '100vh'
        //     main.classList.add('main_diactive')
        //     liked_songs_block.classList.remove('liked_songs_block_active')
        //     settings_block.classList.remove('settings_active')
        //     north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
        //     pseudo_main.classList.remove('pseudo_main_active')
        //     dancing_block.classList.remove('dancing_block_active')
        //     favorite_songs_block.classList.add('favorite_songs_block_active')
        //     favorite_songs_block.classList.remove('display_none_block')
        //     settings_text.style.color = '#ffffff'
        // home_page_text.style.color = '#ffffff'
        // playlist_text.style.color = '#ffffff'
        // like_and_text.style.color = '#ffffff'
        // favorite_songs.style.color = '#00ECBE'
        // dancing_text.style.color = '#ffffff'
        // north_kavkaz.style.color = '#ffffff'
        // }

        dancing_text.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            body.style.height = '100vh'
            main.classList.add('main_diactive')
            settings_block.classList.remove('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.add('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            settings_text.style.color = '#ffffff'
            home_page_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
            dancing_text.style.color = '#00ECBE'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            north_kavkaz.style.color = '#ffffff'
            new_playlist.style.color = '#ffffff'
            new_playlists.classList.remove('new_playlists_active')
            
        }
        north_kavkaz.onclick = () =>{
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            body.style.height = '100vh'
            north_kavkaz_block.classList.add('north_kavkaz_block_active')
            main.classList.add('main_diactive')
            settings_block.classList.remove('settings_active')
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.remove('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            settings_text.style.color = '#ffffff'
            home_page_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
            dancing_text.style.color = '#ffffff'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            north_kavkaz.style.color = '#00ECBE'
            new_playlist.style.color = '#ffffff'
            new_playlists.classList.remove('new_playlists_active')
        }
        new_playlist.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            body.style.height = '100vh'
            main.classList.add('main_diactive')
            new_playlists.classList.add('new_playlists_active')
            settings_block.classList.remove('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.remove('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            settings_text.style.color = '#ffffff'
            home_page_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
            dancing_text.style.color = '#ffffff'
            new_playlist.style.color = '#00ECBE'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            north_kavkaz.style.color = '#ffffff'
            console.log('newwwwww');
        }

        flexx.onclick = () => {
            footer_wrap.classList.remove('footer_opacity')
            player_list.classList.remove('player_list_active')
            main.classList.remove('main_diactive')
           
            settings_block.classList.remove('settings_active')
            north_kavkaz_block.classList.remove('north_kavkaz_block_active')            
            pseudo_main.classList.remove('pseudo_main_active')
            liked_songs_block.classList.remove('liked_songs_block_active')
            favorite_songs_block.classList.remove('favorite_songs_block_active')
            dancing_block.classList.remove('dancing_block_active')
            favorite_songs_block.classList.add('display_none_block')
            home_page_text.style.color = '#00ECBE'
            settings_text.style.color = '#ffffff'
            playlist_text.style.color = '#ffffff'
            dancing_text.style.color = '#ffffff'
            like_and_text.style.color = '#ffffff'
            favorite_songs.style.color = '#ffffff'
            north_kavkaz.style.color = '#ffffff'
            new_playlist.style.color = '#ffffff'
        }
     
        for(let item_like of love_img){

            item_like.onclick = () => {
                event.preventDefault()
        
                like.push()
                console.log(like);
            }
        }

        export default modal_window_div
