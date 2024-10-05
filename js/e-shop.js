import { products } from "./data.js";
let cards_container = document.getElementById("items1");
console.log(products);
products.forEach((item) => {
  let iTes = document.createElement('div');
  iTes.classList.add("item");
  let a = document.createElement('a');
  a.setAttribute('href',"./html/item1.html");
  a.innerText = 'link text';
  let card = document.createElement("div");
  card.classList.add('card')
  let img = document.createElement("img");
  img.style.width = '150px';
  img.style.margin='0 15px';
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

  



  document.getElementById('items1').appendChild(iTes);
  iTes.appendChild(a);
  img.src = item.image; 
  starImage.src = item.stars;
  pPrice.textContent = item.price
  pTitle.textContent = item.title;
  pDiv.prepend(pPrice);
  iTes.appendChild(pDiv);
  btn.textContent = item.button;
  iTes.appendChild(stars);
  stars.appendChild(starImage);
  card.appendChild(img);
  img.classList.add('card-img');
  
  iTes.appendChild(btn);
  
  pDiv.appendChild(pTitle);
  iTes.prepend(card);
});


import { showItems } from "./fun.js";
console.log(products);
const cart_icon = document.getElementById("cart_icon");
const layout = document.querySelector(".layout");
const model_content = document.querySelector(".content");
const total_price = document.querySelector("#total_price");

const cart = [];
cart_icon.addEventListener("click", () => {
  layout.classList.toggle("hide");
  showCartItems(cart);
});
async function getProducts() {
  try {
    let products = await fetch("https://fakestoreapi.com/products");
    let data = await products.json();
    console.log(data, "product from api");
    showItems(data.slice(0, 4));
  } catch (error) {
    // showError("Something wrong happen in the api call");
  }
}

export function addToCart(item) {
  cart.push(item);
  console.log(cart);
}

function showCartItems(cart) {
  let price = 0;

  cart.forEach((element) => {
    price += element.price;
    let cart_item = document.createElement("div");
    cart_item.textContent = element.title;
    model_content.appendChild(cart_item);
    total_price.textContent = price;
    // create img
    // create delete btn
  });
}
// const trash_icon = document.getElementById("trash_icon");
// const apply_btn = document.querySelector(".apply");
// apply_btn.addEventListener("click", () => {
//   if (!isEdit) {
//     let randomId = Math.random(9, 4);
//     console.log(randomId);
//     data.push({ name: task_input.value, id: randomId, select: false });
//     layout.classList.toggle("hide");
//     showTasks();
//   } else {
//     editItem(editId);
//     layout.classList.toggle("hide");
//     isEdit = false;
//   }
// });
// export function deleteItem(id) {
//   const filterdTasks = data.filter((item) => {
//     return item.id != id;
//   });
//   // tasks = filterdTasks;
//   showTasks(filterdTasks);
// }
getProducts();