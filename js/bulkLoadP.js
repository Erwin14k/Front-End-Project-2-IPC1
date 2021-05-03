

try {
    let bulkP = document.getElementById("CMP");
    bulkP.addEventListener("click", readerPatients);
} catch (error) {

}


function bulkLoadPatients(name, last_name, date, gender, user_name, password, phone) {


    // Haciendo una petición al servidor
    fetch("http://127.0.0.1:5000/bulk-load-patients", {
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






function readerPatients() {
    let input_archivo = document.getElementById("ICMP");
    let archivo = input_archivo.files[0];

    if (!archivo) {
        window.alert("Sube un archivo primero!")
        return;
    }

    let reader = new FileReader();
    reader.addEventListener("load", (event) => {
        let texto = event.target.result;
        texto = texto.split('\n');

        texto.forEach(linea => {
            if (linea != "") {
                let paciente = linea.split(',');
                ;
                bulkLoadPatients(paciente[0], paciente[1], paciente[2], paciente[3], paciente[4], paciente[5], paciente[6]);
            }
        });
        window.alert("Tu carga masiva de pacientes se realizó con éxito!!")
        window.location.reload();
    });
    reader.readAsText(archivo, "UTF-8");
}