import { ChartType } from '@/types/chartDesign'
import { randomColor } from '@/utils/color'
import { ZeFormItem } from '@chengzs/zeform'
import { Button, ColorPicker } from 'antd'

export const initStyleItems = (type: ChartType): ZeFormItem[] => {
  //
  const baseItems: ZeFormItem[] = [
    {
      type: 'text',
      item: { name: 'title', label: '标题' }
    },
    {
      type: 'color',
      item: { name: 'tcolor', initialValue: '#000', label: '文本颜色' }
    },
    {
      type: 'switch',
      item: { name: 'tooltipShow', label: '是否显示提示框' }
    },
    {
      type: 'switch',
      item: { name: 'legendShow', label: '是否显示图例' }
    }
  ]

  switch (type) {
    case 'bar':
    case 'barH':
    case 'boxplot':
    case 'scatter':
    case 'scatterE':
    case 'radar':
    case 'line':
    case 'lineA':
      return [
        ...baseItems,
        {
          type: 'custom',
          item: {
            name: 'color',
            initialValue: randomColor(1, 'rgb'),
            label: '主题颜色'
          }
          // innerHtml: (
          //   <div className="color-custom">
          //     <ColorPicker size="small" v-model="styleModel.color" />
          //     <Button
          //       icon="el-icon-refresh"
          //       size="small"
          //       onClick={handleRandomColor}
          //     />
          //   </div>
          // )
        }
      ]
    case 'pie':
    case 'pieO':
    case 'candlestick':
    case 'tree':
    case 'treemap':
    case 'sunburst':
      return [...baseItems]
    case 'tableC':
      return [
        {
          type: 'text',
          item: { name: 'title', label: '标题' }
        }
      ]
  }
}

export const initDataItems = () => {
  return [
    { type: 'text', item: { name: 'type', label: '指标类型' } },
    {
      type: 'number',
      item: { name: 'num', initialValue: 6, label: '数据条数' }
    },
    { type: 'search', item: { name: '查询数据' } }
  ]
}

// export const calFormModel = items => {
//   const obj = {}
//   function getValueByType(type) {
//     switch (type) {
//       case 'input':
//         return ''
//       case 'switch':
//         return true
//       case 'number':
//         return 0
//     }
//   }
//   items.forEach(
//     i =>
//       i.name &&
//       (obj[i.name] = i.init === undefined ? getValueByType(i.type) : i.init)
//   )
//   return obj
// }

export const initData = (type: string, num: number) => {
  let arr = []
  switch (type) {
    case 'boxplot':
      for (let i = 0; i < num; i++) {
        arr.push({
          name: `指标${i + 1}`,
          value: [1, 2, 3, 4, 5, 6]
            .map(() => Math.round(Math.random() * 100))
            .sort((a, b) => a - b)
        })
      }
      break
    case 'candlestick':
      for (let i = 0; i < num; i++) {
        arr.push({
          name: `指标${i + 1}`,
          value: [1, 2, 3, 4].map(() => Math.round(Math.random() * 100))
        })
      }
      break
    case 'tableC':
      for (let i = 0; i < num; i++) {
        const obj: any = {}
        ;[1, 2, 3, 4, 5].forEach(v => {
          obj[`指标${v}`] = (Math.random() * 100).toFixed(2)
        })
        arr.push(obj)
      }
      break
    case 'tree':
    case 'treemap':
      arr = renderTreeData(num, 1)
      break
    case 'sunburst':
      arr = renderSunData(num, 1)
      break
    default:
      for (let i = 0; i < num; i++) {
        arr.push({
          name: `样本${i + 1}`,
          value: (Math.random() * 100).toFixed(2)
        })
      }
  }
  return arr
}

function renderTreeData(num: number, count: number) {
  const temp: any = []
  for (let i = 0; i < num; i++) {
    temp.push({
      name: `${count}-${Math.ceil(Math.random() * 10)}`,
      value: Math.ceil(Math.random() * 100),
      children:
        num === 0
          ? undefined
          : renderTreeData(Math.floor(num / (count + 1)), count + 1)
    })
  }
  return temp
}

function renderSunData(num: number, count: number) {
  const temp = []
  for (let i = 0; i < num; i++) {
    temp.push({
      name: `${count}-${Math.ceil(Math.random() * 10)}`,
      value: num === 0 ? Math.ceil(Math.random() * 100) : undefined,
      children:
        num === 0
          ? undefined
          : renderTreeData(Math.floor(num / (count + 1)), count + 1)
    })
  }
  return temp
}
