const nav=document.querySelector('.nav');
//Mostrar en consola el valor de nav
//console.log(nav);
window.addEventListener('scroll',fixNav)


function fixNav(){
    if(window.scrollY>=600){
        //agregar la clase active al elemento nav
        console.log('agregaste la clase active');
        nav.classList.add('active');
        /*myElemento.classList.add('nombreclase');*/
       /* document.getElementById("barra").classList.add('.nav.active');*/
       
    } else{
        //remover la clase active al alemento nav
        console.log('quitaste la clase active');
        nav.classList.remove('active');
        /*myElemento.classList.remove('nombreclase');*/
    }
    console.log(window.scrollY);
}


//Scroll de button
const button = document.querySelector('.button');
window.addEventListener('scroll',irArriba)

function irArriba(){
    if(window.scrollY >=100){
    //cambiaremos el valor de la propiedad display a block
    console.log('Imprimira el mansaje que entraste al if');
    button.style.display="block";

    }else{
        button.style.display="none";
    }
}

function scrollToTop(){
    if(button.onclick){
        window.scrollTo(0,0)
    }
}
