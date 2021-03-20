import { html, css, LitElement } from 'lit-element';

export class ComponetFilter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--componet-filter-text-color, #000);
      }

      button{
          background-color : #87dfdb;
          width:80px;
          height: 40px;
          color : blue;
      }
      h2{
        color:blue;
        
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
