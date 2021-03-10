(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mailTo: ''
    };
  },
  computed: {},
  methods: {
    printInvoice: function printInvoice() {
      var newWin = window.frames['printf'];
      newWin.document.write('<body onload="window.print()"><div style="max-width:400px;margin:0 auto"> <div id="receipt-data"> <div class="centered"> <h1 style="font-size: 65px; text-align: center">D5000</h1><div> <p>Дата: 2020-11-28 19:51:32  </p></div></div> <table>   <tfoot> <tr> <th colspan="2">Кабинет</th> <th style="text-align:right">Адрес</th> </tr> </tfoot> </table> </div> </div></body>');
      newWin.document.close();
    }
  },
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "invoice-page" } }, [
    _c(
      "div",
      { staticClass: "demo-alignment  " },
      [
        _c(
          "vs-button",
          {
            staticClass: "mb-base mr-3 large",
            attrs: { "icon-pack": "feather", icon: "icon icon-file" },
            on: { click: _vm.printInvoice }
          },
          [_vm._v("Рентген")]
        ),
        _vm._v(" "),
        _c(
          "vs-button",
          {
            staticClass: "mb-base mr-3 large",
            attrs: { "icon-pack": "feather", icon: "icon icon-file" },
            on: { click: _vm.printInvoice }
          },
          [_vm._v("Озмоишгох")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "iframe",
      {
        staticClass: "dialog-t-enter",
        attrs: { id: "printf", name: "printf" }
      },
      [
        _c("html", [
          _c("head"),
          _c("body", { attrs: { onload: "window.print()" } }, [_vm._v("11")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/token/active-current-token.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/admin/token/active-current-token.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-current-token.vue?vue&type=template&id=1b31e384& */ "./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384&");
/* harmony import */ var _active_current_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-current-token.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _active_current_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__["render"],
  _active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/token/active-current-token.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_active_current_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./active-current-token.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_active_current_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./active-current-token.vue?vue&type=template&id=1b31e384& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/active-current-token.vue?vue&type=template&id=1b31e384&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_active_current_token_vue_vue_type_template_id_1b31e384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);