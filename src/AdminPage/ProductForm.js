import { KeyboardsProvider } from '../providers/keyboards.provider.js';

const keyboardsProvider = KeyboardsProvider.getInstance();

let productBody = {
  fields: {
    title: '',
    price: 0,
    imageSrc: '',
    category: '',
    rating: 0,
    description: '',
  }
}

const form = document.querySelector('.contact-form-container')
const submitButton = document.querySelector('.checkout-button');

submitButton.addEventListener('click', async (event) => {
  event.preventDefault();
  await onSubmit();
  cleanForm();
})

function onFormChange() {
  form.addEventListener('input', (event) => {
    let { name, value } = event.target;

    if (!name) return;

    if (name === 'price' || name === 'rating') {
      value = Number(value);
    }

    productBody.fields[name] = value;
  })
}

async function onSubmit() {
  await keyboardsProvider.createKeyboard(productBody);
}

function cleanForm() {
  form.querySelectorAll('input').forEach(input => input.value = '');
  form.querySelector('textarea').value = '';
}

onFormChange();

