(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    profilePage: function profilePage() {
      this.$router.push('/profile-user')["catch"](function () {});
    },
    reportPage: function reportPage() {
      this.$router.push('/report-user')["catch"](function () {});
    },
    logout: function logout() {
      // This is just for demo Purpose. If user clicks on logout -> redirect
      var that = this;
      that.$http.post('/api/logout', {//body
      }, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        localStorage.setItem('token', null);
        that.$router.push('/login')["catch"](function () {});
      })["catch"](function (error) {
        if (error.response.status === 401) {
          localStorage.setItem('token', null); // eslint-disable-next-line no-invalid-this

          that.$router.push('/login')["catch"](function () {});
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_navbar_components_ProfileDropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/components/navbar/components/ProfileDropDownUser.vue */ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/l10n/ru.js */ "./node_modules/flatpickr/dist/l10n/ru.js");
/* harmony import */ var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    ProfileDropDownUser: _layouts_components_navbar_components_ProfileDropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      currentx: 1,
      total: 1,
      search: '',
      order: {
        column: '',
        type: ''
      },
      perPageOptions: [5, 10, 15, 30, 100, 1000],
      sPage: 5,
      selectToken: [],
      countComplate: 890,
      countWait: 258,
      countResult: 149,
      customersData: {},
      analyticsData: {
        customersPie: {
          chartOptions: {
            labels: ['Завершение', 'Ожидает результат', 'В очереди'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            chart: {
              type: 'pie',
              offsetY: 0,
              dropShadow: {
                enabled: false,
                blur: 5,
                left: 1,
                top: 1,
                opacity: 0.2
              },
              toolbar: {
                show: false
              }
            },
            stroke: {
              width: 5
            },
            colors: ['#7961F9', '#FF9F43', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
              }
            }
          }
        }
      },
      fromDate: '',
      toDate: '',
      configFromdateTimePicker: {
        minDate: null,
        maxDate: new Date(),
        locale: flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_5__["Russian"],
        dateFormat: 'd.m.Y'
      },
      configTodateTimePicker: {
        minDate: null,
        maxDate: new Date(),
        locale: flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_5__["Russian"],
        dateFormat: 'd.m.Y'
      },
      type: 0,
      tokensWait: [],
      tokensWaits: [],
      tokensComplate: []
    };
  },
  methods: {
    handleChangePage: function handleChangePage(page) {
      this.readHistory();
    },
    handleSearch: function handleSearch(searching) {
      this.currentx = 1;
      this.search = searching;
      this.readHistory();
    },
    handleSort: function handleSort(key, active) {
      this.order.column = key;
      this.order.type = active;
      this.readHistory();
    },
    ListComplateTokens: function ListComplateTokens() {
      this.type = 1;
      this.search = '';
      this.readHistory();
    },
    ListWaitsTokens: function ListWaitsTokens() {
      this.type = [4, 6];
      this.search = '';
      this.readHistory();
    },
    ListWaitTokens: function ListWaitTokens() {
      this.type = 0;
      this.search = '';
      this.readHistory();
    },
    readData: function readData() {
      var that = this;
      this.checkingCurrentToken = setTimeout(function () {
        that.$http.post('/api/dashboard/queue-user/report-diagram', {
          from: that.fromDate,
          to: that.toDate
        }, {
          headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('token'))
          }
        }).then(function (response) {
          that.customersData = {
            'analyticsData': [{
              'customerType': 'Завершение',
              'counts': response.data.complete,
              'color': 'primary'
            }, {
              'customerType': 'Ожидает результат',
              'counts': response.data.result,
              'color': 'warning'
            }, {
              'customerType': 'В очереди ',
              'counts': response.data.waiting,
              'color': 'danger'
            }],
            'series': [response.data.complete, response.data.result, response.data.waiting]
          }; // eslint-disable-next-line no-unused-vars
        })["catch"](function (error) {});
      }.bind(this), 3000);
    },
    readHistory: function readHistory() {
      var that = this; // this.$vs.loading({
      //   type: 'corners',
      //   scale: 1
      // })

      that.$http.post('/api/dashboard/queue-user/report-user', {
        length: that.sPage,
        page: that.currentx,
        search: that.search,
        order: that.order,
        status: that.type,
        from: that.fromDate,
        to: that.toDate
      }, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        if (that.type === 0) {
          that.tokensWait = response.data;
        } else if (that.type === 1) {
          that.tokensComplate = response.data;
        } else if (that.type[0] === 4) {
          that.tokensWaits = response.data;
        } else {
          that.tokensWait = [];
          that.tokensComplate = [];
        } // eslint-disable-next-line no-unused-vars

      })["catch"](function (error) {// that.$vs.loading.close('.con-vs-loading')
      });
    },
    reloadData: function reloadData() {
      this.readData();
      this.readHistory();
    },
    onFromChange: function onFromChange(selectedDates, dateStr, instance) {
      this.$set(this.configTodateTimePicker, 'minDate', dateStr);
    },
    onToChange: function onToChange(selectedDates, dateStr, instance) {
      this.$set(this.configFromdateTimePicker, 'maxDate', dateStr);
    }
  },
  created: function created() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    this.fromDate = "".concat(dd, ".").concat(mm, ".").concat(yyyy);
    this.toDate = "".concat(dd, ".").concat(mm, ".").concat(yyyy); // 0-В ожидание, 1-Завершено, 2- Следующий, 3-Позвать, 4-Ждать результат, 5-Начать

    this.readData();
    this.readHistory();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.activeUserInfo.displayName
    ? _c(
        "div",
        { staticClass: "the-navbar__user-meta flex items-center" },
        [
          _c(
            "div",
            { staticClass: "text-right leading-tight hidden sm:block" },
            [
              _c("p", { staticClass: "font-semibold" }, [
                _vm._v(_vm._s(_vm.activeUserInfo.displayName))
              ]),
              _vm._v(" "),
              _c("small", [_vm._v(_vm._s(_vm.activeUserInfo.userRole))])
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown",
            {
              staticClass: "cursor-pointer",
              attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
            },
            [
              _c("div", { staticClass: "con-img ml-3" }, [
                _vm.activeUserInfo.photoURL
                  ? _c("img", {
                      key: "onlineImg",
                      staticClass:
                        "rounded-full shadow-md cursor-pointer block",
                      attrs: {
                        src: _vm.activeUserInfo.photoURL,
                        alt: "user-img",
                        width: "40",
                        height: "40"
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("vs-dropdown-menu", { staticClass: "vx-navbar-dropdown" }, [
                _c(
                  "ul",
                  { staticStyle: { "min-width": "9rem" } },
                  [
                    _c(
                      "li",
                      {
                        staticClass:
                          "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                      },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "UserIcon", svgClasses: "w-4 h-4" }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "ml-2",
                            on: {
                              click: function($event) {
                                return _vm.profilePage()
                              }
                            }
                          },
                          [_vm._v("Профиль")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                      },
                      [
                        _c("feather-icon", {
                          attrs: {
                            icon: "CheckSquareIcon",
                            svgClasses: "w-4 h-4"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "ml-2",
                            on: {
                              click: function($event) {
                                return _vm.reportPage()
                              }
                            }
                          },
                          [_vm._v("Отчёты")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider", { staticClass: "m-1" }),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                        on: { click: _vm.logout }
                      },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "LogOutIcon", svgClasses: "w-4 h-4" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [_vm._v("Выйти")])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "page-user-view" } }, [
    _c("div", { staticClass: "navbar-default" }, [
      _c(
        "header",
        {
          staticClass:
            "vs-navbar vx-navbar navbar-custom  vs-navbar-null vs-navbar-color-#fff",
          staticStyle: { background: "rgb(255, 255, 255)" }
        },
        [
          _c("img", {
            staticClass: "w-64",
            attrs: {
              src: __webpack_require__(/*! @assets/images/pages/logo.png */ "./resources/assets/images/pages/logo.png"),
              alt: "login"
            }
          }),
          _vm._v(" "),
          _c(
            "marquee",
            {
              staticClass: "mb-1 text-danger font-bold live_text",
              attrs: { behavior: "scroll", direction: "left" }
            },
            [
              _vm._v(
                "Системы\n                управления \n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "float-left font-bold ml-8 mr-8 time vs-table--header",
              staticStyle: { width: "30%", color: "#18092e" }
            },
            [
              _vm._v(
                "\n                Отдел: " +
                  _vm._s(_vm.activeUserInfo.department) +
                  "\n                "
              ),
              _c("br"),
              _vm._v(
                "\n                Кабинет: " +
                  _vm._s(_vm.activeUserInfo.counter) +
                  "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "float-left font-bold ml-8 mr-8 time vs-table--header",
              staticStyle: { width: "20%", color: "#18092e" }
            },
            [_c("profile-drop-down-user")],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "vs-row",
          { staticClass: "justify-center" },
          [
            _c(
              "vs-col",
              { staticClass: "p-5", attrs: { "vs-w": "4" } },
              [
                _c(
                  "vx-card",
                  { attrs: { title: "Отчет по периодам" } },
                  [
                    _c("template", { slot: "actions" }, [
                      _c("div", { staticClass: "vx-row mt-2" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-1/2" },
                          [
                            _c("span", [_vm._v("от ")]),
                            _vm._v(" "),
                            _c("flat-pickr", {
                              staticClass: "w-full mb-2",
                              attrs: {
                                config: _vm.configFromdateTimePicker,
                                placeholder: "Период от"
                              },
                              on: {
                                "on-change": _vm.onFromChange,
                                input: _vm.reloadData
                              },
                              model: {
                                value: _vm.fromDate,
                                callback: function($$v) {
                                  _vm.fromDate = $$v
                                },
                                expression: "fromDate"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col w-1/2" },
                          [
                            _c("span", [_vm._v("до ")]),
                            _vm._v(" "),
                            _c("flat-pickr", {
                              staticClass: "w-full mb-2",
                              attrs: {
                                config: _vm.configTodateTimePicker,
                                placeholder: "Период до"
                              },
                              on: {
                                "on-change": _vm.onToChange,
                                input: _vm.reloadData
                              },
                              model: {
                                value: _vm.toDate,
                                callback: function($$v) {
                                  _vm.toDate = $$v
                                },
                                expression: "toDate"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "no-body" }, slot: "no-body" },
                      [
                        _c("vue-apex-charts", {
                          staticClass: "my-12",
                          attrs: {
                            type: "pie",
                            height: "334",
                            options:
                              _vm.analyticsData.customersPie.chartOptions,
                            series: _vm.customersData.series
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "mb-1" },
                          _vm._l(_vm.customersData.analyticsData, function(
                            customerData
                          ) {
                            return _c(
                              "li",
                              {
                                key: customerData.customerType,
                                staticClass:
                                  "flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("span", {
                                      staticClass:
                                        "inline-block h-3 w-3 rounded-full mr-2",
                                      class: "bg-" + customerData.color
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "font-semibold" },
                                      [
                                        _vm._v(
                                          _vm._s(customerData.customerType)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(_vm._s(customerData.counts))
                                ])
                              ]
                            )
                          }),
                          0
                        )
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
              "vs-col",
              { staticClass: "p-5", attrs: { "vs-w": "8" } },
              [
                _c(
                  "vs-tabs",
                  { staticClass: "vx-card" },
                  [
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "В ожидание",
                          "icon-pack": "feather",
                          icon: "icon-clock"
                        },
                        on: {
                          click: function($event) {
                            return _vm.ListWaitTokens()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "tab-text scroll-area--cart-items-dropdowm",
                            staticStyle: {
                              "min-height": "430px",
                              "max-height": "430px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "export-table" },
                              [
                                _c(
                                  "vs-table",
                                  {
                                    attrs: {
                                      sst: true,
                                      data: _vm.tokensWait,
                                      search: "",
                                      noDataText: "Нет данных."
                                    },
                                    on: {
                                      sort: _vm.handleSort,
                                      search: _vm.handleSearch
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var data = ref.data
                                          return _vm._l(
                                            _vm.tokensWait,
                                            function(tr, indextr) {
                                              return _c(
                                                "vs-tr",
                                                {
                                                  key: indextr,
                                                  attrs: { data: tr }
                                                },
                                                [
                                                  _c(
                                                    "vs-td",
                                                    { attrs: { order: false } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.sPage *
                                                            (_vm.currentx - 1) +
                                                            indextr +
                                                            1
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.token_no)
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.created_at)
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          )
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.selectToken,
                                      callback: function($$v) {
                                        _vm.selectToken = $$v
                                      },
                                      expression: "selectToken"
                                    }
                                  },
                                  [
                                    _c(
                                      "template",
                                      { slot: "header" },
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
                                              attrs: {
                                                options: _vm.perPageOptions
                                              },
                                              on: { input: _vm.readData },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "list-header",
                                                  fn: function() {
                                                    return [
                                                      _c(
                                                        "li",
                                                        {
                                                          staticStyle: {
                                                            "text-align":
                                                              "center"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Выберите пагинация"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                },
                                                {
                                                  key: "no-options",
                                                  fn: function(ref) {
                                                    var search = ref.search
                                                    var searching =
                                                      ref.searching
                                                    var loading = ref.loading
                                                    return [
                                                      _vm._v(
                                                        "\n                                                    Нет данных.\n                                                "
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "template",
                                      { slot: "thead" },
                                      [
                                        _c("vs-th", [_vm._v(" №")]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          { attrs: { "sort-key": "name" } },
                                          [_vm._v(" Номер очереда")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          {
                                            attrs: { "sort-key": "description" }
                                          },
                                          [_vm._v("Дата создание токена")]
                                        )
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
                              {
                                staticClass: "mt-3",
                                attrs: { id: "listCounter" }
                              },
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
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Завершение",
                          "icon-pack": "feather",
                          icon: "icon-x-square"
                        },
                        on: {
                          click: function($event) {
                            return _vm.ListComplateTokens()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "tab-text scroll-area--cart-items-dropdowm",
                            staticStyle: {
                              "min-height": "430px",
                              "max-height": "430px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "export-table" },
                              [
                                _c(
                                  "vs-table",
                                  {
                                    attrs: {
                                      sst: true,
                                      data: _vm.tokensWait,
                                      search: "",
                                      noDataText: "Нет данных."
                                    },
                                    on: {
                                      sort: _vm.handleSort,
                                      search: _vm.handleSearch
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var data = ref.data
                                          return _vm._l(
                                            _vm.tokensComplate,
                                            function(tr, indextr) {
                                              return _c(
                                                "vs-tr",
                                                {
                                                  key: indextr,
                                                  attrs: { data: tr }
                                                },
                                                [
                                                  _c(
                                                    "vs-td",
                                                    { attrs: { order: false } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.sPage *
                                                            (_vm.currentx - 1) +
                                                            indextr +
                                                            1
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.token_no)
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.created_at)
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          )
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.selectToken,
                                      callback: function($$v) {
                                        _vm.selectToken = $$v
                                      },
                                      expression: "selectToken"
                                    }
                                  },
                                  [
                                    _c(
                                      "template",
                                      { slot: "header" },
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
                                              attrs: {
                                                options: _vm.perPageOptions
                                              },
                                              on: { input: _vm.readData },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "list-header",
                                                  fn: function() {
                                                    return [
                                                      _c(
                                                        "li",
                                                        {
                                                          staticStyle: {
                                                            "text-align":
                                                              "center"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Выберите пагинация"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                },
                                                {
                                                  key: "no-options",
                                                  fn: function(ref) {
                                                    var search = ref.search
                                                    var searching =
                                                      ref.searching
                                                    var loading = ref.loading
                                                    return [
                                                      _vm._v(
                                                        "\n                                                    Нет данных.\n                                                "
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "template",
                                      { slot: "thead" },
                                      [
                                        _c("vs-th", [_vm._v(" №")]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          { attrs: { "sort-key": "name" } },
                                          [_vm._v(" Номер очереда")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          {
                                            attrs: { "sort-key": "description" }
                                          },
                                          [_vm._v("Дата создание токена")]
                                        )
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
                              {
                                staticClass: "mt-3",
                                attrs: { id: "listCounter" }
                              },
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
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Ожидает результат",
                          "icon-pack": "feather",
                          icon: "icon-x-square"
                        },
                        on: {
                          click: function($event) {
                            return _vm.ListWaitsTokens()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "tab-text scroll-area--cart-items-dropdowm",
                            staticStyle: {
                              "min-height": "430px",
                              "max-height": "430px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "export-table" },
                              [
                                _c(
                                  "vs-table",
                                  {
                                    attrs: {
                                      sst: true,
                                      data: _vm.tokensWait,
                                      search: "",
                                      noDataText: "Нет данных."
                                    },
                                    on: {
                                      sort: _vm.handleSort,
                                      search: _vm.handleSearch
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var data = ref.data
                                          return _vm._l(
                                            _vm.tokensWaits,
                                            function(tr, indextr) {
                                              return _c(
                                                "vs-tr",
                                                {
                                                  key: indextr,
                                                  attrs: { data: tr }
                                                },
                                                [
                                                  _c(
                                                    "vs-td",
                                                    { attrs: { order: false } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.sPage *
                                                            (_vm.currentx - 1) +
                                                            indextr +
                                                            1
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.token_no)
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-td",
                                                    {
                                                      attrs: { data: tr.name }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(tr.created_at)
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          )
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.selectToken,
                                      callback: function($$v) {
                                        _vm.selectToken = $$v
                                      },
                                      expression: "selectToken"
                                    }
                                  },
                                  [
                                    _c(
                                      "template",
                                      { slot: "header" },
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
                                              attrs: {
                                                options: _vm.perPageOptions
                                              },
                                              on: { input: _vm.readData },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "list-header",
                                                  fn: function() {
                                                    return [
                                                      _c(
                                                        "li",
                                                        {
                                                          staticStyle: {
                                                            "text-align":
                                                              "center"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Выберите пагинация"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                },
                                                {
                                                  key: "no-options",
                                                  fn: function(ref) {
                                                    var search = ref.search
                                                    var searching =
                                                      ref.searching
                                                    var loading = ref.loading
                                                    return [
                                                      _vm._v(
                                                        "\n                                                    Нет данных.\n                                                "
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "template",
                                      { slot: "thead" },
                                      [
                                        _c("vs-th", [_vm._v(" №")]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          { attrs: { "sort-key": "name" } },
                                          [_vm._v(" Номер очереда")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-th",
                                          {
                                            attrs: { "sort-key": "description" }
                                          },
                                          [_vm._v("Дата создание токена")]
                                        )
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
                              {
                                staticClass: "mt-3",
                                attrs: { id: "listCounter" }
                              },
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
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/logo.png":
/*!************************************************!*\
  !*** ./resources/assets/images/pages/logo.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?81e2cef16f1aa79746f023394cc2bc3d";

/***/ }),

/***/ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDropDownUser.vue?vue&type=template&id=42ea4781& */ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781&");
/* harmony import */ var _ProfileDropDownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileDropDownUser.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileDropDownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDownUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileDropDownUser.vue?vue&type=template&id=42ea4781& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/navbar/components/ProfileDropDownUser.vue?vue&type=template&id=42ea4781&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileDropDownUser_vue_vue_type_template_id_42ea4781___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/user_interface/reportUserInterface.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/user_interface/reportUserInterface.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportUserInterface.vue?vue&type=template&id=a58d0bcc& */ "./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc&");
/* harmony import */ var _reportUserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportUserInterface.vue?vue&type=script&lang=js& */ "./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportUserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/user_interface/reportUserInterface.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportUserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportUserInterface.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportUserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportUserInterface.vue?vue&type=template&id=a58d0bcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_interface/reportUserInterface.vue?vue&type=template&id=a58d0bcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportUserInterface_vue_vue_type_template_id_a58d0bcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
