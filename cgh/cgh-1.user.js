// ==UserScript==
// @name         s-1
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  s-1
// @match        *://*/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
  "use strict";

  (function () {
    const originAppend = Node.prototype.appendChild;

    Node.prototype.appendChild = function (node) {
      return originAppend.call(this, node);
    };

    window.addEventListener("DOMContentLoaded", () => {
      const panel = document.createElement("div");
      panel.style.position = "fixed";
      panel.style.top = "10px";
      panel.style.right = "10px";
      panel.style.background = "white";
      panel.style.border = "1px solid #ccc";
      panel.style.padding = "5px";
      panel.style.zIndex = "9999";
      panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

      const input = document.createElement("input");
      input.style.width = "50px";
      input.style.marginRight = "5px";
      input.value = GM_getValue("myKeyword", "");
      input.type = "text";

      const btn = document.createElement("button");
      btn.style.padding = "0 5px";
      btn.textContent = "B";
      btn.addEventListener("click", function () {
        GM_setValue("myKeyword", input.value.trim());
      });

      panel.appendChild(input);
      panel.appendChild(btn);

      document.body.appendChild(panel);
    });
  })();
})();
