class AlertOrConsoleBlueButton extends HTMLElement {
  constructor() {
    super();

    const text = this.getAttribute('text');

    this.attachShadow({mode: 'open'}).innerHTML = `
      <blue-button text="${text}"></blue-button>
    `;
    this.shadowRoot.querySelector('blue-button').addEventListener('click', () => {
      switch (this.getAttribute('type')) {
        case 'alert':
          alert(text);
          break;
        case 'console':
          console.log(text);
          break;
        default:
          alert(text);
          break;
      }

    });
  }
}
customElements.define('alert-or-console-blue-button', AlertOrConsoleBlueButton);
