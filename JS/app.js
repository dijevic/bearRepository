const barTop                  = document.querySelector('.line-top');
const barCenter               = document.querySelector('.line-center');
const barBottom               = document.querySelector('.line-bottom');
const btnBars                 = document.querySelector('.btn-bars');
const menu                    = document.querySelector('.menu');
const optionsMenu             = document.querySelectorAll('.navBarOptions');
const audioHalo               = document.getElementById('audio-halo')
const message                 = document.querySelector('.message');
const btnStart                = document.querySelector('.start-here');
const sectionAbout            = document.getElementById('about');
const cards                   = document.querySelectorAll('.card');
const btnAboutNav             = document.getElementById('btn-nav-about');
const imgCard                 = document.querySelectorAll('.img-card');
const html                    = document.querySelector('.html');
const firstLetter             = document.querySelectorAll('.fist-letter');
const welcomeText             = document.querySelector('.welcome-text');
const messageText             = document.querySelector('.message');
const navBarOptions           = document.querySelectorAll('.navBarOptions');
const main                    = document.querySelector('.main');
const slider                  = document.getElementById('slider')
const tarjetasWork            = document.querySelectorAll('.tarjeta-work');
const btnRight                = document.querySelector('#arrow-right')
const btnleft                 = document.querySelector('#arrow-left');
let   padre                   = tarjetasWork[0].parentElement;
const emailText               = document.querySelector('.my-email')
const tituloAbout             = document.querySelector('.titulo-about')
let   ultimo                  = tarjetasWork[tarjetasWork.length-1];
const animateWelcome          = document.getElementById('animate-welcome');
const desarrolloTitulo        = document.getElementById('desarrollo-titulo');
const descripcionPresentacion = document.getElementById('descripcion-presentacion');
const btnContact              = document.getElementById('btn-contact');
const aboutTitulo             = document.getElementById('about-titulo');
const tituloWork              = document.getElementById('titulo-work');
const tituloHabilidades       = document.getElementById('titulo-habilidades');
const kindWork                = document.getElementById('kind-work');
const contenedorHabilidades   =document.getElementById('contenedor-habilidades');
const tituloContact           = document.getElementById('titulo-contact');
const contactOptions          = document.getElementById('contact-options');
const form                    = document.getElementById('form');
const sliderContenedor        =document.getElementById('slider-contenedor');
const header                  = document.getElementById('header');
const front                   = document.getElementById('front');
const back                    = document.getElementById('back');
const line                    = document.querySelector('.line');
const line2                    = document.querySelector('.line2');
const borderP                 = document.getElementById('border-p');
const logo                     = document.getElementById('logo');
const icons                   = document.querySelectorAll('.icon')


let num = 0;




// codigo que me permite agregar un efecto con el mensaje 'welcome en la parte del header *INICIO*
setTimeout(() => {
    logo.style.animationName='rubberBand'

},250)
setTimeout(()=>{
    animateWelcome.style.transition='0.8s ease all';
    animateWelcome.style.opacity='1'
    animateWelcome.style.animationName ='lightSpeedInLeft';
    // logo.style.animationName='rubberBand'
   
},600)
setTimeout(()=>{
    animateWelcome.style.transition='0.8s ease all';
    animateWelcome.style.animationName ='flipOutY';
    logo.style.animationName=''


    // animateWelcome.style.transform ='translateY(-200px)'
    setTimeout(() => {
    animateWelcome.style.display='none'
    },1000)

},4200)



const presentationAnimation = ()=>{
    if(window.screen.width < 968){
        setTimeout(()=>{
            setTimeout(()=>{
                line.style.display='block'
                setTimeout(() => {
                line2.style.display='block'
                    setTimeout(() => {
                        descripcionPresentacion.classList.add('border')
                    },1800)
                },500)
            },1200)
        },1600)
    }else{
       
        setTimeout(()=>{
          
            
            setTimeout(()=>{
                line.style.display='block'
                setTimeout(() => {
                line2.style.display='block'
                    setTimeout(() => {
                        descripcionPresentacion.classList.add('border')
                    },1800)
                },500)
            },1200)
        },2000) 
    }
}
presentationAnimation()




// slider *INICIO*


// funcion que me permite usar el slider 
const next = ()=>{
    let primero  =  document.querySelectorAll('.tarjeta-work')[0];
 
    primero.style.marginLeft='-100%';
    primero.style.transition='0.7s ease all';
    setTimeout(() => {
    
    slider.insertAdjacentElement('beforeend',primero)
    primero.style.marginLeft='0';
    
    
    
    }, 700);
   
}
// funcion que me permite usar el slider en reversa
const before = ()=>{
    let lastOne  =  document.querySelectorAll('.tarjeta-work')[ document.querySelectorAll('.tarjeta-work').length - 1];
    lastOne.style.marginLeft='-100%'
    slider.insertAdjacentElement('afterbegin',lastOne)
    setTimeout(() => {
        lastOne.style.transition='0.7s ease all'
        lastOne.style.marginLeft='0'
    }, 100);
    


}


// SLIDER *FIN*



// EVENTOS PARA EL SLIDER //
btnRight.addEventListener('click',()=>{
    setTimeout(() => {
        next()
    }, 100);
    
})
btnleft.addEventListener('click',()=>{
    
        before()
   
})

