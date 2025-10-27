import { KeyboardsProvider } from '../providers/keyboards.provider.js';
import { useSpinner } from '../composables/useSpinner.js';

const keyboardsProvider = KeyboardsProvider.getInstance();

const { setIsLoading, removeIsLoading } = useSpinner();

let keyboards;

try {
  setIsLoading('.product-cards-container');
  keyboards = await keyboardsProvider.getKeyboards();
}
catch (error) {
  throw new Error(error);
}
finally {
  removeIsLoading();
}

const keyboardsContainer = document.querySelector('.product-cards-container');

const resultsTitle = document.querySelector('.results-title');
resultsTitle.textContent = `Showing ${keyboards.records.length} results`

keyboards.records.forEach((keyboard) => {
  const keyboardElement = document.createElement('ek-product-card');
  keyboardElement.setAttribute('imageSrc', keyboard.fields.imageSrc);
  keyboardElement.setAttribute('title', keyboard.fields.title);
  keyboardElement.setAttribute('description', keyboard.fields.description);
  keyboardElement.setAttribute('price', keyboard.fields.price);
  keyboardElement.setAttribute('rating', keyboard.fields.rating);

  keyboardsContainer.appendChild(keyboardElement);

  const imageContainer = keyboardElement.children[0].children[0];

  imageContainer.addEventListener('click', () => {
    window.location.href = `../ProductDetails/ProductDetails.html?id=${keyboard.id}`;
  });
});


