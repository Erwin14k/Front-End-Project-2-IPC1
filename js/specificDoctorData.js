getDoctorId();
function getDoctorId(){
    let selectionOfDoctor = document.getElementById("searchByIdDoctor");
    fetch("https://ipc1project2.herokuapp.com/get-id-specific-doctor",{
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
            selectionOfDoctor.innerHTML = selectionOfDoctor.innerHTML + `
            
                <option>${user.id} </option>
`        
        });
    })        
}


try{
    let searchMyDataDoc = document.getElementById("searchMyDataD");
    searchMyDataDoc.addEventListener("click",getDataOfDoctorById_);
} catch (error) {
    
}
function getDataOfDoctorById_(){
    let id7 = document.getElementById("searchByIdDoctor").value;
    let name7 = document.getElementById("namedoctor");
    let lastName7 = document.getElementById("lastNamedoctor");
    let userName7 = document.getElementById("userNamedoctor");
    let password7 = document.getElementById("passworddoctor");
    let birth7 = document.getElementById("birthdoctor");
    fetch("https://ipc1project2.herokuapp.com/get-data-doctor-by-id",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id7               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        res.forEach(user => {
            let dateArray7 = user.date_of_birth.split("/").reverse();
            let finalDate7 = dateArray7[0]+"-"+dateArray7[1]+"-"+dateArray7[2];
            name7.value = user.name ;
            lastName7.value = user.last_name;
            userName7.value = user.user_name;
            password7.value = user.password;
            birth7.value = finalDate7;
            
        });

    })        
}