import { KeyboardsProvider } from '../providers/keyboards.provider.js';

import { useSpinner } from '../composables/useSpinner.js';
import { createEditProductCard } from './helpers.js';

const { setIsLoading, removeIsLoading } = useSpinner();

const keyboardsProvider = KeyboardsProvider.getInstance();

let keyboards;

const keyboardsContainer = document.querySelector('.product-cards-container');

async function getKeyboards() {
  setIsLoading('.product-cards-container');
  keyboards = await keyboardsProvider.getKeyboards();
  removeIsLoading();
  renderKeyboards();
}

async function renderKeyboards() {
  keyboards.records.forEach((keyboard) => {
    createEditProductCard(keyboardsContainer, keyboard, 'ek-edit-product-card')
  });
}

await getKeyboards();

