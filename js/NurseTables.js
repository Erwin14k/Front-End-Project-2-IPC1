


get_waiting_appointments();
get_accepted_appointments();
get_doctors_list();
get_appointments_list_by_id();

function get_waiting_appointments(){
    let waiting = document.getElementById("wai")
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
            waiting.innerHTML = waiting.innerHTML + `
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


function get_accepted_appointments(){
    let accepted = document.getElementById("acc")
    fetch("http://127.0.0.1:5000/get-accepted-appointments",{
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
            accepted.innerHTML = accepted.innerHTML + `
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


function get_doctors_list(){
    let selectionOfDoctor = document.getElementById("doctorList")
    fetch("http://127.0.0.1:5000/get-doctor-list",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(user => {
            selectionOfDoctor.innerHTML = selectionOfDoctor.innerHTML + `
            
                <option>${user.user_name} </option>
`        
        });
    })        
}


function get_appointments_list_by_id(){
    let selectionOfapp = document.getElementById("searchById2")
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
            selectionOfapp.innerHTML = selectionOfapp.innerHTML + `
            
                <option>${appointment.id} </option>
`        
        });
    })        
}