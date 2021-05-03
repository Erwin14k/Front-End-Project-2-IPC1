try {
    let bulkN = document.getElementById("CME");
    bulkN.addEventListener("click", readerNurses);
} catch (error) {

}


function bulkLoadNurses(name,last_name,date,gender,user_name,password,phone) {


            // Haciendo una petición al servidor
            fetch("http://127.0.0.1:5000/bulk-load-nurses", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "last_name": last_name,
                    "date": date,
                    "gender": gender,
                    "user_name": user_name,
                    "password": password,
                    "phone": phone

                })
            }).then(res => res.json())
                .catch(err => {
                    
                })
                .then(res => {
                    ;
                });
}






function readerNurses() {
    let input_archivo3 = document.getElementById("ICME");
    let archivo3 = input_archivo3.files[0];

    if (!archivo3) {
        window.alert("Sube un archivo primero!")
        return;
    }

    const reader3 = new FileReader();
    reader3.addEventListener("load", (event) => {
        let texto3 = event.target.result;
        texto3 = texto3.split('\n');

        texto3.forEach(linea3 => {
            if(linea3!=""){
            let nurse = linea3.split(',');
;
            bulkLoadNurses(nurse[0],nurse[1],nurse[2],nurse[3],nurse[4],nurse[5],nurse[6]);
        
        }});
        window.alert("Tu carga masiva de enfermeras se realizó con éxito!!")
        window.location.reload();
    });
    reader3.readAsText(archivo3, "UTF-8");
}