try{
    let searchnBtn = document.getElementById("search");
    searchnBtn.addEventListener("click",getDataOfUsersById);
} catch (error) {
    
}
function getDataOfUsersById(){
    let id = document.getElementById("idList").value;
    let name = document.getElementById("nameM");
    let lastName = document.getElementById("lastNameM");
    let userName = document.getElementById("userNameM");
    let password = document.getElementById("passwordM");
    let birth = document.getElementById("birthM");
    fetch("http://127.0.0.1:5000/get-data-patients-by-id",{
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
        res.forEach(user => {
            let dateArray = user.date_of_birth.split("/").reverse();
            let finalDate = dateArray[0]+"-"+dateArray[1]+"-"+dateArray[2];
            name.value = user.name ;
            lastName.value = user.last_name;
            userName.value = user.user_name;
            password.value = user.password;
            birth.value = finalDate;
            
        });

    })        
}



try{
    let updatenBtnA = document.getElementById("updateBtn");
    updatenBtnA.addEventListener("click",updateeUser);
} catch (error) {
    
}

function updateeUser(){
    let id2 = document.getElementById("idList").value;
    let name2 = document.getElementById("nameM").value;
    let lastName2 = document.getElementById("lastNameM").value;
    let userName2 = document.getElementById("userNameM").value;
    let password2 = document.getElementById("passwordM").value;
    let birth2 = document.getElementById("birthM").value;
    let dateArrayU = birth2.split("-").reverse();
    let finalDateU = dateArrayU[0]+"/"+dateArrayU[1]+"/"+dateArrayU[2];
    fetch("http://127.0.0.1:5000/update-user-admin",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": id2,
            "name": name2,
            "last_name": lastName2,
            "user_name": userName2,
            "password":password2,
            "date_of_birth":finalDateU
                        
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        window.location.reload();

    })        
}