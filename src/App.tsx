import { Tabs } from "antd";

import "./App.css";
import FormDemo from "@/pages/FormDemo";
import FormDesignDemo from "./pages/FormDesignDemo";

function App() {
  const items = [
    {
      key: "1",
      label: "Form",
      children: <FormDemo />,
    },
    {
      key: "2",
      label: "FormDesign",
      children: <FormDesignDemo />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
}

export default App;
