import database from './products/db.js'

const createProductsTable = async () => {
    try{
    await database.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('brand', 50)
        table.string('description', 50)
        table.integer('price')
    })
    console.log('Products Table Created!')
    database.destroy()
}catch(err){
    console.log(err)
    database.destroy()
}
}

createProductsTable()