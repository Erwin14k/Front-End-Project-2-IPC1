try{
    let declineBta3 = document.getElementById("decilneBtnD");
    declineBta3.addEventListener("click",declineAppointment);
} catch (error) {
    
}



function declineAppointment(){
    let id = document.getElementById("searchById3").value;
    if(id!=""){
    fetch("https://ipc1project2.herokuapp.com/decline-appointment",{
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