
function carregar (){
    var msg = window.document.getElementsByTId('msg')
    var img = document.gatElementById("imagem")
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = "agora são "+hora;
}

function carega(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
   var hora = data.getHours()
  
    msg.innerHTML = " "+hora+" horas"

    if(hora>= 00 && hora <12){
     //good monirg
       img.src = "foto-manha.png"
       

    }else if( hora >=12 && hora < 18){
     //good efeteon
     img.src = "foto-tarde.png"
     

    }else if( hora >=18 && hora <=23){
    //good nigth
    img.src = "foto-noite.png"
    document.body.style.background = "" //mudar cor de fundo do site

    }
}
