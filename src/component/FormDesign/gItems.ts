import { ZeFormItem } from '@chengzs/zeform'

export const gItems: ZeFormItem[] = [
  {
    type: 'radio',
    item: {
      label: '标签对齐',
      name: 'labelAlign',
      initialValue: 'right'
    },
    option: {
      optionType: 'button',
      options: [
        { label: 'right', value: 'right' },
        { label: 'left', value: 'left' }
      ]
    }
  },
  {
    type: 'number',
    item: {
      label: '标签栅格',
      name: 'labelCol_span',
      initialValue: undefined
    },
    option: { max: 24, min: 0 }
  },
  {
    type: 'number',
    item: {
      label: '标签偏移',
      name: 'labelCol_offset',
      initialValue: undefined
    },
    option: { max: 24, min: 0 }
  },
  {
    type: 'radio',
    item: {
      label: '布局',
      name: 'layout',
      initialValue: 'horizontal'
    },
    option: {
      optionType: 'button',
      options: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
        { label: 'inline', value: 'inline' }
      ]
    }
  }
]
