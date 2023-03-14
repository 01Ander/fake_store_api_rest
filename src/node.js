const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products'
});

const home = document.querySelector('.home');
const relatedProducts = document.querySelector('.relatedProducts-scrollContainer')