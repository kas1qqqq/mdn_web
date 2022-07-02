let burgerMenu = document.getElementsByTagName('span')[0]
let nav = document.querySelector('.nav-block')
let imgChange = document.getElementById('img')
let navItems = document.getElementsByClassName('nav-items')[0]
let navItems2 = document.getElementsByClassName('nav-items')[1]
let navItems3 = document.getElementsByClassName('nav-items')[2]
let isActive = false
burgerMenu.onclick = () => {
  if (isActive) {
    setTimeout(() => {
      nav.classList.add('hidden')
      imgChange.classList.remove('animate__animated', 'animate__bounceIn')
      nav.classList.remove(
        'animate__animated',
        'animate__fadeInRight',
        'animate__faster'
      )
      navItems.classList.remove('animate__animated', 'animate__fadeOutUpBig')
      navItems2.classList.remove('animate__animated', 'animate__fadeOutUpBig')
      navItems3.classList.remove('animate__animated', 'animate__fadeOutUpBig')
    }, 500)
    setTimeout(() => {
      navItems.classList.add('animate__animated', 'animate__fadeOutUpBig')
    }, 0)
    setTimeout(() => {
      navItems2.classList.add('animate__animated', 'animate__fadeOutUpBig')
    }, 40)
    setTimeout(() => {
      navItems3.classList.add('animate__animated', 'animate__fadeOutUpBig')
    }, 80)
    isActive = false
  } else {
    nav.classList.remove('hidden')
    imgChange.classList.add('animate__animated', 'animate__bounceIn')
    nav.classList.add(
      'animate__animated',
      'animate__fadeInRight',
      'animate__faster'
    )
    setTimeout(() => {
      navItems.classList.add('animate__animated', 'animate__fadeInDownBig')
    }, 0)
    setTimeout(() => {
      navItems2.classList.add('animate__animated', 'animate__fadeInDownBig')
    }, 40)
    setTimeout(() => {
      navItems3.classList.add('animate__animated', 'animate__fadeInDownBig')
    }, 80)
    isActive = true
  }
  if (imgChange.src.match('./list.svg')) {
    imgChange.src = './x-lg.svg'
  } else {
    imgChange.src = './list.svg'
  }
}
