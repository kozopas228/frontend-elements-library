// how many items will be shown in the carousel
const visibleItemsAmount = 2;

// calculating the width of one carousel item
const allItems = document.querySelectorAll('.carousel_item');
for (const item of allItems) {
  item.style.flexBasis = 100 / visibleItemsAmount + '%';
}

// index of selected carousel item
let index = 0;

// creating points (dots) depending on amount of the all carousel items
for (let i = 0; i < allItems.length; i++) {
  const element = document.createElement('div');
  element.classList.add('carousel_point');
  document.querySelector('.carousel_points').append(element);
}

// setting up the event listener which moves the carousel to certain point (dot)
let points = document.querySelectorAll('.carousel_point');
for (const point of points) {
  point.addEventListener('click', () => {
    const pointIndex = [].indexOf.call(point.parentElement.children, point);
    scrollToCertainIndex(pointIndex);
  });
}

// setting up the starting point
points[index].classList.add('active');



// moving the carousel to any index
function scrollToCertainIndex(indexOfPoint) {
  index = indexOfPoint;

  // disabling all points (dots)
  for (const point of points) {
    point.classList.remove('active');
  }

  // moving all carousel items
  for (const item of allItems) {
    if (!item.style.right) {
      item.style.right = 0;
    }
    item.style.right = index * (100 / visibleItemsAmount) + '%';
  }

  points[index].classList.add('active');
}


// similar to 'scrollToCertainIndex'
function scrollLeft() {
  if (index <= 0) {
    return;
  }
  index--;
  for (const point of points) {
    point.classList.remove('active');
  }

  points[index].classList.add('active');


  for (const item of allItems) {
    if (!item.style.right) {
      item.style.right = 0;
    }
    item.style.right = parseFloat(item.style.right) - 100 / visibleItemsAmount + '%';
  }
}

// similar to 'scrollToCertainIndex'
function scrollRight() {
  if (index >= allItems.length - 1) {
    return;
  }
  index++;
  for (const point of points) {
    point.classList.remove('active');
  }

  points[index].classList.add('active');


  for (const item of allItems) {
    if (!item.style.right) {
      item.style.right = 0;
    }
    item.style.right = parseFloat(item.style.right) + 100 / visibleItemsAmount + '%';
  }
}


// adding event listeners to the arrows
let leftArrow = document.querySelector('.carousel_arrow-left');
leftArrow.addEventListener('click', event => {
  scrollLeft();
});

let right_arrow = document.querySelector('.carousel_arrow-right');
right_arrow.addEventListener('click', event => {
  scrollRight();
});

// uncomment if you want run carousel automatically
// setInterval(() => {
//   if (index >= allItems.length - 1) {
//     scrollToCertainIndex(0);
//   } else {
//     scrollRight();
//   }
// }, 2000);
