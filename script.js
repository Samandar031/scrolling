'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

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

// let btnScroll = document.querySelector('.btn--scroll-to');
// let sectionScroll = document.querySelector('#section--1');

// btnScroll.addEventListener('click', function (e) {
//   // viewportga nisbatan barcha propertiylarni olish
//   const scroll = sectionScroll.getBoundingClientRect();
//   console.log(scroll);
//   console.log(e.target);

//   console.log(
//     `websitaga x/y fa nisbatan oladi`,
//     window.pageXOffset,
//     window.pageYOffset
//   );

// viewportni vidth bilan height ni oladi
// scroll qilingan qism (tapada qolib ketgan qismi)
// console.log(
//   `x/y viewportga nisbatan:`,
//   document.documentElement.clientWidth,
//   document.documentElement.clientHeight
// );

// window.scrollTo(scroll.left, scroll.top + window.pageYOffset);
// window.scrollTo({
//   left: scroll.left,
//   top: scroll.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//   sectionScroll.scrollIntoView({ behavior: 'smooth' });
// });

// let operation = document.querySelector('.operations__tab--2');
// let footer = document.querySelector('.footer');

// operation.addEventListener('click', function () {
//   const ali = footer.getBoundingClientRect();

//   // window.scrollTo(ali.left, ali.bottom + window.pageYOffset); 1-usul
//   document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
//   2 - usul;
// });

// operation.addEventListener('mouseenter', function () {
//   operation.style.backgroundColor = 'red';
// });

// operation.removeEventListener('mouseenter', function () {
//   operation.style.backgroundColor = 'red';
// });

// let func = function () {
//   operation.style.backgroundColor = 'red';
//   setTimeout(() => {
//     operation.removeEventListener('mouseenter', function () {
//       operation.style.backgroundColor = 'red';
//     });
//   }, 2000);
// };
// let link = document.querySelector('.nav__link');

// let rgb = function (max, min) {
//   let r = Math.trunc(Math.random() * (max - min) + min);
//   let g = Math.trunc(Math.random() * (max - min) + min);
//   let b = Math.trunc(Math.random() * (max - min) + min);
//   return [r, g, b];
// };

// link.addEventListener('click', e => {
//   e.preventDefault();
//   let a = rgb(0, 255);
//   link.style.backgroundColor = `rgb(${a[0]}, ${a[1]},${a[2]})`;
// });

// let link1 = document.querySelector('.nav__links');
// link1.addEventListener('click', e => {
//   e.preventDefault();
//   let a = rgb(0, 255);
//   link1.style.backgroundColor = `rgb(${a[0]}, ${a[1]},${a[2]})`;
// });

// let link2 = document.querySelector('body');

// link2.addEventListener('click', e => {
//   e.preventDefault();
//   let a = rgb(0, 255);
//   link2.style.backgroundColor = `rgb(${a[0]}, ${a[1]},${a[2]})`;
// });

// birinchi usul xato usul

// let link = document.querySelectorAll('.link__link');
// link.forEach(el => {
//   el.addEventListener("click", function(e){
//     e.preventDefault()
//     const href = this.getAttribute("href")
//     if(!el.classList.contains("nav__link--btn"){
//       document.querySelector(href).scrollIntoView({behavior: "smooth"})
//     });
//   });
// });

// let links = document.querySelectorAll('.nav__links');

// links.addEventListener('click', function (el) {
//   el.preventDefault();

//   if (el.target.classList.contains('nav__link')) {
//     const href = el.target.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// Tugri usul
// let links = document.querySelector('.nav__links');

// links.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__link')) {
//     const href = e.target.getAttribute('href');
//     console.log(href);
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// dom traversing

// let h1H = document.querySelector('h1');
// console.log(h1H.children);
// console.log(h1H.childNodes);

// let h1 = document.querySelector('h1');
// console.log(h1H.children);
// console.log(h1H.childNodes);

// oop

