function TypeComptSelect(){
	//var type== document.getElementById("Id_TypeCompt");
	alert("Verifier"  );
}



function Surligne(champ, erreur)
{
   if(erreur){

      champ.style.backgroundColor = "#a00101";
     
   }
   else{
      champ.style.backgroundColor = "";
   }

}

function VerifNomPrenom(champ)
{
   var regex = /^[a-z]/;
   
   if(!regex.test(champ.value))
   {
      Surligne(champ, true);
      return false;
      
   }
   else
   {
      Surligne(champ, false);
      return true;
      
   }
}

function VerifEmail(champ){
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(!regex.test(champ.value))
   {
      Surligne(champ, true);
      return false;
      
   }
   else
   {
      Surligne(champ, false);
      return true;
      
   }

}


function VerifMotPasse(champ){

	 var mot_passe = document.getElementById("IdMotPasse").value;
  

    if(mot_passe.length<8)
   {
   
      Surligne(champ, true);
      return false;
      
   }
    else
   {
   	  
      Surligne(champ, false);
      return true;
      
   }
	
  
}

function VerifDateNaissance(champ){

 var x = document.getElementById("IdDate_Naissance").value; 
 var currentDate =new Date().toISOString().split('T')[0]
var yearCurrent = currentDate.split('-')[0]
var yearOfBirth = x.split('-')[0]


if (yearOfBirth>yearCurrent) {
	alert("not good");
}

 else{
 	if(yearCurrent-yearOfBirth>13){
     Surligne(champ,false)
     return true

 	}
 	else{
 		Surligne(champ,true)
 		return false
 	}
 }

}



function VerifForm(f)
{

   let nomValid = VerifNomPrenom(f.nom)
   let prenomValid = VerifNomPrenom(f.prenom)
   let emailValid = VerifEmail(f.email)
   let motPasseValid = VerifMotPasse(f.mot_passe)
   let dateNaissanceValid=VerifDateNaissance(f.dateNaissance)

   if(nomValid && prenomValid && emailValid && motPasseValid && dateNaissanceValid){
   //	let nom=f.nom.value
   	
    alert("ok");
   }

     
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      
   }
}


function DisableList(){
	var Element = document.getElementById("compteType").value;
	if(Element==='Professeur' || Element==='Docteur' ){
		document.getElementById("IdNveauEtude").disabled = true;
		
		document.getElementById("IdPaysEtude").disabled = true;


	}
	else{
		document.getElementById("IdNveauEtude").disabled = false;
	 
	    document.getElementById("IdPaysEtude").disabled = false;
	}
}