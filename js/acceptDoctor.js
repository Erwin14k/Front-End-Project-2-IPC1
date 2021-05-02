
get_appointments_list_by_id_();


function get_appointments_list_by_id_(){
    let selectionOfapp2 = document.getElementById("searchById3")
    fetch("http://127.0.0.1:5000/get-id_appointments",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(appointment => {
            selectionOfapp2.innerHTML = selectionOfapp2.innerHTML + `
            
                <option>${appointment.id} </option>
`        
        });
    })        
}


try{
    let acceptBta2 = document.getElementById("acepptBtnD");
    acceptBta2.addEventListener("click",acceptAppointmentSoctor);
} catch (error) {
    
}

function acceptAppointmentSoctor(){
    let id = document.getElementById("searchById3").value;
    if(id!=""){
    fetch("http://127.0.0.1:5000/accept-appointments-doctor",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "doctor": localStorage.getItem("id")
                        
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