// const Samandar = function (name, age) {
//   this.name = name;
//   this.age = age;
//   // this.birth = function (year) {
//   //   console.log(2022 - year);
//   // };
// };

// let umid = new Samandar('Umid', 21);
// console.log(umid);
// let mamur = new Samandar('Mamur', 20);
// console.log(mamur);

// Samandar.prototype.birth = function (year) {
//   console.log(2022 - year);
// };

// umid.birth(1996);
// mamur.birth(2002);

// let begzod = new Samandar('begzod', 22);
// console.log(begzod);
// begzod.birth(2000);

// let azizullo = new Samandar('Azizullo', 18);
// console.log(azizullo);
// azizullo.birth(2004);

// let jafar = new Samandar('Jafar', 21);
// console.log(jafar);
// jafar.birth(2001);

// let jonibek = new Samandar('Jonibek', 20);
// console.log(jonibek);
// jonibek.birth(2002);

// let fazliddin = new Samandar('Fazliddin', 21);
// console.log(fazliddin);
// fazliddin.birth(2001);

// let sardor = new Samandar('Sardor', 20);
// console.log(sardor);

// console.log(sardor.hasOwnProperty('birth'));
// //o'ziniki emas
// console.log(sardor.hasOwnProperty('name'));
// //o'ziniki
// console.log(umid.__proto__);
// console.log(Samandar.prototype);
// let alex = 2230;
// console.log(Samandar.prototype.isPrototypeOf(alex));

// let samandar = new Samandar('Samandar', 21);
// console.log(Samandar);

// let Car = function (nomi, narxi, rangi) {
//   this.nomi = nomi;
//   this.narxi = narxi;
//   this.rang = rangi;
// };

// let jiguli = new Car('Jiguli', ' 1ming $', 'qizil');

// Car.prototype.joyi = function (location) {
//   console.log(location);
// };

// let damas = new Car('Damas', '85min $', 'oq');
// console.log(damas);
// damas.joyi('Fargana');

// let bugati = new Car('Bugati', '40 mln $', "ko'k qora");
// console.log(bugati);
// bugati.joyi('Italiya');

// class Student {}
// class decloration

// const Student = class {};
//class expression

// class Car {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   barow(ism) {
//     return 2022 - this.age;
//   }
// }

// Car.prototype.facultet = function () {
//   return 'mersedes';
// };
// let umid = new Car('Umid', 26);
// console.log(umid);

// class Oqish {
//   constructor(kurs, oquvchilar) {
//     this.name = kurs;
//     this.oquvchilar = oquvchilar;
//   }

//   sum(year) {
//     return 2022 - year;
//   }
// }

// let nihol = new Oqish('birinchi kurs', '85 ta');
// console.log(nihol);

// nihol.sum(2001);

class Bank {
  #pin;
  constructor(egasi, age, pin) {
    this.egasi = egasi;
    this.age = age;
    this.#pin = pin;

    this.til = navigator.language;
    this.utkazmalar = [];
  }

  get utkazmalarniOlish() {
    return this.utkazmalar.push();
  }

  set utkazmalarOlishni(val) {
    this.utkazmalar.push(val);
  }

  set utkazmalarQoshish(val) {
    this.utkazmalar.push(-val);
  }

  get hammasi() {
    this.utkazmalar.filter();
  }

  // set #pinniOzgartirish(val) {
  //   this.#pin = val;
  // }

  // set uzgar(val) {
  //   this.#pinniOzgartirish = val;
  // }

  // get pinOlish() {
  //   return this.#pin;
  // }
}

let ism = 'samandar';
let yosh = 21;
let parol = 1111;

let samandar = new Bank(`${ism}`, `${yosh}`, `${parol}`);
console.log(samandar);

samandar.utkazmalarOlishni = 400;
samandar.utkazmalarQoshish = 400;
samandar.utkazmalarOlishni = 4400;
samandar.utkazmalarQoshish = 300;

samandar.uzgar = 1234;
console.log(samandar);
