(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      users: [{
        'id': 1,
        'username': 'Bret',
        'total': '1',
        'stoped': '3',
        'pending': '2',
        'complete': '34'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { title: "ОТЧЕТ ОБ ЭФФЕКТИВНОСТИ" } },
    [
      _c(
        "vs-table",
        {
          attrs: { data: _vm.users },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c("vs-td", { attrs: { data: tr.id } }, [
                        _vm._v("\n\t\t\t\t\t" + _vm._s(tr.id) + "\n\t\t\t\t")
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.username } }, [
                        _vm._v("\n\t\t\t\t" + _vm._s(tr.name) + "\n\t\t\t    ")
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.total } }, [
                        _vm._v("\n\t\t\t\t\t" + _vm._s(tr.total) + "\n\t\t\t\t")
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.stoped } }, [
                        _vm._v(
                          "\n\t\t\t\t\t" + _vm._s(tr.stoped) + "\n\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.pending } }, [
                        _vm._v(
                          "\n\t\t\t\t\t" + _vm._s(tr.pending) + "\n\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.complete } }, [
                        _vm._v(
                          "\n\t\t\t\t\t" + _vm._s(tr.complete) + "\n\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "template",
                        { staticClass: "expand-user", slot: "expand" },
                        [
                          _c(
                            "div",
                            { staticClass: "con-expand-users w-full" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "con-btns-user flex items-center justify-between"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "con-userx flex items-center justify-start"
                                    },
                                    [
                                      _c("vs-avatar", {
                                        attrs: {
                                          badge: tr.id,
                                          size: "45px",
                                          src:
                                            "https://randomuser.me/api/portraits/women/" +
                                            tr.id +
                                            ".jpg"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(_vm._s(tr.name))])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c("vs-button", {
                                        staticClass: "mr-2",
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-info"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        staticClass: "mr-2",
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-edit",
                                          color: "success"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-trash",
                                          color: "danger"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    2
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("ФИО")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Общее")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Остановлен")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("В ожидании")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Завершить")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/token/performance-token.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/admin/token/performance-token.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance-token.vue?vue&type=template&id=7ab2ab2c& */ "./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c&");
/* harmony import */ var _performance_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-token.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _performance_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/token/performance-token.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_performance_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./performance-token.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/performance-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_performance_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./performance-token.vue?vue&type=template&id=7ab2ab2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/performance-token.vue?vue&type=template&id=7ab2ab2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_performance_token_vue_vue_type_template_id_7ab2ab2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);