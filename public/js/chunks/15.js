(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// vSelect
  },
  data: function data() {
    return {
      department: []
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onClick: function onClick(id) {
      var that = this;
      this.$vs.loading({
        type: 'corners',
        scale: 1
      });
      that.$http.post('/api/create/auto-token', {
        id: id
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      } // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        // that.department = response.data
        that.$vs.loading.close('.con-vs-loading'); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {
        that.$vs.loading.close('.con-vs-loading');
      });
    },
    readData: function readData() {
      var that = this;
      this.$vs.loading({
        type: 'corners',
        scale: 1
      });
      that.$http.post('/api/department/active', {}, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.department = response.data;
        that.$vs.loading.close('.con-vs-loading'); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {
        that.$vs.loading.close('.con-vs-loading');
      });
    }
  },
  created: function created() {
    this.readData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "vx-row" },
    _vm._l(_vm.department, function(value, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass:
            "vx-col w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-base",
          staticStyle: { "max-height": "250px", "min-height": "250px" },
          attrs: { data: value }
        },
        [
          _c(
            "vx-card",
            {
              staticClass: "h-full",
              attrs: {
                title: value.name,
                "title-color": "#fff",
                "card-background": "primary",
                "content-color": "#fff"
              },
              on: {
                click: function($event) {
                  return _vm.onClick(value.id)
                }
              }
            },
            [
              _c("p", { staticClass: "mb-3" }, [
                _vm._v(
                  " " +
                    _vm._s(
                      value.description && value.description.length > 150
                        ? value.description.substring(0, 149) + "..."
                        : value.description
                    )
                )
              ])
            ]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/token/auto-token.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/admin/token/auto-token.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-token.vue?vue&type=template&id=4348b80a& */ "./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a&");
/* harmony import */ var _auto_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-token.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _auto_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/token/auto-token.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-token.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/auto-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./auto-token.vue?vue&type=template&id=4348b80a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/auto-token.vue?vue&type=template&id=4348b80a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_token_vue_vue_type_template_id_4348b80a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);