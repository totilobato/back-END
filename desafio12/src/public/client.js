const socket = io()

const messageForm = document.querySelector('#messageForm')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messages = document.querySelector('#messages')

function sendMessage(){
    try{
        const username = usernameInput.value
        const message = messageInput.value
        
        socket.emit('client: message', {username, message})
    }catch(err){
        console.log(`An error has ocurred ${err}`)
    }
}

function renderMessages(messagesArray){
    try{
        const html = messagesArray.map(messageInfo =>{
            return(`<div>
                <strong>${messageInfo.username}</strong>:
                <em>${messageInfo.message}</em> </div>`)
        }).join(" ");

        messages.innerHTML = html
    }catch(err){
        console.log(`An error has ocurred ${err}`)
    }
}

messageForm.addEventListener('submit', event => {
    event.preventDefault()
    sendMessage()
    messageInput.value = "" 
})

socket.on('server:message', renderMessages)