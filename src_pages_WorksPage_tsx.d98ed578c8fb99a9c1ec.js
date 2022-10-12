"use strict";
(self["webpackChunkportfolio_project"] = self["webpackChunkportfolio_project"] || []).push([["src_pages_WorksPage_tsx"],{

/***/ "./src/images/port.png":
/*!*****************************!*\
  !*** ./src/images/port.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "port.png");

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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ onClick: function () { return setVisible(false); }, className: rootClasses.join(' ') }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ onClick: function (e) { return e.stopPropagation(); }, className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalContent }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalImg, width: '150px', height: '150px', src: work.pic, alt: 'image' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalName }, { children: work.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalDesc }, { children: work.desc })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalTags }, { children: ["GitHub link: ", work.glink] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalTags }, { children: ["Technologies used: ", work.tags.join(', ')] }))] })) })));
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ onClick: function () { return setVisible(true); }, className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].number }, { children: number })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].picture }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { width: '150px', height: '100px', src: work.pic, alt: 'image' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _styles_WorksStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].name }, { children: work.name }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], { visible: visible, setVisible: setVisible, work: work })] }));
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
/* harmony import */ var _images_port_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/port.png */ "./src/images/port.png");




;
function WorksPage() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: Date.now(),
            pic: _images_port_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            name: 'Portfolio-site',
            desc: 'Interactive site, that shows usefull information about me.',
            tags: ['React', 'JavaScript', 'TypeScript', 'Webpack', 'SCSS'],
            glink: "You're already here!"
        },
        //{
        //    id: Date.now() + 1,
        //    name: 'Calculator',
        //    desc: 'Why not...',
        //    tags: ['React', 'JavaScript', 'SCSS']
        //}
    ]), works = _a[0], setWorks = _a[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_WorkList__WEBPACK_IMPORTED_MODULE_2__["default"], { works: works }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1dvcmtzUGFnZV90c3guZDk4ZWQ1NzhjOGZiOTlhOWMxZWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixhQUFhOzs7Ozs7Ozs7Ozs7OztBQ0FuRDtBQUNBLGlFQUFlLENBQUMsK1lBQStZOzs7Ozs7Ozs7Ozs7Ozs7O0FDRC9aLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDUDtBQUN4RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkVBQWE7QUFDcEM7QUFDQSx5QkFBeUIsOEVBQWM7QUFDdkM7QUFDQSxZQUFZLHNEQUFJLG1CQUFtQix1QkFBdUIsMkJBQTJCLG9DQUFvQyxJQUFJLFVBQVUsdURBQUssbUJBQW1CLHdCQUF3Qiw2QkFBNkIsYUFBYSxvRkFBb0IsRUFBRSxJQUFJLFdBQVcsc0RBQUksVUFBVSxXQUFXLGdGQUFnQixnRUFBZ0UsR0FBRyxzREFBSSxtQkFBbUIsV0FBVyxpRkFBaUIsRUFBRSxJQUFJLHFCQUFxQixJQUFJLHNEQUFJLG1CQUFtQixXQUFXLGlGQUFpQixFQUFFLElBQUkscUJBQXFCLElBQUksdURBQUssbUJBQW1CLFdBQVcsaUZBQWlCLEVBQUUsSUFBSSx5Q0FBeUMsSUFBSSx1REFBSyxtQkFBbUIsV0FBVyxpRkFBaUIsRUFBRSxJQUFJLHlEQUF5RCxLQUFLLElBQUk7QUFDenZCO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCckIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUM5QjtBQUN1QjtBQUM1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCLGdCQUFnQiwyRUFBVztBQUMzQjtBQUNBLGdCQUFnQiw0RUFBWTtBQUM1QjtBQUNBLFlBQVksdURBQUssVUFBVSxXQUFXLHVEQUFLLG1CQUFtQix1QkFBdUIsMEJBQTBCLGFBQWEsNEVBQVksRUFBRSxJQUFJLFdBQVcsc0RBQUksbUJBQW1CLFdBQVcsOEVBQWMsRUFBRSxJQUFJLGtCQUFrQixJQUFJLHNEQUFJLG1CQUFtQixXQUFXLCtFQUFlLEVBQUUsSUFBSSxVQUFVLHNEQUFJLFVBQVUsOERBQThELEdBQUcsSUFBSSxzREFBSSxtQkFBbUIsV0FBVyw0RUFBWSxFQUFFLElBQUkscUJBQXFCLEtBQUssSUFBSSxzREFBSSxDQUFDLDhDQUFLLElBQUksc0RBQXNELElBQUk7QUFDbmhCO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnhCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDZDtBQUNzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFJLG1CQUFtQixXQUFXLGdGQUFnQixFQUFFLElBQUk7QUFDcEUsbUJBQW1CLHNEQUFJLENBQUMsaURBQVEsSUFBSSwrQkFBK0I7QUFDbkUsU0FBUyxHQUFHO0FBQ1o7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ3QjtBQUNmO0FBQ2E7QUFDUjtBQUN0QztBQUNBO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyw0REFBUSxJQUFJLGNBQWMsR0FBRztBQUN0RTtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0Ly4vc3JjL2ltYWdlcy9wb3J0LnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9zdHlsZXMvV29ya3NTdHlsZXMubW9kdWxlLnNjc3M/MGY4NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL01vZGFsLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1dvcmtJdGVtLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL1dvcmtMaXN0LnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcHJvamVjdC8uL3NyYy9wYWdlcy9Xb3Jrc1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwb3J0LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaXRlbUxpc3RcIjpcImhHTFJlQWNNOE5NeU5EQWVDY0Z5XCIsXCJpdGVtXCI6XCJuVWM2elM4bllPenpuTG9UU2ZVZlwiLFwibnVtYmVyXCI6XCJCREw4UkdpU21Bb0d0N3RkZDNRRlwiLFwicGljdHVyZVwiOlwiaHAwQlJKZk50d1MyT2JuenIxTlFcIixcIm5hbWVcIjpcIldueDF3TFpWUVFBcW9SVWlLTjBlXCIsXCJtb2RhbFwiOlwiVmFxR0Vid3d0eGFhallYNkFrWHlcIixcImFjdGl2ZVwiOlwiaHJ1OG5Bclkya3VYV2MxYVdzdndcIixcIm1vZGFsQ29udGVudFwiOlwidmJPaktMYXVXam9KX1p1NGpuQ1pcIixcIm1vZGFsSW1nXCI6XCJuNnhyYTgwNVhyT2pVdzBwWDI5QVwiLFwibW9kYWxOYW1lXCI6XCJDWWhRVzVuWkxJWFZkUWcxeTkyZ1wiLFwibW9kYWxEZXNjXCI6XCJhYUdGY3lFNGtvQ1FydFRGSEo4b1wiLFwibW9kYWxUYWdzXCI6XCJsb29OMkp0dHBJWlg2TW5Md2RmVFwifTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9Xb3Jrc1N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbjtcclxuZnVuY3Rpb24gTW9kYWwoX2EpIHtcclxuICAgIHZhciB3b3JrID0gX2Eud29yaywgdmlzaWJsZSA9IF9hLnZpc2libGUsIHNldFZpc2libGUgPSBfYS5zZXRWaXNpYmxlO1xyXG4gICAgdmFyIHJvb3RDbGFzc2VzID0gW2NsYXNzZXMubW9kYWxdO1xyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICByb290Q2xhc3Nlcy5wdXNoKGNsYXNzZXMuYWN0aXZlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFZpc2libGUoZmFsc2UpOyB9LCBjbGFzc05hbWU6IHJvb3RDbGFzc2VzLmpvaW4oJyAnKSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxDb250ZW50IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLm1vZGFsSW1nLCB3aWR0aDogJzE1MHB4JywgaGVpZ2h0OiAnMTUwcHgnLCBzcmM6IHdvcmsucGljLCBhbHQ6ICdpbWFnZScgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxOYW1lIH0sIHsgY2hpbGRyZW46IHdvcmsubmFtZSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxEZXNjIH0sIHsgY2hpbGRyZW46IHdvcmsuZGVzYyB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLm1vZGFsVGFncyB9LCB7IGNoaWxkcmVuOiBbXCJHaXRIdWIgbGluazogXCIsIHdvcmsuZ2xpbmtdIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMubW9kYWxUYWdzIH0sIHsgY2hpbGRyZW46IFtcIlRlY2hub2xvZ2llcyB1c2VkOiBcIiwgd29yay50YWdzLmpvaW4oJywgJyldIH0pKV0gfSkpIH0pKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9Xb3Jrc1N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcclxuO1xyXG5mdW5jdGlvbiBXb3JrSXRlbShfYSkge1xyXG4gICAgdmFyIG51bWJlciA9IF9hLm51bWJlciwgd29yayA9IF9hLndvcms7XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIHZpc2libGUgPSBfYlswXSwgc2V0VmlzaWJsZSA9IF9iWzFdO1xyXG4gICAgdmFyIGJ0bmNsID0gY2xhc3Nlcy5idG47XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIGJ0bmNsID0gY2xhc3Nlcy5idG5BO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRWaXNpYmxlKHRydWUpOyB9LCBjbGFzc05hbWU6IGNsYXNzZXMuaXRlbSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5udW1iZXIgfSwgeyBjaGlsZHJlbjogbnVtYmVyIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5waWN0dXJlIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyB3aWR0aDogJzE1MHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBzcmM6IHdvcmsucGljLCBhbHQ6ICdpbWFnZScgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLm5hbWUgfSwgeyBjaGlsZHJlbjogd29yay5uYW1lIH0pKV0gfSkpLCBfanN4KE1vZGFsLCB7IHZpc2libGU6IHZpc2libGUsIHNldFZpc2libGU6IHNldFZpc2libGUsIHdvcms6IHdvcmsgfSldIH0pKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrSXRlbTtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgV29ya0l0ZW0gZnJvbSAnLi9Xb3JrSXRlbSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9Xb3Jrc1N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbjtcclxuZnVuY3Rpb24gV29ya0xpc3QoX2EpIHtcclxuICAgIHZhciB3b3JrcyA9IF9hLndvcmtzO1xyXG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLml0ZW1MaXN0IH0sIHsgY2hpbGRyZW46IHdvcmtzLm1hcChmdW5jdGlvbiAod29yaywgaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9qc3goV29ya0l0ZW0sIHsgbnVtYmVyOiBpbmRleCArIDEsIHdvcms6IHdvcmsgfSwgd29yay5pZCk7XHJcbiAgICAgICAgfSkgfSkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3JrTGlzdDtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JrTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmtMaXN0JztcclxuaW1wb3J0IHBvcnQgZnJvbSAnLi4vaW1hZ2VzL3BvcnQucG5nJztcclxuO1xyXG5mdW5jdGlvbiBXb3Jrc1BhZ2UoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgcGljOiBwb3J0LFxyXG4gICAgICAgICAgICBuYW1lOiAnUG9ydGZvbGlvLXNpdGUnLFxyXG4gICAgICAgICAgICBkZXNjOiAnSW50ZXJhY3RpdmUgc2l0ZSwgdGhhdCBzaG93cyB1c2VmdWxsIGluZm9ybWF0aW9uIGFib3V0IG1lLicsXHJcbiAgICAgICAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCcsICdUeXBlU2NyaXB0JywgJ1dlYnBhY2snLCAnU0NTUyddLFxyXG4gICAgICAgICAgICBnbGluazogXCJZb3UncmUgYWxyZWFkeSBoZXJlIVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICBpZDogRGF0ZS5ub3coKSArIDEsXHJcbiAgICAgICAgLy8gICAgbmFtZTogJ0NhbGN1bGF0b3InLFxyXG4gICAgICAgIC8vICAgIGRlc2M6ICdXaHkgbm90Li4uJyxcclxuICAgICAgICAvLyAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnLCAnU0NTUyddXHJcbiAgICAgICAgLy99XHJcbiAgICBdKSwgd29ya3MgPSBfYVswXSwgc2V0V29ya3MgPSBfYVsxXTtcclxuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFdvcmtMaXN0LCB7IHdvcmtzOiB3b3JrcyB9KSB9KSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya3NQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=