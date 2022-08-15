import database from './db.js'

const updateProduct = async () => {
    try{
        await database.from('products').where('id', '=', '1').update({ price: 6000})
        console.log(`Product Updated`)
    database.destroy()
}catch (err){
    console.log(err)

    database.destroy()
}}

updateProduct()