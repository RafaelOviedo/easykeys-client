import { CartProvider } from '../providers/cart.provider.js';

import { useSpinner } from '../composables/useSpinner.js';
import { createCartProductCard } from './helpers.js';

const cartProvider = CartProvider.getInstance();

const { setIsLoading, removeIsLoading } = useSpinner();

let cartProducts;

try {
  setIsLoading('.cart-products-container')
  document.querySelector('.empty-cart-container').classList.add('hidden')

  cartProducts = await cartProvider.getCartProducts();

  if (cartProducts.records.length) {
    document.querySelector('.summary-container').classList.add('show-summary-container')
    document.querySelector('.empty-cart-container').classList.add('hidden')
  } else {
    document.querySelector('.empty-cart-container').classList.remove('hidden')
  }
}
catch (error) {
  throw new Error(error);
}
finally {
  removeIsLoading('.cart-products-container');
}

const cartProductsContainer = document.querySelector('.cart-products-container')

cartProducts.records.forEach(product => {
  const cartProductCard = createCartProductCard(cartProductsContainer, product, 'ek-cart-product-card');

  const deleteIcon = cartProductCard.querySelector('.delete-icon');

  deleteIcon.addEventListener('click', async () => {
    setIsLoading('.cart-products-container')
    await cartProvider.deleteProductFromCart(product.id);
    window.location.reload();
    removeIsLoading();
  })
});

