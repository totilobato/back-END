import database from './db.js'

const selectFromProduct = async () => {
    try{
    const products = await database.from('products').select('*')
    products.forEach((product) => {
        console.log(`
        Brand : ${product.brand}
        Description : ${product.description}
        Price : ${product.price}
        `)
    })

    database.destroy()
}catch (err){
    console.log(err)

    database.destroy()
}}

selectFromProduct()