
const cinco = document.getElementById("cinco");
const diez = document.getElementById("diez");
const quince = document.getElementById("quince");
const veinteCinco = document.getElementById("veinteCinco");
const cincuenta = document.getElementById("cincuenta");
const reset = document.getElementById("reset");


cinco.addEventListener("click", calculaCinco);
diez.addEventListener("click", calculaDiez);
quince.addEventListener("click", calculaQuince);
veinteCinco.addEventListener("click", calculaVeinteCinco);
cincuenta.addEventListener("click",calculaCincuenta);
reset.addEventListener("click",resetea);
cinco.addEventListener("mouseover", changeColor);

function chanceColor(){

}


function calculaCinco(event) {
    
    event.preventDefault();
    
    let bill = document.getElementById("bill").value;

    bill = parseFloat(bill);
    
    let people = document.getElementById("people").value;
    
    people = parseFloat(people);

    if(people !== 0){

        let propina = (bill*.05)/people;
        let res = ((bill/people)+propina);
 
    document.getElementById("totalPropina").innerHTML = "$  " + propina + " /person ";
    document.getElementById("amount").innerHTML = "$  " + res + " /person ";
    document.getElementById("people").style.backgroundColor = " hsl(185, 41%, 84%)"; 

    } else  document.getElementById("people").style.backgroundColor = "red"; 
            alert ("cant be Zero");
            
}

function calculaDiez(event) {
    
    event.preventDefault();

    let bill = document.getElementById("bill").value;

    bill = parseFloat(bill);
    
    let people = document.getElementById("people").value;

    people = parseFloat(people);
    
    if(people !== 0){

        let propina = (bill*.1)/people;
        let res = ((bill/people)+propina);
     
        document.getElementById("totalPropina").innerHTML = "$  " + propina + " /person ";
        document.getElementById("amount").innerHTML = "$  " + res + " /person ";
        document.getElementById("people").style.backgroundColor = " hsl(185, 41%, 84%)"; 
    document.getElementById("textpeople").innerHTML = people

    } else  document.getElementById("people").style.backgroundColor = "red"; 
            document.getElementById("textpeople").innerHTML = "Can't be Zero"

}

function calculaQuince(event) {
    
    event.preventDefault();

    let bill = document.getElementById("bill").value;

    bill = parseFloat(bill);
    
    let people = document.getElementById("people").value;

    people = parseFloat(people);

    if(people !== 0){

        let propina = (bill*.15)/people;
        let res = ((bill/people)+propina);
     
        document.getElementById("totalPropina").innerHTML = "$  " + propina + " /person ";
        document.getElementById("amount").innerHTML = "$  " + res + " /person ";
        document.getElementById("people").style.backgroundColor = " hsl(185, 41%, 84%)"; 
    document.getElementById("textpeople").innerHTML = people

    } else  document.getElementById("people").style.backgroundColor = "red"; 
            document.getElementById("textpeople").innerHTML = "Can't be Zero"
}

function calculaVeinteCinco(event) {
    
    event.preventDefault();

    let bill = document.getElementById("bill").value;

    bill = parseFloat(bill);
    
    let people = document.getElementById("people").value;

    people = parseFloat(people);

    if(people !== 0){

        let propina = (bill*.25)/people;
        let res = ((bill/people)+propina);
     
        document.getElementById("totalPropina").innerHTML = "$  " + propina + " /person ";
        document.getElementById("amount").innerHTML = "$  " + res + " /person ";
        document.getElementById("people").style.backgroundColor = " hsl(185, 41%, 84%)"; 
    document.getElementById("textpeople").innerHTML = people

    } else  document.getElementById("people").style.backgroundColor = "red"; 
            document.getElementById("textpeople").innerHTML = "Can't be Zero"
}

function calculaCincuenta(event) {
    
    event.preventDefault();

    let bill = document.getElementById("bill").value;

    bill = parseFloat(bill);
    
    let people = document.getElementById("people").value;

    people = parseFloat(people);

    if(people !== 0){

        let propina = (bill*.5)/people;
        let res = ((bill/people)+propina);
        
     
        document.getElementById("totalPropina").innerHTML = "$  " + propina + " /person ";
        document.getElementById("amount").innerHTML = "$  " + res + " /person ";
        document.getElementById("people").style.backgroundColor = " hsl(185, 41%, 84%)"; 

    } else  document.getElementById("people").style.backgroundColor = "red"; 
            document.getElementById("textpeople").innerHTML = "Can't be Zero"
}

function resetea (event){

    event.preventDefault();

    document.getElementById("totalPropina").innerHTML = "$0.00 /person ";
    document.getElementById("amount").innerHTML = "$0.00 /person ";
    document.getElementById("bill").value = "";
    document.getElementById("people").value = 0;

}

