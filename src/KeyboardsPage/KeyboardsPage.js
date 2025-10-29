import { KeyboardsProvider } from '../providers/keyboards.provider.js';
import { CartProvider } from "../providers/cart.provider.js";
import { useSpinner } from '../composables/useSpinner.js';
import { createProductCard } from './helpers.js';

const keyboardsProvider = KeyboardsProvider.getInstance();
const cartProvider = CartProvider.getInstance();

const { setIsLoading, removeIsLoading } = useSpinner();

const keyboardsContainer = document.querySelector('.product-cards-container');
const resultsTitle = document.querySelector('.results-title');

let keyboards;

async function renderKeyboards() {
  keyboards.records.forEach((keyboard) => {
    const productCard = createProductCard(keyboardsContainer, keyboard, 'ek-product-card')

    const imageContainer = productCard.querySelector('.product-component-image-container');
    const addToCartButton = productCard.querySelector('.add-to-cart-button');

    imageContainer.addEventListener('click', () => {
      window.location.href = `../ProductDetails/ProductDetails.html?id=${keyboard.id}`;
    });

    addToCartButton.addEventListener('click', () => addToCart(keyboard))
  });
}

async function getKeyboards() {
  try {
    setIsLoading('.product-cards-container');
    keyboards = await keyboardsProvider.getKeyboards();

    renderKeyboards();
  }
  catch (error) {
    throw new Error(error);
  }
  finally {
    removeIsLoading();
    resultsTitle.textContent = `Showing ${keyboards.records.length ?? 0} results`
  }
}

async function addToCart(keyboard) {
  await cartProvider.addProductToCart({
    imageSrc: keyboard.fields.imageSrc,
    title: keyboard.fields.title,
    description: keyboard.fields.description,
    price: keyboard.fields.price,
    rating: keyboard.fields.rating,
    category: keyboard.fields.category,
    quantity: 1
  })

  addToLocalStorage();
}

function addToLocalStorage() {
  const cartQuantity = JSON.parse(document.querySelector('.cart-quantity').textContent);
  const updatedCartQuantity = document.querySelector('.cart-quantity').textContent = cartQuantity + 1;
  localStorage.setItem('cart-quantity', updatedCartQuantity);
}

await getKeyboards();

