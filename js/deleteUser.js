try{
    let deletenBtnA = document.getElementById("deleteBtn");
    deletenBtnA.addEventListener("click",deleteeUser);
} catch (error) {
    
}

function deleteeUser(){
    let id = document.getElementById("idList").value;
    
    fetch("https://ipc1project2.herokuapp.com/delete-user",{
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