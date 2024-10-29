document.querySelectorAll(".tree li").forEach(function(e){var l=e.querySelector("ul");if(l){var t=document.createElement("span");t.textContent=e.childNodes[0].nodeValue.trim(),e.childNodes[0].replaceWith(t),t.addEventListener("click",function(){"none"===l.style.display?l.style.display="block":l.style.display="none"}),l.style.display="none"}});
//# sourceMappingURL=index.59785ab7.js.map
