const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const dropMenu = document.getElementById('drop-down')

openMenu.addEventListener('click', function() {
  openMenu.style.display = 'none'
  closeMenu.style.display = 'block'
  dropMenu.style.display = 'flex'
})

closeMenu.addEventListener('click', function() {
  openMenu.style.display = 'block'
  closeMenu.style.display = 'none'
  dropMenu.style.display = 'none'
})