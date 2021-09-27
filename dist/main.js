/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --text-primary: #787878;\\n    --nav-background:#ff6347;\\n}\\n*{\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\nnav{\\n    color: white;\\n    background-color: tomato;\\n}\\nnav>p{\\n    font-size: 50px;\\n    margin-left: 75px;\\n}\\nmain{\\n    position: relative;\\n}\\n/* SIDEBAR */\\n.sidebar{\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 25%;\\n    background-color: #fafafa;\\n    height: calc(100vh - 58px);\\n    overflow-y: auto;\\n    position: relative;\\n}\\n\\n.sidebar-wrapper{\\n    display: flex;\\n    flex-direction: column;\\n    margin: 50px 0px 0px 75px;\\n}\\n.permenant-item{\\n    display: flex;\\n    margin: 10px;\\n    cursor: pointer;\\n    align-items: center;\\n}\\nsvg{\\n    width: 18px;\\n    height: 18px;\\n    margin-right: 10px;\\n    fill: tomato;\\n}\\n.projects{\\n    margin: 10px;\\n    \\n}\\n.projects> p{\\n    user-select: none;\\n    align-self: center;\\n    color: black;\\n}\\nhr{\\n    color: rgb(195, 195, 195);\\n    opacity: 0.4;\\n}\\n.project-top{\\n    font-family: sans-serif;\\n    font-weight: 600;\\n}\\n.arrow{\\n    display: inline-block;\\n    margin-right: 15px;\\n    font-weight: 200;\\n    transition: transform 0.5s; \\n    /* transform: rotate(90deg); */\\n}\\n.arrow:hover{\\n    color: violet;\\n}\\nul{\\n    margin-top: 15px;\\n    list-style-type: none;\\n}\\n.sidebar-item{\\n    display: flex;\\n    cursor: pointer;\\n    margin: 15px 0px;\\n    user-select: none;\\n    align-items: center;\\n}\\n.circle{\\n    text-align: center;\\n    font-size: 10px;\\n    display: inline-block;\\n    width: 13px;\\n    height: 13px;\\n    border-radius: 50%;\\n    background-color: var(--text-primary);\\n    color: var(--text-primary);\\n    margin-right: 13px;\\n}\\n.add-project{\\n    display: inline-block;\\n    background-color: var(--nav-background);\\n    color: white;\\n    font-size: 40px;\\n    width: 45px;\\n    text-align: center;\\n    border-radius: 50%;\\n    position: absolute;\\n    right: 50px;\\n    bottom: 75px;\\n    cursor: pointer;\\n    box-shadow: 10px 11px 40px -6px rgba(0,0,0,0.55);\\n    user-select: none;\\n}\\n.overlay{\\n    z-index: 2;\\n    position: fixed;\\n    display: none;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    right: 0;\\n    left: 0;\\n    bottom:0;\\n    background-color: rgba(0,0,0,0.55);\\n    justify-content: center;\\n    align-items: center;\\n}\\n.form{\\n    /* position: fixed; */\\n    width: 400px;\\n    height: 550px;\\n    background-color: #fafafa;\\n    z-index: 3;\\n    border-radius: 10px;\\n    position: relative;\\n}\\n.form-wrapper{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-top: 20%;\\n}\\n.form-wrapper>h3{\\n    font-size: 24px;\\n    color: var(--text-primary);\\n}\\n.form-input{\\n    border: tomato 1px solid;\\n    outline: none;\\n    padding: 5px;\\n    font-size: 18px;\\n}\\n.form-input:active{\\n    border:1px solid tomatos\\n}\\n.close-form{\\n    position: absolute;\\n    top: 20px;\\n    right: 20px;\\n    font-size: 28px;\\n    cursor: pointer;\\n}\\n.form-items{\\n    display: flex;\\n    flex-direction: column;\\n    margin: 20px 0px 0px 0px ;\\n}\\n#form-text{\\n    resize: none;\\n    outline: none;\\n    border: rgb(255, 99, 71) 1px solid;\\n}\\n.form-btn{\\n    display: inline-block;\\n    justify-self: center;\\n    flex: 0;\\n    align-self: center;\\n    padding: 8px 13px;\\n    background-color: var(--nav-background);\\n    margin: 10px 0px 0px 0px;\\n    color: white;\\n    text-decoration: none;\\n    border-radius: 5px;\\n}\\n.form-btn:active{\\n    background-color: rgba(255, 99, 71,0.9)\\n}\\n\\n/* TASK SECTION */\\n.task-section{\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 75%;\\n    height: calc(100vh - 58px);\\n    overflow-y: auto;\\n}\\n.project-detail{\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 1000px;\\n    margin: 30px auto;  \\n}\\n.description{\\n    padding: 12px 2px;\\n    border-radius: 10px;\\n    outline: none;\\n    border: none;\\n    font-size: 16px;\\n    color:var(--text-primary);\\n    resize: none;\\n}\\n.task{\\n    display: flex;\\n    justify-content: space-between;\\n    margin: 10px 10px 10px 0px;\\n}\\n.item-left{\\n    display: flex;\\n    align-items: center;\\n}\\n.checkbox{\\n    width: 20px;\\n    height: 20px;\\n    border-radius: 50%;\\n    margin-right: 10px;\\n}\\n.checkbox:checked + label.label{\\n    text-decoration: line-through;\\n}\\n.label{\\n    color: var(--text-primary);\\n}\\n\\n.star{\\n    cursor: pointer;\\n}\\n.cross{\\n    cursor: pointer;\\n}\\n.add-task{\\n    margin-top: 10px;\\n    display: flex;\\n    align-items: center;\\n    border-bottom: tomato 1px solid;\\n    padding-bottom: 5px;\\n    cursor: pointer;\\n}\\n.input-task{\\n    border: none;\\n    outline: none;\\n    color: var(--text-primary);\\n    width: 100%;\\n}\\n\\n@media screen and (max-width:600px) {\\n    nav>p{\\n        font-size: 40px;\\n        margin-left: 50px;\\n    }\\n    main{\\n        height: calc(100% - 34.59px);\\n    }\\n}\\n\\n@media screen and (max-width:950px){\\n    .sidebar{\\n        position: fixed;\\n        width:200px;\\n        left: -250px;\\n    }\\n    .task-section{\\n        width: 100%;\\n        padding: 10px;\\n        z-index: -1;\\n    }\\n    .overlay{\\n        z-index: 10;\\n    }\\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addproject.js":
/*!***************************!*\
  !*** ./src/addproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"objectsArray\": () => (/* binding */ objectsArray)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _sidebarDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarDom */ \"./src/sidebarDom.js\");\n\n\n\nconst addProject = document.querySelector(\".add-project\");\nconst overlay = document.querySelector(\".overlay\");\nconst closeForm = document.querySelector(\".close-form\");\nconst formBtn = document.querySelector(\".form-btn\");\nconst formInput = document.querySelector(\".form-input\");\nconst textArea = document.getElementById(\"form-text\");\n\nlet objectsArray = [];\n\n// Permanent items in the array \nlet today = {\n    projectName : \"today\",\n    description: \"test\",\n    subtasks: []\n}\nobjectsArray.push(today);\n\nlet month = {\n    projectName : \"Month\",\n    description: \"test\",\n    subtasks: []\n}\nobjectsArray.push(month)\n\nconsole.log(objectsArray);\n\n\n// DISPLAYS FORM\naddProject.addEventListener(\"click\",()=>{\n    overlay.style.display = \"flex\";\n});\n\n// CLOSES FORM \ncloseForm.addEventListener(\"click\",(e)=>{\n    overlay.style.display = \"none\";\n});\n\n// Collection form data \nformBtn.addEventListener(\"click\",()=>{\n    let inputValue = formInput.value;\n    let textAreaValue = textArea.value;\n    \n    let arrayItem = new ___WEBPACK_IMPORTED_MODULE_0__.Project(inputValue, textAreaValue);\n    objectsArray.push(arrayItem);\n    console.log(objectsArray);\n    (0,_sidebarDom__WEBPACK_IMPORTED_MODULE_1__.addNamesTosidebar)(inputValue);\n    \n    formInput.value = \"\"; \n    textArea.value = \"\";\n    overlay.style.display = \"none\";\n})\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/addproject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ \"./src/textarea.js\");\n/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addproject */ \"./src/addproject.js\");\n/* harmony import */ var _sidebarDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarDom */ \"./src/sidebarDom.js\");\n/* harmony import */ var _tasksection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasksection */ \"./src/tasksection.js\");\n\n\n\n\n\n\nclass Project{\n    constructor(projectName, description){\n        this.projectName = projectName;\n        this.description = description;\n        this.subtasks  = [];\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebarDom.js":
