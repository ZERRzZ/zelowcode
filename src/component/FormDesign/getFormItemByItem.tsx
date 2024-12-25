import { ZeFormItem } from '@chengzs/zeform'

export const getFormItemByItem = (item: ZeFormItem) => {
  const k1 = Object.keys(item?.item || {})
  const k2 = Object.keys(item?.option || {})
  const k3 = item?.innerHtml === undefined ? [] : ['innerHtml']

  const r1 = k1.map(k => {
    switch (k) {
      case 'label':
      case 'name':
        return {
          type: 'text',
          item: { label: k, name: `item_${k}`, initialValue: item?.item?.[k] }
        }
      default:
        return {}
    }
  })

  const r2 = k2.map(k => {
    switch (k) {
      default:
        return {}
    }
  })

  const r3 = k3.map(k => {
    switch (k) {
      default:
        return {}
    }
  })

  const res = [...r1, ...r2, ...r3]

  return res as ZeFormItem[]
}
