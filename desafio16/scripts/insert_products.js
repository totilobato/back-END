import knex from 'knex'
import {configMariaDB} from './config.js'

const database = knex (configMariaDB)

const insertProducts = async () => {
    try{
    const products = [
        { title: 'Grotek', thumbnail: 'Flowering', price: 5000 },
        { title: 'Top Crop', thumbnail: 'Bloom', price: 2000 },
        { title: 'Advance Nutritions', thumbnail: 'Growing', price: 8000 },
        { title: 'Azteca', thumbnail: 'Vegetation', price: 4500 }
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