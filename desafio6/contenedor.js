import fs from 'fs';

class Contenedor {
    constructor(ruta) {
    this.ruta = ruta
    if (!fs.existsSync(`./${this.ruta}`)) {
        fs.promises
        .writeFile(`./${this.ruta}`, `[]`)
        .then(() => console.log(`${this.ruta} created`))
    }
    }
    async getAll(){
        const data = await fs.promises.readFile(this.ruta, 'utf-8')
            try{
                return JSON.parse(data)
            } catch (err){
                console.log(err)
            }
        }
}
export default Contenedor