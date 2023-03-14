function getCategories() {
  api
    .get('/categories?limit=5&offset=0')
    .then(categories => {
      data = categories.data
      console.log(data);
      const toRender = [];

      data.forEach(element => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const scroll = document.createElement('div');

        article.classList.add('relatedProducts-container');
        title.innerText = element.name
        scroll.classList.add('relatedProducts-scrollContainer')

        article.appendChild(title);
        article.appendChild(scroll);

        toRender.push(article)

        getProducts(scroll);
      });
      home.append(...toRender)
    })
}


function getProducts(container) {
  api
    .get(`/products?limit=5&offset=5`)
    .then(products => {
      data = products.data
      console.log(data);
      const toRender = [];

      data.forEach(element => {
        const containerProduct = document.createElement('div');
        const img  = document.createElement('img');

        containerProduct.classList.add('product-container');
        img.src = element.images[0];
        img.classList.add('product-img')

        containerProduct.appendChild(img);
        toRender.push(containerProduct);

      });
      container.append(...toRender)
    });
};




