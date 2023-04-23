import { useState } from 'react'
import Tabs from './Tabs.jsx'
import DomInputs from './DomInputs'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')
  const [touchStartX, setTouchStartX] = useState(0)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchDistance = touchEndX - touchStartX

    if (touchDistance < 0 && activeTab === 'dom') {
      setActiveTab('table')
    } else if (touchDistance > 0 && activeTab === 'table') {
      setActiveTab('dom')
    }
  }

  return (
    <>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTabClick={handleTabClick}
      />
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {activeTab === 'dom' ? <DomInputs /> : <TableInputs />}
      </div>
    </>
  )
}
