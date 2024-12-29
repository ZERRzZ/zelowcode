<script>
import * as echarts from 'echarts'

export default {
  name: 'MyRadar',
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    cdata: { type: Object },
    cstyle: { type: Object }
  },
  data() {
    return {
      chart: ''
    }
  },
  mounted() {
    this.$nextTick(() => (this.chart = echarts.init(this.$refs.chart)))
    window.addEventListener('resize', this.resize)
  },
  destroyed() {
    echarts.dispose(this.chart)
    window.removeEventListener('resize', this.resize)
  },
  watch: {
    cdata: {
      handler() {
        this.renderChart()
      },
      deep: true
    },
    cstyle: {
      handler() {
        this.renderChart()
      },
      deep: true
    }
  },
  methods: {
    renderChart() {
      const option = {
        title: {
          text: this.cstyle.title,
          textStyle: { color: this.cstyle.tcolor }
        },
        textStyle: { color: this.cstyle.tcolor },
        color: this.cstyle.color,
        tooltip: { show: this.cstyle.tooltipShow },
        legend: {
          show: this.cstyle.legendShow,
          textStyle: { color: this.cstyle.tcolor }
        },
        radar: {
          indicator: this.cdata.data?.map(v => ({ name: v.name }))
        },
        series: {
          type: 'radar',
          data: [
            {
              name: this.cdata.title,
              value: this.cdata.data?.map(v => v.value)
            }
          ],
          label: { show: true, position: 'top', color: this.cstyle.tcolor },
          areaStyle: { opacity: 0.6 }
        }
      }
      this.chart.setOption(option)
    },
    resize() {
      this.chart.resize({
        animation: {
          duration: 300,
          easing: 'cubicInOut'
        }
      })
    }
  }
}
</script>

<template>
  <div ref="chart" :style="{ width, height }"></div>
</template>

<style lang="scss" scoped></style>
