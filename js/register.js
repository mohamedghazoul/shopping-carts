let name = document.querySelector(".name-register")
let email = document.querySelector(".email-register")
let password = document.querySelector(".passowrd-register")
let submit = document.querySelector(".submit-register")
let spenar = document.querySelector(".fa-spinner")
let ss = document.querySelector(".ss")
let lab = document.querySelector(".lab")
// let data = [];


let data = localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(name.value ==="" || email.value==="" || password.value===""){
            setTimeout(() => {
                ss.style.display = "none"
                spenar.style.display = "block"
            }, 500);
        setTimeout(() => {
            lab.innerHTML = "Please Enter your data"
        },1500 );
        setTimeout(() => {
            ss.style.display = "block"
            spenar.style.display = "none"
        }, 1400);   
    }else{
        let x = data.find((item)=>item.name==name.value)
        let y = data.find((item)=>item.email==email.value)
        if(x!=null&&y!=null){
            setTimeout(() => {
                ss.style.display = "none"
                spenar.style.display = "block"
            }, 500);
            setTimeout(() => {
                spenar.style.display = "none"
                lab.innerHTML = "The Email Or User Name Olready token"
                ss.style.display = "block"
            }, 1500);
        }
        else{
        localStorage.setItem ("name", name.value)
        localStorage.setItem ("email", email.value )
        localStorage.setItem ("password",password.value)
        data.push({name:name.value,email:email.value,password:password.value})
        localStorage.setItem("data",JSON.stringify(data))


        setTimeout(() => {
            ss.style.display = "none"
            spenar.style.display = "block"
        }, 500);
        setTimeout(() => {
            spenar.style.display = "none"
        submit.innerHTML = `<i class="fa-solid fa-check"></i>`
        }, 1500);
        setTimeout(() => {
            window.location = "login.html"
        }, 3000);
        data.push({name:localStorage.getItem("name"),email:localStorage.getItem("email"),password:localStorage.getItem("password")})
        console.log(data)
    }
    }
})
