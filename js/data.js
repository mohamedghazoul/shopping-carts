let tb = document.querySelector(".tbody")
let name = document.querySelector(".name-login")
let password = document.querySelector(".password-login")
let submit = document.querySelector(".submit-login")


// let data = [
//     {name:localStorage.getItem("name"),password:localStorage.getItem("password"),email:localStorage.getItem("email")}
// ]
// console.log(data)
// if(data.name !=localStorage.getItem("name")){
    // data.push({name:localStorage.getItem("name"),email:localStorage.getItem("email"),password:localStorage.getItem("password")})
    // }



    // let name = localStorage.getItem("name")?JSON.parse(localStorage.getItem("name")):[]
    // let password = localStorage.getItem("password")?JSON.parse(localStorage.getItem("password")):[]
    // let email = localStorage.getItem("email")?JSON.parse(localStorage.getItem("email")):[]
        
submit.addEventListener("click",function(e){
    e.preventDefault()
    if(name.value=="mohamed"&&password.value=="mohamed2003"){
        document.querySelector("form").style.opacity = "0"
        document.querySelector("table").style.opacity = "1"
    }
})

    let data = localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]


    let x= data.map((item)=>{
        return `
        <tr>
            <td scope="col">${item.name}</td>
            <td scope="col">${item.email}</td>
            <td scope="col">${item.password}</td>
          </tr>
        `
    })
    tb.innerHTML += x.join("")






// console.log(data)
// console.log(localStorage)

// setTimeout(() => {
    //     location.reload()
    // }, 4000);
