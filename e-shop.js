// import { products } from "/data.js";

const newH3 = document.createElement("h3");

newH3.textContent = "Other Products!"
newH3.id = "description"



const item3 = document.querySelectorAll(".items3");
document.body.insertBefore(newH3, item3[0]);
// document.body.append(newH3);

const card = document.getElementsByClassName(".card-img");
const img = document.createElement("img");
img.src = product1.jpeg;    

document.body.append(img);

// const img = document.createElement("img")
// img.src = product1.jpeg;
// document.body.append("img")
// let items4 = document.getElementById("items4");
// console.log(products);
// products.forEach((item) => {
//   let card = document.createElement("div");
//   let img = document.createElement("img");
//   let pTitle = document.createElement("p");

//   img.src = item.image;
//   pTitle.textContent = item.title;
//   card.appendChild(img);
//   card.appendChild(pTitle);
//   cards_container.appendChild(card);
// });

