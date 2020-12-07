class ResponseCard {
  constructor(id, title, content, avatar, response) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.response = response;
    this.avatar = avatar;
  }

  makeResponseCard() {
    const html = `<div class="col-12  mb-5" data-id="${this.id}">
      <div class="card d-flex flex-row">
      <div class="card-body text-dark">
              <img src="${this.avatar}" class="card-img-top" alt="...">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.content}</p>
             
              <div class="d-flex flex-column">
              <input
              class="form-control mr-sm-2 h-75 mt-2 inputResponse"
                type="text"
                placeholder="Responder"   
                />
                <input
                class="form-control mr-sm-2 h-75 mt-2 inputLinkResponse"
                type="text"
                placeholder="Link" 
                />
                <button type="button" class="btn btn-success response-card mt-2" >
                Responder
                </button>
                <button class="btn btn-danger btn-destroy mt-2" >Excluir</button>
                </div>
                </div>
                
                <div class="roll"><p>${this.response}</p>
                 </div>
                </div>
                </div>`;
    return html;
  }
}

export default ResponseCard;
