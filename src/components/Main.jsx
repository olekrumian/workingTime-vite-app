import { useState } from 'react'
import Tabs from './Tabs.jsx'
import DomInputs from './DomInputs'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')

  const localStorageSet = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr))
  }

  function getLocalStorage() {
    return localStorage.getItem('tableData')
      ? JSON.parse(localStorage.getItem('tableData'))
      : []
  }

  const operationValue = getLocalStorage().map((item) =>
    parseInt(item.operation)
  )
  const operationTotal = operationValue.reduce((a, b) => a + b, 0)

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'dom' ? (
          <DomInputs
            operationTotal={operationTotal}
            getLocalStorage={getLocalStorage}
            localStorageSet={localStorageSet}
          />
        ) : (
          <TableInputs operationTotal={operationTotal} />
        )}
      </div>
    </>
  )
}
