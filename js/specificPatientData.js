getPatientId();

function getPatientId(){
    let selectionOfPatientt = document.getElementById("searchByIdPatientt");
    fetch("http://127.0.0.1:5000/get-id-specific-patient",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id":localStorage.getItem("id")            
        })
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => {
        res.forEach(user => {
            selectionOfPatientt.innerHTML = selectionOfPatientt.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}




try{
    let searchMyDataPatient = document.getElementById("searchMyDataPatient");
    searchMyDataPatient.addEventListener("click",getDataOfPatientById_);
} catch (error) {
    
}
function getDataOfPatientById_(){
    let id5 = document.getElementById("searchByIdPatientt").value;
    let name5 = document.getElementById("namePatient");
    let lastName5 = document.getElementById("lastNamePatient");
    let userName5 = document.getElementById("userNamePatient");
    let password5 = document.getElementById("passwordPatient");
    let birth5 = document.getElementById("birthPatient");
    fetch("http://127.0.0.1:5000/get-data-patient-by-id",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id5               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        res.forEach(user => {
            let dateArray5 = user.date_of_birth.split("/").reverse();
            let finalDate5 = dateArray5[0]+"-"+dateArray5[1]+"-"+dateArray5[2];
            name5.value = user.name ;
            lastName5.value = user.last_name;
            userName5.value = user.user_name;
            password5.value = user.password;
            birth5.value = finalDate5;
            
        });

    })        
}