// 1923366011:AAHa0FZM7lvmHFYnet92W1R9a1YiTfMUDug
let token = ''
let chatId = 0


let SendMessage = (obj) =>{
    let url =`https://api.telegram.org/bot${token}/sendmessage?chat_id=${chatId}/&text=${obj.title} ${obj.price}`
    window.open(url, '_blank')
}

// https://api.telegram.org/bot1923366011:AAHa0FZM7lvmHFYnet92W1R9a1YiTfMUDug/sendmessage?chat_id=-589683316/&text='HI peter'
export {SendMessage}