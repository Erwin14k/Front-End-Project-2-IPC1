try{
    let newPatientBtn = document.getElementById("register");
    newPatientBtn.addEventListener("click",create_patient);
    
} catch (error) {
    
}


// Función para crear usuario
function create_patient(){
    // Obteniendo valores de los inputs

    let name = document.getElementById("nameInputR").value;
    let lastName = document.getElementById("lastnameInputR").value;
    let userName = document.querySelector("#userNameInputR").value;
    let password = document.getElementById("passwordInputR").value;
    let birth = document.getElementById("birthInputR").value;
    let gender = document.getElementById("genderInputR").value;
    let phone = document.getElementById("phoneInputR").value;
    if(gender == "m" || gender == "f"){
        // Haciendo una petición al servidor
        fetch("http://127.0.0.1:5000/register",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "last_name": lastName,
                "user_name": userName,
                "password":password,
                "gender":gender,
                "date_of_birth":birth,
                "phone": phone
                
            })
        }).then(res => res.json())
        .catch(err  => {
            window.alert("Ocurrio un error al intentar crear tu usuario")
        })
        .then(res => {
            // Verificando estado de respuesta y cambiando vista a login
            if(res.state == "perfect"){
                window.alert("Tu usuario ha sido creado con éxito")
                window.location = "./index.html"
            }
            else{
                window.alert("El nombre de usuario no está disponible")
            }
        })
    }
    else{
       window.alert("Debes llenar Todos los campos de manera correcta para poder continuar")
    }
    }
