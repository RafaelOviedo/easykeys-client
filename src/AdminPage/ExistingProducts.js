import { KeyboardsProvider } from '../providers/keyboards.provider.js';

import { useSpinner } from '../composables/useSpinner.js';
import { createEditProductCard } from './helpers.js';

const { setIsLoading, removeIsLoading } = useSpinner();

const keyboardsProvider = KeyboardsProvider.getInstance();

let keyboards;

const keyboardsContainer = document.querySelector('.product-cards-container');

export async function getKeyboards() {
  setIsLoading('.product-cards-container');
  keyboards = await keyboardsProvider.getKeyboards();
  removeIsLoading();
  renderKeyboards();
}

async function renderKeyboards() {
  keyboardsContainer.innerHTML = '';

  keyboards.records.forEach((keyboard) => {
    const product = createEditProductCard(keyboardsContainer, keyboard, 'ek-edit-product-card')

    const deleteButton = product.querySelector('.delete-icon-wrapper');
    deleteButton.addEventListener('click', () => deleteKeyboard(keyboard.id))
  });
}

async function deleteKeyboard(id) {
  setIsLoading('.product-cards-container');
  await keyboardsProvider.deleteKeyboard(id);
  await getKeyboards();
  removeIsLoading();
}

await getKeyboards();

