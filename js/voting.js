'use strict';


let votingRounds = 25;
let productIndexArray = [];

let imgElements = document.querySelectorAll('img');
let imgContainer = document.querySelector('section');


let state = new AppState();
state.loadItems();

function generateRandomProduct() {
  return Math.floor(Math.random() * state.allProducts.length);
}

function renderProductImages() {

  while (productIndexArray.length < 6) {
    let randomProductIndex = generateRandomProduct();
    if (!productIndexArray.includes(randomProductIndex)) {
      productIndexArray.push(randomProductIndex);
    }
  }

  for (let i = 0; i < imgElements.length; i++) {
    let randomIndex = productIndexArray.shift()

    imgElements[i].src = state.allProducts[randomIndex].source
    imgElements[i].title = state.allProducts[randomIndex].name
    imgElements[i].alt = state.allProducts[randomIndex].name
    state.allProducts[randomIndex].timesShown++;
  }
}

function handleImageClick(event) {
  let imageClicked = event.target.title;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (imageClicked === state.allProducts[i].name) {
      state.allProducts[i].timesClicked++;
      votingRounds--;
      renderProductImages();
    }

    if (votingRounds === 0) {
      imgContainer.removeEventListener('click', handleImageClick);
      state.saveToLocalStorage();
    }
  }
}

renderProductImages();
imgContainer.addEventListener('click', handleImageClick);
