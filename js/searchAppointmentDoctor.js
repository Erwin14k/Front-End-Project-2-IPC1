try{
    let appo4 = document.getElementById("searchida2");
    appo4.addEventListener("click",getAppointmentDataD);
} catch (error) {
    
}





function getAppointmentDataD(){
    let id45 = document.getElementById("searchById3").value;
    let date45 = document.getElementById("dateD");
    let time45 = document.getElementById("timeD");
    fetch("https://ipc1project2.herokuapp.com/get-data-appointments-by-id",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id45               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        res.forEach(appointment => {
            date45.value = appointment.date ;
            time45.value = appointment.time;
            
        });

    })        
}