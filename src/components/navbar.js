
export class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="logo-container">
          <img class="keyboard-image" src="../../assets/images/keyboard-image.png" />
          <span class="logo-text">EasyKeys</span>
        </div>

        <div class="navbar-buttons-container">
          <div class="burger-menu-container">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
          </div>

          <a class="cart-container" href="../CartPage/CartPage.html">
            <img class="cart-image" src="../../assets/images/icon-cart.png" />
          </a>
        </div>
      </nav>`;
  }
}

customElements.define("ek-navbar", Navbar);
