// ==UserScript==
// @name         s-1
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  s-1
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  setTimeout(() => {
    alert("0.2");
  }, 5000);
})();
