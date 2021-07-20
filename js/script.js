window.addEventListener('scroll',function(){
    let navbar=document.getElementById("menu-bar");
if(window.pageYOffset >= 212){
    navbar.classList.add('sticky');
}else{
    navbar.classList.remove('sticky');
}
});

function colorchnage(color){
     document.body.style.backgroundColor =color;

    let txt=document.getElementsByClassName("text");
    let txt1=document.getElementsByClassName("text1");
    if(color =="#ffa500"){
       for(let elm of txt1){
           elm.style.color="orange";
       }
    }else if(color =="#ffc0cb"){
        for(let elm of txt1){
            elm.style.color="pink";
        }
    }else if(color =="#ffff00"){
        for(let elm of txt1){
            elm.style.color="yellow";
        }
    }
    else if(color =="#ffffff"){
        for(let elm of txt1){
            elm.style.color="white";
        }
    }else if(color =="#000000"){
        for(let elm of txt1){
            elm.style.color="black";
        }
    }
     if(color =="#000000"){
        for(let elm of txt){
            elm.style.color="white";
        }
     }else{
        for(let elm of txt){
            elm.style.color="black";
        }
     }
}



   
   
