<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="BoxIcon"
                    :statistic="countDepartment"
                    statisticTitle="Отдел"/>
            </div>

            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="BarChartIcon"
                    statisticTitle="Кабинет"
                    :statistic="countCounter"
                    color="success"/>
            </div>

            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="UsersIcon"
                    :statistic="countUser"
                    statisticTitle="Пользователи"
                    color="warning"/>
            </div>

            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="PrinterIcon"
                    :statistic="countToken"
                    statisticTitle="Токен"
                    color="danger"/>
            </div>

            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base"
                    icon="PrinterIcon"
                    :statistic="countTokenWait"
                    statisticTitle="Ожидающий токен"
                    title="Ожидающий токен"
                    color="success"/>
            </div>

            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                    hideChart
                    class="mb-base" :class="className"
                    icon="PrinterIcon"
                    :statistic="countTokenComplete"
                    statisticTitle="Завершенный токен"
                    title="Завершенный токен"
                    color="warning"/>
            </div>
        </div>
        <div class="vx-row">
            <!-- Кол-во пользователей в роли -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Кол-во пользователей в роли">
                    <!-- SLOT = ACTION -->
                    <template slot="actions">
                        <change-time-duration-dropdown/>
                    </template>
                    <!-- CHART -->
                    <div slot="no-body">
                        <vue-apex-charts type="donut" height="340" class="mb-12 mt-4"
                                         :options="analyticsData.sessionsByDeviceDonut.chartOptions"
                                         :series="sessionsData.series"/>
                    </div>

                    <!-- CHART DATA -->
                    <ul>
                        <li v-for="deviceData in sessionsData.analyticsData" :key="deviceData.device" class="flex mb-3">
                            <feather-icon :icon="deviceData.icon"
                                          :svgClasses="[`h-5 w-5 stroke-current text-${deviceData.color}`]"></feather-icon>
                            <span class="ml-2 inline-block font-semibold">{{ deviceData.device }}</span>
                            <span class="mx-2">-</span>
                            <span class="mr-4">{{ deviceData.sessionsPercentage }}%</span>
                            <div class="ml-auto flex -mr-1">
                                <span class="mr-1">{{ deviceData.comparedResultPercentage }}%</span>
                                <feather-icon
                                    :icon=" deviceData.comparedResultPercentage < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'"
                                    :svgClasses="[deviceData.comparedResultPercentage < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                            </div>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- Статистика токена -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Статистика токена">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown/>
                    </template>

                    <!-- CHART -->
                    <div slot="no-body">
                        <vue-apex-charts type="radialBar" height="420"
                                         :options="analyticsData.productOrdersRadialBar.chartOptions"
                                         :series="productsOrder.series"/>
                    </div>

                    <!-- CHART DATA -->
                    <ul>
                        <li v-for="orderData in productsOrder.analyticsData" :key="orderData.orderType"
                            class="flex mb-3 justify-between">
                            <span class="flex items-center">
                                    <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid"
                                          :class="`border-${orderData.color}`"></span>
                                    <span class="font-semibold">{{ orderData.orderType }}</span>
                            </span>
                            <span>{{ orderData.counts }}</span>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- CUSTOMERS CHART -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Customers">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown/>
                    </template>

                    <div slot="no-body">
                        <!-- CHART -->
                        <vue-apex-charts type="pie" height="334" class="my-12"
                                         :options="analyticsData.customersPie.chartOptions"
                                         :series="customersData.series"/>

                        <!-- CHART DATA -->
                        <ul class="mb-1">
                            <li v-for="customerData in customersData.analyticsData" :key="customerData.customerType"
                                class="flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0">
                                <span class="flex items-center">
                                    <span class="inline-block h-3 w-3 rounded-full mr-2"
                                          :class="`bg-${customerData.color}`"></span>
                                    <span class="font-semibold">{{ customerData.customerType }}</span>
                                </span>
                                <span>{{ customerData.counts }}</span>
                            </li>
                        </ul>
                    </div>

                </vx-card>
            </div>

        </div>
    </div>

</template>
<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLineHome.vue'
import VueApexCharts from 'vue-apexcharts'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
// eslint-disable-next-line no-unused-vars
import NotificationTokenToken from '../../NotificationTokenToken'

