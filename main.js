// змінні, з якими буду працювати
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// на якому слайді знаходжуся
let index = 0;

// ф-ція, яка знімає clssa='active' з усіх слайдів і робить активний слайд 
const activeSlide = n => {
    console.log(n);
    // проходжу по псевдомасиву slides і беру з нього окремі слайди slide
    for (slide of slides) {
        // у кожного slide видаляю клас active
        slide.classList.remove('active');
    }
    // для текущого slide дода. клас active
    slides[n].classList.add('active');
};

// функція для перемикання на наступний слайд
let nextSlide = () => {
    // перевірка на останній слайд; 'якщо слайд останній, то наступний слайд буде з індексом 0'
    if (index == slides.length - 1) {
        index = 0;
        // оновити слайд
        activeSlide(index);
    } else {
        // якщо не останній, то index збільшую на 1
        index++;
        // оновити слайд
        activeSlide(index);
    }
};

// додамо подію на кнопку "next"
next.addEventListener('click', nextSlide);