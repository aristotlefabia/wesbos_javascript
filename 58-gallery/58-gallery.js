// JavaScript source code
const gallery1 = document.querySelector('.gallery1');
const gallery2 = document.querySelector('.gallery2');

const g1 = Gallery(gallery1);
const g2 = Gallery(gallery2);

console.log('(',g1,')');
console.log('(',g2,')');

function Gallery(gallery) {
    const images = gallery.querySelectorAll('img');
    images.forEach(image =>
        image.addEventListener('click', e => showImage(e.currentTarget))
    );

    //keyevent
    images.forEach(image =>
        image.addEventListener('keyup', e => {
            if (e.key === 'Enter') showImage(e.currentTarget);
        })
    );

    function handleKeyUp(e) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') showImage(currentImage.nextElementSibling);
        if (e.key === 'ArrowLeft') showImage(currentImage.previousElementSibling);
    }


    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling);
    }
    function showPreviousImage() {
        showImage(currentImage.previousElementSibling);
    }
    function closeModal() {
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleKeyUp);
        modal.removeEventListener('click', handleClickOutside);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPreviousImage);
    }
    function openModal() {
        //if (modal.matches('.open')) {
        //    console.info('modal already open');
        //    return;
        //}
        // listen for keys
        modal.classList.add('open');
        window.addEventListener('keyup', handleKeyUp);
        modal.addEventListener('click', handleClickOutside);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPreviousImage);
    }

    function showImage(el) {
        if (!el) {
            console.info('No Image To Show');
            return;
        }
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }
    const modal = document.querySelector('.modal');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentImage
    console.log(images);
}