/*!***************************!*\
  !*** ./src/sidebarDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNamesTosidebar\": () => (/* binding */ addNamesTosidebar),\n/* harmony export */   \"searchIndexOfProject\": () => (/* binding */ searchIndexOfProject)\n/* harmony export */ });\n/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproject */ \"./src/addproject.js\");\n/* harmony import */ var _tasksectionDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksectionDom */ \"./src/tasksectionDom.js\");\n\n\n\nconst ul = document.getElementById(\"sidebar-items\");\nconst today = document.querySelector(\".permenant-item-1\");\nconst month = document.querySelector(\".permenant-item-2\");\n\ntoday.addEventListener(\"click\", ()=>{\n    console.log(today);\n    (0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_1__.populateTaskSection)(0);\n})\n\nmonth.addEventListener(\"click\", ()=>{\n    ;(0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_1__.populateTaskSection)(1);\n})\n\n\nfunction addNamesTosidebar(element){\n    const li = document.createElement(\"li\");\n    li.classList.add(\"sidebar-item\");\n    \n    const span = document.createElement(\"span\");\n    span.classList.add(\"circle\");\n\n    const span2  = document.createElement(\"span\");\n    span2.innerText = element;\n    \n    li.appendChild(span);\n    li.appendChild(span2);\n    ul.appendChild(li);\n}\n\ndocument.querySelector(\"#sidebar-items\").addEventListener(\"click\",(event)=>{\n    if(event.target.tagName.toLowerCase() == \"span\"){\n        let projectClicked = event.target.innerText;\n        let index = searchIndexOfProject(projectClicked);\n        (0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_1__.populateTaskSection)(index);\n        (0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_1__.populateSubtask)(index)\n    }\n})\n\n// This function can be called anywhere to find the index of object in array\n// Takes name of project as argument to find the it;s index\nfunction searchIndexOfProject(searchItem){\n    for(let i = 0; i < _addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray.length; i++){\n        if(_addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray[i].projectName == searchItem) return i;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/sidebarDom.js?");

