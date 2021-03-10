(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      perPageOptions: [10, 15, 30, 100, 1000],
      sPage: 10,
      records: [],
      selectedUsers: [],
      selected: [],
      currentx: 1,
      total: 1,
      search: '',
      order: {
        column: '',
        type: ''
      },
      selectedHidden: [],
      titleModal: 'Добавить Пластинок',
      textAdd: 'Добавить',
      name: '',
      code: '',
      author: '',
      condition: '',
      sId: 0,
      activePrompt: false
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleChangePage: function handleChangePage(page) {
      this.readData();
    },
    readData: function readData() {
      var that = this;
      this.$vs.loading({
        type: 'corners',
        scale: 1
      });
      that.$http.post('/api/records', {
        length: that.sPage,
        page: that.currentx,
        search: that.search,
        order: that.order
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        // console.log(response.data.data)
        that.records = response.data.data;
        that.total = response.data.last_page;
        that.currentx = response.data.current_page;
        that.$vs.loading.close('.con-vs-loading'); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {
        that.$vs.loading.close('.con-vs-loading');
      });
    },
    saveRecords: function saveRecords() {
      var that = this;
      this.$vs.loading({
        type: 'corners',
        scale: 1
      });
      that.$http.post('/api/records-save', {
        id: that.sId,
        name: that.name,
        code: that.code,
        author: that.author,
        condition: that.condition
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.$vs.loading.close('.con-vs-loading');
        that.readData(); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {
        that.$vs.loading.close('.con-vs-loading');
      });
    },
    deleteRecords: function deleteRecords(id) {
      var that = this;
      this.$vs.loading({
        type: 'corners',
        scale: 1
      });
      that.$http.post('/api/records-delete', {
        id: id
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        that.$vs.loading.close('.con-vs-loading');
        that.readData(); // eslint-disable-next-line no-unused-vars
      })["catch"](function (error) {
        that.$vs.loading.close('.con-vs-loading');
      });
    },
    handleSearch: function handleSearch(searching) {
      this.currentx = 1;
      this.search = searching;
      this.readData();
    },
    AddRecords: function AddRecords() {
      this.titleModal = 'Добавить Пластинок';
      this.textAdd = 'Добавить';
      this.name = '';
      this.code = '';
      this.author = '';
      this.condition = '';
      this.activePrompt = true;
    },
    editRecords: function editRecords(id, code, name, author, condition) {
      this.sId = id;
      this.titleModal = 'Изменить Пластинок';
      this.textAdd = 'Изменить';
      this.name = name;
      this.code = code;
      this.author = author;
      this.condition = condition;
      this.activePrompt = true;
    },
    handleSort: function handleSort(key, active) {
      this.order.column = key;
      this.order.type = active;
      this.readData();
    }
  },
  created: function created() {
    this.readData();
  },
  mounted: function mounted() {
    this.$emit('setAppClasses', 'department-page');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10& ***!
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
    "vx-card",
    { attrs: { title: "Список пластинок" } },
    [
      _c(
        "div",
        { staticClass: "export-table" },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                {
                  staticClass: "pr-2",
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "left",
                    "vs-align": "center",
                    "vs-w": "3",
                    "vs-sm": "6"
                  }
                },
                [
                  _c("v-select", {
                    staticClass: "w-full",
                    attrs: { options: _vm.perPageOptions },
                    on: { input: _vm.readData },
                    scopedSlots: _vm._u([
                      {
                        key: "list-header",
                        fn: function() {
                          return [
                            _c(
                              "li",
                              { staticStyle: { "text-align": "center" } },
                              [_vm._v("Выберите пагинация")]
                            )
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
                      value: _vm.sPage,
                      callback: function($$v) {
                        _vm.sPage = $$v
                      },
                      expression: "sPage"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "pr-2 float-left",
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "right",
                    "vs-w": "4",
                    "vs-sm": "12"
                  }
                },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "w-full",
                      attrs: {
                        color: "success",
                        type: "filled",
                        "icon-pack": "feather",
                        icon: "icon-plus"
                      },
                      on: {
                        click: function($event) {
                          return _vm.AddRecords()
                        }
                      }
                    },
                    [_vm._v("Добавить пластинок")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                sst: true,
                data: _vm.records,
                search: "",
                noDataText: "Нет данных.",
                id: "department-container"
              },
              on: { sort: _vm.handleSort, search: _vm.handleSearch },
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
                          _c("vs-td", { attrs: { order: false } }, [
                            _vm._v(
                              _vm._s(
                                _vm.sPage * (_vm.currentx - 1) + indextr + 1
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.code } }, [
                            _vm._v(_vm._s(tr.code))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.name } }, [
                            _vm._v(_vm._s(tr.name))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.author } }, [
                            _vm._v(_vm._s(tr.author))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.condition } }, [
                            _vm._v(_vm._s(tr.condition))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.id } }, [
                            _c(
                              "div",
                              { staticClass: "btn-group includeIcon" },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    type: "filled",
                                    size: "small",
                                    color: "rgb(62, 201, 214)",
                                    "icon-pack": "feather",
                                    icon: "icon-edit"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editRecords(
                                        tr.id,
                                        tr.code,
                                        tr.name,
                                        tr.author,
                                        tr.condition
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "btn-group includeIcon" },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    type: "filled",
                                    size: "small",
                                    color: "rgb(255, 0, 0)",
                                    "icon-pack": "feather",
                                    icon: "icon-trash"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteRecords(tr.id)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    })
                  }
                }
              ]),
              model: {
                value: _vm.selectedUsers,
                callback: function($$v) {
                  _vm.selectedUsers = $$v
                },
                expression: "selectedUsers"
              }
            },
            [
              _c("template", { slot: "header" }),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v(" №")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "code" } }, [
                    _vm._v("Код")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v("Название")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "author" } }, [
                    _vm._v("Автор")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "condition" } }, [
                    _vm._v("Состояние")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "date" } }, [
                    _vm._v(" Действие")
                  ])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-3", attrs: { id: "#listFirst" } },
        [
          _c("vs-pagination", {
            attrs: { total: _vm.total },
            on: { change: _vm.handleChangePage },
            model: {
              value: _vm.currentx,
              callback: function($$v) {
                _vm.currentx = $$v
              },
              expression: "currentx"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "export-options",
          attrs: {
            title: _vm.titleModal,
            "accept-text": _vm.textAdd,
            "cancel-text": "Отмена",
            active: _vm.activePrompt
          },
          on: {
            accept: _vm.saveRecords,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-col" }, [
            _c("div", { staticClass: "vx-row" }, [
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
                    attrs: { label: "Код*", name: "code" },
                    model: {
                      value: _vm.code,
                      callback: function($$v) {
                        _vm.code = $$v
                      },
                      expression: "code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
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
                    attrs: { label: "Название*", name: "name" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
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
                    attrs: { label: "Автор*", name: "author" },
                    model: {
                      value: _vm.author,
                      callback: function($$v) {
                        _vm.author = $$v
                      },
                      expression: "author"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
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
                    attrs: { label: "Состояние*", name: "condition" },
                    model: {
                      value: _vm.condition,
                      callback: function($$v) {
                        _vm.condition = $$v
                      },
                      expression: "condition"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/index.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/admin/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ddfe6c10& */ "./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/admin/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ddfe6c10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/index.vue?vue&type=template&id=ddfe6c10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ddfe6c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);