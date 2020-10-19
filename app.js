const fb_document = 'gqE3it5npUKwVi8srcDV';
let data = [];
const modal = document.getElementById("myModal");
const cerrar = document.getElementById("cerrar");

firebase.auth().signInAnonymously().catch(function(error) {
   console.log(error.code, error.message);
});

//------------------------------------FUNCIONES PARA COLOREAR LOS BOTES--------------------------------------------

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

//----------------------------------- FUNCION PARA LLENAR LA BARRA ---------------------------------------------
const progreso = () => {
   let c1 = parseInt(document.getElementById("cont-1").innerHTML)
   let c2 = parseInt(document.getElementById("cont-2").innerHTML)
   let c3 = parseInt(document.getElementById("cont-3").innerHTML)
   let c4 = parseInt(document.getElementById("cont-4").innerHTML)
   let c5 = parseInt(document.getElementById("cont-5").innerHTML)

   let ct = c1 + c2 + c3 + c4 + c5;
   let ct_num = ct;

   if(ct > 1000) {
      ct = 1000
   }
   document.getElementById("progressbar-int").style.width = `${ct/10}%`
   document.getElementById("progress-bar-num").innerHTML = ct_num;
}

//------------------------------------ FUNCION DE INICIO, LEER BD Y LLENAR COLORES --------------------------------------------

const inicio = (d) => {
   document.getElementById("cont-1").innerHTML = d[0].prim;
   document.getElementById("cont-2").innerHTML = d[0].sec;
   document.getElementById("cont-3").innerHTML = d[0].prep;
   document.getElementById("cont-4").innerHTML = d[0].per;
   document.getElementById("cont-5").innerHTML = d[0].fam;

   let cont1 = parseInt(document.getElementById("cont-1").innerHTML);
   let cont2 = parseInt(document.getElementById("cont-2").innerHTML);
   let cont3 = parseInt(document.getElementById("cont-3").innerHTML);
   let cont4 = parseInt(document.getElementById("cont-4").innerHTML);
   let cont5 = parseInt(document.getElementById("cont-5").innerHTML);

   color1(cont1);
   color2(cont2);
   color3(cont3);
   color4(cont4);
   color5(cont5);

   let conteo = cont1 + cont2 + cont3 + cont4 + cont5;
   progreso();
}

//------------------------------------FUNCION DE ARRANQUE--------------------------------------------

const arranque = firebase.functions().httpsCallable('arranque');
arranque().then(result => {
   data = result.data;
   inicio(data);
}).catch(error =>{
   console.log(error.code, error.message);
});

//---------------------------------CLICKS BOTONES-----------------------------------------------

document.getElementById("btn1").onclick = suma1;
document.getElementById("btn2").onclick = suma2;
document.getElementById("btn3").onclick = suma3;
document.getElementById("btn4").onclick = suma4;
document.getElementById("btn5").onclick = suma5;

const masUno1 = firebase.functions().httpsCallable('masUno1');
const masUno2 = firebase.functions().httpsCallable('masUno2');
const masUno3 = firebase.functions().httpsCallable('masUno3');
const masUno4 = firebase.functions().httpsCallable('masUno4');
const masUno5 = firebase.functions().httpsCallable('masUno5');

//----------------------------------FUNCIONES BOTONES----------------------------------------------

function suma1() {
   let cont1 = parseInt(document.getElementById("cont-1").innerHTML)
   cont1++;
   document.getElementById("cont-1").innerHTML = cont1;
   progreso();
   color1(cont1);
   masUno1().then().catch(e => console.log(e));
   modal.style.display = "block";
}

function suma2() {
   let cont2 = parseInt(document.getElementById("cont-2").innerHTML)
   cont2++;
   document.getElementById("cont-2").innerHTML = cont2;
   progreso();
   color2(cont2);
   masUno2().then().catch(e => console.log(e));
   modal.style.display = "block";
}

function suma3() {
   let cont3 = parseInt(document.getElementById("cont-3").innerHTML)
   cont3++;
   document.getElementById("cont-3").innerHTML = cont3;
   progreso();
   color3(cont3);
   masUno3().then().catch(e => console.log(e));
   modal.style.display = "block";
}

function suma4() {
   let cont4 = parseInt(document.getElementById("cont-4").innerHTML)
   cont4++;
   document.getElementById("cont-4").innerHTML = cont4;
   progreso();
   color4(cont4);
   masUno4().then().catch(e => console.log(e));
   modal.style.display = "block";
}

function suma5() {
   let cont5 = parseInt(document.getElementById("cont-5").innerHTML)
   cont5++;
   document.getElementById("cont-5").innerHTML = cont5;
   progreso();
   color5(cont5);
   masUno5().then().catch(e => console.log(e));
   modal.style.display = "block";
}

//----------------------------------FUNCIONES BOTONES MODAL----------------------------------------------

cerrar.onclick = function() {
   modal.style.display = "none";
}

window.onclick = function(event) {
   if (event.target == modal) {
   modal.style.display = "none";
   }
}