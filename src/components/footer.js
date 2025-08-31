
export class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <div class="logo-container">
          <img class="keyboard-image" src="../../assets/images/keyboard-image.png" />
          <span class="footer-logo-text">EasyKeys</span>
        </div>

        <p class="footer-description">
          Crafting the finest mechanical keyboards for enthusiasts and professionals. Experience the perfect blend of form and function.
        </p>

        <div class="footer-products-container">
          <span class="products-text">Products</span>
          <span class="category-text">Gaming keyboards</span>
          <span class="category-text">Compact Layouts</span>
          <span class="category-text">Premium Collection</span>
          <span class="category-text">Wireless Options</span>
        </div>

        <div class="footer-connect-container">
          <span class="products-text">Connect</span>
          <span class="category-text">A - B - C</span>
          <span class="category-text">Join our community of keyboard enthusiasts</span>
        </div>

        <div class="divider"></div>

        <span class="reserved-rights-text">© 2024 EasyKeys. All rights reserved. Built with passion for mechanical keyboards.</span>
      </footer>`;
  }
}

customElements.define('ek-footer', Footer);
