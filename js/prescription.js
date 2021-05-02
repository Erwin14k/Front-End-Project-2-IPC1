try {
    let pres = document.getElementById("crearreceta");
    pres.addEventListener("click", new_prescription);

} catch (error) {

}

let recetahtml="";



function new_prescription() {
    // Obteniendo valores de los inputs

    let namepatient = document.getElementById("nombrereceta").value;
    let datepres = document.getElementById("fechareceta").value;
    let sufferingpres = document.getElementById("padecimientoreceta").value;
    let descriptionpres = document.getElementById("descripcionreceta").value;

    if (namepatient != "" && datepres != "" && sufferingpres != "" &&descriptionpres !="" ) {
                // Haciendo una petición al servidor
                fetch("http://127.0.0.1:5000/new-prescription", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name_patient": namepatient,
                        "date": datepres,
                        "suffering": sufferingpres,
                        "description": descriptionpres,
                        "doctor":localStorage.getItem("id")

                    })
                }).then(res => res.json())
                    .catch(err => {
                        window.alert("Ocurrio un error al intentar crear la receta");
                    })
                    .then(res => {
                            window.alert("Se ha creado la nueva receta con éxtio!");

                            recetahtml+= `<!DOCTYPE html>
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
                                        <td>  Padecimiento</td>
                                        <td>  Doctor</td>
                                    </tr>`;

                                    res.forEach((user) => {
                                        recetahtml += `\n<tr class="item">
                                                        <td>${namepatient}</td>
                                                        <td>${sufferingpres}</td>
                                                        <td>${user.name+" "+user.last_name}</td>
                                                      </tr>\n
                                                      </table>
                                                      <br>
                                <br>
                                <h1>Descripcion:</h1>
                                <br>
                                <br>
                                <p>${descriptionpres}</p>`
                                                      ;
                                    });
                                    recetahtml +=     `
                               
                                
                            </div>
                        </body>
                        
                        </html>`
                    })
            }
            else {
                window.alert("Debes llenar los campos obligatorios para poder continuar!");
            }
}



try {
    let recetapdf = document.getElementById("pdfreceta");
    recetapdf.addEventListener("click", pdf_prescription);

} catch (error) {

}



function pdf_prescription() {
    html2pdf().from(recetahtml).toPdf().save("receta_generada.pdf");
}