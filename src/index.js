function getCategories() {
  api
    .get('/categories')
    .then(categories => {
      data = categories.data
      console.log(data);
      const toRender = [];

      data.forEach(element => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const scroll = document.createElement('div');

        article.classList.add('relatedProducts-container');
        title.innerText = element
        title.classList.add('relatedProducts-title');
        scroll.classList.add('relatedProducts-scrollContainer')

        article.appendChild(title);
        article.appendChild(scroll);

        toRender.push(article)

        getProducts(scroll, element);
        console.log(element);

      });
      home.append(...toRender)
    })
}


function getProducts(container, name) {
  api
    .get(`/category/${name}`)
    .then(products => {
      data = products.data
      console.log(data);
      const toRender = [];

      data.forEach(element => {
        const containerProduct = document.createElement('div');
        const img  = document.createElement('img');

        containerProduct.classList.add('product-container');
        img.src = element.image;
        img.classList.add('product-img')

        containerProduct.appendChild(img);
        toRender.push(containerProduct);

      });
      container.append(...toRender)
    });
};




