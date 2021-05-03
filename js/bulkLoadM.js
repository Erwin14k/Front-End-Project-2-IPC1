try {
    let bulkM = document.getElementById("CMM");
    bulkM.addEventListener("click", readerMedicines);
} catch (error) {

}


function bulkLoadMedicines(name,price,description,ammount) {


            // Haciendo una petición al servidor
            fetch("https://ipc1project2.herokuapp.com/bulk-load-medicines", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "price": price,
                    "description": description,
                    "ammount": ammount

                })
            }).then(res => res.json())
                .catch(err => {
                })
                .then(res => {
                    ;
                });
}






function readerMedicines() {
    let input_archivo4 = document.getElementById("ICMM");
    let archivo4 = input_archivo4.files[0];

    if (!archivo4) {
        window.alert("Sube un archivo primero!")
        return;
    }

    const reader4 = new FileReader();
    reader4.addEventListener("load", (event) => {
        let texto4 = event.target.result;
        texto4 = texto4.split('\n');

        texto4.forEach(linea4 => {
            if(linea4!=""){
            let medicine = linea4.split(',');
;
            bulkLoadMedicines(medicine[0],medicine[1],medicine[2],medicine[3]);
        }});
        window.alert("Tu carga masiva de medicamentos se realizó con éxito!!")
        window.location.reload();
    });
    reader4.readAsText(archivo4, "UTF-8");
}