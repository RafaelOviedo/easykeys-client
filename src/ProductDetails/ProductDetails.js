
async function getKeyboardById(id) {
  const response = await fetch('../resources/keyboards.json');
  const keyboards = await response.json();
  return keyboards.find(keyboard => keyboard.id === (+id));
}

async function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const keyboard = await getKeyboardById(id);

  if (!keyboard) {
    throw new Error('This keyboard does not exist');
  }

  document.querySelector('.product-details-title').textContent = keyboard.title;
  document.querySelector('.product-details-description').textContent = keyboard.description;
  document.querySelector('.product-details-price').textContent = keyboard.price;
  document.querySelector('.product-details-image').src = keyboard.imageSrc;
}

renderProductDetails();


