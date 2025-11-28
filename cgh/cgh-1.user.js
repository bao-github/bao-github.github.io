// ==UserScript==
// @name         s-1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  s-1
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  setTimeout(() => {
    alert("123456");
  }, 3000);
})();
