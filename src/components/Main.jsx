import { useState, useEffect } from 'react'
import Tabs from './Tabs.jsx'
import MainInputs from './MainInputs'
import TableInputs from './TableInputs'

export default function Main() {
  const [activeTab, setActiveTab] = useState('dom')
  const [operationTotal, setOperationTotal] = useState(0)
  const [premia, setPremia] = useState(0)
  const [weekendy, setWeekendy] = useState(0)
  const [driveUtr, setDriveUtr] = useState(0)
  const [operatLost, setOperatLost] = useState(0)
  const [sumSerwis, setSumSerwis] = useState(0)
  const [driveTime, setDriveTime] = useState(0)
  const [dutySum, setDutySum] = useState(0)

  const localStorageSet = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr))
  }

  function getLocalStorage() {
    return localStorage.getItem('tableData')
      ? JSON.parse(localStorage.getItem('tableData'))
      : []
  }
  function sumOperationsByComment(comment) {
    const items = getLocalStorage().filter((item) => item.comments === comment)
    const total = items.reduce((acc, item) => acc + parseInt(item.operation), 0)
    return total
  }

  function sumPremiaOperations() {
    return sumOperationsByComment('Premia')
  }

  function sumWeekendOperations() {
    return sumOperationsByComment('Weekendy')
  }

  function sumDriveLostOperations() {
    return sumOperationsByComment('J(Utracone)')
  }

  function sumOperationLostOperations() {
    return sumOperationsByComment('O(Utracone)')
  }

  function sumServis() {
    return sumOperationsByComment('Serwis')
  }

  function sumDriveTime() {
    return sumOperationsByComment('Jazda')
  }

  function sumDuty() {
    return sumOperationsByComment('Dyżur')
  }

  useEffect(() => {
    setOperationTotal(
      getLocalStorage().reduce(
        (total, item) => total + parseInt(item.operation),
        0
      )
    )
    setPremia(sumPremiaOperations())
    setWeekendy(sumWeekendOperations())
    setDriveUtr(sumDriveLostOperations())
    setOperatLost(sumOperationLostOperations())
    setSumSerwis(sumServis())
    setDriveTime(sumDriveTime())
    setDutySum(sumDuty())
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
            weekendy={weekendy}
            driveUtr={driveUtr}
            operatLost={operatLost}
            sumSerwis={sumSerwis}
            driveTime={driveTime}
            dutySum={dutySum}
          />
        ) : (
          <TableInputs
            operationTotal={operationTotal}
            premia={premia}
            weekendy={weekendy}
            driveUtr={driveUtr}
            operatLost={operatLost}
            sumSerwis={sumSerwis}
            driveTime={driveTime}
            dutySum={dutySum}
          />
        )}
      </div>
    </>
  )
}
