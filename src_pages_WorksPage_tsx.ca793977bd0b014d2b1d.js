"use strict";
(self["webpackChunkportfolio_project"] = self["webpackChunkportfolio_project"] || []).push([["src_pages_WorksPage_tsx"],{

/***/ "./src/images/d.png":
/*!**************************!*\
  !*** ./src/images/d.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d.png");

/***/ }),

/***/ "./src/styles/WorksStyles.module.scss":
/*!********************************************!*\
  !*** ./src/styles/WorksStyles.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"itemList":"hGLReAcM8NMyNDAeCcFy","item":"nUc6zS8nYOzznLoTSfUf","number":"BDL8RGiSmAoGt7tdd3QF","picture":"hp0BRJfNtwS2Obnzr1NQ","name":"Wnx1wLZVQQAqoRUiKN0e","modal":"VaqGEbwwtxaajYX6AkXy","active":"hru8nArY2kuXWc1aWsvw","modalContent":"vbOjKLauWjoJ_Zu4jnCZ","modalImg":"n6xra805XrOjUw0pX29A","modalName":"CYhQW5nZLIXVdQg1y92g","modalDesc":"aaGFcyE4koCQrtTFHJ8o","modalTags":"looN2JttpIZX6MnLwdfT"});

/***/ }),

/***/ "./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/WorksStyles.module.scss */ "./src/styles/WorksStyles.module.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


;
function Modal(_a) {
    var work = _a.work, visible = _a.visible, setVisible = _a.setVisible;
    var rootClasses = [_styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modal];
    if (visible) {
        rootClasses.push(_styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active);
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ onClick: function () { return setVisible(false); }, className: rootClasses.join(' ') }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ onClick: function (e) { return e.stopPropagation(); }, className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalContent }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalImg, width: '150px', height: '150px', src: work.pic, alt: 'image' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalName }, { children: work.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalDesc }, { children: work.desc })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalTags }, { children: ["Technologies used: ", work.tags.join(', ')] }))] })) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./src/components/WorkItem.tsx":
/*!*************************************!*\
  !*** ./src/components/WorkItem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/WorksStyles.module.scss */ "./src/styles/WorksStyles.module.scss");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




;
function WorkItem(_a) {
    var number = _a.number, work = _a.work;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visible = _b[0], setVisible = _b[1];
    var btncl = _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].btn;
    if (visible) {
        btncl = _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].btnA;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ onClick: function () { return setVisible(true); }, className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].number }, { children: number })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].picture }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { width: '100px', height: '100px', src: work.pic, alt: 'image' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].name }, { children: work.name }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], { visible: visible, setVisible: setVisible, work: work })] }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkItem);


/***/ }),

/***/ "./src/components/WorkList.tsx":
/*!*************************************!*\
  !*** ./src/components/WorkList.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkItem */ "./src/components/WorkItem.tsx");
/* harmony import */ var _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/WorksStyles.module.scss */ "./src/styles/WorksStyles.module.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



;
function WorkList(_a) {
    var works = _a.works;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].itemList }, { children: works.map(function (work, index) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WorkItem__WEBPACK_IMPORTED_MODULE_1__["default"], { number: index + 1, work: work }, work.id);
        }) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkList);


/***/ }),

/***/ "./src/pages/WorksPage.tsx":
/*!*********************************!*\
  !*** ./src/pages/WorksPage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_WorkList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WorkList */ "./src/components/WorkList.tsx");
/* harmony import */ var _images_d_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/d.png */ "./src/images/d.png");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




