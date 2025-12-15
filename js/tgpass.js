const Pw = document.getElementById("password");
const Btn = document.getElementById("togglePw");

Btn.onclick = function () {
    if (Pw.type === "password") {
        Pw.type = "text";
        Btn.textContent = "ẨN";    
    } else {
        Pw.type = "password";
        Btn.textContent = "HIỆN";  
    }
};
