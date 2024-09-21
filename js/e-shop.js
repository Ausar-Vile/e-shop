import { products } from "./data.js";

// document.body.append(newH3);

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
  let card = document.createElement("div");
  card.classList.add('card')
  let img = document.createElement("img");
  let pTitle = document.createElement("p");

  img.src = item.image;
  pTitle.textContent = item.title;
  card.appendChild(img);
  card.append(pTitle);
  cards_container.appendChild(card);
});

