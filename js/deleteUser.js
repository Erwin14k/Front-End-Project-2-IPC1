try{
    let deletenBtnA = document.getElementById("deleteBtn");
    deletenBtnA.addEventListener("click",deleteeUser);
} catch (error) {
    
}

function deleteeUser(){
    let id = document.getElementById("idList").value;
    
    fetch("http://127.0.0.1:5000/delete-user",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("El usuario ha sido eliminado con exito!")
        window.location.reload();

    })        
}