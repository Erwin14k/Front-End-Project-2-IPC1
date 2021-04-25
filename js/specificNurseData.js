

getNurseId();
function getNurseId(){
    let selectionOfNurse = document.getElementById("searchByIdNurse");
    fetch("http://127.0.0.1:5000/get-id-specific-nurse",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id":localStorage.getItem("id")            
        })
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(user => {
            selectionOfNurse.innerHTML = selectionOfNurse.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}


try{
    let searchMyDataNurse = document.getElementById("searchMyData");
    searchMyDataNurse.addEventListener("click",getDataOfNurseById_);
} catch (error) {
    
}
function getDataOfNurseById_(){
    let id4 = document.getElementById("searchByIdNurse").value;
    let name4 = document.getElementById("nameNurse");
    let lastName4 = document.getElementById("lastNameNurse");
    let userName4 = document.getElementById("userNameNurse");
    let password4 = document.getElementById("passwordNurse");
    let birth4 = document.getElementById("birthNurse");
    fetch("http://127.0.0.1:5000/get-data-nurse-by-id",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id4               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        res.forEach(user => {
            let dateArray4 = user.date_of_birth.split("/").reverse();
            let finalDate4 = dateArray4[0]+"-"+dateArray4[1]+"-"+dateArray4[2];
            name4.value = user.name ;
            lastName4.value = user.last_name;
            userName4.value = user.user_name;
            password4.value = user.password;
            birth4.value = finalDate4;
            
        });

    })        
}