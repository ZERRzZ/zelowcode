import { FormProps } from "antd";
import { ZeForm, ZeFormItem } from "@chengzs/zeform";
import { InfoCircleOutlined } from "@ant-design/icons";
import "@chengzs/zeform/lib/zeform.css";

export default function FormDemo() {
  const form: FormProps = {
    layout: "horizontal",
    labelCol: { span: 2 },
    onFinish: (values) => {
      console.log(values);
    },
  };

  const items: ZeFormItem[] = [
    {
      type: "text",
      item: {
        label: "text",
        name: "text",
        labelCol: { span: 4 },
        style: { width: "50%" },
      },
      option: { prefix: <InfoCircleOutlined /> },
    },
    {
      type: "password",
      item: {
        label: "password",
        name: "password",
        labelCol: { span: 4 },
        style: { width: "50%" },
      },
    },
    {
      type: "textarea",
      item: { label: "textarea", name: "textarea" },
    },
    {
      type: "list",
      item: {
        label: "list",
        name: "list",
        items: [
          {
            type: "text",
            item: { label: "text", name: "text" },
          },
          {
            type: "password",
            item: { label: "password", name: "password" },
          },
        ],
      },
    },
  ];

  return <ZeForm form={form} items={items} />;
}
