// setups to each spoiler an event listener which toggles class active
// and change the padding depending on content size (that's why we can't use CSS in this case)
const spoilerHeaders = document.querySelectorAll('.spoiler_header');
if (spoilerHeaders.length > 0) {
  for (const header of spoilerHeaders) {
    header.addEventListener('click', event => {
      const spoilerWrapper = event.target.closest('.spoiler_wrapper');
      const bodyHeight = spoilerWrapper.lastElementChild.offsetHeight;

      if (spoilerWrapper.classList.contains('active')) {
        spoilerWrapper.classList.remove('active');
        spoilerWrapper.style.paddingBottom = 0;
      } else {
        spoilerWrapper.classList.add('active');
        // the height of padding calculated from height of content of the spoiler
        spoilerWrapper.style.paddingBottom = bodyHeight + 'px';
      }

    });
  }
}