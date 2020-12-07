import ResponseCard from './card';
import App from './app';

class Community {
  constructor() {
    this.list = [];
    this.id = 1;
    this.inputTitle = document.getElementById('title');
    this.inputContent = document.getElementById('content');
    this.listHtml = document.getElementById('questionList');
    this.inputTechnologies = document.getElementById('inputTechnologies');
    this.btnSave = document.getElementById('btn-save');

    this.registerEvents();
    this.getLocalStorage();
  }

  registerEvents() {
    this.btnSave.onclick = () => this.addQuestion();
  }

  registrarBotoes() {
    document.querySelectorAll('.btn-destroy').forEach((item) => {
      item.onclick = (event) => this.deleteResponse(event);
    });
    document.querySelectorAll('.response-card').forEach((item) => {
      item.onclick = (event) => this.editResponse(event);
    });
  }

  addQuestion() {
    const responseCard = this.createQuestion();
    console.log(responseCard.titulo);
    if (
      responseCard.avatar !== '' &&
      responseCard.title !== '' &&
      responseCard.content !== ''
    ) {
      this.list.push(responseCard);
    } else {
      alert('Preencha todos os dados');
    }
    this.updateScreen();
    this.registrarBotoes();
  }

  createQuestion() {
    let avatar = '';
    const teste = this.inputTechnologies.value;

    switch (teste) {
      case '1':
        avatar = './img/js.png';
        break;
      case '2':
        avatar = './img/css.png';
        break;
      case '3':
        avatar = './img/html.png';
        break;
      case '4':
        avatar = './img/Nodejs.png';
        break;
      case '5':
        avatar = './img/react.png';
        break;
    }

    const cartaoNovo = new ResponseCard(
      this.id,
      this.inputTitle.value,
      this.inputContent.value,
      avatar,
      ' '
    );
    this.id++;
    return cartaoNovo;
  }
  deleteResponse(event) {
    const deletedResponse = event.path[4];
    const idDeleted = parseInt(deletedResponse.dataset.id);
    const newList = this.list.filter((item) => item.id !== idDeleted);
    this.list = newList;
    deletedResponse.remove();
    this.salvarLocalStorage();
  }

  editResponse(event) {
    const cardEdit = event.path[4];
    const idEditado = parseInt(cardEdit.dataset.id);
    const ResponseCard = this.list.find((item) => item.id === idEditado);
    const inputResponse = document.getElementsByClassName('inputResponse');
    const inputLinkResponse = document.getElementsByClassName(
      'inputLinkResponse'
    );

    ResponseCard.response += ` <hr/><p>${inputResponse[idEditado - 1].value}</p>
   <a  href="${inputLinkResponse[idEditado - 1].value}" target="_blank">${
      inputLinkResponse[idEditado - 1].value
    }</a> `;

    this.updateScreen();
  }

  updateScreen() {
    this.listHtml.innerHTML = '';
    this.list.forEach(
      (item) => (this.listHtml.innerHTML += item.makeResponseCard())
    );
    this.registrarBotoes();
    this.salvarLocalStorage();
  }

  salvarLocalStorage() {
    localStorage.setItem('responseCards', JSON.stringify(this.list));
  }

  getLocalStorage() {
    const listLocalStorage =
      JSON.parse(localStorage.getItem('responseCards')) || [];
    listLocalStorage.forEach((item) => {
      const responseCard = new ResponseCard(
        this.id,
        item.title,
        item.content,
        item.avatar,
        item.response
      );
      this.list.push(responseCard);
      this.id++;
    });

    this.updateScreen();
  }
}

new Community();
