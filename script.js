'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selectings
// const headerTitle = document.querySelector('.header__title');
// const html = document.documentElement;

// const body = document.body;
// const bodySelect = document.querySelector('body');
// const head = document.head;
// console.log(bodySelect);

// All Selectings

// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// // Get element by ID
// const section1 = document.getElementById('section--1');
// console.log(section1);

// get element by tagName //HTML Collections
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.querySelector('div').classList);

// console.log(typeof allButtons);
// for (let [el, val] of Object.entries(allButtons)) {
//   console.log(`${el} : ${val}`);
// }

// const btn1 = document.getElementsByClassName('header');
// console.log(btn1[0]);

// Creating and inserting elemets

// const box = document.createElement('div');
// const header1 = document.querySelector('header');
// box.classList.add('cookie-message');
// box.classList.remove('cookie-message');
// box.classList.toggle('cookie-message');
// box.classList.contains('cookie-message');

// box.textContent = 'Bu bizning xafsizligimizni taminlash uchun kerak.';

// box.innerHTML = `<p> Bu bizning xafsizligimizni taminlash uchun kerak. </p>
// <button class="btn btn--close-cookie"> Yopish</button>`;

// header1.prepend(box.cloneNode(false));
//  header1.prepend(box.cloneNode(true));

// header1.before(box);
// header1.after(box);

// Delete Elemets

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   document.querySelector('.cookie-message').remove();
// });

// // Styles
// document.querySelector('.btn--close-cookie').style.backgroundColor = 'white';
// document.querySelector('.btn--close-cookie').style.width = '50%';

// // CSS o'zgaruvchilarni qiymatlarinin uzgartirish
// document.documentElement.style.setProperty('--color-primary', 'orange');

// Atributelarni qiymatlarini olish (Standart)
// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// logo.classList.add('Salom');
// console.log(logo.className);
// console.log(logo.umid);

// console.log(logo.src);

// const nav = document.querySelector('.nav__links');

// console.log(nav.style.color); // HTML dan faqat oladi

// let balandlik = getComputedStyle(nav).height;

// nav.style.height = Number.parseFloat(balandlik) + 20 + 'px'; // Inline

// console.log(nav.style.height); // CSS file dan oladi

// console.log(logo.style.color);

// logo.alt = 'Umid';
// console.log(logo.alt);

// // Standart bulmagan atributelarni olib keladi
// console.log(logo.getAttribute('src'));

// // Bunday qilmaysiz
// logo.className = 'Umid';
// console.log(logo.className);

// // O'rniga bunday qilamiz
// logo.classList.add('umid');

let btnScroll = document.querySelector('.btn--scroll-to');
let sectionScroll = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (e) {
  // viewportga nisbatan barcha propertiylarni olish
  const scroll = sectionScroll.getBoundingClientRect();
  console.log(scroll);
  console.log(e.target);

  console.log(
    `websitaga x/y fa nisbatan oladi`,
    window.pageXOffset,
    window.pageYOffset
  );

  // viewportni vidth bilan height ni oladi
  // scroll qilingan qism (tapada qolib ketgan qismi)
  console.log(
    `x/y viewportga nisbatan:`,
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // window.scrollTo(scroll.left, scroll.top + window.pageYOffset);
  // window.scrollTo({
  //   left: scroll.left,
  //   top: scroll.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  sectionScroll.scrollIntoView({ behavior: 'smooth' });
});

let operation = document.querySelector('.operations__tab--2');
let footer = document.querySelector('.footer');

operation.addEventListener('click', function () {
  const ali = footer.getBoundingClientRect();

  // window.scrollTo(ali.left, ali.bottom + window.pageYOffset); 1-usul
  document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
  2 - usul;
});

operation.addEventListener('mouseenter', function () {
  operation.style.backgroundColor = 'red';
});

operation.removeEventListener('mouseenter', function () {
  operation.style.backgroundColor = 'red';
});

// let func = function () {
//   operation.style.backgroundColor = 'red';
//   setTimeout(() => {
//     operation.removeEventListener('mouseenter', function () {
//       operation.style.backgroundColor = 'red';
//     });
//   }, 2000);
// };
