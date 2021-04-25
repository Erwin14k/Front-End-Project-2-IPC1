try{
    let declineBta = document.getElementById("decilneBtn");
    declineBta.addEventListener("click",declineAppointment);
} catch (error) {
    
}



function declineAppointment(){
    let id = document.getElementById("searchById2").value;
    if(id!=""){
    fetch("http://127.0.0.1:5000/decline-appointment",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("La cita con el id: "+id+" ha sido rechazada con éxito!")
        window.location.reload();

    })  
}
else{
    window.alert("Ya no existen citas pendientes, puedes descansar!")
}           
}