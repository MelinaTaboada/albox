(function () {

    searchProducts('1')
})();

function searchProducts(page) {

    let urlBase = 'https://www.albox.com.ar/wp-json/wc/v3/products'
    let per_page = '12'
    let consumer_key = 'ck_9cfd80fe9b2ce23d0c9d6b1b2383e8a9206c4243'
    let consumer_secret = 'cs_dc6c417358bd395fb8e32265f8917e7d91338502'
    let estado = 'publish'

    fetch(`${urlBase}?per_page=${per_page}&page=${page}&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&status=${estado}`)
        .then(response => response.json())
        .then(response => resultProducts(response))
}

function resultProducts(products) {
    const divResults = document.getElementById('results')
    divResults.innerHTML = ''


    products.forEach(product => {
        const divProduct = document.createElement('div')
        divProduct.classList.add('card')

        const name = document.createElement('h2')
        name.textContent = product.name

        const price = document.createElement('p')
        price.textContent = 'Precio Final: $ ' + product.price



        const image = document.createElement('img')
        // image.classList.add('imgProduct')

        if (product.images[0] && product.images[0].src) {

            image.src = product.images[0].src
            divProduct.appendChild(image)
        }

        const btnCart = document.createElement('a')
        btnCart.textContent = 'Agregar al carrito'
        btnCart.href = '#'
        btnCart.classList.add('btn', 'btn-outline-dark')


        divProduct.appendChild(name)
        divProduct.appendChild(price)
        divProduct.appendChild(btnCart)

        divResults.appendChild(divProduct)
    })

}