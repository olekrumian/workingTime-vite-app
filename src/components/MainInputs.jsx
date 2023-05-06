import { useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import PropTypes from 'prop-types'

DomInputs.propTypes = {
  operationTotal: PropTypes.number.isRequired,
  getLocalStorage: PropTypes.func.isRequired,
  localStorageSet: PropTypes.func.isRequired,
  setOperationTotal: PropTypes.func.isRequired,
  premia: PropTypes.number.isRequired,
  weekendy: PropTypes.number.isRequired,
  driveUtr: PropTypes.number.isRequired,
  operatLost: PropTypes.number.isRequired,
  driveTime: PropTypes.number.isRequired,
  dutySum: PropTypes.number.isRequired,
}

export default function DomInputs({
  operationTotal,
  getLocalStorage,
  localStorageSet,
  setOperationTotal,
  premia,
  weekendy,
  driveUtr,
  operatLost,
  driveTime,
  dutySum,
}) {
  //*Time
  const getFullTime = () => {
    let today = new Date()

    let day = today.getDate()
    let month = today.getMonth() + 1
    if (month < 10) month = '0' + month
    let year = today.getFullYear()

    let hour = today.getHours()
    if (hour < 10) hour = '0' + hour

    let min = today.getMinutes()
    if (min < 10) min = '0' + min

    let fullDate = `${day}.${month}.${year} ${hour}:${min}`

    return fullDate
  }

  const [tableData, setTableData] = useState(getLocalStorage)
  const [inputValues, setInputValues] = useState({
    place: '',
    km: '',
    date: getFullTime(),
    operation: '',
    comments: '',
  })

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputValues({ ...inputValues, [name]: value })

    if (name === 'place' && value.includes('Premia')) {
      setInputValues({
        ...inputValues,
        place: 'Premia',
        comments: 'Premia',
      })
    }
    if (name === 'place' && value.includes('Weekendy')) {
      setInputValues({
        ...inputValues,
        place: 'Weekendy',
        comments: 'Weekendy',
      })
    }
    if (name === 'place' && value.includes('Dyżur')) {
      setInputValues({
        ...inputValues,
        place: 'Dyżur',
        comments: 'Dyżur',
      })
    }
    if (name === 'place' && value.includes('Jazda')) {
      setInputValues({
        ...inputValues,
        place: 'Jazda',
        comments: 'Jazda',
      })
    }
    if (name === 'place' && value.includes('Jazda(Utracone)')) {
      setInputValues({
        ...inputValues,
        place: 'Jazda(Utracone)',
        comments: 'J(Utracone)',
      })
    }
    if (name === 'place' && value.includes('Operacji(Utracone)')) {
      setInputValues({
        ...inputValues,
        place: 'Operacji(Utracone)',
        comments: 'O(Utracone)',
      })
    }
    if (name === 'place' && value.includes('Serwis')) {
      setInputValues({
        ...inputValues,
        place: 'Serwis',
        comments: 'Serwis',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValues.place && inputValues.km && inputValues.operation) {
      const newRow = { ...inputValues, id: new Date().getTime().toString() }
      setTableData([...tableData, newRow])
      localStorage.setItem('tableData', JSON.stringify(newRow))
      setInputValues({
        place: '',
        km: '',
        date: getFullTime(),
        operation: '',
        comments: '',
        id: '',
      })
      setOperationTotal(operationTotal + parseInt(inputValues.operation))
    }
  }

  const removeRow = (id) => {
    if (window.confirm('Potwierdzić')) {
      setTableData(tableData.filter((item) => item.id !== id))
    }
  }

  useEffect(() => {
    localStorageSet('tableData', tableData)
  }, [localStorageSet, tableData, operationTotal])

  return (
    <>
      <section>
        <form className="form_wrapper">
          <datalist id="place">
            <option value="Val" />
            <option value="Zeeb" />
            <option value="C.RO" />
            <option value="ICO405" />
            <option value="ICO502" />
            <option value="Wallenius" />
            <option value="Seneffe" />
            <option value="Hordain" />
            <option value="Serwis" />
            <option value="Jazda" />
            <option value="Jazda(Utracone)" />
            <option value="Operacji(Utracone)" />
            <option value="Dyżur" />
            <option value="Weekendy" />
            <option value="Premia" />
          </datalist>
          <input
            type="text"
            list="miejsce"
            className="miejsce"
            name="place"
            id="place"
            placeholder="Miejsce"
            value={inputValues.place}
            onChange={handleInputChange}
          />
          <input
            type="number"
            inputMode="decimal"
            maxLength={7}
            className="kilometry"
            name="km"
            id="km"
            placeholder="Kilometry"
            value={inputValues.km}
            onChange={handleInputChange}
          />
          <input
            className="date"
            name="date"
            id="date"
            inputMode="decimal"
            value={inputValues.date}
            onChange={handleInputChange}
          />
          <input
            type="number"
            inputMode="decimal"
            className="operacji"
            name="operation"
            id="operation"
            placeholder="Ilosc operacji"
            value={inputValues.operation}
            onChange={handleInputChange}
          />
          <datalist id="uwagi">
            <option value="utracone" />
            <option value="serwis" />
            <option value="brak aut" />
          </datalist>
          <input
            type="textarea"
            className="uwagi"
            name="comments"
            id="comments"
            placeholder="Uwagi"
            value={inputValues.comments}
            onChange={handleInputChange}
          />
          <div className="button_wrapper">
            <button className="ready_btn" type="submit" onClick={handleSubmit}>
              Gotowe
            </button>
          </div>
        </form>

        <div className="table_wrapper">
          <table id="table" className="table">
            <thead>
              <tr>
                <th>Miejsce</th>
                <th>Kilometry</th>
                <th>Data</th>
                <th>IO</th>
                <th>Uwagi</th>
                <th>Usun</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {tableData.map((tr, index) => {
                const { id, place, km, date, operation, comments } = tr
                return (
                  <tr className="table_row" key={index} id={id}>
                    <td>{place}</td>
                    <td>{km}</td>
                    <td>{date}</td>
                    <td>{operation}</td>
                    <td>{comments}</td>
                    <td>
                      <button
                        className="usun"
                        onClick={() => {
                          removeRow(id)
                          setOperationTotal(
                            operationTotal - parseInt(operation)
                          )
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="button_wrapper">
          <button
            className="remove_btn"
            onClick={() => {
              if (window.confirm('Potwierdzić')) {
                return setTableData([])
              }
              return window.location.reload()
            }}
          >
            Oczyszć
          </button>
          <div className="calculate">
            Operacji:{' '}
            {operationTotal -
              premia -
              weekendy -
              driveUtr -
              operatLost -
              driveTime -
              dutySum}
          </div>
        </div>
      </section>
    </>
  )
}
