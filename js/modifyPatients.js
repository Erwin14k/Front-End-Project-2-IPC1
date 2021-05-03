try{
    let updatePatientBtn2 = document.getElementById("updatePatientBtn");
    updatePatientBtn2.addEventListener("click",updatePatient_);
} catch (error) {
    
}

function updatePatient_(){
    let idnu = document.getElementById("searchByIdPatientt").value;
    let namenu = document.getElementById("namePatient").value;
    let lastNamenu = document.getElementById("lastNamePatient").value;
    let userNamenu = document.getElementById("userNamePatient").value;
    let passwordnu = document.getElementById("passwordPatient").value;
    let birthnu = document.getElementById("birthPatient").value;
    let dateArrayp = birthnu.split("-").reverse();
    let finalDatep = dateArrayp[0]+"/"+dateArrayp[1]+"/"+dateArrayp[2];
    fetch("http://127.0.0.1:5000/update-patient",{
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
            "date_of_birth":finalDatep
                        
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