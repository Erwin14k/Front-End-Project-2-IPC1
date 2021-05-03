let logoutBtn = document.getElementById("BR8");
logoutBtn.addEventListener("click", function () {
    window.location = "./index.html";
    localStorage.removeItem("logged");
    localStorage.removeItem("user_name");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
});






get_patients();
get_doctors();
get_nurses();
get_medicines();
get_id_of_users();
get_id_of_medicines();
let patienthtml = "";
let doctorhtml="";
let nursehtml="";
let medhtml="";


function get_patients() {
    let patientsTable = document.getElementById("tablapacientes")
    fetch("https://ipc1project2.herokuapp.com/get-patients", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
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


            patienthtml += `  <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Admin View</title>





</head>
<center>
<body>


<center>
    <div class="page-content2">
        <section id="VisualizarPacientes" class="content-section2">
            <div class="section-heading2">
                <h1>Visualizar<br><em>Pacientes</em></h1>

            </div>
            <div class="section-content2">
              <table id="tablapacientes" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nombre de Usuario</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    `;
            res.forEach((user) => {
                patienthtml += `\n<tr class="item">
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.last_name}</td>
                                <td>${user.user_name}</td>
                                <td>${user.user_role}</td>
                              </tr>\n`;
            });

            patienthtml += `</table>
            </center>
                          </div>
                        
                        </body>
                        </center>
                      </html>`;

        })
}


function get_doctors() {
    let doctorsTable = document.getElementById("tabladoc")
    fetch("https://ipc1project2.herokuapp.com/get-doctors", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
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
            doctorhtml += `  <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Admin View</title>


</head>

<body>


<center>
    <div class="page-content2">
        <section id="VisualizarDoctores" class="content-section2">
            <div class="section-heading2">
                <h1>Visualizar<br><em>Doctores</em></h1>

            </div>
            <div class="section-content2">
              <table id="tabladoc" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>
                    `;
            res.forEach((user) => {
                doctorhtml += `\n<tr class="item">
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.last_name}</td>
                                <td>${user.user_role}</td>
                                <td>${user.speciality}</td>
                              </tr>\n`;
            });

            doctorhtml += `</table>
            </center>
                          </div>
                        
                        </body>
                      </html>`;
        })
}











function get_nurses() {
    let nursesTable = document.getElementById("tablanurse")
    fetch("https://ipc1project2.herokuapp.com/get-nurses", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
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
            nursehtml += `  <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Admin View</title>



</head>

<body>


<center>
    <div class="page-content2">
        <section id="VisualizarPacientes" class="content-section2">
            <div class="section-heading2">
                <h1>Visualizar<br><em>Enfermeras</em></h1>

            </div>
            <div class="section-content2">
              <table id="tablanurse" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nombre de Usuario</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    `;
            res.forEach((user) => {
                nursehtml += `\n<tr class="item">
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.last_name}</td>
                                <td>${user.user_name}</td>
                                <td>${user.user_role}</td>
                              </tr>\n`;
            });

            nursehtml += `</table>
            </center>
                          </div>
                        
                        </body>
                      </html>`;
        })
}

function get_medicines() {
    let medTable = document.getElementById("tablamed")
    fetch("https://ipc1project2.herokuapp.com/get-medicines", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
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
            medhtml += `  <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Admin View</title>

</head>

<body>


<center>
    <div class="page-content2">
        <section id="VisualizarPacientes" class="content-section2">
            <div class="section-heading2">
                <h1>Visualizar<br><em>Medicamentos</em></h1>

            </div>
            <div class="section-content2">
              <table id="tablamed" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    `;
            res.forEach((medicine) => {
                medhtml += `\n<tr class="item">
                                <td>${medicine.id}</td>
                                <td>${medicine.name}</td>
                                <td>${medicine.price}</td>
                                <td>${medicine.amount}</td>
                              </tr>\n`;
            });

            medhtml += `</table>
            </center>
                          </div>
                        
                        </body>
                      </html>`;
        })
}

function get_id_of_users() {
    let selectionOfId = document.getElementById("idList")
    fetch("https://ipc1project2.herokuapp.com/get-id_users", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
        })
        .then(res => {
            res.forEach(user => {
                selectionOfId.innerHTML = selectionOfId.innerHTML + `
            
                <option>${user.id} </option>
`
            });
        })
}

function get_id_of_medicines() {
    let selectionOfId4 = document.getElementById("idMed")
    fetch("https://ipc1project2.herokuapp.com/get-id_medicines", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
        })
        .then(res => {
            res.forEach(medicine => {
                selectionOfId4.innerHTML = selectionOfId4.innerHTML + `
            
                <option>${medicine.id} </option>
`
            });
        })
}


try {
    let pdfpa = document.getElementById("pdfpacientes");
    pdfpa.addEventListener("click", pdf_patients);
} catch (error) {

}
try {
    let pdfdoc = document.getElementById("pdfdoctores");
    pdfdoc.addEventListener("click", pdf_doctors);
} catch (error) {

}

try {
    let pdfnur = document.getElementById("pdfenfermeras");
    pdfnur.addEventListener("click", pdf_nurses);
} catch (error) {

}
try {
    let pdfmed = document.getElementById("pdfmedicamentos");
    pdfmed.addEventListener("click", pdf_medicines);
} catch (error) {

}


function pdf_patients() {
    html2pdf().from(patienthtml).toPdf().save("reporte_pacientes.pdf");
}

function pdf_doctors() {
    html2pdf().from(doctorhtml).toPdf().save("reporte_doctores.pdf");
}
function pdf_nurses() {
    html2pdf().from(nursehtml).toPdf().save("reporte_enfermeras.pdf");
}
function pdf_medicines() {
    html2pdf().from(medhtml).toPdf().save("reporte_medicamentos.pdf");
}
