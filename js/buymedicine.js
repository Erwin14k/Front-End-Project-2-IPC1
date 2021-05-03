try{
    let addmed = document.getElementById("agregarpedidobtn");
    addmed.addEventListener("click",addMedicineToCart);
} catch (error) {
    
}





function addMedicineToCart(){
    let idmedstore2 = document.getElementById("idmedicamentostore").value;
    let namemedstore2 = document.getElementById("nombremedicamento").value;
    let pricemedstore2 = document.getElementById("preciomedicamento").value;
    let ammountmedstore = document.getElementById("cantidadmedicamento").value;
    let tablapedido=document.getElementById("pedidotable");
    fetch("https://ipc1project2.herokuapp.com/less-amount",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idmedstore2,   
            "amount": ammountmedstore           
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        if(res.state=="perfect"){
            let subtotal = parseFloat(pricemedstore2)* parseFloat(ammountmedstore);
            tablapedido.innerHTML = tablapedido.innerHTML + `
                <tr>
                    <td>${idmedstore2} </td>
                    <td>${namemedstore2} </td>
                    <td>${pricemedstore2} </td>
                    <td>${ammountmedstore} </td>
                    <td>${subtotal} </td>
                </tr>`
            window.alert("Tu medicamento ha sido agregado con éxito al pedido!");
        }else{
            window.alert("La cantidad que deseas de este medicamento es superior a la exitente, intenta de nuevo con una menor cantidad de producto")
        }
       

    })        
}