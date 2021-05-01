try{
    let finishforme = document.getElementById("finishBtn2");
    finishforme.addEventListener("click",finish_appointments);
} catch (error) {
    
}

function finish_appointments(){
    let idf = document.getElementById("searchByIdF").value;
    if(idf!=""){
    fetch("http://127.0.0.1:5000/finish-appointment",{
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