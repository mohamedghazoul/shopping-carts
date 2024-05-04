let links = document.querySelector(".login-links")
let user = document.querySelector(".user")
let user_name = document.querySelector(".user_name")
let logOut = document.querySelector(".logout")
let carts_products_div = document.querySelector(".carts-products div")
let carts_products = document.querySelector(".carts-products")
let vew_products = document.querySelector(".Vew-products")
let continer = document.querySelector(".continer")
let span = document.querySelector(".num-carts")
let body = document.querySelector(".body")
let delete_btn = document.querySelector(".delete")

let products = [
  {id:1,img:"img/car.jpg",title:"BMW X6"},
  {id:2,img:"img/iphone.jpg",title:"Iphone 15 Pro Max"},
  {id:3,img:"img/mac book.jpg",title:"Mac Book"},
  {id:4,img:"img/smart.jpg",title:"Smart Watch"}
]
let src  =localStorage.getItem("src")
console.log(products)
if(body.style.height <="100vh"){
  body.style.height <="100vh"
}
if(localStorage.getItem("user")){
    links.style.display = "none"
    user.style.display = "block"
    user_name.innerHTML = localStorage.getItem("user")
}
logOut.addEventListener("click",function(){
  localStorage.removeItem("user")
  localStorage.removeItem("products_carts")
  window.location ="login.html"
})
vew_products.addEventListener("click",function(){
  setTimeout(() => {
    window.location = "products.html"
  }, 1500);
})

let drow = products.map((item)=>{
  return `
  <div class="cards">
  <img src="${item.img}" alt="">
  <div class="alpha">
  <div class="content">
  <h3>${item.title}</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, itaque.</p>
  <div class="add">
    <button onclick = "addItems(${item.id})" class="add-btn">Add In Carts</button>
    <i class="fa-solid fa-heart"></i>
  </div>
</div>
</div>
</div>
  `
})

continer.innerHTML += drow.join("") 

let additem = localStorage.getItem("products_carts") ? JSON.parse(localStorage.getItem("products_carts")) : [];


if(localStorage.getItem("products")){
  additem.map((item)=>{
    carts_products_div.innerHTML += `<p>${item.title}</p>` 
  })
  span.style.display = "block"
  span.innerHTML = additem.length
}else {
  span.style.display = "none"
}
let product_cart = [];
function addItems(id){
  if(localStorage.getItem("user")){
    x = products.find((item)=>item.id == id)
        carts_products_div.innerHTML += `<p>${x.title}</p>`
        let length = product_cart.length 
        product_cart.push({id:length,title:x.title,img:x.img})
        console.log(product_cart)
        localStorage.setItem("products_carts",JSON.stringify(product_cart))
        console.log(x.title)
        let carts_products_div_p = document.querySelectorAll(".carts-products div p")
        console.log(carts_products_div_p.length)
        additem = [...additem,x]
        localStorage.setItem("products",JSON.stringify(additem))
        span.style.display = "block"
        span.innerHTML = carts_products_div_p.length
        console.log(additem)
    }else{
      window.location = "register.html"
    }
}


function opin(){
    if (localStorage.getItem("products")){
    if (carts_products.style.opacity == "0"){
      carts_products.style.opacity = "1"
    }else {
      carts_products.style.opacity = "0"
    }
  }else{
    alert ("please shosse your products")
  }
  }

  delete_btn.addEventListener("click",function(){
    localStorage.removeItem("product")
    location.reload();
  })

  delete_btn.addEventListener("click",function(){
  localStorage.removeItem("products")
  additem = [];
  })
