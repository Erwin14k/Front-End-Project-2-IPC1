get_waiting_appointments2();
get_accepted_appointments_for_me();
get_finished_appointments_for_me();
get_accepted_appointments_id_for_me();

function get_waiting_appointments2(){
    let waiting2 = document.getElementById("waidoctor")
    fetch("http://127.0.0.1:5000/get-waiting-appointments",{
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
            waiting2.innerHTML = waiting2.innerHTML + `
            <tr>
                <td>${appointment.id} </td>
                <td>${appointment.id_patient} </td>
                <td>${appointment.date} </td>
                <td>${appointment.time} </td>
                <td>${appointment.reason} </td>
            </tr>`
            
        });
    })        
}

function get_accepted_appointments_for_me(){
    let accepted2 = document.getElementById("accforme")
    fetch("http://127.0.0.1:5000/get-appointments-of-a-doctor",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": localStorage.getItem("id")        
        })
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(appointment => {
            accepted2.innerHTML = accepted2.innerHTML + `
            <tr>
            <td>${appointment.id} </td>
            <td>${appointment.id_patient} </td>
            <td>${appointment.date} </td>
            <td>${appointment.time} </td>
            <td>${appointment.reason} </td>
            <td>${appointment.name_doctor} </td>
            </tr>`
            
        });
    })        
}

function get_finished_appointments_for_me(){
    let finished = document.getElementById("finforme")
    fetch("http://127.0.0.1:5000/get-finished-appointments-of-a-doctor",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": localStorage.getItem("id")           
        })
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(appointment => {
            finished.innerHTML = finished.innerHTML + `
            <tr>
            <td>${appointment.id} </td>
            <td>${appointment.id_patient} </td>
            <td>${appointment.date} </td>
            <td>${appointment.time} </td>
            <td>${appointment.reason} </td>
            <td>${appointment.name_doctor} </td>
            </tr>`
            
        });
    })        
}


function get_accepted_appointments_id_for_me(){
    let selectionOfapp4 = document.getElementById("searchByIdF")
    fetch("http://127.0.0.1:5000/get-appointments-of-a-doctor",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": localStorage.getItem("id")        
        })
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(appointment => {
            selectionOfapp4.innerHTML = selectionOfapp4.innerHTML + `
            
                <option>${appointment.id} </option> `
            
        });
    })        
}