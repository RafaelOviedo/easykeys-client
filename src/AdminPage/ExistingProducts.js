import { KeyboardsProvider } from '../providers/keyboards.provider.js';

import { createEditProductCard } from './helpers.js';

const keyboardsProvider = KeyboardsProvider.getInstance();

let keyboards;

const keyboardsContainer = document.querySelector('.product-cards-container');

async function getKeyboards() {
  keyboards = await keyboardsProvider.getKeyboards();
  renderKeyboards();
}

async function renderKeyboards() {
  keyboards.records.forEach((keyboard) => {
    createEditProductCard(keyboardsContainer, keyboard, 'ek-edit-product-card')
  });
}

await getKeyboards();

