import { createMarkupModal } from './template';
import { addBtnClick } from './products';
import * as basicLightBox from 'basiclightbox';
import { fetchProducts } from './fetch';
// BasicLightBox modal
const mainProducts = document.querySelector('.products-container');

mainProducts.addEventListener('click', openModal);

function openModal(event) {
  if (
    event.target === event.currentTarget ||
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'add-btn' ||
    event.target.className === 'popular-basket-img' ||
    event.target.className === 'icon-styles' ||
    event.target.className === 'discount-basket-icon' ||
    event.target.alt === 'icon-icon-favorite'
  ) {
    return;
  }

  if (event.target.closest('.list-item') !== null) {
    const targetProduct = event.target.closest('.list-item');
    const targetProductId = targetProduct.id;
    renderProductModal(targetProductId, event);
  }
}

async function renderProductModal(id, e) {
  try {
    const data = [await fetchProducts(id)];
    const closeWithEsc = evt => {
      if (instance.visible() && evt.key === 'Escape') {
        instance.close();
      }
    };
    const instance = basicLightBox.create(createMarkupModal(data), {
      onClose: instance =>
        document.removeEventListener('keydown', closeWithEsc),
      onClose: instance =>
        modalContainer
          .querySelector('.add-btn')
          .removeEventListener('click', addBtnClick),
      onClose: instance =>
        modalContainer.removeEventListener('click', modalClose),
    });
    instance.show();
    document.addEventListener('keydown', closeWithEsc);

    const modalContainer = document.querySelector(
      '.basicLightbox__placeholder'
    );
    modalContainer
      .querySelector('.add-btn')
      .addEventListener('click', addBtnClick);
    modalContainer.addEventListener('click', modalClose);

    function modalClose(evt) {
      if (
        evt.target.className === 'remove-btn' ||
        evt.target.className === 'remove-btn-img'
      ) {
        instance.close();
      }
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
}
