import database from './db.js'

const main = async () => {
    try{
    await database.schema.dropTableIfExists('article')

    await database.schema.createTable('article', article => {
        article.increments('id').primary()
        article.string('name', 15).notNullable()
        article.string('code', 10).notNullable()
        article.float('price')
        article.integer('stock')
    })
    console.log(`Table Created!`)

    const articles = [
        {name: "Grinder", code: "A420", price: 2000, stock: 10},
        {name: "Growing-Tent", code: "A421", price: 30000, stock: 5},
        {name: "Leaves", code: "A422", price: 120, stock: 100},
        {name: "Blunt", code: "A423", price: 370, stock: 25},
        {name: "Led-Lights", code: "A424", price: 43000, stock: 2}
    ]
    await database('article').insert(articles)
    console.log('Articles inserted!')

    const articlesFromDatabase = await database.from('article').select('name', 'code', 'price', 'stock')
    articlesFromDatabase.forEach(article => {
        console.log(`Name: ${article.name} - Code: ${article.code} - Price: ${article.price} - Stock: ${article.stock}`)
    })

    await database.from('article').where('id', '=', 3).del()
    console.log(`Article with id 3 deleted!`)

    await database.from('article').where('id', '=', 2).update({stock: 0})
    console.log(`Article with id 2 Updated!`)
    database.destroy()
}catch(err) {
    console.log(err)
    database.destroy()
}
}

main()