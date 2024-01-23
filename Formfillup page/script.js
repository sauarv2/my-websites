
function myfun(){
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "e40adcbd5f81b5",
    Password : "b92c7e1cbe9b2e",
    To : "kittusaha20@gmail.com",
    From : document.getElementById("email").value,
    Subject : "Contect Form Enquiry",
    Body : "name:" +  document.getElementById("name").value +
    " <br> email:" +  document.getElementById("email").value
    + " <br><br> number:" +  document.getElementById("number").value + +" <br><br> comment:" +  document.getElementById("comment").value 
}).then(
  message => alert("Thanks ")
);

};

