(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
  methods: {
    successUpload: function successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col md:w-1/2 w-full mb-base" },
    [
      _c("vx-card", { attrs: { title: "ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ" } }, [
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Имя *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  "icon-pack": "feather",
                  icon: "icon-user",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input1,
                  callback: function($$v) {
                    _vm.input1 = $$v
                  },
                  expression: "input1"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Фамилия *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  "icon-pack": "feather",
                  icon: "icon-user",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input2,
                  callback: function($$v) {
                    _vm.input2 = $$v
                  },
                  expression: "input2"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Электронная почта *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  type: "email",
                  "icon-pack": "feather",
                  icon: "icon-mail",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input6,
                  callback: function($$v) {
                    _vm.input6 = $$v
                  },
                  expression: "input6"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Пароль *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  type: "password",
                  "icon-pack": "feather",
                  icon: "icon-lock",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input8,
                  callback: function($$v) {
                    _vm.input8 = $$v
                  },
                  expression: "input8"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Подтвердите пароль *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  type: "password",
                  "icon-pack": "feather",
                  icon: "icon-lock",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input9,
                  callback: function($$v) {
                    _vm.input9 = $$v
                  },
                  expression: "input9"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Тип пользователя *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
            [
              _c(
                "vs-select",
                { staticClass: "w-full select-large" },
                _vm._l(_vm.cityOptions, function(item, index) {
                  return _c("vs-select-item", {
                    key: index,
                    staticClass: "w-full",
                    attrs: {
                      "icon-pack": "feather",
                      icon: "icon-alert-circle",
                      "icon-no-border": "",
                      value: item.value,
                      text: item.text
                    }
                  })
                }),
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Номер мобильного *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  "icon-pack": "feather",
                  icon: "icon-smartphone",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.input7,
                  callback: function($$v) {
                    _vm.input7 = $$v
                  },
                  expression: "input7"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c(
            "div",
            { staticClass: "mt-5" },
            [
              _c("vs-upload", {
                attrs: {
                  automatic: "",
                  action: "https://jsonplaceholder.typicode.com/posts/"
                },
                on: { "on-success": _vm.successUpload }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Статус *")])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "demo-alignment" }, [
            _c(
              "li",
              [
                _c(
                  "vs-radio",
                  {
                    attrs: { color: "success", "vs-value": "Success" },
                    model: {
                      value: _vm.radios2,
                      callback: function($$v) {
                        _vm.radios2 = $$v
                      },
                      expression: "radios2"
                    }
                  },
                  [_vm._v("Активный")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "vs-radio",
                  {
                    attrs: { color: "danger", "vs-value": "Danger" },
                    model: {
                      value: _vm.radios2,
                      callback: function($$v) {
                        _vm.radios2 = $$v
                      },
                      expression: "radios2"
                    }
                  },
                  [_vm._v("Деактивирован\n\t\t\t\t\t")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col sm:w-2/3 w-full ml-auto" },
          [
            _c("vs-button", { staticClass: "mr-3 mb-2" }, [_vm._v("Submit")]),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mb-2",
                attrs: { color: "warning", type: "border" },
                on: {
                  click: function($event) {
                    _vm.input1 = _vm.input2 = ""
                    _vm.check2 = false
                  }
                }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/users/create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/admin/users/create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=770380ad& */ "./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/users/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/users/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=770380ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/users/create.vue?vue&type=template&id=770380ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_770380ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);