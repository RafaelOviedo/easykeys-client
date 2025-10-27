import { KeyboardsProvider } from '../providers/keyboards.provider.js';
import { useSpinner } from '../composables/useSpinner.js';

const { setIsLoading, removeIsLoading } = useSpinner();

const HttpStatusCode = {
  NOT_FOUND: 'NOT_FOUND',
}

const keyboardsProvider = KeyboardsProvider.getInstance();

async function renderProductDetails() {
  try {
    setIsLoading('.image-content-container');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const keyboard = await keyboardsProvider.getKeyboardById(id);

    if (keyboard.error === HttpStatusCode.NOT_FOUND) {
      throw new Error('This keyboard does not exist');
    }

    document.querySelector('.rating-container').innerHTML += `<ek-stars-rating value=${keyboard.fields.rating}></ek-stars-rating>`;
    document.querySelector('.product-details-title').textContent = keyboard.fields.title;
    document.querySelector('.product-details-description').textContent = keyboard.fields.description;
    document.querySelector('.product-details-price').textContent = keyboard.fields.price;
    document.querySelector('.points-text').textContent = `${keyboard.fields.rating} out of 5 stars`;
    document.querySelector('.product-details-image').src = keyboard.fields.imageSrc;
  }
  catch (error) {
    throw new Error(error);
  }
  finally {
    removeIsLoading();
  }
}

renderProductDetails();


