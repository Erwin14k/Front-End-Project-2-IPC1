getPatientId();

function getPatientId(){
    let selectionOfPatientt = document.getElementById("idA");
    fetch("https://ipc1project2.herokuapp.com/get-id-specific-patient",{
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
            selectionOfPatientt.innerHTML = selectionOfPatientt.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}




try{
    let newA = document.getElementById("solicitarBtn");
    newA.addEventListener("click",request_);
    
} catch (error) {
    
}


// Función para crear usuario
function request_(){
    // Obteniendo valores de los inputs

    let id = document.getElementById("idA").value;
    let time = document.getElementById("timeA").value;
    let date = document.querySelector("#dateA").value;
    let reason = document.getElementById("reasonA").value;

        // Haciendo una petición al servidor
        fetch("https://ipc1project2.herokuapp.com/request-appointment",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "id_patient": id,
                "date": date,
                "time": time,
                "reason":reason
                
            })
        }).then(res => res.json())
        .catch(err  => {
            window.alert("Ocurrio un error al intentar crear tu usuario")
        })
        .then(res => {
            // Verificando estado de respuesta y cambiando vista a login
            if(res.state == "perfect"){
                window.alert("Tu cita se ha creado con éxito! ")
                window.location.reload();
            }
            else{
                window.alert("No puedes solicitar una cita en este momento, tienes una cita pendiente o en proceso!")
            }
        })
    }