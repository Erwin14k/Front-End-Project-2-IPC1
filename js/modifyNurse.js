try{
    let updatenBtnNu = document.getElementById("updateNurseBtn");
    updatenBtnNu.addEventListener("click",updateNurse_);
} catch (error) {
    
}

function updateNurse_(){
    let idnu = document.getElementById("searchByIdNurse").value;
    let namenu = document.getElementById("nameNurse").value;
    let lastNamenu = document.getElementById("lastNameNurse").value;
    let userNamenu = document.getElementById("userNameNurse").value;
    let passwordnu = document.getElementById("passwordNurse").value;
    let birthnu = document.getElementById("birthNurse").value;
    let dateArrayNu = birthnu.split("-").reverse();
    let finalDateNu = dateArrayNu[0]+"/"+dateArrayNu[1]+"/"+dateArrayNu[2];
    fetch("http://127.0.0.1:5000/update-nurse",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idnu,
            "name": namenu,
            "last_name": lastNamenu,
            "user_name": userNamenu,
            "password":passwordnu,
            "date_of_birth":finalDateNu
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        if(res.state=="perfect"){
            window.alert("Tu actualización de datos ha sido realizada con éxito!")
            window.location.reload();
        }else{
            window.alert("El nombre de usuario ya está en uso, intenta de nuevo!")
        }

    })        
}