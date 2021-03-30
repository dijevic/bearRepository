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
const html              = document.querySelector('.html');
const firstLetter       =document.querySelectorAll('.fist-letter');
const welcomeText       =document.querySelector('.welcome-text');
const messageText       =document.querySelector('.message');
const navBarOptions     =document.querySelectorAll('.navBarOptions');
const main              =document.querySelector('.main');
const header            =document.querySelector('.header');
const BtnContact        =document.querySelector('.start-here');
const slider            =document.getElementById('slider')
const tarjetasWork      = document.querySelectorAll('.tarjeta-work');
const btnRight          = document.querySelector('#arrow-right')
const btnleft           = document.querySelector('#arrow-left');
let padre               = tarjetasWork[0].parentElement;
let ultimo  = tarjetasWork[tarjetasWork.length-1];



let num = 0;





const next = ()=>{
    let primero  =  document.querySelectorAll('.tarjeta-work')[0];
 
    primero.style.marginLeft='-100%';
    primero.style.transition='0.7s ease all';
    setTimeout(() => {
    
    slider.insertAdjacentElement('beforeend',primero)
    primero.style.marginLeft='0';
    

        
    }, 700);
   
}
const before = ()=>{
    let lastOne  =  document.querySelectorAll('.tarjeta-work')[ document.querySelectorAll('.tarjeta-work').length - 1];
    lastOne.style.marginLeft='-100%'
    slider.insertAdjacentElement('afterbegin',lastOne)
    setTimeout(() => {
        lastOne.style.transition='0.7s ease all'
        lastOne.style.marginLeft='0'
    }, 100);
    


}
btnRight.addEventListener('click',()=>{
    setTimeout(() => {
        next()
    }, 100);
    
})
btnleft.addEventListener('click',()=>{
    
        before()
   
})











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
// funcion que me permite agregar efecto a mis tarjetas de presentacion, 
// tambien agrego y quito color a las letras de mi navegacion
const scrollEfects = ()=>{
    if(window.screen.width >= 850){
        window.onscroll = ()=>{
            let y = window.scrollY
            // BOTON
            if(y>0){
                BtnContact.classList.add('Ymas');
                BtnContact.classList.remove('start-here')
               
            }else{
                BtnContact.classList.remove('Ymas')
                BtnContact.classList.add('start-here');

            }
         for(let i =0; i < cards.length;i++){
             let altura = cards[i].offsetTop;
             if(altura - 500 < y){
                 cards[i].classList.add('animacion')
                 
             }else if(altura -800 < y){
                
                 firstLetter.forEach(letter=>{
    
                     letter.classList.add('blue') 
                 })
               
                 navBarOptions.forEach(option=>{
                     option.classList.add('blue')
                 })
                 
             }
             else{
                
                 firstLetter.forEach(letter=>{
                     letter.classList.remove('blue')
                    
    
                     
                 })
               
    
                 navBarOptions.forEach(option=>{
                     option.classList.remove('blue')
                 })
    
                 cards[i].classList.remove('animacion')
                 
    
                 
    
             }
         }
     }
    }else{
    
        window.onscroll = ()=>{
            let y = window. scrollY
            
            //BOTON CONTACTO

            if(y>0){
                BtnContact.classList.add('Ymas');
                BtnContact.classList.remove('start-here')
               
            }else{
                BtnContact.classList.remove('Ymas')
                BtnContact.classList.add('start-here');

            }
         for(let i =0; i < cards.length;i++){
             let altura = cards[i].offsetTop;
             if(altura - 500 < y){
                 cards[i].classList.add('animacion1')
                 cards[1].classList.remove('animacion')
                 
             }else if(altura -2000 <= y){
                //  tituloDeveloper.classList.add('blue')
                 firstLetter.forEach(letter=>{
    
                     letter.classList.add('blue') 
                 })
               
                 navBarOptions.forEach(option=>{
                     option.classList.add('blue')
                 })
                 
             }
             else{
                //  tituloDeveloper.classList.remove('blue')
                 firstLetter.forEach(letter=>{
                     letter.classList.remove('blue')
                    
    
                     
                 })
               
    
                 navBarOptions.forEach(option=>{
                     option.classList.remove('blue')
                 })
    
                 
    
                 
    
             }
         }
     }
    }
}

scrollEfects()
 




