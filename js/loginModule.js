


try{
    let loginBtn = document.getElementById("btnLogin");
    loginBtn.addEventListener("click",login);
} catch (error) {
    
}


// Función para inicar sesión
function login(){
    // Obteniendo valores de los inputs usuario y contraseña
    let userName = document.getElementById("usernameInputL").value;
    let password = document.getElementById("passwordInputL").value;
    // Este if verificará que los input de usuario y contraseña no esten vacios
    if(userName != "" && password != ""){
        // Haciendo una petición al servidor de alojamiento
        fetch("http://127.0.0.1:5000/login",{
            //En este caso se utiliza un método POST
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "user_name": userName,
                "password":password                
            })
        }).then(res => res.json())
        .catch(err  => {
            //Si ocurre un error con el servidor nos mostrará este mensaje
            window.alert("Ocurrio un error al intentar iniciar sesión, intente de Nuevo")
        })
        .then(res => {
            // Verificando estado de respuesta y cambiando vista a login
            if(res.state == "perfect"&& res.role=="admin"){
                window.alert(res.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("id",res.id);
                localStorage.setItem("user_name", userName);
                localStorage.setItem("role", res.role);
                localStorage.setItem("name",res.name);
                window.location = "./adminView.html";
            }
            else if((res.state == "perfect"&& res.role=="nurse")){
                window.alert(res.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("id",res.id);
                localStorage.setItem("user_name", userName);
                localStorage.setItem("role", res.role);
                localStorage.setItem("name",res.name);
                window.location = "./nurseView.html";
            }
            else if((res.state == "perfect"&& res.role=="doctor")){
                window.alert(res.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("id",res.id);
                localStorage.setItem("user_name", userName);
                localStorage.setItem("role", res.role);
                localStorage.setItem("name",res.name);
                window.location = "./doctorView.html";
            }
            else if((res.state == "perfect"&& res.role=="patient")){
                window.alert(res.message);
                localStorage.setItem("logged", true);
                localStorage.setItem("id",res.id);
                localStorage.setItem("user_name", userName);
                localStorage.setItem("role", res.role);
                localStorage.setItem("name",res.name);
                window.location = "./patientView.html";
            }else {
            window.alert("Nombre o usuario Incorrectos, intente de nuevo")
        }
        })
    }
    else{
        window.alert("Debes llenar Todos los campos para poder iniciar Sesión")
    }
}

try{
    let registerLinkBtn = document.getElementById("redRegister");
    registerLinkBtn.addEventListener("click",redirectRegister);
} catch (error) {
    
}

// Función para inicar sesión
function redirectRegister(){
    window.location = "./registerPatient.html";
    
}