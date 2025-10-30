
export class EditProductCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const imageSrc = this.getAttribute('imageSrc');
    const title = this.getAttribute('title');
    const category = this.getAttribute('category');
    const price = this.getAttribute('price');

    this.innerHTML = `
      <div class="edit-product-card-component">
        <div class="edit-product-component-image-container">
          <img class="edit-product-component-image" src=${imageSrc} />
        </div>

        <div class="edit-product-component-content">
          <span class="edit-product-title">${title}</span>
          <span class="edit-product-category">Category: ${category}</span>
          <span class="price-text">${price}</span>
        </div>

        <div class="pencil-icon-container">
          <div class="pencil-icon-wrapper">
            <img class="pencil-icon" src="../../assets/images/pencil-icon.png" />
          </div>
        </div>
      </div>

      <style>
        .edit-product-card-component {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          height: 100px;
          background-color: #171B26;
          border-radius: 4px;
          padding: 5px;

          .edit-product-component-image-container {
            width: 100px;
            height: 100%;

            .edit-product-component-image {
              width: 95%;
              height: 95%;
              border-radius: 4px;
            }
          }

          .edit-product-component-content {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            width: 60%;
            height: 95%;
            padding: 5px;

            .edit-product-title {
              color: #FFF;
              font-size: 16px;
              font-weight: 600;
            }
            .edit-product-category {
              font-size: 15px;
              color: #A6A6A6;
            }
            .price-text {
              color: #FFF;
              font-size: 17px;
              font-weight: 600;
            }
          }

          .pencil-icon-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 10%;
            height: 100%;

            .pencil-icon-wrapper {
              width: 100%;
              height: 35%;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #101318;
              border-radius: 5px;
              cursor: pointer;

              .pencil-icon {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      </style>
    `;
  }
}

customElements.define('ek-edit-product-card', EditProductCard);
