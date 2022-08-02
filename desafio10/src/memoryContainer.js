class MemoryContainer {
    constructor(){
        this.data = []
    }
    getAll(){
        return this.data
    }

    save(object){
        object.id = this.data.length +1
        this.data.push(object)
        return object
    }
    getById(id){
        if(id) {
            let objectId = this.data.find((object)=> object.id == id)
            return objectId
        }else{
            return console.log(`Producto no encontrado`)
        }
    }
    updateProduct(id, newData){
        let indexFinded = this.data.findIndex((object) => object.id == id)
        newData.id = id
        this.data.splice(indexFinded, 1, newData)
    }
    deleteById(id){
            let indexFinded = this.data.findIndex((object) => object.id == id)
            let productDeleted = this.data.splice(indexFinded, 1)
            console.log(productDeleted)
        }
}

export default MemoryContainer;