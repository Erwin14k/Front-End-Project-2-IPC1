try{
    let updatemed = document.getElementById("updateMed");
    updatemed.addEventListener("click",updateemedicine);
} catch (error) {
    
}

function updateemedicine(){
    let idmed2 = document.getElementById("idMed").value;
    let pricemed2 = document.getElementById("priceMed").value;
    let descriptionmed2 = document.getElementById("descriptionMed").value;
    fetch("https://ipc1project2.herokuapp.com/update-medicine-admin",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idmed2,
            "price": pricemed2,
            "description":descriptionmed2
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("Los datos del medicamento han sido actualizados con éxtio!")
        window.location.reload();

    })        
}