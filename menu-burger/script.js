// all we need to do is to add class "active" to the burger and menu and to add
// class "lock" to the body of the document

const burger = document.querySelector('.burger_icon');
const menu = document.querySelector('.menu_wrapper');

if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}