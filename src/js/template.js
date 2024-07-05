import icons from '../img/sprite.svg';

import basket from '../img/svg/basket.svg';
import closed from '../img/svg/closed.svg';
import favorite from '../img/svg/icon-favorite.svg';

export function createMarkupProductsAll(arr) {
  return arr
    .map(
      ({ price, name, img, _id, category, size, popularity }) =>
        `<li class="list-item animation-style" id="${_id}">
            <div class="list-item-img">
                              <img class="product-img" width=100 src="${img}">
            </div>
            <p class="products-titel">${name}</p>
            <div class="list-item-info">
               <p>Category: <span>${category}</span></p>
               <p>Size: <span>${size}</span></p>
               <p>Popularity: <span>${popularity}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${price}</span>
               <button class="add-btn icon-styles">
               <img src="${favorite}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `
    )
    .join('');
}

export function createMarkupCart(arr) {
  return arr
    .map(
      ({ price, name, img, _id, category, size }) =>
        `<li class="cart-list-item" id="${_id}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${img}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${closed}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${name}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${category}</span></p>
                <p>Size:  <span>${size}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${price}</span></p>
              </div>
              
        </li>`
    )
    .join('');
}

export function createMarkupModal(arr) {
  return arr
    .map(
      ({ price, name, img, _id, category, size, popularity, desc }) =>
        `
         <li class="popup-list-item" id="${_id}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${closed}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${img}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${name}</p>
               <p>Category: <span>${category}</span></p>
               <p>Size: <span>${size}</span></p>
               <p>Popularity: <span>${popularity}</span></p>
               <p class="modal-desc" >${desc}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${price}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${basket}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `
    )
    .join('');
} // list-item-info
