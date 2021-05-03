try{
    let finishforme = document.getElementById("finishBtn2");
    finishforme.addEventListener("click",finish_appointments);
} catch (error) {
    
}

function finish_appointments(){
    let idf = document.getElementById("searchByIdF").value;
    if(idf!=""){
    fetch("https://ipc1project2.herokuapp.com/finish-appointment",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idf
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.alert("La cita con el id: "+idf+" ha sido finalizada con éxito!")
        window.location.reload();

    })  
}
else{
    window.alert("Ya no existen citas a tu cargo doc, puedes descansar!")
}           
}