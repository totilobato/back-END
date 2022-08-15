import database from './db.js'

const deleteProduct = async () => {
    try{
        await database.from('products').where('id', '=', '3').del()
        console.log(`Product Deleted`)
    database.destroy()
}catch (err){
    console.log(err)

    database.destroy()
}}

deleteProduct()