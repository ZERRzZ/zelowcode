import { ZeFormItem, ZeFormTypes } from "@chengzs/zeform";

import { uid } from "@/utils/uid";

export const getFromItemByType = (
  type: ZeFormTypes
): ZeFormItem | undefined => {
  switch (type) {
    case "text":
      return {
        type: "text",
        item: {
          label: "输入框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { placeholder: "", showCount: false, maxLength: -1 },
      };
    case "password":
      return {
        type: "password",
        item: {
          label: "密码框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
      };
    case "textarea":
      return {
        type: "textarea",
        item: {
          label: "区域输入框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { placeholder: "", rows: 5, showCount: false, maxLength: -1 },
      };
    case "number":
      return {
        type: "number",
        item: {
          label: "数字输入框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { controls: true, min: 0, max: 100 },
      };
    case "mentions":
      return {
        type: "mentions",
        item: {
          label: "提及",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { prefix: "@", rows: 1, options: [] },
      };
    case "radio":
      return {
        type: "radio",
        item: {
          label: "单选框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { optionType: "default", options: [] },
      };
    case "checkbox":
      return {
        type: "checkbox",
        item: {
          label: "多选框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { options: [] },
      };
    case "rate":
      return {
        type: "rate",
        item: {
          label: "评分",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { count: 5, allowHalf: false },
      };
    case "select":
      return {
        type: "select",
        item: {
          label: "下拉选择框",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { showSearch: false, allowClear: false, mode: "", options: [] },
      };
    case "cascader":
      return {
        type: "cascader",
        item: {
          label: "级联选择器",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { options: [] },
      };
    case "slider":
      return {
        type: "slider",
        item: {
          label: "滑动输入条",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { range: false, min: 0, max: 100, step: 1 },
      };
    case "switch":
      return {
        type: "switch",
        item: {
          label: "开关",
          name: uid(),
          valuePropName: "checked",
          rules: [],
          style: {},
        },
        option: { defaultChecked: false },
      };
    case "date":
      return {
        type: "date",
        item: {
          label: "日期选择",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { picker: "date", showTime: false },
      };
    case "time":
      return {
        type: "time",
        item: {
          label: "时间选择",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { format: "HH:mm:ss" },
      };
    case "dateRange":
      return {
        type: "dateRange",
        item: {
          label: "日期范围",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { picker: "date", showTime: false },
      };
    case "timeRange":
      return {
        type: "timeRange",
        item: {
          label: "时间范围",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: { format: "HH:mm:ss" },
      };
    case "upload":
      return {
        type: "upload",
        item: {
          label: "上传",
          name: uid(),
          initialValue: "",
          rules: [],
          style: {},
        },
        option: {
          action: "",
          accept: "",
          maxSize: 5,
          isChunk: false,
          chunkSize: 2,
          tokenType: -1,
          listType: "text",
          maxCount: 1,
          valueSplit: "",
          valueType: "string",
          crop: false,
        },
        innerHtml: "上传",
      };
    case "button":
      return {
        type: "button",
        item: { name: uid(), wrapperCol: { span: 0, offset: 0 }, style: {} },
        option: { type: "default" },
        innerHtml: "普通按钮",
      };
    case "submit":
      return {
        type: "submit",
        item: { name: uid(), wrapperCol: { span: 0, offset: 0 }, style: {} },
        option: { type: "primary" },
        innerHtml: "提交",
      };
    case "reset":
      return {
        type: "reset",
        item: { name: uid(), wrapperCol: { span: 0, offset: 0 }, style: {} },
        option: { type: "default" },
        innerHtml: "重置",
      };
    case "list":
      return {
        type: "list",
        item: { label: "表单列表", name: uid(), items: [], style: {} },
      };
  }
};
