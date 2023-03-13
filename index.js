const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1'
});


api
  .get(`/products?limit=12&offset=5`)
  .then(products => {
    data = products.data

    const toRender = [];
    const section = document.querySelector('.main');

    data.forEach(element => {
      const art = document.createElement('article');
      const img = document.createElement('img');
      const title = document.createElement('p');
      const price = document.createElement('p')

      art.classList.add(element.category.name);

      img.src = element.images[0];
      title.innerText = element.title;
      price.innerText = `$${element.price}`;

      art.appendChild(img);
      art.appendChild(title);
      art.appendChild(price);

      toRender.push(art);

    });
    section.append(...toRender)
  })

api
  .get('/categories?limit=5&offset=0')
  .then(products => {
    data = products.data
    console.log(data);
    const toRender = [];
    const list = document.querySelector('.list');

    data.forEach(element => {
      const name = document.createElement('li');
      name.innerText = element.name;
      name.classList.add(`li-${element.name}`)

      toRender.push(name)
    })
    list.append(...toRender)
  })

