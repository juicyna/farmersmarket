/* FIXED HEADER*/
  const nav = document.querySelector('#header');
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if(window.scrollY >20) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('header-fixed');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('header-fixed');
    }
  }

window.addEventListener('scroll', fixNav);
