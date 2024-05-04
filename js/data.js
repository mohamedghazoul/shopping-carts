let tb = document.querySelector(".tbody")



// let data = [
//     {name:localStorage.getItem("name"),password:localStorage.getItem("password"),email:localStorage.getItem("email")}
// ]
// console.log(data)
// if(data.name !=localStorage.getItem("name")){
    // data.push({name:localStorage.getItem("name"),email:localStorage.getItem("email"),password:localStorage.getItem("password")})
    // }
    if (localStorage.getItem("name")!= null){
        
    let data = [];
    data.push(localStorage)
    data.map((item)=>{
        tb.innerHTML += 
        `<tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
        </tr>`
    })
    console.log(data)
} else {
}





// console.log(data)
console.log(localStorage)

// setTimeout(() => {
    //     location.reload()
    // }, 4000);