import database from './db.js'

const insertProducts = async () => {
    try{
    const products = [
        { brand: 'Grotek', description: 'Flowering', price: 5000 },
        { brand: 'Top Crop', description: 'Bloom', price: 2000 },
        { brand: 'Advance Nutritions', description: 'Growing', price: 8000 },
        { brand: 'Azteca', description: 'Vegetation', price: 4500 }
    ]
    await database('products').insert(products)
    console.log('Products inserted into products table!')
    database.destroy()
}catch (err) {
    console.log(err)
    database.destroy()
}
}

insertProducts()