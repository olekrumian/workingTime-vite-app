import { useState, useEffect } from 'react'
import Tabs from './Tabs.jsx'
import MainInputs from './MainInputs'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')
  const [operationTotal, setOperationTotal] = useState(0)
  const [premia, setPremia] = useState(0)

  const localStorageSet = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr))
  }

  function getLocalStorage() {
    return localStorage.getItem('tableData')
      ? JSON.parse(localStorage.getItem('tableData'))
      : []
  }

  function sumPremiaOperations() {
    const items = getLocalStorage().filter((item) => item.comments === 'Premia')
    const total = items.reduce((acc, item) => acc + parseInt(item.operation), 0)
    return total
  }

  useEffect(() => {
    setOperationTotal(
      getLocalStorage().reduce(
        (total, item) => total + parseInt(item.operation),
        0
      )
    )
    setPremia(sumPremiaOperations())
  }, [operationTotal])

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'dom' ? (
          <MainInputs
            operationTotal={operationTotal}
            setOperationTotal={setOperationTotal}
            getLocalStorage={getLocalStorage}
            localStorageSet={localStorageSet}
            premia={premia}
          />
        ) : (
          <TableInputs operationTotal={operationTotal} premia={premia} />
        )}
      </div>
    </>
  )
}
