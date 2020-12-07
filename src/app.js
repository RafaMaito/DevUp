import Search from './search';

class App {
  constructor() {
    this.inputEmail = document.getElementById('inputEmail');
    this.inputPassword = document.getElementById('inputPassword');
    this.buttonEnter = document.getElementById('buttonEnter');
    this.logoutButton = document.getElementById('logoutButton');
    this.remmemberCheck = document.getElementById('remmemberCheck');
    this.logged = localStorage.getItem('logged') || false;
    this.registerEvents();
    this.isLogged();
  }

  registerEvents() {
    this.buttonEnter.onclick = () => this.enterInChannel();
    this.logoutButton.onclick = () => this.logout();
  }

  enterInChannel() {
    if (
      (this.inputEmail.value === 'rafael@devup.com' ||
        this.inputEmail.value === 'suelen@devup.com') &&
      this.inputPassword.value === '1234'
    ) {
      if (this.remmemberCheck.checked) {
        localStorage.setItem('logged', true);
      }
      document.getElementById('start').classList.add('d-none');
    } else {
      alert('Senha/Login incorreto');
    }
  }

  isLogged() {
    if (this.logged == 'true') {
      document.getElementById('start').classList.add('d-none');
    } else {
      document.getElementById('start').classList.remove('d-none');
    }
  }

  logout() {
    localStorage.setItem('logged', false);
  }
}

new App();
