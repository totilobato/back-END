const socket = io()

async function renderProducts(products){
    const response = await fetch ('/template.hbs')
    const templates = await response.text()

    products.forEach(product => {
        const template = Handlebars.compile(templates)
        const html = template(product)
        document.querySelector('#products').innerHTML += html
    })
}

socket.on('server:products', products => {
    renderProducts(products)
})