;
function WorksPage() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: Date.now(),
            pic: _images_d_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            name: 'Portfolio-site',
            desc: 'Interactive site, that shows usefull information about me.',
            tags: ['React', 'JavaScript', 'TypeScript', 'Webpack', 'SCSS']
        },
        {
            id: Date.now() + 1,
            name: 'Calculator',
            desc: 'Why not...',
            tags: ['React', 'JavaScript', 'SCSS']
        }
    ]), works = _a[0], setWorks = _a[1];
    var addWork = function (newWork) {
        setWorks(__spreadArray(__spreadArray([], works, true), [newWork], false));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_WorkList__WEBPACK_IMPORTED_MODULE_2__["default"], { works: works }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1dvcmtzUGFnZV90c3guY2E3OTM5NzdiZDBiMDE0ZDJiMWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixVQUFVOzs7Ozs7Ozs7Ozs7OztBQ0FoRDtBQUNBLGlFQUFlLENBQUMsK1lBQStZOzs7Ozs7Ozs7Ozs7Ozs7O0FDRC9aLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDUDtBQUN4RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkVBQWE7QUFDcEM7QUFDQSx5QkFBeUIsOEVBQWM7QUFDdkM7QUFDQSxZQUFZLHNEQUFJLG1CQUFtQix1QkFBdUIsMkJBQTJCLG9DQUFvQyxJQUFJLFVBQVUsdURBQUssbUJBQW1CLHdCQUF3Qiw2QkFBNkIsYUFBYSxvRkFBb0IsRUFBRSxJQUFJLFdBQVcsc0RBQUksVUFBVSxXQUFXLGdGQUFnQixnRUFBZ0UsR0FBRyxzREFBSSxtQkFBbUIsV0FBVyxpRkFBaUIsRUFBRSxJQUFJLHFCQUFxQixJQUFJLHNEQUFJLG1CQUFtQixXQUFXLGlGQUFpQixFQUFFLElBQUkscUJBQXFCLElBQUksdURBQUssbUJBQW1CLFdBQVcsaUZBQWlCLEVBQUUsSUFBSSx5REFBeUQsS0FBSyxJQUFJO0FBQ2xwQjtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDOUI7QUFDdUI7QUFDNUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixnQkFBZ0IsMkVBQVc7QUFDM0I7QUFDQSxnQkFBZ0IsNEVBQVk7QUFDNUI7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyx1REFBSyxtQkFBbUIsdUJBQXVCLDBCQUEwQixhQUFhLDRFQUFZLEVBQUUsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQixXQUFXLDhFQUFjLEVBQUUsSUFBSSxrQkFBa0IsSUFBSSxzREFBSSxtQkFBbUIsV0FBVywrRUFBZSxFQUFFLElBQUksVUFBVSxzREFBSSxVQUFVLDhEQUE4RCxHQUFHLElBQUksc0RBQUksbUJBQW1CLFdBQVcsNEVBQVksRUFBRSxJQUFJLHFCQUFxQixLQUFLLElBQUksc0RBQUksQ0FBQyw4Q0FBSyxJQUFJLHNEQUFzRCxJQUFJO0FBQ25oQjtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ4QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ2Q7QUFDc0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBSSxtQkFBbUIsV0FBVyxnRkFBZ0IsRUFBRSxJQUFJO0FBQ3BFLG1CQUFtQixzREFBSSxDQUFDLGlEQUFRLElBQUksK0JBQStCO0FBQ25FLFNBQVMsR0FBRztBQUNaO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCeEIscUJBQXFCLFNBQUksSUFBSSxTQUFJO0FBQ2pDLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ2Y7QUFDYTtBQUNkO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUIscURBQUM7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyw0REFBUSxJQUFJLGNBQWMsR0FBRztBQUN0RTtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0Ly4vc3JjL2ltYWdlcy9kLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9zdHlsZXMvV29ya3NTdHlsZXMubW9kdWxlLnNjc3M/MGY4NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL01vZGFsLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1dvcmtJdGVtLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1dvcmtMaXN0LnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9wYWdlcy9Xb3Jrc1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaXRlbUxpc3RcIjpcImhHTFJlQWNNOE5NeU5EQWVDY0Z5XCIsXCJpdGVtXCI6XCJuVWM2elM4bllPenpuTG9UU2ZVZlwiLFwibnVtYmVyXCI6XCJCREw4UkdpU21Bb0d0N3RkZDNRRlwiLFwicGljdHVyZVwiOlwiaHAwQlJKZk50d1MyT2JuenIxTlFcIixcIm5hbWVcIjpcIldueDF3TFpWUVFBcW9SVWlLTjBlXCIsXCJtb2RhbFwiOlwiVmFxR0Vid3d0eGFhallYNkFrWHlcIixcImFjdGl2ZVwiOlwiaHJ1OG5Bclkya3VYV2MxYVdzdndcIixcIm1vZGFsQ29udGVudFwiOlwidmJPaktMYXVXam9KX1p1NGpuQ1pcIixcIm1vZGFsSW1nXCI6XCJuNnhyYTgwNVhyT2pVdzBwWDI5QVwiLFwibW9kYWxOYW1lXCI6XCJDWWhRVzVuWkxJWFZkUWcxeTkyZ1wiLFwibW9kYWxEZXNjXCI6XCJhYUdGY3lFNGtvQ1FydFRGSEo4b1wiLFwibW9kYWxUYWdzXCI6XCJsb29OMkp0dHBJWlg2TW5Md2RmVFwifTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9Xb3Jrc1N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbjtcclxuZnVuY3Rpb24gTW9kYWwoX2EpIHtcclxuICAgIHZhciB3b3JrID0gX2Eud29yaywgdmlzaWJsZSA9IF9hLnZpc2libGUsIHNldFZpc2libGUgPSBfYS5zZXRWaXNpYmxlO1xyXG4gICAgdmFyIHJvb3RDbGFzc2VzID0gW2NsYXNzZXMubW9kYWxdO1xyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICByb290Q2xhc3Nlcy5wdXNoKGNsYXNzZXMuYWN0aXZlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFZpc2libGUoZmFsc2UpOyB9LCBjbGFzc05hbWU6IHJvb3RDbGFzc2VzLmpvaW4oJyAnKSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxDb250ZW50IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLm1vZGFsSW1nLCB3aWR0aDogJzE1MHB4JywgaGVpZ2h0OiAnMTUwcHgnLCBzcmM6IHdvcmsucGljLCBhbHQ6ICdpbWFnZScgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxOYW1lIH0sIHsgY2hpbGRyZW46IHdvcmsubmFtZSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxEZXNjIH0sIHsgY2hpbGRyZW46IHdvcmsuZGVzYyB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLm1vZGFsVGFncyB9LCB7IGNoaWxkcmVuOiBbXCJUZWNobm9sb2dpZXMgdXNlZDogXCIsIHdvcmsudGFncy5qb2luKCcsICcpXSB9KSldIH0pKSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9zdHlsZXMvV29ya3NTdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XHJcbjtcclxuZnVuY3Rpb24gV29ya0l0ZW0oX2EpIHtcclxuICAgIHZhciBudW1iZXIgPSBfYS5udW1iZXIsIHdvcmsgPSBfYS53b3JrO1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCB2aXNpYmxlID0gX2JbMF0sIHNldFZpc2libGUgPSBfYlsxXTtcclxuICAgIHZhciBidG5jbCA9IGNsYXNzZXMuYnRuO1xyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICBidG5jbCA9IGNsYXNzZXMuYnRuQTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VmlzaWJsZSh0cnVlKTsgfSwgY2xhc3NOYW1lOiBjbGFzc2VzLml0ZW0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubnVtYmVyIH0sIHsgY2hpbGRyZW46IG51bWJlciB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMucGljdHVyZSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4Jywgc3JjOiB3b3JrLnBpYywgYWx0OiAnaW1hZ2UnIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5uYW1lIH0sIHsgY2hpbGRyZW46IHdvcmsubmFtZSB9KSldIH0pKSwgX2pzeChNb2RhbCwgeyB2aXNpYmxlOiB2aXNpYmxlLCBzZXRWaXNpYmxlOiBzZXRWaXNpYmxlLCB3b3JrOiB3b3JrIH0pXSB9KSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya0l0ZW07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFdvcmtJdGVtIGZyb20gJy4vV29ya0l0ZW0nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9zdHlsZXMvV29ya3NTdHlsZXMubW9kdWxlLnNjc3MnO1xyXG47XHJcbmZ1bmN0aW9uIFdvcmtMaXN0KF9hKSB7XHJcbiAgICB2YXIgd29ya3MgPSBfYS53b3JrcztcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5pdGVtTGlzdCB9LCB7IGNoaWxkcmVuOiB3b3Jrcy5tYXAoZnVuY3Rpb24gKHdvcmssIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfanN4KFdvcmtJdGVtLCB7IG51bWJlcjogaW5kZXggKyAxLCB3b3JrOiB3b3JrIH0sIHdvcmsuaWQpO1xyXG4gICAgICAgIH0pIH0pKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya0xpc3Q7XHJcbiIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV29ya0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JrTGlzdCc7XHJcbmltcG9ydCBkIGZyb20gJy4uL2ltYWdlcy9kLnBuZyc7XHJcbjtcclxuZnVuY3Rpb24gV29ya3NQYWdlKCkge1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHBpYzogZCxcclxuICAgICAgICAgICAgbmFtZTogJ1BvcnRmb2xpby1zaXRlJyxcclxuICAgICAgICAgICAgZGVzYzogJ0ludGVyYWN0aXZlIHNpdGUsIHRoYXQgc2hvd3MgdXNlZnVsbCBpbmZvcm1hdGlvbiBhYm91dCBtZS4nLFxyXG4gICAgICAgICAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnLCAnVHlwZVNjcmlwdCcsICdXZWJwYWNrJywgJ1NDU1MnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKSArIDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDYWxjdWxhdG9yJyxcclxuICAgICAgICAgICAgZGVzYzogJ1doeSBub3QuLi4nLFxyXG4gICAgICAgICAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnLCAnU0NTUyddXHJcbiAgICAgICAgfVxyXG4gICAgXSksIHdvcmtzID0gX2FbMF0sIHNldFdvcmtzID0gX2FbMV07XHJcbiAgICB2YXIgYWRkV29yayA9IGZ1bmN0aW9uIChuZXdXb3JrKSB7XHJcbiAgICAgICAgc2V0V29ya3MoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB3b3JrcywgdHJ1ZSksIFtuZXdXb3JrXSwgZmFsc2UpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChXb3JrTGlzdCwgeyB3b3Jrczogd29ya3MgfSkgfSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzUGFnZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9