/***/ }),

/***/ "./src/tasksection.js":
/*!****************************!*\
  !*** ./src/tasksection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateSubtask\": () => (/* binding */ updateSubtask)\n/* harmony export */ });\n/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproject */ \"./src/addproject.js\");\n/* harmony import */ var _sidebarDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarDom */ \"./src/sidebarDom.js\");\n/* harmony import */ var _tasksectionDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksectionDom */ \"./src/tasksectionDom.js\");\n\n\n\n\n\nconst inputTask = document.querySelector(\".input-task\");\n\n// Enter task \ninputTask.addEventListener(\"keydown\",(e)=>{\n    if(e.keyCode == 13){\n        let subtask = inputTask.value;\n        updateSubtask(subtask);\n        inputTask.value = \"\";     \n        (0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_2__.createSubtask)(subtask);\n        // get the project's name to get index of project in array to get subtasks \n        _addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray\n        ;(0,_tasksectionDom__WEBPACK_IMPORTED_MODULE_2__.populateSubtask)()\n    }  \n})\n\n// Updating the array \nfunction updateSubtask(subtask){\n    const header = document.querySelector(\".heading\");\n    let val = header.textContent; \n    let i = (0,_sidebarDom__WEBPACK_IMPORTED_MODULE_1__.searchIndexOfProject)(val);\n    _addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray[i].subtasks.push(subtask);\n    console.log(_addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/tasksection.js?");

/***/ }),

/***/ "./src/tasksectionDom.js":
/*!*******************************!*\
  !*** ./src/tasksectionDom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateTaskSection\": () => (/* binding */ populateTaskSection),\n/* harmony export */   \"createSubtask\": () => (/* binding */ createSubtask),\n/* harmony export */   \"populateSubtask\": () => (/* binding */ populateSubtask)\n/* harmony export */ });\n/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproject */ \"./src/addproject.js\");\n\n// import { searchIndexOfProject } from \"./sidebarDom\";\n\nconst h1 = document.querySelector(\".heading\");\nconst description = document.querySelector(\"#description\");\n\n// Displays name of project in task section which is clicked in sidebar \nconst populateTaskSection = (index)=>{\n    // const ul = document.querySelector(\".subtasks-ul\");\n\n    h1.innerText = _addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray[index].projectName;\n    description.innerText = _addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray[index].description;\n    console.log(`${index}  clicked`);\n}\nconst populateSubtask = (index)=>{\n    // if()\n    // let numberOfItems = objectsArray[index].subtask.Length;\n    console.log(_addproject__WEBPACK_IMPORTED_MODULE_0__.objectsArray[index].subtask)\n    // for(let x = 0; x< numberOfItems; x++){\n    //     createSubtask(objectsArray[index].subtask[x]);\n    //     console.log(objectsArray[index].subtask[x]);\n    // }\n}\n\n\n// This function needs arguments so that it add it as innnertext\nconst createSubtask = (subtask)=>{\n    const ul = document.querySelector(\".subtasks-ul\");\n\n    const li = document.createElement(\"li\");\n    li.classList.add(\"task\");\n\n    const leftDiv = document.createElement(\"div\");\n    leftDiv.classList.add(\"item-left\");\n\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.classList.add(\"checkbox\");\n\n    const label = document.createElement(\"label\");\n    label.classList.add(\"label\");\n    label.innerText = subtask;\n    \n    leftDiv.appendChild(checkbox);\n    leftDiv.appendChild(label);\n\n    const rightDiv = document.createElement(\"div\");\n    // Svgs here!!\n\n    li.appendChild(leftDiv);\n    li.appendChild(rightDiv);\n\n    ul.appendChild(li);\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasksectionDom.js?");

/***/ }),

/***/ "./src/textarea.js":
/*!*************************!*\
  !*** ./src/textarea.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textArea\": () => (/* binding */ textArea)\n/* harmony export */ });\nconst textArea = document.getElementById(\"description\");\n\n// Eventlistner to dynamically increase the size of description area\ntextArea.addEventListener(\"keyup\", e=>{\n    let scheight = e.target.scrollHeight;\n    if(scheight <= 150){\n        textArea.style.height = `${scheight}px`;\n    }\n    \n})\n\n\n//# sourceURL=webpack://todo-list/./src/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;