try{
    let newPatientBtn = document.getElementById("redRegister");
    newPatientBtn.addEventListener("click",create_patient);
    
} catch (error) {
    
}


// Función para crear usuario
function create_patient(){
    // Obteniendo valores de los inputs
    let name = document.getElementById("nameInputR").value;
    let lastName = document.getElementById("lastnameInputR").value;
    let userName = document.getElementById("usernameInputR").value;
    let password = document.getElementById("passwordInputR").value;
    let birth = document.getElementById("birthInputR").value;
    let gender = document.getElementById("genderListR").value;
    let phone = document.getElementById("phoneInputR").value;
        // Haciendo una petición al servidor
        fetch("https://ipc1project2.herokuapp.com/register",{
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
            if(res.state == "ok"){
                window.alert("Tu usuario ha sido creado con éxito")
                window.location = "adminView.html"
            }
            else{
                window.alert("El nombre de usuario no está disponible")
            }
        })
    }
