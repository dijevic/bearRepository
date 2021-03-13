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
const btnAboutNav       = document.getElementById('btn-nav-about')

let i = 0;





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
let y;


// animacion para hacer aparecer las cartas
// const aggAnimacion = ()=>{
//     // le doy propiedades al contenedor a cada carta
//     cards[0].style.display='block';
//     cards[0].classList.add('animacion');

//     setTimeout(() => {
//     cards[1].style.display='block';
//     cards[1].classList.add('animacion')
        
//     },1000);
//     setTimeout(()=>{
//         cards[2].style.display='block';
//         cards[2].classList.add('animacion')
//     },2000)

//     setTimeout(()=>{
//         cards[3].style.display='block';
//         cards[3].classList.add('animacion')
//     },3000)
// }


// btnStart.addEventListener('click',aggAnimacion);
// btnAboutNav.addEventListener('click',aggAnimacion)


 



    // window.addEventListener('scroll',scrollAnimacion)
       window.onscroll = ()=>{
           console.log('hola2')
           var y = window. scrollY
        for(let i =0; i < cards.length;i++){
            let altura = cards[i].offsetTop;
            if(altura - 500 < y){
                cards[i].classList.add('animacion')
                
            }
        }
    }