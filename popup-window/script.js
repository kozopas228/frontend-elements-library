// setting to each popup link an event handler
// which opens the popup by clicking on the link
const popupLinks = document.querySelectorAll('.popup_link');
if (popupLinks.length > 0) {
  for (const link of popupLinks) {
    link.addEventListener('click', event => {
      const popupName = link.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);

      //prevent reloading
      event.preventDefault();
    });
  }
}

// setting to each close button an event handler 
// which closes the popup by clicking to the close button
const closeButtons = document.querySelectorAll('.popup_close');
if (closeButtons.length > 0) {
  for (const closeButton of closeButtons) {
    closeButton.addEventListener('click', event => {
      popupClose(closeButton.closest('.popup_wrapper'));

      //prevent reloading
      event.preventDefault();
    });
  }
}


// closes the opened popup (if it presents) 
// makes the body not scrollable
// opens the popup that we pass in arguments
// adds an event listener which closes the popup if we click outside of it
function popupOpen(popup) {
  const activePopup = document.querySelector('.popup_wrapper.open');
  if (activePopup) {
    popupClose(activePopup);
  }
  document.body.classList.add('lock');

  popup.classList.add('open');
  popup.addEventListener('click', e => {
    if (!e.target.closest('.popup_content')) {
      popupClose(e.target.closest('.popup_wrapper'));
    }
  });
}

function popupClose(popup) {
  popup.classList.remove('open');
  document.body.classList.remove('lock');
}

//adds event listener which closes popup by pressing the 'esc' button
document.addEventListener('keydown', event => {
  if (event.code == 'Escape') {
    const activePopup = document.querySelector('.popup_wrapper.open');
    if (activePopup) {
      popupClose(activePopup);
    }
  }
});