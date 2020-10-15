const pic = document.querySelector('.nice');
console.log(pic);

pic.classList.add('open');
pic.classList.remove('cool');

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup';
