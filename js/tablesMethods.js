let logoutBtn = document.getElementById("BR8");
logoutBtn.addEventListener("click",function(){
    window.location="./index.html";
    localStorage.removeItem("logged");
    localStorage.removeItem("user_name");
    localStorage.removeItem("password");
});

function get_patients() {

    get_data();

    var url = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(function (response) {
            var array = response.data;
            console.log(array)

            var new_html = ""

            for (let i = 0; i < array.length; i++) {
                new_html += `\n<tr>
                <td>`+ array[i].id + `</td>
                <td>`+ array[i].name + `</td>
                <td>`+ array[i].last_name + `</td>
                <td>`+ array[i].user_name + `</td>
                <td>`+ array[i].user_role + `</td>
            </tr>`

            }

            $('#body_table').append(new_html);

            get_ratings(array);

        })
        .catch(function (error) {
            console.log(error)
        })



}




function get_doctors() {

    get_data();

    var url = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(function (response) {
            var array = response.data;
            console.log(array)

            var new_html = ""

            for (let i = 0; i < array.length; i++) {
                new_html += `\n<tr>
                <td>`+ array[i].id + `</td>
                <td>`+ array[i].name + `</td>
                <td>`+ array[i].last_name + `</td>
                <td>`+ array[i].user_role + `</td>
                <td>`+ array[i].speciality + `</td>
            </tr>`

            }

            $('#body_table').append(new_html);

            get_ratings(array);

        })
        .catch(function (error) {
            console.log(error)
        })



}



function get_nurses() {

    get_data();

    var url = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(function (response) {
            var array = response.data;
            console.log(array)

            var new_html = ""

            for (let i = 0; i < array.length; i++) {
                new_html += `\n<tr>
                <td>`+ array[i].id + `</td>
                <td>`+ array[i].name + `</td>
                <td>`+ array[i].last_name + `</td>
                <td>`+ array[i].user_name + `</td>
                <td>`+ array[i].user_role + `</td>
            </tr>`

            }

            $('#body_table').append(new_html);

            get_ratings(array);

        })
        .catch(function (error) {
            console.log(error)
        })



}



function get_medicines() {

    get_data();

    var url = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(function (response) {
            var array = response.data;
            console.log(array)

            var new_html = ""

            for (let i = 0; i < array.length; i++) {
                new_html += `\n<tr>
                <td>`+ array[i].id + `</td>
                <td>`+ array[i].name + `</td>
                <td>`+ array[i].price + `</td>
                <td>`+ array[i].amount + `</td>
            </tr>`

            }

            $('#body_table').append(new_html);

            get_ratings(array);

        })
        .catch(function (error) {
            console.log(error)
        })



}