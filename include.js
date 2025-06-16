// ->
function nnnn(P, annualRate, years) {
  // 将年利率转换为月利率
  var r = annualRate / 12 / 100;
  // 计算总还款月数
  var n = years * 12;
  // 使用等额本息公式计算每月还款金额
  var M = P * (r / (1 - Math.pow(1 + r, -n)));
  return M.toFixed(2); // 返回保留两位小数的结果
}

function yyyy(P, annualRate, months) {
  // 将年利率转换为月利率
  var r = annualRate / 12 / 100;
  // 计算总还款月数
  var n = months;
  // 使用等额本息公式计算每月还款金额
  var M = P * (r / (1 - Math.pow(1 + r, -n)));
  return M.toFixed(2); // 返回保留两位小数的结果
}
// <-

//
var wordEncrypt1 = function (word) {
  var key = CryptoJS.enc.Utf8.parse("12345678900000001234567890000000");
  var iv = CryptoJS.enc.Utf8.parse("1234567890000000");
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString();
};

//
var deWordEncrypt1 = function (word) {
  var key = CryptoJS.enc.Utf8.parse("12345678900000001234567890000000");
  var iv = CryptoJS.enc.Utf8.parse("1234567890000000");
  var srcs = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(word));
  var decrypted = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

//
var _rrrr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
var _pppp = function (e) {
  return String(e).replace(/[&<>"'`=/]/g, function (e) {
    return _rrrr[e];
  });
};

//
var __owner = "NieShuBao";
var __repo = "sync-01";

//
var ajax = async function (url, method, body) {
  try {
    var controller = new AbortController();
    var timeoutId = setTimeout(() => controller.abort(), 10 * 1000);

    var params = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      signal: controller.signal,
    };

    if (body) params.body = body;

    var response = await fetch(url, params);
    clearTimeout(timeoutId);
    return response.json();
  } catch (e) {
    if (e.name === "AbortError") {
      return { message: "Timeout" };
    }
    return { message: e.toString() };
  }
};

//
var comm_pages = `
    <a href="#page-pos-0" style="font-size:1.4rem;">&lt;top&gt;</a>
    |
    <a href="./index.html" style="font-size:1.2rem;">index</a>
    <a href="./bookmarks.html" style="font-size:1.2rem;">bookmarks</a>
    <a href="./admin.html" style="font-size:1.2rem;">admin</a>
    |
    <a href="#page-pos-1" style="font-size:1.4rem;">&lt;bottom&gt;</a>
`;

//
var _alert = function (text) {
  var d = $("<div></div>");
  d.html(text);
  $("#my-msg").append(d);
  setTimeout(function () {
    d.remove();
  }, 5000);
};

//
var maskShow = function () {
  $("#my-mask").show();
};

//
var maskHide = function () {
  $("#my-mask").hide();
};

//
var curEditor = null;
var curEditorFlag = false;
var genEditor = function (code) {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs/loader.js";
  script.onload = () => {
    require.config({
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs",
      },
    });
    require(["vs/editor/editor.main"], () => {
      curEditor = monaco.editor.create(document.getElementById("my-editor"), {
        value: code,
        theme: "vs",
        language: "plaintext",
        automaticLayout: true,
      });
    });
  };
  document.head.appendChild(script);
};

$(function () {
  //
  $("head").append(`
    <style type="text/css">
      html,
      body {
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0;
      }
      #app {
        padding: 5px;
        font-size: 0;
      }
      #app textarea {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        box-sizing: border-box;
        white-space: nowrap;
        line-height: 22px;
        font-size: 20px;
        overflow: auto;
        outline: none;
        resize: none;
        width: 100%;
        tab-size: 2;
      }
      pre {
        font-family: Consolas, "Courier New", monospace;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqCAIAAAA8m+yHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAArSURBVEhL7csxDQAADMOw8kdbBhuGqG/8OzcwQ2bIDJmhdGCGzJAZMiPtA76GhNz8jjfAAAAAAElFTkSuQmCC');
        line-height: 21px;
        margin: 0;
      }
      a {
        color: #00f;
      }
      img {
        vertical-align: middle;
      }

      /* 手机设备 (宽度小于768px) */
      @media only screen and (max-width: 767px) {
        html{font-size:18px;}
        button{height: 44px;}
        input[type="text"]{height: 44px;box-sizing: border-box;}
        select{height: 44px;}
      }
      /* 平板设备 (宽度768px到1024px) */
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        html{font-size:17px;}
        button{height: 33px;}
        input[type="text"]{height: 33px;box-sizing: border-box;}
        select{height: 33px;}
      }
      /* 电脑设备 (宽度大于1024px) */
      @media only screen and (min-width: 1025px) {
        html{font-size:16px;}
        button{height: 22px;}
        input[type="text"]{height: 22px;box-sizing: border-box;}
        select{height: 22px;}
      }

    </style>
  `);

  //
  var body = $("body"),
    app = $("#app"),
    head = app.find(".w-head"),
    foot = app.find(".w-foot"),
    main = app.find(".w-main"),
    mainCom = main.find(".w-com"),
    mainMsg = main.find(".w-msg");

  head.append('<a name="page-pos-0"></a><div style="padding: 2px; font-size: 16px; text-align: center" id="my-comm1"></div>');
  foot.append('<div style="padding: 2px; font-size: 16px; text-align: center" id="my-comm2"></div><a name="page-pos-1"></a>');

  mainCom.append(`
    <div style="padding: 2px">
        <input type="text" id="my-token" value="****" style="width: 50px; text-align: center" autocomplete="off" />
        <button id="my-set" style="width: 80px; margin-left: 4px">Set</button>
        <button id="my-remove" style="width: 80px; margin-left: 4px; color: #f00">Clear</button>
        <button id="my-eid-set" style="width: 80px; margin-left: 4px">Eid-Set</button>
        <button id="my-eid-remove" style="width: 80px; margin-left: 4px; color: #f00">Eid-Clear</button>
    </div>
 `);

  mainMsg.append(`
    <div style="padding: 2px">
        <div id="my-msg" style="color: #f00;font-size: 14px;"></div>
    </div>
 `);

  body.append(`
    <div id="my-mask" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999; display: none">
        <div style="position: absolute; top: 120px; left: 50%; margin-left: -45px; font-size: 0; border-radius: 4px; overflow: hidden">
            <img src="./loading.gif" />
        </div>
    </div>
 `);

  if (!/Android/i.test(window.navigator.userAgent)) {
    body.append(`
      <div style="position: fixed; right: 20px; bottom: 20px; width: 56px; height: 56px; z-index: 999">
          <a href="#page-pos-0">
            <img src="./top.png" />
          </a>
      </div>
    `);
  }

  $("#my-comm1").append(comm_pages);
  $("#my-comm2").append(comm_pages);

  $("#my-set").click(function () {
    window.localStorage.setItem("token", "eabe0f21c0655c4a9e8e145c81a6" + $("#my-token").val());
    window.location.reload();
  });

  $("#my-remove").click(function () {
    window.localStorage.removeItem("token");
    window.location.reload();
  });

  $("#my-eid-set").click(function () {
    window.localStorage.setItem("eeeid", $("#my-token").val());
    window.location.reload();
  });

  $("#my-eid-remove").click(function () {
    window.localStorage.removeItem("eeeid");
    window.location.reload();
  });
});
