import { useState } from 'react'
import PropTypes from 'prop-types'

TableInputs.propTypes = {
  operationTotal: PropTypes.number.isRequired,
  premia: PropTypes.number.isRequired,
  weekendy: PropTypes.number.isRequired,
  driveUtr: PropTypes.number.isRequired,
  operatLost: PropTypes.number.isRequired,
  sumSerwis: PropTypes.number.isRequired,
  driveTime: PropTypes.number.isRequired,
  dutySum: PropTypes.number.isRequired,
}

export default function TableInputs({
  operationTotal,
  premia,
  weekendy,
  driveUtr,
  operatLost,
  sumSerwis,
  driveTime,
  dutySum,
}) {
  const [sumTotal, setSumTotal] = useState({
    operation:
      operationTotal -
      premia -
      weekendy -
      driveUtr -
      operatLost -
      sumSerwis -
      driveTime -
      dutySum,
    operationLost: operatLost,
    drive: driveTime,
    driveLost: driveUtr,
    duty: dutySum,
    serwis: sumSerwis,
    weekend: weekendy,
    bonus: premia,
  })

  const operation = sumTotal.operation * 42
  const operationLost = sumTotal.operationLost * 21
  const drive = sumTotal.drive * 42
  const driveLost = sumTotal.driveLost * 21
  const serwis = sumTotal.serwis * 21
  const duty = sumTotal.duty * 150
  const weekend = sumTotal.weekend * 150
  const bonus = sumTotal.bonus * 100

  function totalSum() {
    const arrSum = [
      operation,
      operationLost,
      drive,
      driveLost,
      serwis,
      duty,
      weekend,
      bonus,
    ]

    return arrSum.reduce((total, index) => total + index)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSumTotal({ ...sumTotal, [name]: value })
  }

  return (
    <>
      <section id="tabs">
        <form action="form_wrapper">
          <label htmlFor="operation" className="input_title">
            Operacji
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="operation"
              type="text"
              name="operation"
              onChange={handleChange}
              value={sumTotal.operation}
            />
            <p className="input_goal">{operation}</p>
          </div>
          <label htmlFor="operationLost" className="input_title">
            Operacji utracone
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="operationLost"
              type="text"
              name="operationLost"
              onChange={handleChange}
              value={sumTotal.operationLost}
            />
            <p className="input_goal">{operationLost}</p>
          </div>
          <label htmlFor="drive" className="input_title">
            Jazda
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="drive"
              type="text"
              name="drive"
              onChange={handleChange}
              value={sumTotal.drive}
            />
            <p className="input_goal">{drive}</p>
          </div>
          <label htmlFor="driveLost" className="input_title">
            Jazda utracone
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="driveLost"
              type="text"
              name="driveLost"
              onChange={handleChange}
              value={sumTotal.driveLost}
            />
            <p className="input_goal">{driveLost}</p>
          </div>
          <label htmlFor="driveLost" className="input_title">
            Serwis
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="serwis"
              type="text"
              name="serwis"
              onChange={handleChange}
              value={sumTotal.serwis}
            />
            <p className="input_goal">{serwis}</p>
          </div>
          <label htmlFor="duty" className="input_title">
            Dyżur
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="duty"
              type="text"
              name="duty"
              onChange={handleChange}
              value={sumTotal.duty}
            />
            <p className="input_goal">{duty}</p>
          </div>
          <label htmlFor="weekend" className="input_title">
            Weekendy
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="weekend"
              type="text"
              name="weekend"
              onChange={handleChange}
              value={sumTotal.weekend}
            />
            <p className="input_goal">{weekend}</p>
          </div>
          <label htmlFor="bonus" className="input_title">
            Premia (dni pracy)
          </label>
          <div className="input_wrapper">
            <input
              className="input_value"
              inputMode="decimal"
              id="bonus"
              type="text"
              name="bonus"
              onChange={handleChange}
              value={sumTotal.bonus}
            />
            <p className="input_goal">{bonus}</p>
          </div>
        </form>
        <div className="summa_wyplaty">
          <p className="wyplata">{totalSum ? `${totalSum()}` : `0`}</p>
        </div>
        <table className="tableTab"></table>
      </section>
    </>
  )
}
