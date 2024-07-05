import { createMarkupProductsAll } from './template.js';
import check from '../img/svg/check.svg';
import { fetchProductsAll, fetchProducts } from './fetch.js';
import addCounter from './cart-header-counter.js';

const containerAll = document.querySelector('.products-container');

const KEY = 'products in cart';

// Функція для оновлення списку продуктів
export function updateProductsList(products) {
  const container = document.querySelector('.products-container');
  if (!products || products.length === 0) {
    // Якщо продуктів немає, показуємо повідомлення
    container.innerHTML = `<div class="cart-empty empty-filter">
           <h3 class="products-titel">Nothing was found for the selected <span>filters...</span></h3>
           <p class="filters-text-not-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect campers for you.</p>
       </div>`;
  } else {
    // Якщо продукти є, заповнюємо контейнер продуктами і приховуємо повідомлення, якщо воно було показано
    container.innerHTML = createMarkupProductsAll(products);
  }
}

export function getProductsLimit() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    // Мобільні пристрої
    return 4;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    // Таблет
    return 4;
  } else if (screenWidth > 1440) {
    // Десктоп і вище
    return 4;
  }
}
renderAll();

// перемішування масиву та вибору випадкових продуктів
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]; // Перемішування елементів
//   }
// }

async function renderAll() {
  try {
    const data = await fetchProductsAll('Fresh_Produce');
    containerAll.insertAdjacentHTML(
      'beforeend',
      createMarkupProductsAll(removeUnderscores(data))
    );
    addCounter();
    // console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

// function getRandomProducts(products, count) {
//   shuffleArray(products);
//   return products.slice(0, count);
// }

containerAll.addEventListener('click', addBtnClick);

export async function addBtnClick(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.className === 'add-btn' ||
    event.target.nodeName === 'IMG'
  ) {
    const selectedItem = event.target.closest('.list-item-body-price');

    // Проверяем, есть ли родительский элемент
    if (selectedItem && selectedItem.parentElement) {
      const selectedItemId = selectedItem.parentElement.id;

      try {
        const currentProduct = await fetchProducts(selectedItemId);
        const products = JSON.parse(localStorage.getItem(KEY)) ?? [];

        const index = products.findIndex(item => item._id === selectedItemId);

        if (index !== -1) {
          products[index].quantity += 0;
        } else {
          currentProduct.quantity = 1;
          products.push(currentProduct);
          //==========
          const button = selectedItem.querySelector('button');
          button.disabled = true;
          button.innerHTML = `<img src="${check}" alt="icon check" width="18" height="18">`;
          button.classList.add('disabled');
          //=========
        }
        localStorage.setItem(KEY, JSON.stringify(products));
        addCounter();
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  return;
}

// Функція для видалення підкреслення між словами
export function removeUnderscores(arr) {
  return arr.map(obj => {
    let category = obj.category;
    if (typeof category === 'string') {
      category = category.split('_').join(' ');
    }
    return { ...obj, category };
  });
}
