
function AbonnezTest(){
var Email =document.getElementById("Id_Abonnez").value;
    if (Email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
         alert(" valide");
          Email =document.getElementById("Id_Abonnez").value;
            
    }
    else{

         alert("Verifier votre adresse mail");
    }
    
    document.getElementById("Id_Abonnez").value="";
}
function ConnecterTester(){
    var Email =document.getElementById("inputEmail").value; 
    var password =document.getElementById("inputPassword").value;
   
    if ( Email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && password.length > 8 ) {
         alert("valide");

    }
    
    else{

    }
}

function signup(){
    
     window.location.href='./SignUp.html';
}
