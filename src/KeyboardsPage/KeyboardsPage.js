import { KeyboardsProvider } from '../providers/keyboards.provider.js';
import { CartProvider } from "../providers/cart.provider.js";
import { useSpinner } from '../composables/useSpinner.js';
import { createProductCard } from './helpers.js';

const keyboardsProvider = KeyboardsProvider.getInstance();
const cartProvider = CartProvider.getInstance();

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
  const productCard = createProductCard(keyboardsContainer, keyboard, 'ek-product-card')

  const imageContainer = productCard.querySelector('.product-component-image-container');
  const addToCartButton = productCard.querySelector('.add-to-cart-button');

  imageContainer.addEventListener('click', () => {
    window.location.href = `../ProductDetails/ProductDetails.html?id=${keyboard.id}`;
  });

  addToCartButton.addEventListener('click', async () => {
    await cartProvider.addProductToCart({
      imageSrc: keyboard.fields.imageSrc,
      title: keyboard.fields.title,
      description: keyboard.fields.description,
      price: keyboard.fields.price,
      rating: keyboard.fields.rating,
      category: keyboard.fields.category,
      quantity: 1
    })
  })
});


