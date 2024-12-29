import './ChartDemo.css'

import RGL, { Layout, WidthProvider } from 'react-grid-layout'
const GridLayout = WidthProvider(RGL)
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import {
  DragEvent,
  MouseEvent,
  createElement,
  useMemo,
  useRef,
  useState
} from 'react'
import { ZeForm } from '@chengzs/zeform'

import {
  initStyleItems,
  initDataItems,
  calFormModel,
  initData
} from '@/components/MyChart/initOption'
import { randomColor } from '@/utils/color'
import MyBar from '@/components/MyChart/MyBar'
import MyBarH from '@/components/MyChart/MyBarH'
import MyLine from '@/components/MyChart/MyLine'
import MyLineA from '@/components/MyChart/MyLineA'
import MyPie from '@/components/MyChart/MyPie'
import MyPieO from '@/components/MyChart/MyPieO'
import MyBoxplot from '@/components/MyChart/MyBoxplot'
import MyRadar from '@/components/MyChart/MyRadar'
import MyScatter from '@/components/MyChart/MyScatter'
import MyTableC from '@/components/MyChart/MyTableC'
import MyScatterE from '@/components/MyChart/MyScatterE'
import MyTree from '@/components/MyChart/MyTree'
import MyTreemap from '@/components/MyChart/MyTreemap'
import MySunburst from '@/components/MyChart/MySunburst'
import MyCandlestick from '@/components/MyChart/MyCandlestick'
import { Button, ColorPicker, Popconfirm, Tabs } from 'antd'
import { ChartType } from '@/types/chartDesign'

const chartType: { type: ChartType; components: string }[] = [
  { type: 'bar', components: 'MyBar' },
  { type: 'barH', components: 'MyBarH' },
  { type: 'line', components: 'MyLine' },
  { type: 'lineA', components: 'MyLineA' },
  { type: 'pie', components: 'MyPie' },
  { type: 'pieO', components: 'MyPieO' },
  { type: 'boxplot', components: 'MyBoxplot' },
  { type: 'tableC', components: 'MyTableC' },
  { type: 'scatter', components: 'MyScatter' },
  { type: 'scatterE', components: 'MyScatterE' },
  { type: 'radar', components: 'MyRadar' },
  { type: 'tree', components: 'MyTree' },
  { type: 'treemap', components: 'MyTreemap' },
  { type: 'sunburst', components: 'MySunburst' },
  { type: 'candlestick', components: 'MyCandlestick' }
]

export type ILayout = Layout & { data: any }

interface IProps {}

