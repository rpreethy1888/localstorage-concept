function getName(){
   getname= localStorage.getItem("Name");
   console.log(getname);
   document.getElementById("getname").innerHTML=getname;

}

function back(){
    window.location="index.html";
}