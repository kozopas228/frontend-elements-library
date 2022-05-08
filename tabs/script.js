// getting all tabs opening buttons and add them the event listener
const openingButtons = document.querySelectorAll('.tabs_link');
for (const button of openingButtons) {
  button.addEventListener('click', event => {
    // disable all tabs opening buttons in current tabs block
    const allButtonsInCurrentParrent = button.parentElement.children;
    for (const buttonChildren of allButtonsInCurrentParrent) {
      buttonChildren.classList.remove('_active');
    }

    // disable all tabs contents in current tabs block
    const contentBody = button.parentElement.nextElementSibling;
    for (const child of contentBody.children) {
      child.classList.remove('_active');
    }

    // enable selected tab and dependent content block
    const tabContent = document.getElementById(button.getAttribute('href').replace('#', ''));
    tabContent.classList.add('_active');
    button.classList.add('_active');

    // to prevent reloading of the page (because our buttons are asigned to links)
    event.preventDefault();
  });
}