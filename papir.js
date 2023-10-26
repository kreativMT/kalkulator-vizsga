document.getElementById("eredmeny").innerText.style.backgroundColor="white";
    document.getElementById("eredmeny").innerText.style.fontWeight="bold";

function getCalc() {
    let szelesseg = document.getElementById("szelesseg").value;
    let magassag = document.getElementById("magassag").value;
    let terulet =  Math.abs((szelesseg*magassag)/10000);
    let papirtipus = document.getElementById("papirtipus").value;
    let koltseg = terulet * papirtipus;
    

    document.getElementById("terulet").innerText=terulet;
    document.getElementById("eredmeny").innerText=koltseg;

    document.getElementById("eredmeny").style.backgroundColor="white";
    document.getElementById("eredmeny").innerText.style.fontWeight="bold";
    if (koltseg > 500){
        eredmeny.innerText.style.color="red";
     }  
     else {   
        eredmeny.innerText.style.color="green";
        
     }
     if (magassag < 50 || szelesseg < 50 ) {
        alert ("Ellenőrizze az adatokat!");
     }
} 
 
getCalc();