const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1'
});

const home = document.querySelector('.home');
const relatedProducts = document.querySelector('.relatedProducts-scrollContainer')