import { InputNumber } from 'antd'
import './labelCol.css'
import { useState } from 'react'

interface IProps {
  value: LabelCol | undefined
  onChange?: (v: LabelCol) => void
}

interface LabelCol {
  span?: number
  offset?: number
}

export default function labelCol({ value, onChange }: IProps) {
  const [lvalue, setLvalue] = useState(value)

  const handleChange = (e: number | null, type: string) => {
    setLvalue(pre => {
      let temp: any = { ...pre, [type]: e ? e : undefined }
      if (!temp.offset && !temp.span) {
        temp = undefined
      }
      onChange?.(temp)
      return temp
    })
  }

  return (
    <div className="label-col">
      <InputNumber
        title="标签栅格"
        placeholder="栅格 span"
        value={lvalue?.span}
        onChange={e => handleChange(e, 'span')}
      />
      <InputNumber
        title="标签偏移"
        placeholder="偏移 offset"
        value={lvalue?.offset}
        onChange={e => handleChange(e, 'offset')}
      />
    </div>
  )
}
