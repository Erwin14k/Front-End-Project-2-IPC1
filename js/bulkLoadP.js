

try{
    let bulkP = document.getElementById("CMP");
    bulkP.addEventListener("click",bulkLoadPatients);
} catch (error) {
    
}


function bulkLoadPatients(){
    let input_file1 = document.getElementById("ICMP");
    let file1 = input_file1.files[0];  

    if (!file1) {
        window.alert("Debes seleccionar un archivo para poder hacer la carga masiva");
    return;
}
    const readerp = new FileReader();
    readerp.addEventListener("load", (event) => {
    console.log("el archivos es en T:" +text);
    text = text.split('\n');

    text.forEach(line => {
    let user = line.split(',');
    
    
    
    

    reader.readAsText(file1, "UTF-8");


        // Haciendo una petición al servidor
        fetch("http://127.0.0.1:5000/bulk-load-patients",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "name": user[0],
                "last_name": user[1],
                "date": user[2],
                "gender": user[3],
                "user_name":user[4],
                "password": user[5],
                "phone": user[6]
                
            })
        }).then(res => res.json())
        .catch(err  => {
            window.alert("Ocurrio un error al intentar crear tu usuario")
        })
        .then(res => {
            // Verificando estado de respuesta 
            if(res.state == "perfect"){
            }
            ;
        });
        });
        })
    }