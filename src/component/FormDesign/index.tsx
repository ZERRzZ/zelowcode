import { Button, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { DragEvent, useMemo, useState } from 'react'

import RGL, { Layout, WidthProvider } from 'react-grid-layout'
const GridLayout = WidthProvider(RGL)
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import './index.css'
import { getFromItemByType } from './getFromItemByType'

import { ZeForm, ZeFormItem, ZeFormTypes } from '@chengzs/zeform'
import { getFormItemByItem } from './getFormItemByItem'

export type ILayout = Layout & { extra: any }

function FormDesign() {
  // 表单类型
  const formTypes: ZeFormTypes[] = [
    'text',
    'password',
    'textarea',
    'number',
    'mentions',
    'radio',
    'checkbox',
    'select',
    'cascader',
    'rate',
    'slider',
    'switch',
    'color',
    'time',
    'timeRange',
    'date',
    'dateRange',
    'upload',
    'button',
    'submit',
    'reset',
    'list'
  ]

  const [layout, setLayout] = useState<ILayout[]>([])
  const [active, setActive] = useState<string>('')
  const [mItems, setMItems] = useState<ZeFormItem[]>([])
  const [previewOpen, setPreviewOpen] = useState(false)

  const oItems = useMemo(() => {
    const aLayout = layout.find(v => v.i === active)
    const items = getFormItemByItem(aLayout)
    return items
  }, [layout, active])

  const handleDragStart = (e: DragEvent, val: string) => {
    e.dataTransfer.setData('text/plain', val)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const type = e.dataTransfer.getData('text/plain')
    const item = getFromItemByType(type as ZeFormTypes)
    if (!item) return
    const l = {
      i: item.item?.name,
      x: 12,
      y: 100,
      w: 12,
      h: 1.5,
      maxH: 1.5,
      minH: 1.5,
      extra: { mItem: item }
    }
    setActive(l.i)
    setLayout(pre => [...pre, l])
  }

  const handleLayoutChange = (l: Layout[]) => {
    setLayout(pre => {
      const temp = l.map(v => ({
        ...v,
        extra: pre.find(lv => lv.i === v.i)?.extra
      }))
      temp.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
      for (const v of temp) {
        if (!v.extra || !v.extra.mItem || !v.extra.mItem.item) continue
        v.extra.mItem.item.style = {
          width: `${((v.w / 12) * 100).toFixed(2)}%`
        }
      }
      return temp
    })
  }

  const handleValuesChange = (v: any) => {
    const key = Object.keys(v)[0]
    const k = key.split('_')
    setLayout(pre => {
      const temp = [...pre] as ILayout[]
      const atemp = pre.find(v => v.i === active)
      if (!atemp) return pre
      switch (k[k.length - 1]) {
        case 'rules':
          atemp.extra.mItem.item.rules = [{ required: true, message: v[key] }]
          break
        default:
          if (k.length === 2) {
            atemp.extra.mItem[k[1]] = v[key]
          } else if (k.length === 3) {
            atemp.extra.mItem[k[1]][k[2]] = v[key]
          }
      }
      return temp
    })
  }

  const handlePreview = () => {
    console.log(layout.map(v => v.extra.mItem))
    setMItems(layout.map(v => v.extra.mItem))
    setPreviewOpen(true)
  }

  // const gOptItems: ZeFormItem[] = [
  //   {
  //     type: 'radio',
  //     item: {
  //       label: '标签对齐',
  //       name: 'labelAlign',
  //       initialValue: initValue?.form?.labelAlign || 'right'
  //     },
  //     option: {
  //       optionType: 'button',
  //       options: [
  //         { label: 'right', value: 'right' },
  //         { label: 'left', value: 'left' }
  //       ]
  //     }
  //   },
  //   {
  //     type: 'number',
  //     item: {
  //       label: '标签栅格',
  //       name: 'labelCol_span',
  //       initialValue: initValue?.form?.labelCol?.span || 0
  //     },
  //     option: { max: 24, min: 0 }
  //   },
  //   {
  //     type: 'number',
  //     item: {
  //       label: '标签偏移',
  //       name: 'labelCol_offset',
  //       initialValue: initValue?.form?.labelCol?.offset || 0
  //     },
  //     option: { max: 24, min: 0 }
  //   },
  //   {
  //     type: 'number',
  //     item: {
  //       label: '控件栅格',
  //       name: 'wrapperCol_span',
  //       initialValue: initValue?.form?.wrapperCol?.span || 0
  //     },
  //     option: { max: 24, min: 0 }
  //   },
  //   {
  //     type: 'number',
  //     item: {
  //       label: '控件偏移',
  //       name: 'wrapperCol_offset',
  //       initialValue: initValue?.form?.wrapperCol?.offset || 0
  //     },
  //     option: { max: 24, min: 0 }
  //   },
  //   {
  //     type: 'radio',
  //     item: {
  //       label: '布局',
  //       name: 'layout',
  //       initialValue: initValue?.form?.layout || 'horizontal'
  //     },
  //     option: {
  //       optionType: 'button',
  //       options: [
  //         { label: 'horizontal', value: 'horizontal' },
  //         { label: 'vertical', value: 'vertical' },
  //         { label: 'inline', value: 'inline' }
  //       ]
  //     }
  //   }
  // ]

  return (
    <div className="form-design">
      <div className="left">
        {formTypes.map(v => {
          return (
            <div
              className="item"
              key={v}
              draggable={true}
              onDragStart={e => handleDragStart(e, v)}
            >
              {v}
            </div>
          )
        })}
      </div>
      <div className="center" onDragOver={handleDragOver} onDrop={handleDrop}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={40}
          onLayoutChange={l => handleLayoutChange(l)}
        >
          {layout.map(v => (
            <div
              className={`item ${v.i === active ? 'active' : ''}`}
              key={v.i}
              onClick={() => setActive(v.i)}
            >
              <div className="ibtns">
                <CloseOutlined style={{ color: 'red' }} />
              </div>
              {v.extra.mItem.item?.label ||
                v.extra.mItem.list?.label ||
                v.extra.mItem.innerHtml}
            </div>
          ))}
        </GridLayout>
      </div>
      <div className="right">
        <ZeForm form={{ onValuesChange: handleValuesChange }} items={oItems} />
        <Button type="primary" onClick={handlePreview}>
          预览
        </Button>
      </div>
      <Modal
        title="预览"
        width="70%"
        open={previewOpen}
        onCancel={() => setPreviewOpen(false)}
        destroyOnClose
      >
        <ZeForm items={mItems} />
      </Modal>
    </div>
  )
}

export default FormDesign
