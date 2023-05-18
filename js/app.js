'use strict';

function AppState() {
  this.allProducts = [];
};

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

};

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
    //Step 1 Convert data to string/JSON to store
  let stringyImages = JSON.stringify(productIndexArray);
  console.log('Stringified images >>> ', stringyImages);

    //Step 2 - Store the stringy data to local storage
  localStorage.setItem('myImages', stringyImages);
};

AppState.prototype.loadItems = function () {
  // Step 1: Get data from local storage
  let retrievedImages = localStorage.getItem('myImages');
  console.log('Images from local storage >>> ', retrievedImages);

  // Step 2: Convert the retrieved data into usable code
  let parsedImages = JSON.parse(retrievedImages);
  console.log('Parsed images >>> ', parsedImages);

  // Step 3: Clear the existing products in allProducts array
  this.allProducts = [];

  // Step 4: Reconstruct loaded data or instantiate new products
  if (parsedImages) {
    for (let i = 0; i < parsedImages.length; i++) {
      const productData = parsedImages[i];
      const product = new Product(productData.name);

      product.timesClicked = productData.timesClicked;
      product.timesShown = productData.timesShown;

      this.allProducts.push(product);
    }
  } else {
    // If no data is found in local storage, instantiate new products
    this.instantiateProducts();
  }
};

/*
AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
    //Step 1 get from local
  let retrievedImages = localStorage.getItem('myImages');
  console.log('Images from local storage >>> ', retrievedImages);

    //step 2 convert to usable code
  let parsedImages = JSON.parse(retrievedImages);
  console.log('Parsed images >>> ', parsedImages);

  //step 3 reconstructing loaded data OR instantiating new products
  
}
*/

/*
if(retrievedImages){
  for(let i = 0; i < parsedImages.length; i++){
    if(parsedImages[i].name === 'sweep'){
      let reconstructedSweep = new Product(parsedImages[i].name, 'png');
      reconstructedSweep.views = parsedImages[i].view;
      reconstructedSweep.votes = parsedImages[i].votes;
      productIndexArray.push(reconstructedSweep); 
    } else {
      let reconstructedImage = new Product(parsedImages[i].name);
      reconstructedImage.views = parsedImages[i].views;
      reconstructedImage.votes = parsedImages[i].views; 
      productIndexArray.push(reconstructedImage);
    }
  }
} */

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
};
