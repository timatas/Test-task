import{b as y}from"./vendor-4b9aba64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const k="/Test-task/assets/minus-7f58cb69.svg",w="/Test-task/assets/plus-8292619f.svg",u="/Test-task/assets/basket-a161fb4d.svg",v="/Test-task/assets/discount-8db0687b.svg",S="/Test-task/assets/popular-baskett-cb043ad6.svg",m="/Test-task/assets/closed-bf66d401.svg";function j(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:n,popularity:c,is10PercentOff:l})=>`<li class="list-item animation-style" id="${t}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${a}</p>
            <div class="list-item-info">
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${e}</span>
               <button class="add-btn icon-styles">
               <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function A(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:n,popularity:c})=>`
           <div class="product-popular-card animation-style" id="${t}">
           <div class="popular-image-item">
               <img src="${o}" alt="${a}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${a}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${i}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${n}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${c}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${a}')">
                   <img class="popular-basket-img" src="${S}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function N(s){return s.splice(2),s.map(({price:e,name:a,img:o,_id:t})=>`
         <li class="discount-list-item animation-style" id="${t}" >
            <div class="discount-card" >
               <img class="discount-icon animations-rotate" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${a}</p>
               <div class="discount-prise">
                <span>&#36;${e}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${u}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function I(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:n})=>`<li class="cart-list-item" id="${t}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${a}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${i}</span></p>
                <p>Size:  <span>${n}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${e}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${w}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function D(s){return s.map(({price:e,name:a,img:o,_id:t,category:i,size:n,popularity:c,desc:l})=>`
         <li class="popup-list-item" id="${t}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${a}</p>
               <p>Category: <span>${i}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${e}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const L="products in cart",x=document.querySelector(".header-basket-counter");function $(){const s=JSON.parse(localStorage.getItem(L))||[];x.textContent=s.length.toString()}window.addEventListener("storage",()=>{$()});$();const P="/Test-task/assets/frut-popap-x1-e219a22f.png",T="/Test-task/assets/frut-popap-x2-cdad5963.png",E=document.querySelector("#formEmail"),g=document.querySelector("#formInput");E.addEventListener("submit",z);function z(s){s.preventDefault();const e=g.value.trim();if(!q(e)){alert("Please enter a valid email address");return}if(e===""){alert("Please enter an email address");return}C({email:e}).then(()=>{console.log("Data sent successfully"),g.value="",M()}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})}function C(s){return new Promise((e,a)=>{setTimeout(()=>{console.log("Imitating sending data to server:",s),e()},2e3)})}function q(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)}function M(){const s=y.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${P}"
         alt="Empty basket"
         srcset="${T}"
      />
   </div>
   `,{onClose:o=>e.removeEventListener("click",a)});s.show();const e=document.querySelector(".sub-modal");e.addEventListener("click",a);function a(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&s.close()}}let d=0;const b=60,p=document.querySelector(".header"),h=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>p.classList.contains("hide");function Z(){window.addEventListener("scroll",()=>{r()>d&&!f()&&r()>b?p.classList.add("hide"):r()<d&&f()&&p.classList.remove("hide"),r()>b?h.classList.add("scrolled"):h.classList.remove("scrolled"),d=r()})}export{$ as a,j as b,I as c,A as d,N as e,D as f,Z as h};
//# sourceMappingURL=scroll-0cb9cff9.js.map
