(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      checkbox_remember_me: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$validator.localize({
        'en': {
          'messages': {
            'required': 'Это поле обязательно к заполнению',
            'min': 'это поле должно содержать не менее {length} символов',
            'max': function max(_, _ref) {
              var length = _ref.length;
              return "\u044D\u0442\u043E \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ".concat(length, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
            }
          }
        }
      });
      this.$validator.validateAll().then(function (result) {
        if (!result) {
          _this.$vs.notify({
            time: 6000,
            title: 'Ошибка',
            text: 'Введите обязательную поля!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          return false;
        }
      }); // Loading

      this.$vs.loading();
      localStorage.setItem('token', null);
      var that = this;
      this.$http.post('/api/login', {
        username: this.email,
        password: this.password // headers: headers

      }).then(function (response) {
        // handle success
        localStorage.setItem('token', response.data.access_token);
        that.$http.post('/api/check-auth', {}, {
          headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('token'))
          }
        }).then(function (response) {
          that.$store.commit('UPDATE_USER_INFO', {
            displayName: response.data.name,
            email: response.data.email,
            photoURL: response.data.avatar,
            userRole: response.data.role,
            roleName: response.data.role_name,
            uid: response.data.id,
            department: response.data.department,
            counter: response.data.counter
          });

          if (that.$store.state.AppActiveUser.roleName === 'admin') {
            that.$router.push('/')["catch"](function () {});
          } else if (that.$store.state.AppActiveUser.roleName === 'cashier') {
            that.$router.push('/token/auto-token')["catch"](function () {});
          } else if (that.$store.state.AppActiveUser.roleName === 'receiver') {
            that.$router.push('/queue-user')["catch"](function () {});
          } else if (that.$store.state.AppActiveUser.roleName === 'display') {
            that.$router.push('/queue')["catch"](function () {});
          }

          that.$vs.loading.close();
          that.$vs.notify({
            time: 6000,
            title: 'Добро пожаловать',
            text: that.$store.state.AppActiveUser.displayName,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          });
        })["catch"](function (error) {
          if (error.response.status == 401) {
            localStorage.setItem('token', null);
            that.$vs.loading.close();
          }
        });
      })["catch"](function (error) {
        localStorage.setItem('token', null);
        that.$vs.loading.close();

        if (error.response.status == 401) {
          that.$vs.notify({
            time: 6000,
            title: 'Ошибка',
            text: 'Неверный логин или пароль',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
          that.password = '';
        }
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "vx-row no-gutter justify-center items-center"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col hidden lg:block lg:w-1/2" },
                      [
                        _c("img", {
                          staticClass: "mx-auto",
                          attrs: {
                            src: __webpack_require__(/*! @assets/images/pages/login.png */ "./resources/assets/images/pages/login.png"),
                            alt: "login"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "p-8 login-tabs-container" },
                          [
                            _c("div", { staticClass: "vx-card__title mb-4" }, [
                              _c("h4", { staticClass: "mb-4" }, [
                                _vm._v("Авторизоваться")
                              ]),
                              _vm._v(" "),
                              _c("p", [_vm._v("Добро пожаловать!")]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v("Пожалуйста, войдите в свой аккаунт.")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("vs-divider"),
                            _vm._v(" "),
                            _c("form", [
                              _c(
                                "div",
                                { staticClass: "mt-8" },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|min:3",
                                        expression: "'required|min:3'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      name: "email",
                                      "icon-no-border": "",
                                      icon: "icon icon-user",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Email"
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has("email"),
                                          expression: "errors.has('email')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|min:6",
                                        expression: "'required|min:6'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      type: "password",
                                      name: "password",
                                      "icon-no-border": "",
                                      icon: "icon icon-lock",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Пароль"
                                    },
                                    model: {
                                      value: _vm.password,
                                      callback: function($$v) {
                                        _vm.password = $$v
                                      },
                                      expression: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has("password"),
                                          expression: "errors.has('password')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("password"))
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "float-right mb-8 mt-8",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.login($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Войти\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/login.png":
/*!*************************************************!*\
  !*** ./resources/assets/images/pages/login.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/login.png?d814adb752d2d047b8292d6de603025f";

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba09a9b8& */ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=ba09a9b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);