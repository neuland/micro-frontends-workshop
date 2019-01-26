/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement, window */
(function fragments() {
  class BluePromotion extends HTMLElement {
    static get observedAttributes() {
      return ['prename'];
    }
    connectedCallback() {
      const prename = this.getAttribute('prename');
      this.log('connected', prename);
      this.render();
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      this.log('attributeChanged', attr, newValue);
      this.render();
    }
    render() {
      const prename = this.getAttribute('prename');
      this.innerHTML = `
      <div class="blue_fragment">
        <h2>Hello ${prename || 'You'}, Join Team Blue!11!!</h2>
      </div>
      
      `;
    }
    disconnectedCallback() {
      const prename = this.getAttribute('prename');
      this.log('disconnected', prename);
    }
    log(...args) {
      console.log('🖼️ blue-promotion', ...args);
    }
  }
  window.customElements.define('blue-promotion', BluePromotion);
}());
