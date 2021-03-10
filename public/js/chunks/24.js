(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("vx-card", { attrs: { title: "ДОБАВИТЬ ОТДЕЛ" } }, [
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
            _c("span", [_vm._v("Описание")])
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
                  icon: "icon-alert-circle",
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
            _c("span", [_vm._v("Клавиша для режима клавиатуры *")])
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
                  [_vm._v("Деактивирован\n\t\t\t\t")]
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

/***/ "./resources/js/src/views/admin/department/create.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/admin/department/create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3807deff& */ "./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/department/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=3807deff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/department/create.vue?vue&type=template&id=3807deff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3807deff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);