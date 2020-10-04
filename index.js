// DOM Elements

const darkModeSwitch = document.querySelector('#dark-mode-switch')
  
// Functions


darkModeSwitch.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('darkmode')
    
})

if (darkmode) {
    document.querySelector('body').classList.add('darkmode')
    document.querySelector('#dark-mode-switch').checked = 'checked'
}
activateTab(opentab)