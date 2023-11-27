(function () {

    searchProducts()
})();

function searchProducts() {

    let urlBase = 'https://www.albox.com.ar/wp-json/wc/v3/products'
    let consumer_key = 'ck_9cfd80fe9b2ce23d0c9d6b1b2383e8a9206c4243'
    let consumer_secret = 'cs_dc6c417358bd395fb8e32265f8917e7d91338502'
    let estado = 'publish'
    const urlParams = new URLSearchParams(window.location.search);
    const sku = urlParams.get('sku');

    fetch(`${urlBase}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&status=${estado}&sku=${sku}`)
        .then(response => response.json())
        .then(response => describeProduct(response))
}


function describeProduct(response) {
    const divProduct = document.getElementById('descripcion-producto')
    divProduct.innerHTML = ''

    const colRow = document.createElement('div')
    colRow.classList.add('row')

    const colUno = document.createElement('div')
    colUno.classList.add('col-5')

    const image = document.createElement('img')

    if (response[0].images[0] && response[0].images[0].src) {
        image.src = response[0].images[0].src
        colUno.appendChild(image)
    }
    colRow.appendChild(colUno)


    const colDos = document.createElement('div')
    colDos.classList.add('col-7')

    const name = document.createElement('h2')
    name.textContent = response[0].name
    colDos.appendChild(name)

    const linea = document.createElement('hr')
    colDos.appendChild(linea)

    const price = document.createElement('h4')
    price.textContent = 'Precio Final: $ ' + response[0].price
    colDos.appendChild(price)

    colRow.appendChild(colDos)


    const colTres = document.createElement('div')
    colTres.classList.add('col-12')

    const especificaciones = document.createElement('h2')
    especificaciones.textContent = 'Especificaciones'
    colTres.appendChild(especificaciones)

    const separador = document.createElement('hr')
    colTres.appendChild(separador)

    colRow.appendChild(colTres)

    divProduct.appendChild(colRow)



}
