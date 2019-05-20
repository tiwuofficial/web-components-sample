class LinkBlueButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        a {
          text-decoration: none;
        } 
      </style>
      <a href="${this.getAttribute('href')}">
        <blue-button text="${this.getAttribute('text')}"></blue-button>
      </a>
    `;
  }
}
customElements.define('link-blue-button', LinkBlueButton);
