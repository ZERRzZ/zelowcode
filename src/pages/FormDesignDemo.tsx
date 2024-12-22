import { Form } from "antd";
import { useState } from "react";
import { ZeFormItem } from "@chengzs/zeform";

import FormDesign from "@/component/FormDesign";

function FormDesignDemo() {
  const [baseForm] = Form.useForm();

  const [designOpen, setDesignOpen] = useState(false);
  const [designData, setDesignData] = useState<any>();
  const [designIndex, setDesignIndex] = useState(-1);

  const designFinish = (value) => {
    let temp = [...designData];
    const dataContent =
      temp?.[designIndex]?.self && JSON.parse(temp?.[designIndex]?.self);
    const obj = {
      name: dataContent?.name || "未知模板",
      key: dataContent?.key || "unknow",
      minSize: dataContent?.minSize || 1,
      maxSize: dataContent?.maxSize || 1,
      data: renderData(value.items),
      form: value,
    };
    temp[designIndex] = { self: JSON.stringify(obj, undefined, 2) };
    baseForm.setFieldValue("data_content", temp);
    setDesignOpen(false);
    function renderData(items: ZeFormItem[] = []): any {
      return items.map((i) =>
        i.type !== "list"
          ? { name: i.item?.label, key: i.item?.name, type: i.type }
          : {
              name: i.item?.label,
              key: i.item?.name,
              type: i.type,
              list: renderData(i.item?.items),
            }
      );
    }
  };

  return (
    <>
      <FormDesign
        onFinish={designFinish}
        initValue={
          designData?.[designIndex]?.self &&
          JSON.parse(designData?.[designIndex]?.self).form
        }
      />
    </>
  );
}

export default FormDesignDemo;
