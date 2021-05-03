try {
    let calcularTotal = document.getElementById("calcularTotal");
    calcularTotal.addEventListener("click", calc_total);

} catch (error) {

}

let billhtml="";
get_doctors_list2()

// Función para calcular el total de la factura
function calc_total() {
    // Obteniendo valores de los inputs

    let dateofbill = document.getElementById("fechafactura").value;
    let patientbill = document.getElementById("nombrefactura").value;
    let consulta = document.getElementById("precioconsulta").value;
    let operacion = document.getElementById("costooperacion").value;
    let internado = document.getElementById("costointernado").value;
    let totalf = document.getElementById("totalfactura");
    let doctorp = document.getElementById("doctorprescriptions").value;
    if (patientbill != "" && consulta != "" && dateofbill != "" ) {
                // Haciendo una petición al servidor
                fetch("http://127.0.0.1:5000/total-bill", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "consulta": consulta,
                        "operacion": operacion,
                        "internado": internado

                    })
                }).then(res => res.json())
                    .catch(err => {
                        window.alert("Ocurrio un error al intentar hacer el cálculo")
                    })
                    .then(res => {
                            totalf.value=res.totalbill;
                            window.alert("Se ha calculado el total de la factura con un monto de: "+res.totalbill)
                    })
            }
            else {
                window.alert("Debes llenar los campos obligatorios para poder continuar!")
            }
}


try {
    let fac = document.getElementById("generarFactura");
    fac.addEventListener("click", factura_pdf);

} catch (error) {

}

// Función para generar la factura
function factura_pdf() {
    // Obteniendo valores de los inputs

    let dateofbill2 = document.getElementById("fechafactura").value;
    let patientbill2 = document.getElementById("nombrefactura").value;
    let totalf2 = document.getElementById("totalfactura");
    let doctorp2 = document.getElementById("doctorprescriptions").value;
                // Haciendo una petición al servidor
                fetch("http://127.0.0.1:5000/generate-bill", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": doctorp2               
                    })
                }).then(res => res.json())
                    .catch(err => {
                        window.alert("Ocurrio un error al intentar hacer el cálculo")
                    })
                    .then(res => {
                        billhtml += `<!DOCTYPE html>
                        <html lang="en">
                        
                        <head>
                            <meta charset="utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                        
                            <title>Facturas</title>
                        
                            
                        
                            <style>
                                body {
                                    font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
                                    text-align: center;
                                    color: #777;
                                }
                        
                                body h1 {
                                    font-weight: 300;
                                    margin-bottom: 0px;
                                    padding-bottom: 0px;
                                    color: #000;
                                }
                        
                                body h3 {
                                    font-weight: 300;
                                    margin-top: 10px;
                                    margin-bottom: 20px;
                                    font-style: italic;
                                    color: #555;
                                }
                        
                                body a {
                                    color: #06f;
                                }
                        
                                .invoice-box {
                                    max-width: 800px;
                                    margin: auto;
                                    padding: 30px;
                                    border: 1px solid #eee;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                                    font-size: 16px;
                                    line-height: 24px;
                                    font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
                                    color: #555;
                                }
                        
                                .invoice-box table {
                                    width: 100%;
                                    line-height: inherit;
                                    text-align: left;
                                    border-collapse: collapse;
                                }
                        
                                .invoice-box table td {
                                    padding: 5px;
                                    vertical-align: top;
                                }
                        
                                .invoice-box table tr td:nth-child(2) {
                                    text-align: right;
                                }
                        
                                .invoice-box table tr.top table td {
                                    padding-bottom: 20px;
                                }
                        
                                .invoice-box table tr.top table td.title {
                                    font-size: 45px;
                                    line-height: 45px;
                                    color: #333;
                                }
                        
                                .invoice-box table tr.information table td {
                                    padding-bottom: 40px;
                                }
                        
                                .invoice-box table tr.heading td {
                                    background: #eee;
                                    border-bottom: 1px solid #ddd;
                                    font-weight: bold;
                                }
                        
                                .invoice-box table tr.details td {
                                    padding-bottom: 20px;
                                }
                        
                                .invoice-box table tr.item td {
                                    border-bottom: 1px solid #eee;
                                }
                        
                                .invoice-box table tr.item.last td {
                                    border-bottom: none;
                                }
                        
                                .invoice-box table tr.total td:nth-child(2) {
                                    border-top: 2px solid #eee;
                                    font-weight: bold;
                                }
                        
                                @media only screen and (max-width: 600px) {
                                    .invoice-box table tr.top table td {
                                        width: 100%;
                                        display: block;
                                        text-align: center;
                                    }
                        
                                    .invoice-box table tr.information table td {
                                        width: 100%;
                                        display: block;
                                        text-align: center;
                                    }
                                }
                            </style>
                        </head>
                        
                        <body>
                            <div class="invoice-box">
                                <table>
                                    <tr class="top">
                                        <td colspan="2">
                                            <table>
                                                <tr>
                                                    <td class="title">
                                                        <h4>Chastain Park Memorial</h4>
                                                    </td>
                        
                                                    <td>Fecha creación: ${new Date().toLocaleDateString("es-US")}<br /></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                        
                                    <tr class="information">
                                        <td colspan="2">
                                            <table>
                                                <tr>
                                                    <td>
                                                        Erwin14k_Productions<br />
                                                        Chastain Park Memorial<br />
                                                        Ciudad De Guatemala,2021
                                                    </td>
                        
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                        
                                <table>
                                    <tr class="heading">
                                        <td>Paciente</td>
                                        <td>   Doctor Asignado</td>
                                        <td>Total A Pagar</td>
                                    </tr>`;

                                    res.forEach((user) => {
                                        billhtml += `\n<tr class="item">
                                                        <td>${patientbill2}</td>
                                                        <td>${user.name+" "+user.last_name}</td>
                                                        <td>${totalf2.value}</td>
                                                      </tr>\n`;
                                    });
                                    billhtml +=     `
                                </table>
                            </div>
                        </body>
                        
                        </html>`
                        window.alert("Factura generada con éxito, si deseas generar un pdf con los datos, presiona el botón de abajo!!")
                    })
}

function get_doctors_list2(){
    let selectionOfDoctor2 = document.getElementById("doctorprescriptions")
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
            selectionOfDoctor2.innerHTML = selectionOfDoctor2.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}

try {
    let facpdf = document.getElementById("pdfFactura");
    facpdf.addEventListener("click", pdf_bill);

} catch (error) {

}



function pdf_bill() {
    html2pdf().from(billhtml).toPdf().save("factura_generada.pdf");
}