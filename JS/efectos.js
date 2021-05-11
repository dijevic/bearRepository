const animacionesPresentacion= ()=>{
    setTimeout(()=>{
    animateWelcome.style.transition='0.8s ease all';
    animateWelcome.style.opacity='1'
    animateWelcome.style.transform ='translateX(0px)'
   
},600)
setTimeout(()=>{
    animateWelcome.style.transition='0.8s ease all';

    animateWelcome.style.transform ='translateY(-200px)'
},4200)

// *fin*





// efectos y animaciones del titulo(section presentacion)

if(window.screen.width >= 968){
    setTimeout(() => {
        desarrolloTitulo.classList.add('actived');
        setTimeout(()=>{
          
            setTimeout(() => {
                if(window.screen.width >= 968){
                    let time = 0
                    optionsMenu.forEach(option=>{
                        time += 100
                        if(option.classList.contains('nonactived')){
                            setTimeout(() => {
                                option.classList.remove('nonactived');
                          
            
                            },time)
                        }
                    })
                }
                setTimeout(()=>{
                   back.classList.add('font')
                  front.classList.add('font')
                },1000)
            },400)
            
            setTimeout(() => {
                back.classList.add('trasladar')
                front.classList.add('trasladar') 
            },1400)
          setTimeout(() => {
            desarrolloTitulo.classList.add('remove');
    
                setTimeout(() => {
                    back.classList.remove('trasladar')
                    front.classList.remove('trasladar') 
                    back.classList.add('trasladar-2')
                    front.classList.add('trasladar-2')  
                    
                        setTimeout(() => {
                            front.classList.add('font0')
                           
                            descripcionPresentacion.classList.add('display-block')
                            setTimeout(() => {
                                 desarrolloTitulo.classList.remove('remove')
                            desarrolloTitulo.classList.add('white')
                            })
    
                         setTimeout(() =>{
                            back.classList.add('font0')
                           
                            btnContact.style.opacity='1';
    
                              setTimeout(() =>{
                                  back.classList.add('display-none')
                                  front.classList.add('display-none')
                                  desarrolloTitulo.classList.add('margin')
                            desarrolloTitulo.style.transform=' translateY(-190px)'

                                 setTimeout(() => {
                                    line.classList.add('display')
                                    line2.classList.add('display')
                                descripcionPresentacion.style.opacity='1';
                                setTimeout(() => {
                                    descripcionPresentacion.classList.add('border')
                                },800)
    
                                 },700)
                              },200)
    
                         
    
                    
        
                         },500)
                        
    
                        },700)
                        
                
                 
                },500)
    
          },2200)
    
        },500)
        
    
    }, 1200);
}else {
    setTimeout(()=>{
        desarrolloTitulo.classList.add('actived');


        setTimeout(()=>{
            front.classList.add('font')
            back.classList.add('font')
            back.classList.add('rojo')


            setTimeout(()=>{
                desarrolloTitulo.classList.add('font0')
                setTimeout(()=>{
                    front.style.transform = 'translateX(140px)'
                    back.style.transform = 'translateX(70px)'
                    
                    setTimeout(()=>{
                        setTimeout(()=>{
                            
                                        front.classList.remove('font')
                                        back.classList.remove('font')
                                        setTimeout(() => {
                                            front.style.display='none';
                                            back.style.display='none';
                                            desarrolloTitulo.classList.remove('font0')
                                            desarrolloTitulo.classList.add('font')
                                            setTimeout(() => {
                                                descripcionPresentacion.style.transform='translateX(0)'
                                                desarrolloTitulo.style.color='#fff'
                                                line.classList.add('display-block')
                                                setTimeout(() => {
                                                line2.classList.add('display-block')
                                                    
                                                },500)
                                            },800)
                                        },500)

                                    
                            
                        },400)
                    },500)
                })
                
            },800)
        },800)
    },1200)
}
}