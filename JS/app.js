const barTop            = document.querySelector('.line-top');
const barCenter         = document.querySelector('.line-center');
const barBottom         = document.querySelector('.line-bottom');
const btnBars           = document.querySelector('.btn-bars');
const menu              = document.querySelector('.menu');
const optionsMenu       = document.querySelectorAll('.navBarOptions');
const audioHalo         = document.getElementById('audio-halo')
const btnReproducir     = document.getElementById('reproducir')

let i = 0;
console.log(audioHalo)
btnReproducir.addEventListener('click',()=>{
    (i >1) ? i = 0 : '' ;
    (i == 0) ? audioHalo.play() : audioHalo.pause();
    i++
    console.log(i)
    
})




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
// galeria imagenes PRUEBA
let sobreMe = document.querySelector('.about-me');

