try{
    let updatenBtnD = document.getElementById("updateDoctorBtn");
    updatenBtnD.addEventListener("click",updateDoctor_);
} catch (error) {
    
}

function updateDoctor_(){
    let idd = document.getElementById("searchByIdDoctor").value;
    let named = document.getElementById("namedoctor").value;
    let lastNamed = document.getElementById("lastNamedoctor").value;
    let userNamed = document.getElementById("userNamedoctor").value;
    let passwordd = document.getElementById("passworddoctor").value;
    let birthd = document.getElementById("birthdoctor").value;
    let dateArrayd = birthd.split("-").reverse();
    let finalDated = dateArrayd[0]+"/"+dateArrayd[1]+"/"+dateArrayd[2];
    fetch("http://127.0.0.1:5000/update-doctor",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idd,
            "name": named,
            "last_name": lastNamed,
            "user_name": userNamed,
            "password":passwordd,
            "date_of_birth":finalDated
                        
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