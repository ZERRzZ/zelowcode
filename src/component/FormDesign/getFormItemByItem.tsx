import { Modal } from 'antd'
import { ZeFormItem } from '@chengzs/zeform'

import FormDesign, { ILayout } from '.'
import MyOptions from './MyOptions'
import LabelCol from './labelCol'

export const getFormItemByItem = (layout?: ILayout) => {
  if (!layout) return []

  const item = layout?.extra?.mItem || []

  const k1 = Object.keys(item?.item || {})
  const k2 = Object.keys(item?.option || {})
  const k3 = item?.innerHtml === undefined ? '' : 'innerHtml'

  const types = ['text', 'number', 'switch']
  const keys = [
    [
      'label',
      'name',
      'initialValue',
      'rules',
      'placeholder',
      'prefix',
      'format',
      'action',
      'accept',
      'valueSplit'
    ],
    ['rows', 'maxLength', 'min', 'max', 'count', 'step', 'maxSize', 'maxCount'],
    [
      'showCount',
      'controls',
      'allowHalf',
      'showSearch',
      'allowClear',
      'range',
      'defaultChecked',
      'showTime'
    ]
  ]

  const r1 = k1.map(k => {
    if (k === 'items') {
      console.log(11)
      return {
        type: 'button',
        innerHtml: '配置子项',
        option: {
          type: 'primary',
          onClick: () => {
            Modal.confirm({
              title: '子项配置',
              width: '90%',
              content: <FormDesign />,
              icon: null,
              maskClosable: true,
              closable: true,
              footer: null
            })
          }
        }
      }
    }
    if (k === 'labelCol') {
      return {
        type: 'custom',
        item: { label: k, name: `${layout.i}_item_${k}` },
        innerHtml: <LabelCol value={item.item.labelCol} />
      }
    }
    const type = types[keys.findIndex(v => v.includes(k))]
    if (!type) return undefined
    return {
      type,
      item: {
        label: k,
        name: `${layout.i}_item_${k}`,
        initialValue: item?.item?.[k]
      }
    }
  })

  const r2 = k2.map(k => {
    if (k === 'optionType') {
      return {
        type: 'radio',
        item: {
          label: k,
          name: `${layout.i}_option_${k}`,
          initialValue: item?.option?.[k]
        },
        option: {
          optionType: 'button',
          options: [
            { label: 'default', value: 'default' },
            { label: 'button', value: 'button' }
          ]
        }
      }
    }
    if (k === 'options') {
      return {
        type: 'custom',
        item: { label: k, name: `${layout.i}_option_${k}` },
        innerHtml: <MyOptions options={item.option.options} />
      }
    }
    if (k === 'mode') {
      return {
        type: 'radio',
        item: {
          label: k,
          name: `${layout.i}_option_${k}`,
          initialValue: item?.option?.[k]
        },
        option: {
          optionType: 'button',
          options: [
            { label: 'single', value: '' },
            { label: 'tags', value: 'tags' },
            { label: 'multiple', value: 'multiple' }
          ]
        }
      }
    }
    if (k === 'picker') {
      return {
        type: 'radio',
        item: {
          label: k,
          name: `${layout.i}_option_${k}`,
          initialValue: item?.option?.[k]
        },
        option: {
          optionType: 'button',
          options: [
            { label: 'date', value: 'date' },
            { label: 'week', value: 'week' },
            { label: 'month', value: 'month' },
            { label: 'quarter', value: 'quarter' },
            { label: 'year', value: 'year' }
          ]
        }
      }
    }
    if (k === 'listType') {
      return {
        type: 'radio',
        item: {
          label: k,
          name: `${layout.i}_option_${k}`,
          initialValue: item?.option?.[k]
        },
        option: {
          optionType: 'button',
          options: [
            { label: 'text', value: 'text' },
            { label: 'picture', value: 'picture' },
            { label: 'picture-card', value: 'picture-card' },
            { label: 'picture-circle', value: 'picture-circle' }
          ]
        }
      }
    }
    if (k === 'type') {
      return {
        type: 'radio',
        item: {
          label: k,
          name: `${layout.i}_option_${k}`,
          initialValue: item?.option?.[k]
        },
        option: {
          optionType: 'button',
          options: [
            { label: 'primary', value: 'primary' },
            { label: 'ghost', value: 'ghost' },
            { label: 'dashed', value: 'dashed' },
            { label: 'link', value: 'link' },
            { label: 'text', value: 'text' },
            { label: 'default', value: 'default' }
          ]
        }
      }
    }
    const type = types[keys.findIndex(v => v.includes(k))]
    if (!type) return undefined
    return {
      type,
      item: {
        label: k,
        name: `${layout.i}_option_${k}`,
        initialValue: item?.option?.[k]
      }
    }
  })

  const r3 = k3
    ? {
        type: 'text',
        item: {
          label: k3,
          name: `${layout.i}_${k3}`,
          initialValue: item?.option?.[k3]
        }
      }
    : undefined

  const res = [...r1, ...r2, r3].filter(v => v)

  return res as ZeFormItem[]
}