export default {
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown
  },
  data () {
    return {
      className: '',
      countDepartment: 0,
      countCounter: 0,
      countUser: 0,
      countToken: 0,
      countTokenWait: 0,
      countTokenComplete: 0,
      countTokensType: 100,
      sessionsData: {
        'analyticsData': [
          {
            'device': 'Администратор',
            'icon': 'UserIcon',
            'color': 'primary',
            'sessionsPercentage': 58.6,
            'comparedResultPercentage': 2
          }, {
            'device': 'Кассир',
            'icon': 'UserIcon',
            'color': 'warning',
            'sessionsPercentage': 30.9,
            'comparedResultPercentage': 8
          }, {
            'device': 'Доктор',
            'icon': 'UserIcon',
            'color': 'danger',
            'sessionsPercentage': 10.5,
            'comparedResultPercentage': -5
          }
        ],
        'series': [58.6, 30.9, 10.5]
      },
      productsOrder: {},
      customersData: {
        'analyticsData': [
          {
            'customerType': 'New',
            'counts': 890,
            'color': 'primary'
          },
          {'customerType': 'Returning',
            'counts': 258,
            'color': 'warning'
          },
          {'customerType': 'Return',
            'counts': 250,
            'color': 'success'
          },
          {
            'customerType': 'Referrals ',
            'counts': 149,
            'color': 'danger'
          }
        ],
        'series': [690, 258, 250, 149]
      },
      analyticsData: {
        // SessionsByDevice
        sessionsByDeviceDonut: {
          chartOptions: {
            labels: ['Администратор', 'Кассир', 'Доктор'],
            dataLabels: {
              enabled: false
            },
            legend: {show: false},
            chart: {
              offsetY: 30,
              type: 'donut',
              toolbar: {
                show: false
              }
            },
            stroke: {width: 0},
            colors: ['#7961F9', '#FF9F43', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
              }
            }
          }
        },
        // Product Orders
        productOrdersRadialBar: {
          chartOptions: {
            labels: ['Finished', 'Pending', 'Rejected'],
            plotOptions: {
              radialBar: {
                size: 165,
                offsetY: -5,
                hollow: {
                  size: '20%'
                },
                track: {
                  background: '#ebebeb',
                  strokeWidth: '100%',
                  margin: 15
                },
                dataLabels: {
                  show: true,
                  name: {
                    fontSize: '18px'
                  },
                  value: {
                    fontSize: '16px',
                    color: '#636a71',
                    offsetY: 11
                  },
                  total: {
                    show: true,
                    label: 'Итого',
                    formatter () {
                      return this.countTokensType
                    }
                  }
                }
              }
            },
            responsive: [
              {
                breakpoint: 576,
                options: {
                  plotOptions: {
                    radialBar: {
                      size: 150,
                      hollow: {
                        size: '20%'
                      },
                      track: {
                        background: '#ebebeb',
                        strokeWidth: '100%',
                        margin: 15
                      }
                    }
                  }
                }
              }
            ],
            colors: ['#7961F9', '#FF9F43', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                // enabled: true,
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            stroke: {
              lineCap: 'round'
            },
            chart: {
              height: 355,
              dropShadow: {
                enabled: true,
                blur: 3,
                left: 1,
                top: 1,
                opacity: 0.1
              }
            }
          }
        },
        // Customers
        customersPie: {
          chartOptions: {
            labels: ['New', 'Returning', 'Return', 'Referrals'],
            dataLabels: {
              enabled: false
            },
            legend: {show: false},
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
            colors: ['#7961F9', '#FF9F43', '#FF9F78', '#EA5455', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#9c8cfc', '#FFC085', '#FFC985', '#f29292', '#f29292']
              }
            }
          }
        }
      }
    }
  },
  methods: {
    readData () {
      const that = this
      that.$http.post('/api/dashboard/read-data',
        {

        }, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
        // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        that.countDepartment = response.data.department
        that.countCounter = response.data.counter
        that.countUser = response.data.user
        that.countToken = response.data.token
        that.countTokenWait = response.data.tokensWait
        that.countTokenComplete = response.data.tokensComplete
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
      })
    },
    readDataUsersInRoles () {
      const that = this
      that.$http.post('/api/dashboard/users-in-roles',
        {

        }, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
        // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        that.sessionsData = {
          'analyticsData': [
            {
              'device': 'Администратор',
              'icon': 'UserIcon',
              'color': 'primary',
              'sessionsPercentage': response.data.admin,
              'comparedResultPercentage': response.data.count_admin
            }, {
              'device': 'Кассир',
              'icon': 'UserIcon',
              'color': 'warning',
              'sessionsPercentage': response.data.kassir,
              'comparedResultPercentage': response.data.count_kassir
            }, {
              'device': 'Доктор',
              'icon': 'UserIcon',
              'color': 'danger',
              'sessionsPercentage': response.data.doctor,
              'comparedResultPercentage': response.data.count_doctor
            }
          ],
          'series': [response.data.admin, response.data.kassir, response.data.doctor]
        }
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
      })
    },
    readDataTokensType () {
      const that = this
      that.$http.post('/api/dashboard/token-count-type',
        {

        },
        {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
        // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        that.productsOrder = {
          'analyticsData': [
            {
              'orderType': 'Завершенный',
              'counts': response.data.count_complete,
              'color': 'primary'
            }, {
              'orderType': 'В очереде',
              'counts': response.data.count_queue,
              'color': 'warning'
            },
            {'orderType': 'Ожидает результат',
              'counts': response.data.count_wait,
              'color': 'danger'
            }
          ],
          'series': [response.data.complete, response.data.queue, response.data.wait]
        }
        that.analyticsData.productOrdersRadialBar = {
          chartOptions: {
            labels: ['Завершенный', 'В очереде', 'Ожидает результат'],
            plotOptions: {
              radialBar: {
                size: 165,
                offsetY: -5,
                hollow: {
                  size: '20%'
                },
                track: {
                  background: '#ebebeb',
                  strokeWidth: '100%',
                  margin: 15
                },
                dataLabels: {
                  show: true,
                  name: {
                    fontSize: '18px'
                  },
                  value: {
                    fontSize: '16px',
                    color: '#636a71',
                    offsetY: 11
                  },
                  total: {
                    show: true,
                    label: 'Итого',
                    formatter () {
                      return response.data.total
                    }
                  }
                }
              }
            },
            responsive: [
              {
                breakpoint: 576,
                options: {
                  plotOptions: {
                    radialBar: {
                      size: 150,
                      hollow: {
                        size: '20%'
                      },
                      track: {
                        background: '#ebebeb',
                        strokeWidth: '100%',
                        margin: 15
                      }
                    }
                  }
                }
              }
            ],
            colors: ['#7961F9', '#FF9F43', '#EA5455'],
            fill: {
              type: 'gradient',
              gradient: {
                // enabled: true,
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            stroke: {
              lineCap: 'round'
            },
            chart: {
              height: 355,
              dropShadow: {
                enabled: true,
                blur: 3,
                left: 1,
                top: 1,
                opacity: 0.1
              }
            }
          }
        }
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
      })
    },
    readDataCountUsersTokens () {
      const that = this
      that.$http.post('/api/dashboard/token-count-users',
        {

        },
        {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
        // eslint-disable-next-line no-unused-vars
      ).then(function (response) {
        const analyticsData = []
        const series = []
        const labels = []
        const colors = []
        const gradientToColors = []
        for (let i = 0; i < response.data.length; i++) {
          let myColor = `#${  (Math.random() * 0xFFFFFF << 0).toString(16)}`
          gradientToColors.push(
            myColor
          )
          labels.push(
            response.data[i].name
          )
          myColor = `#${  (Math.random() * 0xFFFFFF << 0).toString(16)}`
          colors.push(
            myColor
          )
          analyticsData.push(
            {
              'customerType': response.data[i].name,
              'counts':response.data[i].count,
              'color': 'success'
            }
          )
          series.push(
            response.data[i].count
          )
        }
        console.log(gradientToColors,
          labels,
          colors,
          analyticsData,
          series)
        that.customersData.analyticsData = analyticsData
        that.customersData.series = series
        that.analyticsData.customersPie.chartOptions.labels = labels
        // that.analyticsData.customersPie.chartOptions.colors = colors
        // that.analyticsData.customersPie.chartOptions.fill.gradient.gradientToColors = gradientToColors
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
      })
    }
  },
  created () {
    this.readData()
    this.readDataUsersInRoles()
    this.readDataTokensType()
    this.readDataCountUsersTokens()
  },
  destroyed () {
  }
}
</script>
