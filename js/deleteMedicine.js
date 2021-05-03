try{
    let deletemed = document.getElementById("deleteMed");
    deletemed.addEventListener("click",deleteeMedicine);
} catch (error) {
    
}

function deleteeMedicine(){
    let iddelete = document.getElementById("idMed").value;
    
    fetch("https://ipc1project2.herokuapp.com/delete-medicine",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": iddelete               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("El medicamento ha sido eliminado con exito!")
        window.location.reload();

    })        
}