let maga = document.querySelectorAll('[data-maga]');
maga.forEach((e)=>{
  console.log();
  e.addEventListener('click',()=>{
    if (e.lastChild.getAttribute('src') == 'images/icon-arrow-up.svg'){
      e.lastChild.src = 'images/icon-arrow-down.svg';
      e.nextElementSibling.classList.remove('active')
    }else{
      e.lastChild.src = 'images/icon-arrow-up.svg'
        maga.forEach((a)=>{
          a.classList.remove('active')
        });
      e.nextElementSibling.classList.add('active')
    }
    e.getAttribute('src')
  })
})

let menu = document.querySelector('.menu')
function bur(e) {
  if(e.firstChild.getAttribute('src') == 'images/icon-menu.svg')
  {
    e.firstChild.src = 'images/icon-close-menu.svg';
    e.nextElementSibling.classList.add('active');
    
  }else {
    e.firstChild.src = 'images/icon-menu.svg';
    e.nextElementSibling.classList.remove('active');

  }
}