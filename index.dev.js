"use strict";

var API = 'https://api.escuelajs.co/api/v1';
var main = document.querySelector('.main');

function fetchData(urlApi) {
  return fetch(urlApi);
}

;
fetchData("".concat(API, "/products/25")).then(function (response) {
  return response.json();
}).then(function (product) {
  var title = document.createElement('h3');
  title.innerText = product.title;
  main.appendChild(title);
  var img = document.createElement('img');
  img.src = product.images[0];
  img.width = 250;
  main.appendChild(img);
})["catch"](function (error) {
  return console.log(error);
})["finally"](function () {
  return console.log('Finally promise');
});
fetchData("".concat(API, "/products?limit=10&offset=0")).then(function (response) {
  return response.json();
}).then(function (products) {
  var toRender = [];
  var section = document.querySelector('.main');
});