import database from './db.js'

const selectFromProductWhere = async () => {
    try{
    const products = await database.from('products').select('*').where("price", ">=", 5000)
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

selectFromProductWhere()