window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false)

function navigation() {
  console.log({ location });

  if (location.hash.startsWith('#clothes')) {
    console.log("section clothes");
  } else if (location.hash.startsWith('#home')){
    console.log('Estas en casa');
    getProducts();
    getCategories();
  }
}

