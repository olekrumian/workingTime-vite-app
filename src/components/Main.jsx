import { useState } from 'react'
import Tabs from './Tabs.jsx'
import MainInputs from './MainInputs.jsx'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')
  const [operationTotal, setOperationTotal] = useState(0)

  const localStorageSet = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr))
  }

  function getLocalStorage() {
    return localStorage.getItem('tableData')
      ? JSON.parse(localStorage.getItem('tableData'))
      : []
  }

  // const operationTotal = getLocalStorage().reduce(
  //   (total, item) => total + parseInt(item.operation),
  //   0
  // )

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'dom' ? (
          <MainInputs
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
