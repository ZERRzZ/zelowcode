import { Button, Modal } from 'antd'
import './index.css'
import { useState } from 'react'
import FormDesign from '.'
import { ZeFormItem } from '@chengzs/zeform'

interface IProps {
  value?: ZeFormItem[]
  onChange?: (v: ZeFormItem[]) => void
}

export default function FDChildren({ value, onChange }: IProps) {
  const [open, setOpen] = useState(false)
  const [lvalue, setLvalue] = useState<ZeFormItem[]>(value || [])

  const handleChange = (v: ZeFormItem[]) => {
    setLvalue(v)
    onChange?.(v)
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        配置子项
      </Button>
      <Modal
        width="90%"
        title="Basic Modal"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <FormDesign
          showSubmit={true}
          value={lvalue}
          onChange={v => handleChange(v)}
        />
      </Modal>
    </>
  )
}
