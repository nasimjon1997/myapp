(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      sId: 0,
      appName: '',
      address: '',
      copyright: '',
      reader: new FileReader(),
      mobile: '',
      email: '',
      description: '',
      sTimeZone: '',
      Logo: '',
      favicon: '',
      timeZones: []
    };
  },
  methods: {
    ResetAppSettings: function ResetAppSettings() {
      this.appName = '';
      this.address = '';
      this.copyright = '';
      this.mobile = '';
      this.email = '';
      this.description = '';
      this.sTimeZone = '';
      this.Logo = '';
      this.favicon = '';
    },
    SaveAppSettings: function SaveAppSettings() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        var that = _this;

        if (!result || !that.sTimeZone) {
          that.activePrompt = true;

          _this.$vs.notify({
            time: 6000,
            title: 'Ошибка',
            text: 'Введите обязательную поля!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          return false;
        } else {
          // eslint-disable-next-line no-empty
          that.$http.post('/api/app-settings/save', {
            id: _this.sId,
            appName: _this.appName,
            address: _this.address,
            copyright: _this.copyright,
            mobile: _this.mobile,
            email: _this.email,
            description: _this.description,
            sTimeZone: _this.sTimeZone.id,
            Logo: _this.Logo,
            favicon: _this.favicon
          }, {
            headers: {
              'Authorization': "Bearer ".concat(localStorage.getItem('token'))
            }
          } // eslint-disable-next-line no-unused-vars
          ).then(function (response) {
            that.readSettingsList();
            that.$vs.notify({
              time: 6000,
              title: 'Данные успешно сохранены',
              text: 'Введите обязательную поля!',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'success'
            }); // eslint-disable-next-line no-unused-vars
          })["catch"](function (error) {});
        }
      });
    },
    timeZoneList: function timeZoneList() {
      var that = this; // eslint-disable-next-line no-empty

      that.$http.post('/api/time-zone-list', {}, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      } // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        that.timeZones = response.data;
        that.sTimeZone = that.timeZones[0]; // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {});
    },
    readSettingsList: function readSettingsList() {
      var that = this; // eslint-disable-next-line no-empty

      that.$http.post('/api/app-settings', {}, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      } // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        that.sTimeZone = response.data.select_timezone;
        that.timeZones = response.data.timezones;
        that.sId = response.data.settings.id;
        that.appName = response.data.settings.title;
        that.description = response.data.settings.description;
        that.email = response.data.settings.email;
        that.mobile = response.data.settings.phone;
        that.email = response.data.settings.email;
        that.address = response.data.settings.address;
        that.copyright = response.data.settings.copyright_text; // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {});
    },
    onSelectLogo: function onSelectLogo(e) {
      var _this2 = this;

      if (!e.target.files.length) return; // eslint-disable-next-line no-undef

      this.file = e.target.files[0];
      this.reader.readAsDataURL(this.file);

      this.reader.onload = function (e) {
        _this2.Logo = e.target.result;
        console.log(_this2.Logo);
      };
    },
    onSelectFavicon: function onSelectFavicon(e) {
      var _this3 = this;

      if (!e.target.files.length) return; // eslint-disable-next-line no-undef

      this.file = e.target.files[0];
      this.reader.readAsDataURL(this.file);

      this.reader.onload = function (e) {
        _this3.favicon = e.target.result;
        console.log(_this3.favicon);
      };
    }
  },
  created: function created() {
    // this.timeZoneList()
    this.readSettingsList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("vx-card", { attrs: { title: "НАСТРОЙКА ПРИЛОЖЕНИЯ" } }, [
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full mb-base",
                attrs: { "label-placeholder": "Название приложения *" },
                model: {
                  value: _vm.appName,
                  callback: function($$v) {
                    _vm.appName = $$v
                  },
                  expression: "appName"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-textarea", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { label: "Описание *", rows: "3" },
                model: {
                  value: _vm.description,
                  callback: function($$v) {
                    _vm.description = $$v
                  },
                  expression: "description"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { "label-placeholder": "Email *" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { "label-placeholder": "Номер мобильного телефона *" },
                model: {
                  value: _vm.mobile,
                  callback: function($$v) {
                    _vm.mobile = $$v
                  },
                  expression: "mobile"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { "label-placeholder": "Адрес *" },
                model: {
                  value: _vm.address,
                  callback: function($$v) {
                    _vm.address = $$v
                  },
                  expression: "address"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "w-full",
                attrs: { "label-placeholder": "Авторское право *" },
                model: {
                  value: _vm.copyright,
                  callback: function($$v) {
                    _vm.copyright = $$v
                  },
                  expression: "copyright"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Часовой пояс *")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c("v-select", {
                staticClass: "w-full",
                attrs: { options: _vm.timeZones },
                scopedSlots: _vm._u([
                  {
                    key: "list-sTimeZone",
                    fn: function() {
                      return [
                        _c("li", { staticStyle: { "text-align": "center" } }, [
                          _vm._v("Выберите Часовой пояс")
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
                  value: _vm.sTimeZone,
                  callback: function($$v) {
                    _vm.sTimeZone = $$v
                  },
                  expression: "sTimeZone"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Favicon")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col w-full" }, [
            _c("input", {
              staticClass: "w-full",
              attrs: { type: "file", accept: "image/*" },
              on: { change: _vm.onSelectFavicon }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c("div", { staticClass: "vx-col  w-full" }, [
            _c("span", [_vm._v("Логотип")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col w-full" }, [
            _c("input", {
              staticClass: "w-full",
              attrs: { type: "file", accept: "image/*" },
              on: { change: _vm.onSelectLogo }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-4" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "ml-auto mt-2",
                  on: {
                    click: function($event) {
                      return _vm.SaveAppSettings()
                    }
                  }
                },
                [_vm._v("Сохранить изменение")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "ml-4 mt-2",
                  attrs: { type: "border", color: "warning" },
                  on: {
                    click: function($event) {
                      return _vm.ResetAppSettings()
                    }
                  }
                },
                [_vm._v("Сброс")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/settings/app-setting.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/admin/settings/app-setting.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-setting.vue?vue&type=template&id=63fcd802& */ "./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802&");
/* harmony import */ var _app_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-setting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/settings/app-setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-setting.vue?vue&type=template&id=63fcd802& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/settings/app-setting.vue?vue&type=template&id=63fcd802&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_setting_vue_vue_type_template_id_63fcd802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);