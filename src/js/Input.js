import Valid from './Valid';

export default class Input {
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
    const { value } = this.input;
    const ident = this.identify(value);
    if (ident) {
      this.changeClass(ident);
    }
  }

  identify(code) {
    this.name = 'identify';
    if (code === '2') {
      return 'mir';
    } if (code === '31' || code === '35') {
      return 'jsb';
    } if (code === '34' || code === '37') {
      return 'amex';
    } if (code === '4') {
      return 'visa';
    } if (code === '50' || code === '56' || code === '57' || code === '58' || code === '63' || code === '67') {
      return 'maestro';
    } if (code === '51' || code === '52' || code === '53' || code === '54' || code === '55') {
      return 'master';
    } if (code === '60') {
      return 'discover';
    }
    return false;
  }

  changeClass(nameClass) {
    this.cards.forEach((item) => {
      if (item.classList.contains(`${nameClass}`)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  listenerBtn() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.btnHandler();
    });
  }

  btnHandler() {
    const { value } = this.input;
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
