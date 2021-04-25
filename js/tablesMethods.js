let logoutBtn = document.getElementById("BR8");
logoutBtn.addEventListener("click",function(){
    window.location="./index.html";
    localStorage.removeItem("logged");
    localStorage.removeItem("user_name");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
});






get_patients()
get_doctors()
get_nurses()
get_medicines()
get_id_of_users()
function get_patients(){
    let patientsTable = document.getElementById("tablapacientes")
    fetch("http://127.0.0.1:5000/get-patients",{
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
            patientsTable.innerHTML = patientsTable.innerHTML + `
            <tr>
                <td>${user.id} </td>
                <td>${user.name} </td>
                <td>${user.last_name} </td>
                <td>${user.user_name} </td>
                <td>${user.user_role} </td>
            </tr>`
            
        });
    })        
}


function get_doctors(){
    let doctorsTable = document.getElementById("tabladoc")
    fetch("http://127.0.0.1:5000/get-doctors",{
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
            doctorsTable.innerHTML = doctorsTable.innerHTML + `
            <tr>
                <td>${user.id} </td>
                <td>${user.name} </td>
                <td>${user.last_name} </td>
                <td>${user.user_role} </td>
                <td>${user.speciality} </td>
            </tr>`
            
        });
    })        
}

function get_nurses(){
    let nursesTable = document.getElementById("tablanurse")
    fetch("http://127.0.0.1:5000/get-nurses",{
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
            nursesTable.innerHTML = nursesTable.innerHTML + `
            <tr>
                <td>${user.id} </td>
                <td>${user.name} </td>
                <td>${user.last_name} </td>
                <td>${user.user_name} </td>
                <td>${user.user_role} </td>
            </tr>`
            
        });
    })        
}

function get_medicines(){
    let medTable = document.getElementById("tablamed")
    fetch("http://127.0.0.1:5000/get-medicines",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(medicine => {
            medTable.innerHTML = medTable.innerHTML + `
            <tr>
                <td>${medicine.id} </td>
                <td>${medicine.name} </td>
                <td>${medicine.price} </td>
                <td>${medicine.amount} </td>
            </tr>`
            
        });
    })        
}

function get_id_of_users(){
    let selectionOfId = document.getElementById("idList")
    fetch("http://127.0.0.1:5000/get-id_users",{
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
            selectionOfId.innerHTML = selectionOfId.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}


