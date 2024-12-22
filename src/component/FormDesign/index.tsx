import { Button, FormProps, Modal } from "antd";
import { DragEvent, useEffect, useMemo, useRef, useState } from "react";

import RGL, { Layout, WidthProvider } from "react-grid-layout";
const GridLayout = WidthProvider(RGL);
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./index.css";
import { getFromItemByType } from "./getFromItemByType";

import { Gutter } from "antd/es/grid/row";
import { useForm } from "antd/es/form/Form";

import { formOption } from "./FormOption";
import { ZeForm, ZeFormItem, ZeFormProps, ZeFormTypes } from "@chengzs/zeform";

export type ILayout = Layout & { extra: any };

function FormDesign({ initValue, onFinish }: FormDesignProps) {
  // 表单类型
  const formTypes: ZeFormTypes[] = [
    "text",
    "password",
    "textarea",
    "number",
    "mentions",
    "radio",
    "checkbox",
    "select",
    "cascader",
    "rate",
    "slider",
    "switch",
    "color",
    "time",
    "timeRange",
    "date",
    "dateRange",
    "upload",
    "button",
    "submit",
    "reset",
    "list",
  ];

  const [layout, setLayout] = useState<ILayout[]>([]);
  const [oItems, setOItems] = useState<ZeFormItem[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  const mItems = useMemo(() => {
    const temp = [...layout];
    temp.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));
    temp.forEach((v) => {
      if (v.extra.mItems && v.extra.mItems.item) {
        v.extra.mItems.item.style = {
          width: `${((v.w / 12) * 100).toFixed(2)}%`,
        };
      }
    });
    return temp.map((v) => v.extra.mItems);
  }, [layout]);

  const handleDragStart = (e: DragEvent, val: string) => {
    e.dataTransfer.setData("text/plain", val);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain");
    const item = getFromItemByType(type as ZeFormTypes);
    item &&
      setLayout((pre) => [
        ...pre,
        {
          i: item.item?.name,
          x: 12,
          y: pre.length,
          w: 12,
          h: 1,
          extra: {
            mItems: item,
          },
        },
      ]);
  };

  const handleLayoutChange = (l: Layout[]) => {
    const temp = l.map((v) => ({
      ...v,
      extra: layout.find((lv) => lv.i === v.i)?.extra,
    }));
    setLayout(temp);
  };

  const gOptItems: ZeFormItem[] = [
    {
      type: "radio",
      item: {
        label: "标签对齐",
        name: "labelAlign",
        initialValue: initValue?.form?.labelAlign || "right",
      },
      option: {
        optionType: "button",
        options: [
          { label: "right", value: "right" },
          { label: "left", value: "left" },
        ],
      },
    },
    {
      type: "number",
      item: {
        label: "标签栅格",
        name: "labelCol_span",
        initialValue: initValue?.form?.labelCol?.span || 0,
      },
      option: { max: 24, min: 0 },
    },
    {
      type: "number",
      item: {
        label: "标签偏移",
        name: "labelCol_offset",
        initialValue: initValue?.form?.labelCol?.offset || 0,
      },
      option: { max: 24, min: 0 },
    },
    {
      type: "number",
      item: {
        label: "控件栅格",
        name: "wrapperCol_span",
        initialValue: initValue?.form?.wrapperCol?.span || 0,
      },
      option: { max: 24, min: 0 },
    },
    {
      type: "number",
      item: {
        label: "控件偏移",
        name: "wrapperCol_offset",
        initialValue: initValue?.form?.wrapperCol?.offset || 0,
      },
      option: { max: 24, min: 0 },
    },
    {
      type: "radio",
      item: {
        label: "布局",
        name: "layout",
        initialValue: initValue?.form?.layout || "horizontal",
      },
      option: {
        optionType: "button",
        options: [
          { label: "horizontal", value: "horizontal" },
          { label: "vertical", value: "vertical" },
          { label: "inline", value: "inline" },
        ],
      },
    },
  ];

  const handleGOptFormValuesChange = (v) => {
    v.layout_col && setMainLayout([v.layout_col]);
    setMainForm((mf) => {
      v.labelAlign && (mf.labelAlign = v.labelAlign);
      v.labelCol_span && (mf.labelCol!.span = v.labelCol_span);
      v.labelCol_offset && (mf.labelCol!.offset = v.labelCol_offset);
      v.wrapperCol_span && (mf.wrapperCol!.span = v.wrapperCol_span);
      v.wrapperCol_offset && (mf.wrapperCol!.offset = v.wrapperCol_offset);
      v.layout && (mf.layout = v.layout);
      return JSON.parse(JSON.stringify(mf));
    });
    setMainGutter((mg) => {
      v.gutter_row && (mg[0] = v.gutter_row);
      v.gutter_col && (mg[1] = v.gutter_col);
      return [...mg];
    });
  };

  const exportJSON = () =>
    gOptForm.validateFields().then((v) => {
      // 全局配置表单固定，可以通过实例直接拿到值
      const myFormProps: ZeFormProps = {
        form: {
          labelAlign: v.labelAlign,
          layout: v.layout,
          labelCol: { span: v.labelCol_span, offset: v.labelCol_offset },
          wrapperCol: { span: v.wrapperCol_span, offset: v.wrapperCol_offset },
        },
        items: layout, // 私有的配置则用特殊的方式拿到
      };
      onFinish?.(myFormProps);
    });

  return (
    <div className="form-design">
      <div className="left">
        {formTypes.map((v) => {
          return (
            <div
              className="item"
              key={v}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, v)}
            >
              {v}
            </div>
          );
        })}
      </div>
      <div className="center" onDragOver={handleDragOver} onDrop={handleDrop}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={40}
          onLayoutChange={(l) => handleLayoutChange(l)}
        >
          {layout.map((v) => (
            <div className="item" key={v.extra.mItems.item?.name}>
              {v.extra.mItems.item?.label ||
                v.extra.mItems.list?.label ||
                v.extra.mItems.innerHtml}
            </div>
          ))}
        </GridLayout>
      </div>
      <div className="right">
        <Button type="primary" onClick={() => setPreviewOpen(true)}>
          预览
        </Button>
      </div>
      <Modal
        title="预览"
        width="70%"
        open={previewOpen}
        onCancel={() => setPreviewOpen(false)}
      >
        <ZeForm items={mItems} />
      </Modal>
    </div>
  );
}

export default FormDesign;

/**
 * 表单设计器
 * @param initValue 初始值
 * @param onFinish 完成配置时触发事件
 */
export interface FormDesignProps {
  initValue?: ZeFormProps;
  onFinish?: (value: ZeFormProps) => void;
}
