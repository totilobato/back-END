class MessageContainer {
    constructor(){
        this.data = []
    }
    getAll(){
        return this.data
    }

    save(message){
        this.data.push(message)
    }
}

export default MessageContainer;