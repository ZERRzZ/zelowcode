import { Tabs } from 'antd'

import './App.css'
import FormDemo from '@/pages/FormDemo'
import FormDesignDemo from './pages/FormDesignDemo'
import MyBarH from './component/MyChart/MyBarH'
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
    },
    {
      key: '3',
      label: 'ChartDesign',
      // children: <ChartDemo />
      children: (
        <MyBarH
          height="1000px"
          data={{
            name: 'xxx',
            data: [
              { name: '1', value: '4' },
              { name: '2', value: '3' },
              { name: '3', value: '2' },
              { name: '4', value: '1' }
            ]
          }}
        />
      )
    }
  ]

  return (
    <>
      <Tabs defaultActiveKey="2" items={items} />
    </>
  )
}

export default App
