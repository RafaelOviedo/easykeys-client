import './components/navbar.js';
import './components/productCard.js';
import './components/footer.js';
import './components/cartProductCard.js';
import './components/starsRating.js';

import { CartProvider } from './providers/cart.provider.js';

const cartProvider = CartProvider.getInstance();
const cartProducts = await cartProvider.getCartProducts();

localStorage.setItem('cart-quantity', cartProducts.records.length);

