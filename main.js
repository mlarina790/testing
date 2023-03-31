/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Valid.js
class Valid {
  constructor(str) {
    this.str = str;
  }
  cutStr() {
    const end = this.str.length - 1;
    const str = this.str.substring(0, end);
    return str;
  }
  getArr(str) {
    this.name = 'getArr';
    const arr = str.split('');
    return arr;
  }
  reverseStr(arr) {
    this.name = 'reverseStr';
    return arr.reverse();
  }
  separat(arr) {
    this.name = 'separat';
    const oddArr = [];
    const evenArr = [];
    let item;
    for (let i = 0; i < arr.length; i += 1) {
      if (i % 2 === 0) {
        item = arr[i];
        oddArr.push(item);
      } else {
        item = arr[i];
        evenArr.push(item);
      }
    }
    const obj = {
      oddArr,
      evenArr
    };
    return obj;
  }
  check(arr) {
    this.name = 'check';
    const oddItemArr = [];
    arr.forEach(el => {
      let item = el * 2;
      if (item > 9) {
        item -= 9;
        oddItemArr.push(item);
      } else {
        oddItemArr.push(item);
      }
    });
    return oddItemArr;
  }
  getSumArr(arr) {
    this.name = 'getSumArr';
    let sum = 0;
    arr.forEach(el => {
      const item = Number(el);
      sum += item;
    });
    return sum;
  }
  checkValid(sum) {
    const arrOrigin = this.getArr(this.str);
    const check = Number(arrOrigin[arrOrigin.length - 1]);
    if ((sum + check) % 10 === 0) {
      return true;
    }
    return false;
  }
  start() {
    const cutStr = this.cutStr();
    const arrStr = this.getArr(cutStr);
    const revArr = this.reverseStr(arrStr);
    const {
      oddArr,
      evenArr
    } = this.separat(revArr);
    const oddItemArr = this.check(oddArr);
    const sum = this.getSumArr(oddItemArr) + this.getSumArr(evenArr);
    const result = this.checkValid(sum);
    return result;
  }
}
;// CONCATENATED MODULE: ./src/js/Input.js

class Input {
  constructor(idInput, idButton) {
    this.input = document.getElementById(`${idInput}`);
    this.button = document.getElementById(`${idButton}`);
    this.cards = Array.from(document.querySelectorAll('.card'));
  }
  listenerInp() {
    this.input.addEventListener('input', () => {
      this.inpHandler();
      this.input.className = 'input-valid';
    });
  }
  inpHandler() {
    const {
      value
    } = this.input;
    const ident = this.identify(value);
    if (ident) {
      this.changeClass(ident);
    }
  }
  identify(code) {
    this.name = 'identify';
    if (code === '2') {
      return 'mir';
    }
    if (code === '31' || code === '35') {
      return 'jsb';
    }
    if (code === '34' || code === '37') {
      return 'amex';
    }
    if (code === '4') {
      return 'visa';
    }
    if (code === '50' || code === '56' || code === '57' || code === '58' || code === '63' || code === '67') {
      return 'maestro';
    }
    if (code === '51' || code === '52' || code === '53' || code === '54' || code === '55') {
      return 'master';
    }
    if (code === '60') {
      return 'discover';
    }
    return false;
  }
  changeClass(nameClass) {
    this.cards.forEach(item => {
      if (item.classList.contains(`${nameClass}`)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  listenerBtn() {
    this.button.addEventListener('click', event => {
      event.preventDefault();
      this.btnHandler();
    });
  }
  btnHandler() {
    const {
      value
    } = this.input;
    const valid = new Valid(value);
    const check = valid.start();
    if (check) {
      this.input.classList.remove('invalid');
      this.input.classList.add('valid');
    } else {
      this.input.classList.remove('valid');
      this.input.classList.add('invalid');
    }
  }
  start() {
    this.listenerInp();
    this.listenerBtn();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const inp = new Input('input', 'button');
inp.start();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;