try{
    let medi = document.getElementById("searchMed");
    medi.addEventListener("click",getMedicineData);
} catch (error) {
    
}





function getMedicineData(){
    let idmed = document.getElementById("idMed").value;
    let namemed = document.getElementById("nameMed");
    let pricemed = document.getElementById("priceMed");
    let descriptionmed = document.getElementById("descriptionMed");
    let ammountmed = document.getElementById("ammountMed");
    fetch("https://ipc1project2.herokuapp.com/get-data-medicines-by-id",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "id": idmed               
        })
        
    }).then(res => res.json())
    .catch(err  => {
        console.log("ha ocurrido un error"+err)
    })
    .then(res => { 
        res.forEach(medicine => {
            namemed.value = medicine.name ;
            pricemed.value = medicine.price;
            descriptionmed.value = medicine.description;
            ammountmed.value = medicine.amount;
            
        });

    })        
}