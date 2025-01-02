import { Tabs } from 'antd'

import './App.css'
import FormDemo from '@/pages/FormDemo'
import FormDesignDemo from './pages/FormDesignDemo'
// import ChartDemo from '@/pages/ChartDemo'

function App() {
  const items = [
    {
      key: '1',
      label: 'Form',
      children: <FormDemo />
    },
    {
      key: '2',
      label: 'FormDesign',
      children: <FormDesignDemo />
    }
    // {
    //   key: '3',
    //   label: 'ChartDesign',
    //   children: <ChartDemo />
    // }
  ]

  return (
    <>
      <Tabs defaultActiveKey="2" items={items} />
    </>
  )
}

export default App
