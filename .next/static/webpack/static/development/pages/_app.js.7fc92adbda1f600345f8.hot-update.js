webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var actionTypes = {};
var initialState = {
  products: [{
    name: 'Котик 1',
    price: 6000,
    description: 'Рыжий котик',
    image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-videt-ryzhego-kota.jpg',
    id: 1
  }, {
    name: 'Котик 2',
    price: 7000,
    description: 'Черный котик',
    image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
    id: 2
  }, {
    name: 'Котик 3',
    price: 1500,
    description: 'Белый котик',
    image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-k-chemu-snitsya-belyj-kot.jpg',
    id: 3
  }, {
    name: 'Котик 2',
    price: 7000,
    description: 'Черный котик',
    image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
    id: 4
  }, {
    name: 'Котик 3',
    price: 1500,
    description: 'Белый котик',
    image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-k-chemu-snitsya-belyj-kot.jpg',
    id: 5
  }, {
    name: 'Котик 2',
    price: 7000,
    description: 'Черный котик',
    image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
    id: 6
  }] // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
}

/***/ })

})
//# sourceMappingURL=_app.js.7fc92adbda1f600345f8.hot-update.js.map