import { Button, FormProps, Modal, Tabs } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { DragEvent, useMemo, useState } from 'react'

import RGL, { Layout, WidthProvider } from 'react-grid-layout'
const GridLayout = WidthProvider(RGL)
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import './index.css'
import { getFromItemByType } from './getFromItemByType'

import { ZeForm, ZeFormTypes } from '@chengzs/zeform'
import { getFormItemByItem } from './getFormItemByItem'
import { gItems } from './gItems'

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
    // 'list'
  ]

  const [layout, setLayout] = useState<ILayout[]>([])
  const [active, setActive] = useState<string>('')
  const [mForm, setMForm] = useState<FormProps>({})
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

  const handleGValuesChange = (v: any) => {
    const key = Object.keys(v)[0]
    const k = key.split('_')
    setMForm(pre => {
      const temp: any = { ...pre }
      if (k.length === 1) {
        temp[k[0]] = v[key]
      } else if (k.length === 2) {
        temp[k[0]]
          ? (temp[k[0]][k[1]] = v[key])
          : (temp[k[0]] = { [k[1]]: v[key] })
      }
      return temp
    })
  }

  const handlePreview = () => {
    console.log(layout.map(v => v.extra.mItem), 'item')
    console.log(mForm, 'form')
    setPreviewOpen(true)
  }

  const handleDelete = (i: string) => {
    const index = layout.findIndex(v => v.i === i)
    setLayout(pre => {
      const temp = [...pre]
      temp.splice(index, 1)
      return temp
    })
  }

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
                <CloseOutlined
                  style={{ color: 'red' }}
                  onClick={() => handleDelete(v.i)}
                />
              </div>
              {v.extra.mItem.item?.label ||
                v.extra.mItem.list?.label ||
                v.extra.mItem.innerHtml}
            </div>
          ))}
        </GridLayout>
      </div>
      <div className="right">
        <Tabs
          defaultActiveKey="2"
          items={[
            {
              key: '1',
              label: '控件配置',
              children: (
                <ZeForm
                  form={{ onValuesChange: handleValuesChange }}
                  items={oItems}
                />
              )
            },
            {
              key: '2',
              label: '全局配置',
              children: (
                <ZeForm
                  form={{ onValuesChange: handleGValuesChange }}
                  items={gItems}
                />
              )
            }
          ]}
        />
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
        <ZeForm form={mForm} items={layout.map(v => v.extra.mItem)} />
      </Modal>
    </div>
  )
}

export default FormDesign
