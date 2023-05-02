const addPropertyBtn = document.getElementById('addPropertyBtn');
const updateValueBtn = document.getElementById('updateValueBtn');

if (addPropertyBtn){
  addPropertyBtn.addEventListener('click', () => {
    const addPropertyContainer = document.querySelector('.addPropertyContainer');
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
  
    addPropertyContainer.classList.replace('visible','hidden') ?
    null : addPropertyContainer.classList.replace('hidden','visible');
    // navbar.classList.add('blur');
    // container.classList.add('blur');
    //   DomElement.mainDisplay.classList.add('blur');
  })
}
if (updateValueBtn){
  updateValueBtn.addEventListener('click', () => {
    const updateValueContainer = document.querySelector('.updateValueContainer');
    updateValueContainer.classList.replace('visible','hidden') ?
    null : updateValueContainer.classList.replace('hidden','visible');
  })
}
