
export class Navbar extends HTMLElement {
  renderNavbar() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="logo-container">
          <img class="keyboard-image" src="../../assets/images/keyboard-image.png" />
          <a class="logo-text" href="../../index.html">EasyKeys</a>
        </div>

        <div class="navbar-options-menu-desktop">
          <a class="navbar-option" href="../../index.html">Home</a>
          <a class="navbar-option" href="../../src/KeyboardsPage/KeyboardsPage.html">Keyboards</a>
          <a class="navbar-option" href="../../src/AboutPage/AboutPage.html">About</a>
        </div>

        <div class="navbar-buttons-container">
          <div class="burger-menu-container">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
          </div>

          <a class="cart-container" href="../../src/CartPage/CartPage.html">
            <img class="cart-image" src="../../assets/images/icon-cart.png" />
            <div class="cart-quantity-container">
              <span class="cart-quantity">2</span>
            </div>
          </a>
        </div>
      </nav>`;

    this.querySelector('.burger-menu-container').addEventListener('click', () => {
      this.renderOpenNavbar();
    });
  }

  renderOpenNavbar() {
    this.innerHTML = `
      <nav class="opened-navbar-container">
        <nav class="opened-navbar">
          <div class="logo-container">
            <img class="keyboard-image" src="../../assets/images/keyboard-image.png" />
            <a class="logo-text" href="../../index.html">EasyKeys</a>
          </div>

          <div class="close-menu-container">
            <div class="close-button">
              &#10005;
            </div>
          </div>
        </nav>

        <div class="navbar-options-menu">
          <a class="navbar-option" href="../../index.html">Home</a>
          <a class="navbar-option" href="../../src/KeyboardsPage/KeyboardsPage.html">Keyboards</a>
          <a class="navbar-option" href="../../src/AboutPage/AboutPage.html">About</a>
        </div>
      </nav>`;

    this.querySelector('.close-menu-container').addEventListener('click', () => {
      this.renderNavbar();
    });
  }

  connectedCallback() {
    this.renderNavbar();
  }
}

customElements.define("ek-navbar", Navbar);
