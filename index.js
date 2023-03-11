const API = 'https://api.escuelajs.co/api/v1';
const main = document.querySelector('.main')

function fetchData(urlApi) {
	return fetch(urlApi);
};

// fetchData(`${API}/products/25`)
//   .then((response) => response.json())
//   .then(product => {
//     const title = document.createElement('h3');
//     title.innerText = product.title
//     main.appendChild(title)

//     const img =document.createElement('img');
//     img.src = product.images[0]
//     img.width = 250;
//     main.appendChild(img)

//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log('Finally promise'))

fetchData(`${API}/products?limit=10&offset=5`)
  .then((response) => response.json())
  .then(products => {
    const toRender = [];
    const section = document.querySelector('.main');

    products.forEach(element => {
      const art = document.createElement('article');
      const img = document.createElement('img');
      const title = document.createElement('p');
      const price = document.createElement('p')

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

  fetchData(`${API}/categories?limit=5&offset=0`)
  .then((response) => response.json())
  .then(products => {
    console.log(products);
    const toRender = [];
    const list = document.querySelector('.list');

    products.forEach(element => {
      const name = document.createElement('li');
      name.innerText = element.name;

      toRender.push(name)
    })
    list.append(...toRender)
  })