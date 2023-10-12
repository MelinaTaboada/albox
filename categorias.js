(function () {

    searchCategories()
})();


function searchCategories() {
    let urlBase = 'https://www.albox.com.ar/wp-json/wc/v3/products/categories'
    let consumer_key = 'ck_9cfd80fe9b2ce23d0c9d6b1b2383e8a9206c4243'
    let consumer_secret = 'cs_dc6c417358bd395fb8e32265f8917e7d91338502'
    let per_page = '100'

    fetch(`${urlBase}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&per_page=${per_page}`)
        .then(response => response.json())
        .then(response => resultCategories(response))
}

function resultCategories(categories) {
    const divCategories = document.getElementById('all_categories')
    divCategories.innerHTML = ''


    categories.forEach(category => {
        const divCategory = document.createElement('div')
        divCategory.classList.add('categories')

        const nameCategory = document.createElement('a')
        nameCategory.textContent = category.name
        nameCategory.href ='#'

        const inputRadio = document.createElement('input')
        inputRadio.type = `radio`
        inputRadio.name = 'select-item'


        divCategory.appendChild(inputRadio)
        divCategory.appendChild(nameCategory)

        divCategories.appendChild(divCategory)
    })

}
