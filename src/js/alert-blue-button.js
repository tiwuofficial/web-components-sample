class AlertBlueButton extends HTMLElement {
  constructor() {
    super();

    const text = this.getAttribute('text');

    this.attachShadow({mode: 'open'}).innerHTML = `
      <blue-button text="${text}"></blue-button>
    `;
    this.shadowRoot.querySelector('blue-button').addEventListener('click', () => {
      alert(text);
    });
  }
}
customElements.define('alert-blue-button', AlertBlueButton);