export default function ChartDemo({}: IProps) {
  const [cdata, setCdata] = useState<ILayout[]>([])
  const [chartStyle, setChartStyle] = useState([])
  const [active, setActive] = useState('')
  const [showRight, setShowRight] = useState(false)

  const chart = useRef<any>()
  const right = useRef<HTMLDivElement>()

  const index = useMemo(() => {
    return cdata.map(c => c.i).indexOf(active)
  }, [cdata, active])

  const styleItems = useMemo(() => {
    return initStyleItems(cdata[index]?.data.type)
  }, [cdata, index])

  const styleModel = useMemo(() => {
    return cdata[index]?.data.cstyle || {}
  }, [cdata, index])

  const dataItems = useMemo(() => {
    return initDataItems()
  }, [])

  const dataModel = useMemo(() => {
    return cdata[index]?.data.dataModel || {}
  }, [cdata, index])

  const handleDragStart = (e: DragEvent<HTMLDivElement>, val: ChartType) =>
    e.dataTransfer.setData('text/plain', val)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => e.preventDefault()

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const text = e.dataTransfer.getData('text/plain')
    setCdata(pre => {
      const obj = {
        x: 1,
        y: 100,
        w: 6,
        h: 10,
        i: String(Math.random()).slice(2, 7),
        data: {
          type: text,
          cdata: {},
          dataModel: calFormModel(initDataItems()),
          cstyle: calFormModel(initStyleItems(text))
        }
      }
      setActive(obj.i)
      return [...pre, obj]
    })
    handleSearch()
  }

  // const  handleResized = (i) => {
  //     active = i
  //     const c = $refs.chart[index]
  //     c.resize && c.resize()
  //   },

  const handleClickItem = (i: string) => {
    if (i === active) {
      setActive('-1')
      showRight && resizeRight()
    } else {
      setActive(i)
    }
  }

  const handleEdit = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    resizeRight()
  }

  const resizeRight = () => {
    if (!right.current) return
    if (showRight) {
      right.current.style.width = '0'
      right.current.style.transform = 'translateX(300px)'
      right.current.style.padding = '0'
      setTimeout(() => {
        chart.current.forEach(c => c.resize && c.resize())
        right.current!.style.display = 'none'
      }, 300)
    } else {
      right.current.style.display = 'flex'
      setTimeout(() => {
        right.current!.style.width = '300px'
        right.current!.style.padding = '1em'
        right.current!.style.transform = 'translateX(0)'
        setTimeout(
          () => chart.current.forEach(c => c.resize && c.resize()),
          300
        )
      })
    }
    setShowRight(pre => !pre)
  }

  const handleDel = i => {
    setActive(i)
    clearInterval(cdata[index].data.timer)
    cdata.splice(index, 1)
  }

  const handleRandomColor = () => {
    styleModel.color = randomColor(1, 'rgb')
  }

  const handleSearch = () => {
    setCdata(pre => {
      const temp = [...pre]
      const data = temp[index].data
      if (data.timer) {
        clearInterval(data.timer)
      }
      data.timer = setInterval(() => {
        const arr = initData(data.type, data.dataModel.num)
        data.cdata = {
          title: `图表${String(Math.random()).slice(2, 7)}`,
          data: arr
        }
      }, 2000)
      return temp
    })
  }

  const handleStylesChange = (changedValues: any, values: any) => {
    console.log(changedValues, values)
  }

  return (
    <div className="chart-demo">
      <div className="left">
        <span className="title">图表选择</span>
        <div className="charts">
          {chartType.map(c => (
            <div
              key={c.type}
              style={{
                backgroundImage: `url(${require(`@/assets/images/charts/${c.type}.png`)})`
              }}
              draggable
              onDragStart={e => handleDragStart(e, c.type)}
            ></div>
          ))}
        </div>
      </div>
      <div
        className="center"
        onDragOver={handleDragOver}
        onDrop={e => handleDrop(e)}
      >
        <GridLayout layout={cdata} cols={12} rowHeight={30}>
          {cdata.map(({ i, data }) => (
            <div className="citem" onClick={() => handleClickItem(i)}>
              {createElement(
                chartType.find(chart => chart.type === data.type)?.components ||
                  'div',
                { ref: chart, ...data }
              )}
              {/* <component
              ref="chart"
              is={chartType.find(c => c.type === data.type).components}
              {...data}
            /> */}
              {active === i && (
                <div className="tool">
                  <Button
                    icon="el-icon-s-tools"
                    shape="circle"
                    size="small"
                    type="primary"
                    onClick={e => handleEdit(e)}
                  />
                  <Popconfirm
                    title="确认删除吗?"
                    style={{ 'margin-left': '10px' }}
                    onConfirm={() => handleDel(i)}
                  >
                    <Button
                      icon="el-icon-delete-solid"
                      shape="circle"
                      danger
                      size="small"
                    >
                      Delete
                    </Button>
                  </Popconfirm>
                </div>
              )}
            </div>
          ))}
        </GridLayout>
      </div>
      <div className="right" ref={right}>
        <span className="title">图表配置</span>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: '样式配置',
              children: (
                <ZeForm
                  form={{ onValuesChange: handleStylesChange }}
                  items={styleItems}
                />
              )
            },
            {
              key: '2',
              label: '数据配置',
              children: (
                <ZeForm form={{ onFinish: handleSearch }} items={dataItems} />
              )
            }
          ]}
        />
      </div>
    </div>
  )
}
