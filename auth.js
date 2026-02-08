const ADMIN = {
    username: "admin",
    password: "1234"
};

function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === ADMIN.username && pass === ADMIN.password){
        localStorage.setItem("role","admin");
        window.location.href = "admin.html";
    }else{
        alert("Invalid credentials");
    }
}

// Protect admin page
if(window.location.pathname.includes("admin.html")){
    if(localStorage.getItem("role") !== "admin"){
        window.location.href = "login.html";
    }
}