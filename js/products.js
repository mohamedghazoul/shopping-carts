let links = document.querySelector(".login-links")
let user = document.querySelector(".user")
let user_name = document.querySelector(".user_name")
let logOut = document.querySelector(".logout")
let continer = document.querySelector(".continer")
let body = document.querySelector(".body")
let card = document.querySelector(".cards")
let footer = document.querySelector(".site-footer")

if(localStorage.getItem("user")){
    user.style.display = "block"
    user_name.innerHTML = localStorage.getItem("name")
}
if(body.style.height <="100vh"){
    body.style.height <="100vh"
}




let products = localStorage.getItem("products_carts") ? JSON.parse(localStorage.getItem("products_carts")) : [];







let drow = products.map((item)=>{
    return `
    <div class="cards">
        <img src="${item.img}" alt="">
        <div class="alpha">
            <div class="content">
                <h3>${item.title}</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, itaque.</p>
                <div class="add">
                    <button onclick = "deleteItems(${item.id})" class="add-btn">delete In Carts</button>
                </div>
            </div>
        </div>
    </div>
    `
})
continer.innerHTML += drow.join("")
// delete
function deleteItems (id){
    if(products.length==1){
        products = [];
        localStorage.products_carts = JSON.stringify(products)
        window.location = "index.html"
    }
        products.splice(id,1)
        localStorage.products_carts = JSON.stringify(products)
        console.log(products)
        console.log(id)
        location.reload()
}
