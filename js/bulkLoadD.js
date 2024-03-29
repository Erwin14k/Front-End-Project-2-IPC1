try {
    let bulkD = document.getElementById("CMD");
    bulkD.addEventListener("click", readerDoctors);
} catch (error) {

}


function bulkLoadDoctors(name,last_name,date,gender,user_name,password,speciality,phone) {


            // Haciendo una petición al servidor
            fetch("https://ipc1project2.herokuapp.com/bulk-load-doctors", {
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
                    "speciality": speciality,
                    "phone": phone

                })
            }).then(res => res.json())
                .catch(err => {
                })
                .then(res => {
                    ;
                });
}






function readerDoctors() {
    let input_archivo2 = document.getElementById("ICMD");
    let archivo2 = input_archivo2.files[0];

    if (!archivo2) {
        window.alert("Sube un archivo primero!")
        return;
    }

    const reader2 = new FileReader();
    reader2.addEventListener("load", (event) => {
        let texto2 = event.target.result;
        texto2 = texto2.split('\n');

        texto2.forEach(linea2 => {
            if(linea2!=""){
            let doctor = linea2.split(',');
;
            bulkLoadDoctors(doctor[0],doctor[1],doctor[2],doctor[3],doctor[4],doctor[5],doctor[6],doctor[7]);
        }});
        window.alert("Tu carga masiva de doctores se realizó con éxito!!")
        window.location.reload();
    });
    reader2.readAsText(archivo2, "UTF-8");
}