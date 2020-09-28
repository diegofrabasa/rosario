const fb_document = 'gqE3it5npUKwVi7srcDV';

const color1 = (c) => {
   document.getElementById("img-botella-1").setAttribute("offset",(1-(c/200)))
}

const color2 = (c) => {
   document.getElementById("img-botella-2").setAttribute("offset",(1-(c/200)))
}

const color3 = (c) => {
   document.getElementById("img-botella-3").setAttribute("offset",(1-(c/200)))
}

const color4 = (c) => {
   document.getElementById("img-botella-4").setAttribute("offset",(1-(c/200)))
}

const color5 = (c) => {
   document.getElementById("img-botella-5").setAttribute("offset",(1-(c/200)))
}

const inicio = (doc) => {
   document.getElementById("cont-1").innerHTML = doc.data().kinderyprimaria
   document.getElementById("cont-2").innerHTML = doc.data().secundaria
   document.getElementById("cont-3").innerHTML = doc.data().prepaup
   document.getElementById("cont-4").innerHTML = doc.data().personal
   document.getElementById("cont-5").innerHTML = doc.data().familias

   let cont1 = parseInt(document.getElementById("cont-1").innerHTML)
   let cont2 = parseInt(document.getElementById("cont-2").innerHTML)
   let cont3 = parseInt(document.getElementById("cont-3").innerHTML)
   let cont4 = parseInt(document.getElementById("cont-4").innerHTML)
   let cont5 = parseInt(document.getElementById("cont-5").innerHTML)

   color1(cont1);
   color2(cont2);
   color3(cont3);
   color4(cont4);
   color5(cont5);

   let conteo = cont1 + cont2 + cont3 + cont4 + cont5;

   document.getElementById("progress-bar").value = conteo;
   document.getElementById("progress-bar-num").innerHTML = conteo;
}

db.collection('grupos').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
      console.log(doc.data());
      inicio(doc);
   })
})

document.getElementById("btn1").onclick = suma1;
document.getElementById("btn2").onclick = suma2;
document.getElementById("btn3").onclick = suma3;
document.getElementById("btn4").onclick = suma4;
document.getElementById("btn5").onclick = suma5;

function suma1() {
   let cont1 = parseInt(document.getElementById("cont-1").innerHTML)
   cont1++;
   document.getElementById("cont-1").innerHTML = cont1;
   document.getElementById("progress-bar").value+=1;
   document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
   color1(cont1);
   db.collection('grupos').doc(fb_document).update({ kinderyprimaria: cont1});
}

function suma2() {
   let cont2 = parseInt(document.getElementById("cont-2").innerHTML)
   cont2++;
   document.getElementById("cont-2").innerHTML = cont2;
   document.getElementById("progress-bar").value+=1;
   document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
   color2(cont2);
   db.collection('grupos').doc(fb_document).update({ secundaria: cont2});
}

function suma3() {
   let cont3 = parseInt(document.getElementById("cont-3").innerHTML)
   cont3++;
   document.getElementById("cont-3").innerHTML = cont3;
   document.getElementById("progress-bar").value+=1;
   document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
   color3(cont3);
   db.collection('grupos').doc(fb_document).update({ prepaup: cont3});
}

function suma4() {
   let cont4 = parseInt(document.getElementById("cont-4").innerHTML)
   cont4++;
   document.getElementById("cont-4").innerHTML = cont4;
   document.getElementById("progress-bar").value+=1;
   document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
   color4(cont4);
   db.collection('grupos').doc(fb_document).update({ personal: cont4});
}

function suma5() {
   let cont5 = parseInt(document.getElementById("cont-5").innerHTML)
   cont5++;
   document.getElementById("cont-5").innerHTML = cont5;
   document.getElementById("progress-bar").value+=1;
   document.getElementById("progress-bar-num").innerHTML = document.getElementById("progress-bar").value;
   color5(cont5);
   db.collection('grupos').doc(fb_document).update({ familias: cont5});
}