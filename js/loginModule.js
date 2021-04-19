(function () {
    if(localStorage.getItem('logged')){
        window.location = "./adminView.html"
    }
})();


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
            if(res.state == "perfect"){
                window.alert(res.message);
                window.location = "./adminView.html"
                localStorage.setItem("logged", true);
                localStorage.setItem("user_name", userName);
                localStorage.setItem("password", password);
            }
            else{
                window.alert(res.message)
            }
        })
    }
    else{
        window.alert("Debes llenar Todos los campos para poder iniciar Sesión")
    }
}
