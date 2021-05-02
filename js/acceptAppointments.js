try{
    let acceptBta = document.getElementById("acepptBtn");
    acceptBta.addEventListener("click",acceptAppointment);
} catch (error) {
    
}


function acceptAppointment(){
    let id_doctor = document.getElementById("doctorList").value;
    let id = document.getElementById("searchById2").value;
    if(id!=""){
    fetch("http://127.0.0.1:5000/accept-appointments",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "doctor": id_doctor
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("La cita con el id: "+id+" ha sido aceptada con éxito!")
        window.location.reload();

    })  
}
else{
    window.alert("Ya no existen citas pendientes, puedes descansar!")
}      
}