const barTop            = document.querySelector('.line-top');
const barCenter         = document.querySelector('.line-center');
const barBottom         = document.querySelector('.line-bottom');
const btnBars           = document.querySelector('.btn-bars');
const menu              = document.querySelector('.menu');
const optionsMenu       = document.querySelectorAll('.navBarOptions');
const audioHalo         = document.getElementById('audio-halo')
const message           = document.querySelector('.message');
const btnStart          = document.querySelector('.start-here');
const sectionAbout      = document.getElementById('about');
const cards             = document.querySelectorAll('.card');
const btnAboutNav       = document.getElementById('btn-nav-about');
const imgCard           = document.querySelectorAll('.img-card');
const pantallaLoading   = document.querySelector('.pantalla-carga');
const loader            = document.querySelector('.fire');
const html              = document.querySelector('.html');
const tituloDeveloper   = document.querySelector('.desarrollo-titulo');
const firstLetter       =document.querySelectorAll('.fist-letter');
const welcomeText       =document.querySelector('.welcome-text');
const messageText       =document.querySelector('.message');
const navBarOptions     =document.querySelectorAll('.navBarOptions');
const main              =document.querySelector('.main');
const header            =document.querySelector('.header')
let numbers             = [2,'almost there','ready !'];
let num = 0;








// ##### EFECTOS Y ANIMACIONES #################

// evento para mi boton hamburguesa !
btnBars.addEventListener('click',()=>{
    btnBars.classList.toggle('actived')
    if(btnBars.classList.contains('actived')){
        // agg o quito propiedades a mis bars
        barTop.classList.remove('nonactived');
        barCenter.classList.remove('nonactived');
        barBottom.classList.remove('nonactived');
        barTop.classList.add('actived');
        barCenter.classList.add('actived');
        barBottom.classList.add('actived');
        
        
        // agg propiedades al menu
        
        menu.classList.toggle('actived');
        
        // agg efecto a mi menu;

        optionsMenu.forEach(option=>{
            option.classList.add('actived')
            setTimeout(()=>{
                option.classList.remove('actived')
            },1000)

        })
        
    }else{
        // remuevo propiedades a mis bars 
        barTop.classList.remove('actived');
        barCenter.classList.remove('actived');
        barBottom.classList.remove('actived');
        barCenter.classList.add('nonactived');
        barBottom.classList.add('nonactived');
        barTop.classList.add('nonactived');

        
        
        // remuevo el efecto a mis opcione-menu
        
        optionsMenu.forEach(option=>{
            option.classList.add('nonactived')
            setTimeout(()=>{
                option.classList.remove('nonactived')
            },1000)
            
        })
        setTimeout(() => {
            // remuevo la clase actived a el menu para crear un efecto con delay
            menu.classList.remove('actived');
        },200);
        
    }
    
    
})

// agrego efectos para que aparezcan las cartas de presentacion
       window.onscroll = ()=>{
           let y = window. scrollY
        for(let i =0; i < cards.length;i++){
            let altura = cards[i].offsetTop;
            if(altura - 500 < y){
                cards[i].classList.add('animacion')
                
            }else if(altura -800 < y){
                tituloDeveloper.classList.add('blue')
                firstLetter.forEach(letter=>{

                    letter.classList.add('blue') 
                })
              
                navBarOptions.forEach(option=>{
                    option.classList.add('blue')
                })
                
            }
            else{
                tituloDeveloper.classList.remove('blue')
                firstLetter.forEach(letter=>{
                    letter.classList.remove('blue')
                   

                    
                })
              

                navBarOptions.forEach(option=>{
                    option.classList.remove('blue')
                })

                

                

            }
        }
    }

    // funcion que me permite disponer de la pagina de loading mientras mis imagnes se cargan correctamente
// tambien oculto la barra de navegacion
const loadingPage = ()=>{
    html.style.overflow ='hidden';
    setInterval(() => {
        loader.textContent =  numbers[num]
        num++
    }, 800);
    setTimeout(() => {
        
    pantallaLoading.classList.add('hidde')
    html.style.overflow ='visible';
    welcomeText.classList.add('efecto');
    messageText.classList.add('efecto');
    header.style.display='flex';
    main.style.display='block';
    }, 3000);
    setTimeout(() => {
        
        pantallaLoading.style.display = 'none'
       
    }, 4000);
}



 // evento para que cuando la pagina recargue o inicie
 document.addEventListener('DOMContentLoaded',()=>{
     loadingPage()
 })