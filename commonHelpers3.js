import{f as u,h as m}from"./assets/scroll-0cb9cff9.js";import{f as g,a as l}from"./assets/filters-7baa0163.js";import{b as p}from"./assets/vendor-4b9aba64.js";const f=document.querySelector(".products-container"),k=document.querySelector(".popular-container"),b=document.querySelector(".discount-container");f.addEventListener("click",n);k.addEventListener("click",n);b.addEventListener("click",n);function n(t){if(!(t.target===t.currentTarget||t.target.nodeName==="BUTTON"||t.target.className==="add-btn"||t.target.className==="popular-basket-img"||t.target.className==="icon-styles"||t.target.className==="discount-basket-icon"||t.target.alt==="icon bascket")){if(t.target.closest(".discount-list-item")!==null){const e=t.target.closest(".discount-list-item").id;s(e)}if(t.target.closest(".list-item")!==null){const e=t.target.closest(".list-item").id;s(e)}if(t.target.closest(".product-popular-card")!==null){const e=t.target.closest(".product-popular-card").id;s(e)}}}async function s(t,a){try{let i=function(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&c.close()};const e=[await g(t)],d=o=>{c.visible()&&o.key==="Escape"&&c.close()},c=p.create(u(e),{onClose:o=>document.removeEventListener("keydown",d),onClose:o=>r.querySelector(".add-btn").removeEventListener("click",l),onClose:o=>r.removeEventListener("click",i)});c.show(),document.addEventListener("keydown",d);const r=document.querySelector(".basicLightbox__placeholder");r.querySelector(".add-btn").addEventListener("click",l),r.addEventListener("click",i)}catch(e){console.log(e.message)}}m();
//# sourceMappingURL=commonHelpers3.js.map
