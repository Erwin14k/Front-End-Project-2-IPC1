


get_waiting_appointments();
get_accepted_appointments();
get_doctors_list();
get_appointments_list_by_id();

function get_waiting_appointments(){
    let waiting = document.getElementById("wai")
    fetch("https://ipc1project2.herokuapp.com/get-waiting-appointments",{
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
    fetch("https://ipc1project2.herokuapp.com/get-accepted-appointments",{
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
    fetch("https://ipc1project2.herokuapp.com/get-doctor-list",{
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
            
                <option>${user.id} </option>
`        
        });
    })        
}


function get_appointments_list_by_id(){
    let selectionOfapp = document.getElementById("searchById2")
    fetch("https://ipc1project2.herokuapp.com/get-id_appointments",{
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