webpackHotUpdate("static\\development\\pages\\mcm10\\faqs.js",{

/***/ "./components/10/faqs/faqs.js":
/*!************************************!*\
  !*** ./components/10/faqs/faqs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faqs_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs.json */ "./components/10/faqs/faqs.json");
var _faqs_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./faqs.json */ "./components/10/faqs/faqs.json", 1);
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.css */ "./components/10/faqs/faqs.css");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_faqs_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nmeis\\github\\McMurtry-Website\\components\\10\\faqs\\faqs.js";





var Faq = function Faq(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.question)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.answer)));
};

var Faqs = function Faqs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "faqs-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faqs-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _faqs_json__WEBPACK_IMPORTED_MODULE_2__["faqs"].map(function (_ref) {
    var question = _ref.question,
        answer = _ref.answer;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Faq, {
      question: question,
      answer: answer,
      key: question,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Faqs);

/***/ })

})
//# sourceMappingURL=faqs.js.644e47bace5e155f39bc.hot-update.js.map