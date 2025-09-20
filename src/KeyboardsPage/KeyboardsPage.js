import { getKeyboards } from '../api/keyboards.js';

const keyboards = await getKeyboards();

const keyboardsContainer = document.querySelector('.product-cards-container');

keyboards.forEach((keyboard) => {
  const keyboardElement = document.createElement('ek-product-card');
  keyboardElement.setAttribute('imageSrc', keyboard.imageSrc);
  keyboardElement.setAttribute('title', keyboard.title);
  keyboardElement.setAttribute('description', keyboard.description);
  keyboardElement.setAttribute('price', keyboard.price);

  keyboardsContainer.appendChild(keyboardElement);

  const imageContainer = keyboardElement.children[0].children[0];

  imageContainer.addEventListener('click', () => {
    window.location.href = `../ProductDetails/ProductDetails.html?id=${keyboard.id}`;
  });
});


