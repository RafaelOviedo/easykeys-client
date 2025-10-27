import { KeyboardsProvider } from './src/providers/keyboards.provider.js';
import { useSpinner } from './src/composables/useSpinner.js';

const { setIsLoading, removeIsLoading } = useSpinner();

const keyboardsProvider = KeyboardsProvider.getInstance();

let keyboards;

try {
  setIsLoading('.product-cards-container')
  keyboards = await keyboardsProvider.getKeyboards();
}
catch (error) {
  throw new Error(error);
}
finally {
  removeIsLoading()
}

const keyboardsContainer = document.querySelector('.product-cards-container');

keyboards.records
  .filter((element) => element.fields.rating === 5)
  .forEach((keyboard) => {
    const keyboardElement = document.createElement('ek-product-card');
    keyboardElement.setAttribute('imageSrc', keyboard.fields.imageSrc);
    keyboardElement.setAttribute('title', keyboard.fields.title);
    keyboardElement.setAttribute('description', keyboard.fields.description);
    keyboardElement.setAttribute('price', keyboard.fields.price);
    keyboardElement.setAttribute('rating', keyboard.fields.rating);

    keyboardsContainer.appendChild(keyboardElement);

    const imageContainer = keyboardElement.children[0].children[0];

    imageContainer.addEventListener('click', () => {
      window.location.href = `./src/ProductDetails/ProductDetails.html?id=${keyboard.id}`;
    });
  });


