(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      phone: '',
      status: false,
      sCounter: '',
      sDepartment: '',
      sUser: '',
      vCounter: 0,
      vDepartment: 0,
      vUser: 0,
      vPhone: 0,
      users: [],
      counters: [],
      department: [],
      IdDepartment: 0,
      IdCounter: 0,
      IdUser: 0,
      activePrompt: false
    };
  },
  methods: {
    departmentChange: function departmentChange() {
      this.readCounter();
    },
    counterChange: function counterChange() {
      this.readUsers();
    },
    manualTokenSave: function manualTokenSave() {
      var that = this; // eslint-disable-next-line no-empty

      if (!this.sDepartment) {
        this.vDepartment = 1;
        that.$vs.notify({
          time: 6000,
          title: 'Ошибка',
          text: 'Выберите отдел',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }

      if (!this.sCounter) {
        this.vCounter = 1;
        that.$vs.notify({
          time: 6000,
          title: 'Ошибка',
          text: 'Выберите кабинет',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }

      if (!this.sUser) {
        this.vUser = 1;
        that.$vs.notify({
          time: 6000,
          title: 'Ошибка',
          text: 'Выберите пользователя',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }

      if (!this.phone) {
        this.vPhone = 1;
        that.$vs.notify({
          time: 6000,
          title: 'Ошибка',
          text: 'Вводите номер мобильного клиента',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }

      if (this.vCounter === 0 && this.vDepartment === 0 && this.vUser === 0 && this.vPhone === 0) {
        that.$http.post('/api/create/manual-token', {
          id: that.sDepartment.id,
          counter_id: that.sCounter.id,
          user_id: that.sUser.id,
          status: that.status,
          phone: that.phone
        }, {
          headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('token'))
          }
        }).then(function (response) {
          that.users = response.data; // eslint-disable-next-line no-unused-vars
        })["catch"](function (error) {});
      }
    },
    readUsers: function readUsers() {
      var that = this;
      that.$http.post('/api/users/list-for-counter', {
        id: that.sDepartment.id,
        counter_id: that.sCounter.id
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.users = response.data;
        that.sUser = that.users[0]; // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {});
    },
    readDepartment: function readDepartment() {
      var that = this;
      that.$http.post('/api/departments/list', {
        length: that.sPage,
        page: that.currentx,
        search: that.search,
        order: that.order
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.department = response.data;
        that.sDepartment = that.department[0];
        that.readCounter(); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {});
    },
    readCounter: function readCounter() {
      var that = this;
      that.$http.post('/api/counter/list-for-department', {
        id: that.sDepartment.id
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.counters = response.data;
        that.sCounter = that.counters[0];
        that.readUsers(); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    // this.readCounter()
    this.readDepartment(); // this.readUsers()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col w-full mb-base" },
    [
      _c("vx-card", { attrs: { title: "РУЧНОЙ ТОКЕН" } }, [
        _c("div", { staticClass: "vx-row mb-12" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Номер мобильного клиента *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col  w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  "icon-pack": "feather",
                  icon: "icon-user",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-12" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Отдел *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full mt-5" },
            [
              _c("v-select", {
                staticClass: "w-full",
                attrs: { options: _vm.department },
                on: {
                  input: function($event) {
                    return _vm.departmentChange()
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "list-department",
                    fn: function() {
                      return [
                        _c("li", { staticStyle: { "text-align": "center" } }, [
                          _vm._v("Выберите Отдел")
                        ])
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "no-options",
                    fn: function(ref) {
                      var search = ref.search
                      var searching = ref.searching
                      var loading = ref.loading
                      return [
                        _vm._v(
                          "\n                        Нет данных.\n                    "
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.sDepartment,
                  callback: function($$v) {
                    _vm.sDepartment = $$v
                  },
                  expression: "sDepartment"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-12" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Кабинет *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full mt-5" },
            [
              _c("v-select", {
                staticClass: "w-full",
                attrs: { options: _vm.counters },
                on: {
                  input: function($event) {
                    return _vm.counterChange()
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "list-counter",
                    fn: function() {
                      return [
                        _c("li", { staticStyle: { "text-align": "center" } }, [
                          _vm._v("Выберите Кабинет")
                        ])
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "no-options",
                    fn: function(ref) {
                      var search = ref.search
                      var searching = ref.searching
                      var loading = ref.loading
                      return [
                        _vm._v(
                          "\n                        Нет данных.\n                    "
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.sCounter,
                  callback: function($$v) {
                    _vm.sCounter = $$v
                  },
                  expression: "sCounter"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-12" }, [
          _c(
            "div",
            { staticClass: "vx-col  w-full" },
            [
              _c("span", [_vm._v("Пользователы *")]),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "w-full",
                attrs: { options: _vm.users },
                on: {
                  input: function($event) {
                    return _vm.counterChange()
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "list-user",
                    fn: function() {
                      return [
                        _c("li", { staticStyle: { "text-align": "center" } }, [
                          _vm._v("Выберите пользователя")
                        ])
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "no-options",
                    fn: function(ref) {
                      var search = ref.search
                      var searching = ref.searching
                      var loading = ref.loading
                      return [
                        _vm._v(
                          "\n                        Нет данных.\n                    "
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.sUser,
                  callback: function($$v) {
                    _vm.sUser = $$v
                  },
                  expression: "sUser"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col w-full mt-5" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-12" }, [
          _c("div", { staticClass: "vx-col w-full" }, [
            _c("span", [_vm._v("VIP")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full mt-5" },
            [
              _c(
                "vs-switch",
                {
                  model: {
                    value: _vm.status,
                    callback: function($$v) {
                      _vm.status = $$v
                    },
                    expression: "status"
                  }
                },
                [
                  _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                    _vm._v("Активный")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                    _vm._v("Неактивный")
                  ])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col sm:w-2/3 w-full ml-auto" },
          [
            _c(
              "vs-button",
              {
                staticClass: "mr-3 mb-2",
                on: {
                  click: function($event) {
                    return _vm.manualTokenSave()
                  }
                }
              },
              [_vm._v("Submit")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mb-2",
                attrs: { color: "warning", type: "border" }
              },
              [_vm._v("\n                Reset\n            ")]
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

/***/ "./resources/js/src/views/admin/token/manual-token.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/admin/token/manual-token.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual-token.vue?vue&type=template&id=fd40895c& */ "./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c&");
/* harmony import */ var _manual_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-token.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _manual_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/token/manual-token.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./manual-token.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/manual-token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./manual-token.vue?vue&type=template&id=fd40895c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/token/manual-token.vue?vue&type=template&id=fd40895c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_token_vue_vue_type_template_id_fd40895c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);