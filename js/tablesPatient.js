

waiting_patient();
accepted_patient();
declined_patient();
completed_patient();


function waiting_patient(){
    let waitingp = document.getElementById("waitingp")
    fetch("https://ipc1project2.herokuapp.com/waiting-patients",{
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
            waitingp.innerHTML = waitingp.innerHTML + `
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





function accepted_patient(){
    let accp = document.getElementById("accp")
    fetch("https://ipc1project2.herokuapp.com/accepted-patients",{
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
            accp.innerHTML = accp.innerHTML + `
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



function declined_patient(){
    let decpp = document.getElementById("decp")
    fetch("https://ipc1project2.herokuapp.com/declined-patients",{
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
            decpp.innerHTML = decpp.innerHTML + `
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



function completed_patient(){
    let compp = document.getElementById("comp")
    fetch("https://ipc1project2.herokuapp.com/completed-patients",{
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
            compp.innerHTML = compp.innerHTML + `
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


