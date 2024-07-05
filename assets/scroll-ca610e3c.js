import{b as v}from"./vendor-8057a9e6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const y="/Test-task/assets/basket-a161fb4d.svg",u="/Test-task/assets/closed-bf66d401.svg",$="/Test-task/assets/icon-favorite-c97c1423.svg";function M(s){return s.map(({price:t,name:a,img:o,_id:e,category:i,size:n,popularity:c})=>`<li class="list-item animation-style" id="${e}">
            <div class="list-item-img">
                              <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${t}</span>
               <button class="add-btn icon-styles">
               <img src="${$}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function O(s){return s.map(({price:t,name:a,img:o,_id:e,category:i,size:n})=>`<li class="cart-list-item" id="${e}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${u}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${a}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${i}</span></p>
                <p>Size:  <span>${n}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${t}</span></p>
              </div>
              
        </li>`).join("")}function z(s){return s.map(({price:t,name:a,img:o,_id:e,category:i,size:n,popularity:c,desc:b})=>`
         <li class="popup-list-item" id="${e}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${u}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${a}</p>
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
               <p class="modal-desc" >${b}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${t}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${y}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const w="products in cart",k=document.querySelector(".header-basket-counter");function h(){const s=JSON.parse(localStorage.getItem(w))||[];k.textContent=s.length.toString()}window.addEventListener("storage",()=>{h()});h();const S="/Test-task/assets/frut-popap-x1-e219a22f.png",L="/Test-task/assets/frut-popap-x2-cdad5963.png",E=document.querySelector("#formEmail"),p=document.querySelector("#formInput");E.addEventListener("submit",P);function P(s){s.preventDefault();const t=p.value.trim();if(!x(t)){alert("Please enter a valid email address");return}if(t===""){alert("Please enter an email address");return}T({email:t}).then(()=>{console.log("Data sent successfully"),p.value="",C()}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function T(s){return new Promise((t,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),t()},2e3)})}function x(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function C(){const s=v.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${u}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${S}"
         alt="Empty basket"
         srcset="${L}"
      />
   </div>
   `,{onClose:o=>t.removeEventListener("click",a)});s.show();const t=document.querySelector(".sub-modal");t.addEventListener("click",a);function a(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&s.close()}}let l=0;const m=60,d=document.querySelector(".header"),f=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,g=()=>d.classList.contains("hide");function A(){window.addEventListener("scroll",()=>{r()>l&&!g()&&r()>m?d.classList.add("hide"):r()<l&&g()&&d.classList.remove("hide"),r()>m?f.classList.add("scrolled"):f.classList.remove("scrolled"),l=r()})}export{h as a,z as b,M as c,O as d,A as h};
//# sourceMappingURL=scroll-ca610e3c.js.map
