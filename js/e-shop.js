import { products } from "./data.js";

// const img = document.createElement("img")
// img.src = "../data/product1.jpeg;"
// document.body.append("img")

// item 1
// let res = document.getElementById('card');

//              card = document.getElementById('card');
//             let img = document.createElement('img');
//             img.src = '../e-shop/images/product1.jpeg';
//             card.append(img);
//             img.classList.add('card-img');
// // item 2

// let pes = document.createElement('div');
// pes.classList.add('card');
// pes.setAttribute('id', 'card2')
// document.body.append(pes);

    
//     let tes = document.getElementById('card2')
//     const img2 = document.createElement('img');
//     img2.src = '../e-shop/images/product2.jpeg';
//     tes.append(img2);
//     img2.classList.add('card-img');

// let ves = document.createElement('div');
// ves.classList.add('card');
// ves.setAttribute('id', 'card3');
// document.body.append(ves);

// let qes = document.getElementById('card3');
// const img3 = document.createElement('img');
// img3.src = '../e-shop/images/product3.jpeg';
// qes.append(img3);
// img3.classList.add('card-img');


let cards_container = document.getElementById("items3");
console.log(products);
products.forEach((item) => {
  let iTes = document.createElement('div');
  iTes.classList.add("item");
  let card = document.createElement("div");
  card.classList.add('card')
  let img = document.createElement("img");
  let pDiv = document.createElement('div');
  pDiv.classList.add('product-info');
  let stars = document.createElement('div');
  stars.classList.add('stars');
  let starImage = document.createElement("img");
  starImage.classList.add('star');
  let pPrice = document.createElement('p');
  pPrice.classList.add('price');
  let pTitle = document.createElement("p");
  pTitle.classList.add('product-name')
  let btn = document.createElement('button');
  btn.classList.add('add-cart')

  



  document.getElementById('items3').appendChild(iTes);
  img.src = item.image; 
  starImage.src = item.stars;
  pPrice.textContent = item.price
  pTitle.textContent = item.title;
  iTes.appendChild(btn);
  btn.textContent = item.button;
  iTes.appendChild(stars);
  stars.appendChild(starImage);
  card.appendChild(img);
  img.classList.add('card-img');
  iTes.appendChild(pDiv);
  pDiv.prepend(pPrice);
  pDiv.appendChild(pTitle);
  iTes.prepend(card);
});

async function getProducts() {
  try {
    let products = await fetch("https://fakestoreapi.com/products/1");
    let data = await products.json();
    console.log(data);
    showResult(data);
  } catch (error) {
    showError("Something wrong happen in the api call");
  }
}
console.log(getProducts());