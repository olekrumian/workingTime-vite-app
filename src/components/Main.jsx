import { useState } from 'react'
import Tabs from './Tabs.jsx'
import DomInputs from './DomInputs'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ touchAction: 'pan-y' }}>
        {activeTab === 'dom' ? <DomInputs /> : <TableInputs />}
      </div>
    </>
  )
}
