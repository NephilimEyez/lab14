'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
    //convert to string
  const stringProducts = JSON.stringify(this.allProducts);
  console.log('stringified products >>>> ', stringProducts)
    //save the JSON to local
  localStorage.setItem('products', stringProducts);
}

AppState.prototype.loadItems = function () {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
    //retrieve JSON string
  const loadedProducts = localStorage.getItem('products');
  console.log('Products from local storage >>>> ', loadedProducts)
    //check if there is any data in local stg
  if (loadedProducts){
    //parse the JSON
    const parcedProducts = JSON.parse(loadedProducts);
    console.log('Parsed Products >>>> ', [parcedProducts])
    //assign the parsed array to the allProducts property
    this.allProducts = parcedProducts;
  } else {
    // if there is no data in local, instantiate new
    this.instantiateProducts();
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
