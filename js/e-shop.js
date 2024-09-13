// import { products } from "./data.js";

const newH3 = document.createElement("h3");

newH3.textContent = "Other Products!"
newH3.id = "description"



const item3 = document.querySelectorAll(".items3");
document.body.insertBefore(newH3, item3[0]);
// document.body.append(newH3);

// const img = document.createElement("img")
// img.src = "../data/product1.jpeg;"
// document.body.append("img")

// item 1
let res = document.getElementById('card');

            const card = document.getElementById('card');
            let img = document.createElement('img');
            img.src = '../e-shop/images/product1.jpeg';
            card.append(img);
            img.classList.add('card-img');
// // item 2

let pes = document.createElement('div');
pes.classList.add('card');
pes.setAttribute('id', 'card2')
document.body.append(pes);

    
    let tes = document.getElementById('card2')
    const img2 = document.createElement('img');
    img.src = '../e-shop/images/product2.jpeg';
    tes.append(img2);


// let items4 = document.getElementById("items3");
// console.log(products);
// products.forEach((item) => {
//   let card = document.createElement("div");
//   card.classList.add('card')
//   let img = document.createElement("img");
//   let pTitle = document.createElement("p");

//   img.src = item.image;
//   pTitle.textContent = item.title;
//   card.appendChild(img);
//   card.appendChild(pTitle);
//   cards_container.appendChild(card);
// });