// evento slider final //





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
        let time = 0
        optionsMenu.forEach(option=>{
            time += 75
            setTimeout(() => {
                option.classList.remove('nonactived')
                option.classList.add('actived')

            },time + 100)
        })
        
    }else{
        // remuevo propiedades a mis bars 
        barTop.classList.remove('actived');
        barCenter.classList.remove('actived');
        barBottom.classList.remove('actived');
        barCenter.classList.add('nonactived');
        barBottom.classList.add('nonactived');
        barTop.classList.add('nonactived');

        
        
        // oculto mis opciones del  menu una por una
        let time = 100
    for(let i = 0; i < optionsMenu.length; i++){
        time += 100;
        optionsMenu[i].classList.remove('actived')

       setTimeout(() => {
           optionsMenu[i].style.transition ='0.5s ease all'
           optionsMenu[i].classList.add('nonactived')

        
       },time)
    }
        setTimeout(() => {
            // remuevo la clase actived a el menu para crear un efecto con delay
            menu.classList.remove('actived');
        },600);
        
    }
    
    
})

// agrego efectos para que aparezcan las cartas de presentacion 
// funcion que me permite agregar efecto a mis tarjetas de presentacion, 
// tambien agrego y quito color a las letras de mi navegacion
// ABOUT-HEADER 

const scrollEfectsHeader = ()=>{
    if(window.screen.width >= 850){
        window.onscroll = ()=>{
            let y = window.scrollY


         for(let i =0; i < cards.length;i++){
             let altura = cards[i].offsetTop;
             let alturaTitulo = tituloAbout.offsetTop;
            
             if(alturaTitulo +400 < y){
                aboutTitulo.style.opacity='1'
                aboutTitulo.style.animationName ='zoomInUp';

             }
              if(altura - 500 < y){

            cards[i].classList.add('animacion')
                
                 }
                //  else if(altura -800 < y){
                
            //      firstLetter.forEach(letter=>{
            //     letter.classList.add('blue') 
            //      })
               
            //      navBarOptions.forEach(option=>{
            //          option.classList.add('blue')
            //      })
            //     //  tituloAbout.classList.add('animacion')

                 
            //  }
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
    }else if(window.screen.width <850){
    
        window.onscroll = ()=>{
            let y = window. scrollY
            
         for(let i =0; i < cards.length;i++){
             let altura = cards[i].offsetTop;
             if(altura - 500 < y){
                 aboutTitulo.style.marginLeft='0'
                 cards[i].classList.add('animacion1')
                 cards[1].classList.remove('animacion')
                 
             }
            
         }
     }
    }
}

const scrollEfectsWork = ()=>{
    if(window.screen.width>=968){
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloWork.offsetTop;
            if(altura +1790 <= y){
                tituloWork.style.opacity='1'
                tituloWork.style.animationName='zoomInUp'
                setTimeout(() => {
                    kindWork.style.marginLeft='0'
                    kindWork.style.margin='0px auto';
                    kindWork.style.display='block';
                  
                    }, 800);
                    setTimeout(()=>{
                        sliderContenedor.style.transform='translateY(0)'
                        sliderContenedor.style.opacity='1'
                    },1400)
            }
        })
    }else{
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloWork.offsetTop;
        
            if(altura +2490 <= y){
                tituloWork.style.marginLeft='0'
                
                setTimeout(() => {
                kindWork.style.margin='0px auto'
                kindWork.style.display='block';

                    
                }, 900);
                setTimeout(()=>{
                    sliderContenedor.style.opacity='1'
                    sliderContenedor.classList.add('animate')
                },1400)
            }
        }) 
    }
   
   
}

const scrollEfectsHabilities = ()=>{
    if(window.screen.width >=968){
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloHabilidades.offsetTop;
        
            if(altura +2785 <= y){
                tituloHabilidades.style.opacity='1'
                tituloHabilidades.style.animationName='zoomInUp'
                setTimeout(() => {
                    contenedorHabilidades.classList.add('animate')
                    icons.forEach(icon=>{
                        icon.style.animationName = 'rollIn'
                      
                    })
                    }, 1000);
            
                
            }
        })
    }else{
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloHabilidades.offsetTop;
           
            if(altura +3230 <= y){
                tituloHabilidades.style.marginLeft='0'    ;
                setTimeout(() => {
                contenedorHabilidades.style.opacity='1' ;
               contenedorHabilidades.classList.add('animate')
               icons.forEach(icon=>{
                icon.style.animationName = 'rollIn'
            })
                    
                }, 800);
            }
        })
    }
   
   
}
const scrollEfectsContact = ()=>{
    if(window.screen.width >=968){
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloContact.offsetTop;

            if(altura + 3869 <= y){
                tituloContact.style.marginLeft='0';
                btnContact.style.display='none';
                

                setTimeout(() => {
                    contactOptions.classList.add('animation');
                }, 800);
                setTimeout(() => {
                    form.classList.add('animation')
                    
                }, 1400);
                
            }else{
                btnContact.style.display='block';
              
             
            }
        })
    }else{
        window.addEventListener('scroll',()=>{
            let y = window.scrollY
            let altura = tituloContact.offsetTop;
          
           if(altura +4218 < y){
            tituloContact.style.marginLeft='0';
            btnContact.style.display='none';

            setTimeout(() => {
                contactOptions.classList.add('animation');
              
            }, 800);
            setTimeout(() => {
                form.classList.add('animation')
            }, 1400);
           }else{
            btnContact.style.display='block';

           }
         
        })

    }
}

scrollEfectsHeader()
scrollEfectsWork()
scrollEfectsHabilities()
scrollEfectsContact()



// FUNCION QUE ME PERMITE COPIAR EL CODIGO DE MI CORREO
// no tiene retorno
emailText.addEventListener('click',(event)=>{
    let aux = document.createElement("input");
    aux.value = emailText.textContent;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    emailText.textContent = 'Copiado al portapapeles !'
    emailText.style.transition='0.5s ease all'
    setTimeout(()=>{
      emailText.innerHTML = '<i class="far fa-copy"></i>developer_projects@gmai.com'

    },1500)
   
})


