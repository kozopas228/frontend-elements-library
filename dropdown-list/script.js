//defining whether user uses mobile or pc
//also this code available in util folder of this repo
let isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};


// add to each arrow on the page event that toggles class
// '_active' to the parent (li) by clicking on the arrow
if (isMobile.any()) {
  document.body.classList.add('_touch');

  let arrows = document.querySelectorAll('.arrow');
  if (arrows.length > 0) {
    for (const arrow of arrows) {
      arrow.addEventListener('click', () => {
        arrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}