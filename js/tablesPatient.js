

waiting_patient();
accepted_patient();
declined_patient();
completed_patient();


function waiting_patient(){
    let waitingp = document.getElementById("waitingp")
    fetch("http://127.0.0.1:5000/waiting-patients",{
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
    fetch("http://127.0.0.1:5000/accepted-patients",{
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
    fetch("http://127.0.0.1:5000/declined-patients",{
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
    fetch("http://127.0.0.1:5000/completed-patients",{
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


