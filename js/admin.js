let links = document.querySelector(".login-links")
let user = document.querySelector(".user")
let user_name = document.querySelector(".user_name")
let logOut = document.querySelector(".logout")
let label = document.querySelector(".label")
let imeg_file = document.querySelector("#imeg-file")
let title = document.querySelector(".title")
let textarea = document.querySelector(".textarea")
let color = document.querySelector(".color")
let amount = document.querySelector(".amount")
let add_product = document.querySelector(".add-product")
let password = document.querySelector(".password-admin")
let cotnenar = document.querySelector(".cotnenar")
let form = document.querySelector("form")
let labb = document.querySelector(".labb")
let submit = document.querySelector(".submit-login")

submit.addEventListener("click",function(e){
    e.preventDefault()
        if(password.value=="mohamed.2003"){
            cotnenar.style.display="grid"
            form.style.display = "none"
        }else {
            labb.innerHTML = "tha password is not accept"
        }
})



////////////////////////////////////////////

// let srcImg = localStorage.getItem("src")?JSON.parse(localStorage.getItem("src")):[];


let src ;
function change_img(){
    src = URL.createObjectURL(imeg_file.files[0])
    console.log(src)
    // localStorage.setItem("src",src)
    label.innerHTML = `<img class="imge-product" src="${src}">`
}
let dataProduct = localStorage.getItem("newProduct")?JSON.parse(localStorage.getItem("newProduct")):[];
add_product.addEventListener("click",function(){
    if(imeg_file.value!==""&&title.value !==""&&textarea.value !==""&&color.value !==""&&amount.value !==""){
        dataProduct.push({id:dataProduct.length,src:src,title:title.value,discraption:textarea.value,color:color.value,amount:amount.value})
        localStorage.setItem("newProduct",JSON.stringify(dataProduct))
        console.log(dataProduct)
        label.innerHTML = `<i class="fa-light fa-plus"></i>`
        title.value =""
        textarea.value =""
        color.value =""
        amount.value =""
        // console.log(newproduct)
    }else{
        alert("enter all data for a product")
    }
})
