import KnexContainer from './knexContainer.js'


const productsContainer = new KnexContainer(configMariaDB, 'products')

const getAll = async () => {
    try{
    const products = await this.knex.from(this.table).select('*')
    return products
}catch(err){
    console.log(err)
}

const getById = async () => {
    try{
    const products = await this.knex.from('products').select('*').where("price", ">=", 5000)
    products.forEach((product) => {
        console.log(`
        Brand : ${product.brand}
        Description : ${product.description}
        Price : ${product.price}
        `)
    })
}catch (err){
    console.log(err)
}}

const deleteById = async () => {
    try{
        await this.knex.from('products').where('id', '=', '3').del()
        console.log(`Product Deleted`)
}catch (err){
    console.log(err)
}}
}
export default productsContainer