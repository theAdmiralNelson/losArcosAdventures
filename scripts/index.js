window.onscroll = (event) => {
    // checks if window is scrolled more than 500px, adds/removes solid class
    const element = document.getElementById('navbar');
    const scrollTop = window.pageYOffset
    if (scrollTop > 500) { 
      element.classList.add("solid");
    } else {
      element.classList.remove("solid");
    }

    // checks if window is scrolled more than 500px, adds/removes solid class
    const hamburger = document.getElementById('hamburger');
    if (scrollTop > 300) { 
      hamburger.classList.add("scrolled");
    } else {
      hamburger.classList.remove("scrolled");
    }
  }; 
   