(function () {

    searchProducts('1')
})();

function searchProducts(page) {

    let urlBase = 'https://www.albox.com.ar/wp-json/wc/v3/products'
    let per_page = '100'
    let consumer_key = 'ck_9cfd80fe9b2ce23d0c9d6b1b2383e8a9206c4243'
    let consumer_secret = 'cs_dc6c417358bd395fb8e32265f8917e7d91338502'
    let estado = 'publish'
    let urlParams = new URLSearchParams(window.location.search);
    let idCategoria = urlParams.get('idCategoria');


    if (idCategoria == null) {
        idCategoria = ''
    }

    fetch(`${urlBase}?per_page=${per_page}&page=${page}&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&status=${estado}&category=${idCategoria}`)
        .then(response => response.json())
        .then(response => resultProducts(response))
}


function resultProducts(products) {

    let urlParams = new URLSearchParams(window.location.search);
    let paginaActualQueryParam = urlParams.get('paginaActual');
    let idCategoriaQueryParam = urlParams.get('idCategoria');

    if (paginaActualQueryParam === null) {
        paginaActualQueryParam = 1
    }

    const prodPorPagina = 12

    const inicio = (paginaActualQueryParam - 1) * prodPorPagina

    var fin = inicio + (prodPorPagina - 1)

    if (products.length < fin) {
        fin = products.length - 1
    }

    const divResults = document.getElementById('results')
    divResults.innerHTML = ''


    for (let index = inicio; index < fin + 1; index++) {

        const divProduct = document.createElement('div')
        divProduct.classList.add('card')

        const cardProduct = document.createElement('a')
        cardProduct.href = `desc-producto.html?sku=${products[index].sku}`

        const divBody = document.createElement('div')
        divProduct.classList.add('card-body')

        const name = document.createElement('h2')
        name.textContent = products[index].name

        const price = document.createElement('p')
        price.textContent = 'Precio Final: $ ' + products[index].price


        const image = document.createElement('img')

        if (products[index].images[0] && products[index].images[0].src) {

            image.src = products[index].images[0].src
            cardProduct.appendChild(image)
        }

        divProduct.appendChild(cardProduct)
        divBody.appendChild(name)
        divBody.appendChild(price)
        cardProduct.appendChild(divBody)

        divResults.appendChild(divProduct)
    }

    const cantProductos = products.length
    const cantPaginas = Math.ceil(cantProductos / prodPorPagina)

    const ulPaginacion = document.getElementById('ulPaginacion')
    ulPaginacion.innerHTML = ''

    const paginas = document.createElement('li')

    for (let index = 0; index < cantPaginas; index++) {
        const paginaActual = document.createElement('a')
        paginaActual.classList.add('paginacion')
        const currentPage = index + 1
        paginaActual.textContent = currentPage
        paginaActual.href = `categorias.html?paginaActual=${currentPage}`
        paginas.appendChild(paginaActual)
        
        if(idCategoriaQueryParam != null){
            var url = `categorias.html?paginaActual=${currentPage}&idCategoria=${idCategoriaQueryParam}`
            paginaActual.href = url
        }

    }

    ulPaginacion.appendChild(paginas)


}



