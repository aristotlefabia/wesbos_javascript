// const butts = document.querySelector('button.butts');
// const cool = document.querySelector('.cool');
// console.log(butts);
// console.log(cool);
// const buttons = document.querySelectorAll('button.buy');

// buttons.forEach(function (buyButton) {
//   // console.log('Hey ', buyButton);
//   buyButton.addEventListener('click', () => {
//     console.log('one of the button is clicked');
//   });
// });

// console.log(buttons);

// cool.addEventListener('click', () => {
//   console.log('me also');
// });

// butts.addEventListener('click', function () {
//   console.log('got clicked');
// });

function buyButton(e) {
  console.log(e.target.textContent);
  console.log(e.target.dataset);
  console.log(e.target.dataset.price);

  e.target.textContent = `clicked ${e.target.textContent}`;
  console.log(e.currentTarget);
  // e.stopPropagation();
}

const dataset = document.querySelector('.dataset');

console.log(dataset);

const buttons = document.querySelectorAll('button.buy');
buttons.forEach((button) => {
  button.addEventListener('click', buyButton);
});
console.log(buttons);

window.addEventListener(
  'click',
  (event) => {
    console.log('windows is clicked');
    event.stopPropagation();
  },
  { capture: true }
);

const photo = document.querySelector('.photo');

photo.addEventListener('mouseenter', function (e) {
  console.log(this);
});
