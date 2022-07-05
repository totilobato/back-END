const fs = require ('fs')

class Contenedor {
    constructor(ruta) {
    this.ruta = ruta
    }
    async save(objeto){
        try{
            let data = await fs.promises.readFile(this.ruta)
            if (data?.length == 0) {
                objeto.id = 1

                const jsonData = [objeto]

                await fs.promises.writeFile(
                    this.ruta,
                    JSON.stringify(jsonData, null, 2)
                )
            return objeto.id
            } else {
                const contenido = JSON.parse(data)
                let lastIndex = contenido.length -1
                let newId = contenido[lastIndex].id +1
                objeto.id = newId
                contenido.push(objeto)

                await fs.promises.writeFile(this.ruta, JSON.stringify(contenido))
                return newId
            }
        } catch(err) { 
            console.log(err)
        }
    }
    async getById(id){
        try{
            const buscarObjeto = await fs.promises.readFile(this.ruta, 'utf-8')
            let objetoEncontrado = JSON.parse(buscarObjeto)
            let objetoDevuelto = objetoEncontrado.find(objeto => objeto.id == id)
            return objetoDevuelto
        } catch (err){
            console.log(err)
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
    async deleteById(id){
        const buscarObjeto = await fs.promises.readFile(this.ruta, 'utf-8')
        let objetoEncontrado = JSON.parse(buscarObjeto)
        let indiceEncontrado = objetoEncontrado.findIndex(objeto => objeto.id == id)
        let objetoBorrado = objetoEncontrado.splice(indiceEncontrado, 1)
        console.log(objetoBorrado)
    }
    async deleteAll(){
        const objetosBorrados = await fs.promises.writeFile(this.ruta, '[]')
    }
}

const pruebas = async () => {
    try{
        const contenedorProductos = new Contenedor('productos.txt')
        const newId = await contenedorProductos.save({
            title: "Carpa",
            price: 23000,
            thumbnail: "https://articulo.mercadolibre.com.ar/MLA-1123491860-carpa-armario-cultivo-indoor-80x80x160-accesorios-_JM?matt_tool=84228402&matt_word=&matt_source=google&matt_campaign_id=14508409184&matt_ad_group_id=124055974702&matt_match_type=&matt_network=g&matt_device=c&matt_creative=543394189889&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=308158996&matt_product_id=MLA1123491860&matt_product_partition_id=1402510632380&matt_target_id=aud-1659384947886:pla-1402510632380&gclid=Cj0KCQjwnNyUBhCZARIsAI9AYlGrW7Bh8pnVomXJ_Z9_pJikGf3Kf6nvzN2RU9XuYzqKGiCYTRr08KEaAhbwEALw_wcB#&gid=1&pid=1"
        })
        console.log(newId)
        const elementoEncontrado = await contenedorProductos.getById(2)
        console.log(elementoEncontrado)
        const todosLosElementos = await contenedorProductos.getAll()
        console.log(todosLosElementos)
        const elementoBorrado = await contenedorProductos.deleteById(2)
        console.log(elementoBorrado)
        const todoBorrado = await contenedorProductos.deleteAll()
        console.log(todoBorrado)
    }catch(err){
        console.log(err)
    }
}

pruebas()