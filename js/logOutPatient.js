let logoutBtnP = document.getElementById("LOP");
logoutBtnP.addEventListener("click",function(){
    window.location="./index.html";
    localStorage.removeItem("logged");
    localStorage.removeItem("user_name");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
});