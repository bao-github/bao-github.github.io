// ==UserScript==
// @name         s-1
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  s-1
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  (function () {
    const proto = Node.prototype;
    const origAppend = proto.appendChild;

    proto.appendChild = function (node) {
      const src = node.src || (node.getAttribute && node.getAttribute("src"));

      if (src.indexOf("common/openjs/openBox.js") > -1) {
        return node;
      } else {
        return origAppend.call(this, node);
      }
    };
  })();
})();
