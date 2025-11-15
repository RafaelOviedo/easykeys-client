
export class Toast extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .toast-container {
          width: 100%;
          position: fixed;
          bottom: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
        }

        .toast {
          width: fit-content;
          background-color: #32DE2F;
          color: #FFF;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .toast.show {
          opacity: 1;
          transform: translateY(0);
        }

        .toast.success { background-color: #22C55E; }
        .toast.error { background-color: #f44336; }
        .toast.info { background-color: #2196f3; }

        .toast-text {
          font-weight: 600;
        }
      </style>

      <div class="toast-container"></div>
    `;
  }
}

customElements.define('ek-toast', Toast);
