class BlueButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          border: 2px solid #007bff;
          color: #007bff;
          display: inline-block;
          text-align: center;
          text-decoration: none;
          font-size: 18px;
          line-height: 36px;
          border-radius: 5px;
          cursor: pointer;
          padding: 0 15px;
        }
      </style>
      ${this.getAttribute('text')}
    `;
  }
}
customElements.define('blue-button', BlueButton);
