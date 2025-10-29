import { CartProvider } from '../providers/cart.provider.js';

import { useSpinner } from '../composables/useSpinner.js';

import { createCartProductCard } from './helpers.js';
import { formatNumber } from '../utils/formatNumber.js';

const TAX_VALUE = 18.40;

const cartProvider = CartProvider.getInstance();

const { setIsLoading, removeIsLoading } = useSpinner();

const cartProductsContainer = document.querySelector('.cart-products-container')

const cartItemsQuantity = document.querySelector('.items-in-cart');

let cartProducts;

function renderCartProducts() {
  cartProductsContainer.innerHTML = '';

  cartProducts.records.forEach(product => {
    const cartProductCard = createCartProductCard(cartProductsContainer, product, 'ek-cart-product-card');
    const deleteIcon = cartProductCard.querySelector('.delete-icon');

    deleteIcon.addEventListener('click', () => deleteProduct(product));
  });
}

async function getCartProducts() {
  try {
    setIsLoading('.cart-products-container')
    document.querySelector('.empty-cart-container').classList.add('hidden')

    cartProducts = await cartProvider.getCartProducts();

    setSummaryTotal();
    localStorage.setItem('cart-quantity', cartProducts.records.length);

    if (cartProducts.records.length) {
      document.querySelector('.summary-container').classList.add('show-summary-container')
      document.querySelector('.empty-cart-container').classList.add('hidden')
    } else {
      document.querySelector('.empty-cart-container').classList.remove('hidden')
      document.querySelector('.summary-container').classList.remove('show-summary-container')
    }

    renderCartProducts();
  }
  catch (error) {
    throw new Error(error);
  }
  finally {
    removeIsLoading();
    cartItemsQuantity.textContent = `${cartProducts.records.length ?? 0} items in your cart`
  }
}

async function deleteProduct(product) {
  setIsLoading('.cart-products-container')

  await cartProvider.deleteProductFromCart(product.id);
  await getCartProducts();

  removeFromLocalStorage();

  removeIsLoading();
}

function removeFromLocalStorage() {
  const cartQuantity = JSON.parse(document.querySelector('.cart-quantity').textContent);
  const updatedCartQuantity = document.querySelector('.cart-quantity').textContent = cartQuantity - 1;
  localStorage.setItem('cart-quantity', updatedCartQuantity);
}

function setSummaryTotal() {
  const totalSummaryOrder = cartProducts.records.reduce((acc, el, _arr) => acc + el.fields.price, 0);
  document.querySelector('.subtotal-value-text').textContent = formatNumber(totalSummaryOrder);
  document.querySelector('.total-value-text').textContent = formatNumber(totalSummaryOrder + TAX_VALUE);
}

await getCartProducts();

