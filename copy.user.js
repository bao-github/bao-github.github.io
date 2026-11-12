// ==UserScript==
// @name         copy
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Copy table column data to clipboard with a button
// @match        *://*/*
// @updateURL    https://bao-github.github.io/copy.user.js
// @downloadURL  https://bao-github.github.io/copy.user.js
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  const showFloatingBox = function (e) {
    let t = document.getElementById("floatingBox");
    (null === t
      ? (((t = document.createElement("div")).id = "floatingBox"),
        // Set styles for the floating box
        (t.textContent = e),
        (t.style.display = "block"),
        (t.style.position = "fixed"),
        (t.style.top = "5%"),
        (t.style.left = "50%"),
        (t.style.transform = "translate(-50%, -50%)"),
        (t.style.padding = "8px 20px"),
        (t.style.backgroundColor = "rgba(0, 51, 113, 0.8)"),
        (t.style.color = "white"),
        (t.style.borderRadius = "8px"),
        (t.style.zIndex = "1000"),
        (t.style.fontSize = "16px"),
        (t.style.fontWeight = "500"),
        document.body.appendChild(t))
      : (t.textContent = e),
      setTimeout(function () {
        t.remove();
      }, 2e3));
  };

  const writeToClipboard = async function (e) {
    try {
      if (navigator.clipboard && window.isSecureContext) (await navigator.clipboard.writeText(e), showFloatingBox("已复制"));
      else {
        const t = document.createElement("textarea");
        ((t.value = e),
          document.body.appendChild(t),
          t.focus(),
          t.select(),
          showFloatingBox("已复制"),
          new Promise((e, i) => {
            (document.execCommand("copy") ? e() : i(), t.remove());
          }));
      }
    } catch (t) {
      (console.error("error: ", t), prompt("复制失败，请 Ctrl+C 复制本文！", e));
    }
  };

  const injectTableCopyButtons = function () {
    // Select all tables on the page
    const tables = document.querySelectorAll("table");

    // For each table, inject copy buttons for each column
    tables.forEach((table) => {
      // Check if the copy buttons have already been injected for this table
      if (table.dataset.colCopyInjected) {
        return;
      }
      table.dataset.colCopyInjected = "1";

      // Get all rows of the table
      const trs = Array.from(table.querySelectorAll("tr"));
      if (trs.length === 0) {
        return;
      }

      // Get the first row to determine the number of columns
      const firstTr = trs[0];
      const firstCells = Array.from(firstTr.querySelectorAll("th, td"));

      let chk;

      if (firstCells.length > 0) {
        chk = document.createElement("input");
        chk.type = "checkbox";
        chk.style.cssText = `
          position:absolute;z-index:10;top:8px;right:8px;width:16px;height:16px;opacity:0.3;
        `;
      }

      // For each cell in the first row, create a copy button
      firstCells.forEach((cell, colIdx) => {
        // Set the position of the cell to relative to position the button correctly
        cell.style.position = "relative";

        // Create a copy button for each column
        const btn = document.createElement("button");
        btn.innerText = "";
        btn.style.cssText = `
          position:absolute;z-index:10;top:2px;right:2px;width:16px;height:16px;font-size:10px;
          border:none;background:#007bff;color:#fff;border-radius:3px;cursor:pointer;opacity:0.3;
        `;
        btn.onmouseover = () => (btn.style.opacity = "1");
        btn.onmouseout = () => (btn.style.opacity = "0.3");
        btn.onclick = (ev) => {
          // Prevent the click event from propagating to the table row
          ev.stopPropagation();
          // Collect data from the specific column and copy to clipboard
          const colData = [];
          // Collect data from the specific column
          trs.forEach((tr, rowIdx) => {
            // Get all cells in the current row
            const tds = Array.from(tr.querySelectorAll("th, td"));
            const targetCell = tds[colIdx];
            if (targetCell && ((rowIdx == 0 && chk.checked) || rowIdx != 0)) {
              // Trim the text content and replace empty strings with "-"
              const textContent = targetCell.textContent.trim();
              // If the cell is empty, use "-" instead
              colData.push(textContent === "" ? "-" : textContent);
            }
          });
          // Write the collected data to the clipboard
          writeToClipboard(colData.join("\n"));
        };
        // Append the copy button to the cell
        cell.appendChild(btn);

        if (colIdx == 0) {
          cell.appendChild(chk);
        }
      });
    });
  };

  // Initial injection of copy buttons for existing tables
  injectTableCopyButtons();

  document.addEventListener("keydown", (e) => {
    // Ctrl+Shift+X
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "x") {
      // Prevent the click event
      e.preventDefault();

      // Initial injection of copy buttons for existing tables
      injectTableCopyButtons();
    }
  });

  let _cnt = 0;
  let _run = function () {
    setTimeout(() => {
      // Initial injection of copy buttons for existing tables
      injectTableCopyButtons();
      _cnt++;
      if (_cnt < 3) {
        _run();
      }
    }, 2000);
  };
  _run();
})();
