get_id_of_medicines_store();
get_medicines_store();


function get_medicines_store() {
    let medTables = document.getElementById("medstoretable")
    fetch("https://ipc1project2.herokuapp.com/get-medicines", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => {
            console.log("ha ocurrido un error" + err)
        })
        .then(res => {
            res.forEach(medicine => {
                medTables.innerHTML = medTables.innerHTML + `
            <tr>
                <td>${medicine.id} </td>
                <td>${medicine.name} </td>
                <td>${medicine.price} </td>
                <td>${medicine.description} </td>
                <td>${medicine.amount} </td>
            </tr>`

            });
        })
    }


    function get_id_of_medicines_store() {
        let selectionOfId5 = document.getElementById("idmedicamentostore")
        fetch("https://ipc1project2.herokuapp.com/get-id_medicines", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => {
                console.log("ha ocurrido un error" + err)
            })
            .then(res => {
                res.forEach(medicine => {
                    selectionOfId5.innerHTML = selectionOfId5.innerHTML + `
                
                    <option>${medicine.id} </option>
    `
                });
            })
    }




    try{
        let medis = document.getElementById("buscarmedicamento");
        medis.addEventListener("click",getMedicineDataStore);
    } catch (error) {
        
    }
    
    
    
    
    
    function getMedicineDataStore(){
        let idmedstore = document.getElementById("idmedicamentostore").value;
        let namemedstore = document.getElementById("nombremedicamento");
        let pricemedstore = document.getElementById("preciomedicamento");
       // let ammountmedstore = document.getElementById("cantidadmedicamento");
        fetch("https://ipc1project2.herokuapp.com/get-data-medicines-by-id",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "id": idmedstore               
            })
            
        }).then(res => res.json())
        .catch(err  => {
            console.log("ha ocurrido un error"+err)
        })
        .then(res => { 
            res.forEach(medicine => {
                namemedstore.value = medicine.name ;
                pricemedstore.value = medicine.price;
                
            });
    
        })        
    }