

$( "#btn1" ).bind( "click", function(event, ui) {
    alert("Speak")
    TTS.speak({
        text: 'hello, das ist eine schoene Welt!',
        locale: 'de-DE',
        rate: 0.75
    }, function () {
        alert('success');
    }, function (reason) {
        alert(reason);
    });
  });

count = 0;
let posxx;//Mouse im Canvas
let posyy;//Mouse im Canvas 
/**
 * Einfache Funktion die einen Klick Event an den Canvas bindet
 * Methode nutzt intern ein Image Objekt
 * @author Winterfeldt
 * @version v0.1
 */ 
 $("#myCanvas").bind("click", function(event, ui) {
   let posx = event.clientX;
   let posy = event.clientY;
   
   //alert("touched "+posx +" "+posy);	
   var c = document.getElementById("myCanvas"); 
   let dim = c.getBoundingClientRect();  
   posxx = event.clientX - dim.left;
   posyy = event.clientY - dim.top;

   
   //alert("Canvas "+c.width +" "+c.height);	
   var image = new Image();
   image.src = 'img/ball.png';
   var cont = c.getContext("2d");
   cont.drawImage(image,posxx,posyy);

   var myVar = setInterval(myTimer, 1000);
 }); 

 /**
 * Einfache Funktion die einen Klick Event an den Button bindet
 * @author Winterfeldt
 * @version v0.1
 */ 
 function myTimer() {
    var d = new Date();
    document.getElementById("zeit").innerHTML = d.toLocaleTimeString();
    //alert("touched "+posx +" "+posy);	
    var c = document.getElementById("myCanvas"); 
     
    //alert("Canvas "+c.width +" "+c.height);	
    var image = new Image();
    image.src = 'img/ball.png';
    var cont = c.getContext("2d");
    cont.drawImage(image,posxx+count,posyy+count);
    count= count +3;

 
  }

  function paint(){


  }

  /**
 * Einfache Funktion die einen Klick Event an den Canvas bindet
 * Methode nutzt intern ein Image Objekt
 * @author Winterfeldt
 * @version v0.1
 */ 
var sprite;
 $("#myCanvas2").bind("click", function(event, ui) {
     
    
    /* var c = document.getElementById("myCanvas2");	
    var image = new Image();
    image.src = 'img/Santa.png';
    var cont = c.getContext("2d");
    cont.drawImage(image,1,1);
    */
    var c = document.getElementById("myCanvas2");
    var cont = c.getContext("2d");
    sprite = new Sprite("img/Santa.png");
    sprite.setContext(cont);
    //sprite.draw(1,1);

    var myVar = setInterval(update, 500);

  }); 

  function update(){

    sprite.update();

  }