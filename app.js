db.collection('grupos').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
      console.log(doc.data())
   })
})

//db.collection('grupos').doc('gqE3it5npUKwVi7srcDV').update({ familias:1})


let cont1 = parseInt(document.getElementById("cont-1").innerHTML)
let cont2 = parseInt(document.getElementById("cont-2").innerHTML)
let cont3 = parseInt(document.getElementById("cont-3").innerHTML)
let cont4 = parseInt(document.getElementById("cont-4").innerHTML)
let cont5 = parseInt(document.getElementById("cont-5").innerHTML)

let prog = document.getElementById("progress-bar").value

document.getElementById("btn1").onclick = suma1;
document.getElementById("btn2").onclick = suma2;
document.getElementById("btn3").onclick = suma3;
document.getElementById("btn4").onclick = suma4;
document.getElementById("btn5").onclick = suma5;

function suma1() { 
    cont1++;
    document.getElementById("cont-1").innerHTML = cont1;
    document.getElementById("progress-bar").value+=1;
    document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
 }

 function suma2() { 
    cont2++;
    document.getElementById("cont-2").innerHTML = cont2;
    document.getElementById("progress-bar").value+=1;
    document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
 }

 function suma3() { 
    cont3++;
    document.getElementById("cont-3").innerHTML = cont3;
    document.getElementById("progress-bar").value+=1;
    document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
 }

 function suma4() { 
    cont4++;
    document.getElementById("cont-4").innerHTML = cont4;
    document.getElementById("progress-bar").value+=1;
    document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
 }

 function suma5() { 
    cont5++;
    document.getElementById("cont-5").innerHTML = cont5;
    document.getElementById("progress-bar").value+=1;
    document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
 }


