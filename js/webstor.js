var Name = document.getElementById("Name")
var eMail = document.getElementById("eMail")
var Course = document.getElementById("Course")
var Address = document.getElementById("Address")

var btnsub = document.getElementById("btnsub")

btnsub.addEventListener("click", function(){
    localStorage.setItem("Name", Name);
    localStorage.setItem("email", eMail);
    localStorage.setItem("Course", Course);
    localStorage.setItem("Address", Address);
})