const addPropertyBtn = document.getElementById('addPropertyBtn');

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