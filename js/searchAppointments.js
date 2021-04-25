
try{
    let appo = document.getElementById("searchida");
    appo.addEventListener("click",getAppointmentData);
} catch (error) {
    
}





function getAppointmentData(){
    let id = document.getElementById("searchById2").value;
    let date = document.getElementById("dateI");
    let time = document.getElementById("timeI");
    fetch("http://127.0.0.1:5000/get-data-appointments-by-id",{
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
        res.forEach(appointment => {
            date.value = appointment.date ;
            time.value = appointment.time;
            
        });

    })        
}