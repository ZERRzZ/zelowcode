import * as echarts from 'echarts'
import { EChartsType } from 'echarts'
import { useEffect, useRef } from 'react'

import { defaultStyle } from './initOption'

interface IProps {
  width?: string
  height?: string
  data: any
  style?: any
}

export default function MyBar({
  width = '100%',
  height = '100%',
  data,
  style = defaultStyle
}: IProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const chart = useRef<EChartsType>()

  useEffect(() => {
    chart.current = echarts.init(chartRef.current)
    window.addEventListener('resize', resize)
    return () => {
      chart.current && echarts.dispose(chart.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    renderChart()
  }, [data, style])

  const resize = () => {
    if (!chart.current) return
    chart.current.resize({
      animation: {
        duration: 300,
        easing: 'cubicInOut'
      }
    })
  }

  const renderChart = () => {
    const option = {
      title: {
        text: style.title,
        textStyle: { color: style.tcolor }
      },
      textStyle: { color: style.tcolor },
      color: style.color,
      tooltip: { show: style.tooltipShow },
      legend: {
        show: style.legendShow,
        textStyle: { color: style.tcolor }
      },
      xAxis: {
        type: 'category',
        name: '样本',
        data: data.data?.map((v: any) => v.name)
      },
      yAxis: {
        type: 'value',
        name: '指标分数',
        splitLine: {
          show: true,
          lineStyle: { color: '#222' }
        }
      },
      series: {
        type: 'bar',
        name: data.title,
        data: data.data?.map((v: any) => v.value),
        label: { show: true, position: 'top', color: style.tcolor }
      }
    }
    chart.current && chart.current.setOption(option)
  }

  return <div ref={chartRef} style={{ width, height }}></div>
}
