function sendData(){
    myName= document.getElementById("myName").value;
    localStorage.setItem("Name", myName);
    window.location="page2.html";
}