<!-- =========================================================================================
    File Name: StatisticsCard.vue
    Description: Statistics card component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <vx-card style=" margin-bottom: 1.2rem !important;" class="overflow-hidden">
        <div slot="no-body">
            <div class="line-area-chart" v-if="!hideChart">
                <vue-apex-charts ref="apexChart" :type="type" height="100" width="100%" :options="chartOptions" :series="chartData" />
            </div>

            <div class="pl-10 pt-3 pr-3" :class="{
              'flex justify-between  items-center': iconRight,
              'text-center': !iconRight && hideChart,
              'pb-0': !hideChart }">
                    <div class="truncate text-success inline-flex  p-3rounded-full">
                        <h2  style="font-size:3rem;  letter-spacing: 4px; font-family: Megafont;"  class="mb-1 font-bold" v-if="statistic">
                            {{statistic ? statistic : '----'}}
                        </h2>
                    </div>

                    <div class="truncate p-3rounded-full">
                        <h5 class="font-bold text-center text-success" style="font-family:Bebas Neue;" v-if="cabinet">
                            Ваш очередь
                        </h5>
                        <h5 class="font-bold text-center text-success" style="font-family:Bebas Neue;" v-else>
                            ---------------
                        </h5>
                        <h2  style=" font-size: 2rem; letter-spacing: 2px; font-family: 'Bebas Neue';"  class="text-success font-bold includeIcon" v-if="cabinet">Кабинет <span class="text-success" style="font-size: 4rem; margin-left: 10px;">{{cabinet}}</span></h2>
                        <h2  style=" font-size: 2rem; letter-spacing: 2px; font-family: 'Bebas Neue';"  class="text-success font-bold includeIcon mt-4 w-full" v-else>
                            ---------
                            <span class="text-success float-right" style="font-size: 4rem; margin-left: 10px;">
                                --
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </vx-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import chartConfigs from './chartConfigs.js'
import _color from '@assets/utils/color.js'

export default{
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    cabinet: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {
      // type: Array,
      // required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      default: 'line'
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    hideChart: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chartOptions: null
    }
  },
  watch: {
    themePrimaryColor () {
      this.$refs.apexChart.updateOptions({ theme: { monochrome: { color: this.getHex(this.color) } } })
    }
  },
  computed: {
    themePrimaryColor () {
      return this.$store.state.themePrimaryColor
    }
  },
  methods: {
    getHex (color) {
      if (_color.isColor(color)) {
        let rgb  = window.getComputedStyle(document.documentElement).getPropertyValue(`--vs-${color}`)
        rgb = rgb.split(',')
        return `#${  ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1)}`
      }
      return color
    },
    gradientToColor (color) {
      const gradientToColors = {
        'primary': '#A9A2F6',
        'success': '#55DD92',
        'warning': '#ffc085',
        'danger': '#F97794'
      }

      return gradientToColors[color] ? gradientToColors[color] : gradientToColors['primary']
    }
  },
  components: {
    VueApexCharts
  },
  created () {
    if (this.type === 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, chartConfigs.areaChartOptions)

      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      }
    } else if (this.type === 'line') {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(chartConfigs.lineChartOptions))

      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)]
      this.chartOptions.colors = [this.getHex(this.color)]
    }
  }
}
</script>
