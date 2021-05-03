try {
    let newPatientBtn = document.getElementById("register");
    newPatientBtn.addEventListener("click", create_patient);

} catch (error) {

}


// Función para crear usuario
function create_patient() {
    // Obteniendo valores de los inputs

    let name = document.getElementById("nameInputR").value;
    let lastName = document.getElementById("lastnameInputR").value;
    let userName = document.querySelector("#userNameInputR").value;
    let password = document.getElementById("passwordInputR").value;
    let birth = document.getElementById("birthInputR").value;
    let gender = document.getElementById("genderInputR").value;
    let phone = document.getElementById("phoneInputR").value;
    if (name != "" && lastName != "" && userName != "" && gender != "" && birth != "") {
        if (password.length >= 8) {
            if (gender == "m" || gender == "f") {
                // Haciendo una petición al servidor
                fetch("https://ipc1project2.herokuapp.com/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "user_name": userName,
                        "password": password,
                        "gender": gender,
                        "date_of_birth": birth,
                        "phone": phone

                    })
                }).then(res => res.json())
                    .catch(err => {
                        window.alert("Ocurrio un error al intentar crear tu usuario")
                    })
                    .then(res => {
                        // Verificando estado de respuesta y cambiando vista a login
                        if (res.state == "perfect") {
                            window.alert("Tu usuario ha sido creado con éxito")
                            window.location = "./index.html"
                        }
                        else {
                            window.alert("El nombre de usuario no está disponible")
                        }
                    })
            }
            else {
                window.alert("En el espacio de género solo es permitido colocar |f| ó |m|")
            }
        }
        else {
            window.alert("La contraseña debe tener al menos 8 caracteres!")
        }
    }
    else {
        window.alert("Debes llenar todos los campos y la contraseña debe tener al menos 8 caracteres para poder continuar!")
    }
}
