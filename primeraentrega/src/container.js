import fs from 'fs';

class Container {
    constructor(route){
        this.route = route;
    }
    async save (object){
        try{
            let content = await fs.promises.readFile(this.route)
            let data = JSON.parse(content)
            if(data?.length == 0){
                object.id = 1
                const jsonData = [object]
                await fs.promises.writeFile(
                    this.route,
                    JSON.stringify(jsonData, null, 2)
                )
            return object.id
            }else{
                let lastIndex = data.length - 1
                let newId = data[lastIndex].id + 1
                object.id = newId
                data.push(object)
                await fs.promises.writeFile(this.route, JSON.stringify(data))
                return newId}
        } catch(err) {
            console.log(err)
        }
    }
    async getById(id) {
        try{
            const findObject = await fs.promises.readFile(this.route, 'utf-8')
            let objectFound = JSON.parse(findObject)
            let objectReturned = objectFound.find(object => object.id == id)
            return objectReturned
        } catch (err){
            console.log(err)
        }
    }
    async getAll(){
        const data = await fs.promises.readFile(this.route, 'utf-8')
        try{
            return JSON.parse(data)
        }catch (err){
            console.log(err)
        }
    }
    async updateProduct (id, newData){
        const findObject = await fs.promises.readFile(this.route, 'utf-8')
        let objectFound = JSON.parse(findObject)
        let indexFound = objectFound.findeIndex(object => object.id ==id)
        let objectUpdated = objectFound.splice(indexFound, 1, newData)
        return objectUpdated

    }
    async deleteById(id){
        const findObject = await fs.promises.readFile(this.route, 'utf-8')
        let objectFound = JSON.parse (findObject)
        let indexFound = objectFound.findIndex(object => object.id == id)
        let objectDeleted = objectFound.splice(indexFound, 1)
        console.log(objectDeleted)
    }
    async deleteAll(){
        const deleteObjects = await fs.promises.writeFile(this.route, '[]')
        console.log(deleteObjects)
    }
}

export default Container