(function () {

    searchProducts('1')
})();

function searchProducts(page) {

    let urlBase = 'https://www.albox.com.ar/wp-json/wc/v3/products'
    // let per_page = '9'
    let consumer_key = 'ck_9cfd80fe9b2ce23d0c9d6b1b2383e8a9206c4243'
    let consumer_secret = 'cs_dc6c417358bd395fb8e32265f8917e7d91338502'
    let estado = 'publish'
    let urlParams = new URLSearchParams(window.location.search);
    let idCategoria = urlParams.get('idCategoria');
    if (idCategoria == null) {
        idCategoria = ''
    }

    fetch(`${urlBase}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&status=${estado}&category=${idCategoria}`)
        .then(response => response.json())
        .then(response => resultProducts(response))
}


function resultProducts(products) {
    const divResults = document.getElementById('productosDestacados')
    divResults.innerHTML = ''



    products.forEach(product => {

        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('swiper-slide')


        const divProduct = document.createElement('div')
        divProduct.classList.add('card')

        const cardProduct = document.createElement('a')
        cardProduct.href = `desc-producto.html?sku=${product.sku}`

        const divBody = document.createElement('div')
        divProduct.classList.add('card-body')

        const name = document.createElement('h2')
        name.textContent = product.name

        const price = document.createElement('p')
        price.textContent = 'Precio Final: $ ' + product.price


        const image = document.createElement('img')
        if (product.images[0] && product.images[0].src) {

            image.src = product.images[0].src
            cardProduct.appendChild(image)
        }
        

        divProduct.appendChild(cardProduct)
        divBody.appendChild(name)
        divBody.appendChild(price)
        cardProduct.appendChild(divBody)

       
        cardWrapper.appendChild(divProduct)
        divResults.appendChild(cardWrapper)
        
    })

}





