const testimonialsCard = document.querySelectorAll('.testimonials__card');
const testimonialsPopup = document.querySelectorAll('.testimonials__popup');
const exitPopup = document.querySelectorAll('.testimonials__popup-exit');


 for(let i = 0; i < testimonialsCard.length; i++) {
     testimonialsCard[i].addEventListener('click', () => {
         if(testimonialsPopup[i].classList.contains('display-none')) {
             testimonialsPopup[i].classList.remove('display-none');
             testimonialsPopup[i].classList.add('display-block');
         } 
        
         exitPopup[i].addEventListener('click', () => {
            testimonialsPopup[i].classList.remove('display-block');
            testimonialsPopup[i].classList.add('display-none');
            
            
           
        }) 
        
     }) 
 }


  

    

 