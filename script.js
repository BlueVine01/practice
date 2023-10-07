//addition of toggle effect to the hamburger icon
//additon of a slide-scroll effect to the return home
//to loop through selected arrays of job
//to ad a visibility to enter a 404 when either link is broken
//to display array of slideshow of images when they are clicked


// function bars() {
     let bar = document.getElementById("#check-btn")
     let nav = document.getElementsByClassName(".navigation") 

     bar.addEventListener('click', () => {
        nav.classList.toggle("hidden")
     })
     // bar.onclick  = function () {
      //  if (nav.style.right = 30%) {
      //     nav.style.right 

      //  }   
    //  } 
// }