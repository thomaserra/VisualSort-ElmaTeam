var i=0;

function salvaNumeri() {
 var numeri = document.getElementById("numeri").value;
 localStorage.setItem("numeri",numeri);
 mostraNumeri();
 i++;}

function mostraNumeri(){
  
  if(i==0){
    var numeri = localStorage.getItem("numeri");
    document.getElementById("datiSalvati").innerHTML= numeri +" ";
    }
  
  if(i==1){
    var numeri = localStorage.getItem("numeri");
    document.getElementById("datiSalvati1").innerHTML= numeri +" ";
    }
  
  if(i==2){
    var numeri = localStorage.getItem("numeri");
    document.getElementById("datiSalvati2").innerHTML= numeri +" ";
    }
  
  if(i==3){
    var numeri = localStorage.getItem("numeri");
    document.getElementById("datiSalvati3").innerHTML= numeri +" ";
    }
  
  if(i==4){
    var numeri = localStorage.getItem("numeri");
    document.getElementById("datiSalvati4").innerHTML= numeri +" ";
    }
  
  if(i>=4){
    document.getElementById("button").disabled = true;
  }
}