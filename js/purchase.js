let purchasehtml="";

try {
    let gpdf = document.getElementById("gpedido");
    gpdf.addEventListener("click", pedido_pdf);

} catch (error) {

}

function pedido_pdf() {
    // Obteniendo valores de los inputs

    let idmedstore3 = document.getElementById("idmedicamentostore").value;
    let namemedstore3 = document.getElementById("nombremedicamento").value;
    let pricemedstore3 = document.getElementById("preciomedicamento").value;
    let ammountmedstore3 = document.getElementById("cantidadmedicamento").value;
                // Haciendo una petición al servidor
                fetch("https://ipc1project2.herokuapp.com/generate-purchase", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": idmedstore3               
                    })
                }).then(res => res.json())
                    .catch(err => {
                        window.alert(err)
                    })
                    .then(res => {
                        purchasehtml += `<!DOCTYPE html>
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
                                        <td>id</td>
                                        <td>Nombre</td>
                                        <td>Precio</td>
                                        <td>Cantidad</td>
                                        <td>Subtotal</td>
                                    </tr>`;

                                    res.forEach((medicine) => {
                                        purchasehtml += `\n<tr class="item">
                                                        <td>${idmedstore3}</td>
                                                        <td>${namemedstore3}</td>
                                                        <td>${pricemedstore3}</td>
                                                        <td>${ammountmedstore3}</td>
                                                        <td>${parseFloat(pricemedstore3)*parseFloat(ammountmedstore3)}</td>
                                                      </tr>\n`;
                                    });
                                    purchasehtml +=     `
                                </table>
                            </div>
                        </body>
                        
                        </html>`
                        window.alert("Pedido generado con éxito, si deseas generar un pdf con los datos, presiona el botón de abajo!!")
                    })
}



try {
    let buypdf = document.getElementById("pdfpedido");
    buypdf.addEventListener("click", pdf_purchase);

} catch (error) {

}



function pdf_purchase() {
    html2pdf().from(purchasehtml).toPdf().save("factura_generada.pdf");
}