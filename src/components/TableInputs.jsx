import { useState } from 'react'

export default function TableInputs() {
  const [sumTotal, setSumTotal] = useState({
    operation: '',
    operationLost: '',
    drive: '',
    driveLost: '',
    duty: '',
    weekend: '',
    bonus: '',
  })

  const operation = sumTotal.operation * 42
  const operationLost = sumTotal.operationLost * 21
  const drive = sumTotal.drive * 42
  const driveLost = sumTotal.driveLost * 21
  const duty = sumTotal.duty * 150
  const weekend = sumTotal.weekend * 150
  const bonus = sumTotal.bonus * 100

  function totalSum() {
    const arrSum = [
      operation,
      operationLost,
      drive,
      driveLost,
      duty,
      weekend,
      bonus,
    ]

    return arrSum.reduce((total, index) => total + index)
  }
  console.log(totalSum())

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSumTotal({ ...sumTotal, [name]: value })
  }

  return (
    <>
      <section id="tabs">
        <form action="form_wrapper">
          <p className="input_title">Operacji</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="operation"
              type="text"
              name="operation"
              onChange={handleChange}
              value={sumTotal.operation}
            />
            <p className="input_goal">{operation}</p>
          </div>
          <p className="input_title">Operacji utracone</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="operationLost"
              type="text"
              name="operationLost"
              onChange={handleChange}
              value={sumTotal.operationLost}
            />
            <p className="input_goal">{operationLost}</p>
          </div>
          <p className="input_title">Jazda</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="drive"
              type="text"
              name="drive"
              onChange={handleChange}
              value={sumTotal.drive}
            />
            <p className="input_goal">{drive}</p>
          </div>
          <p className="input_title">Jazda utracone</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="driveLost"
              type="text"
              name="driveLost"
              onChange={handleChange}
              value={sumTotal.driveLost}
            />
            <p className="input_goal">{driveLost}</p>
          </div>
          <p className="input_title">Dyżur</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="duty"
              type="text"
              name="duty"
              onChange={handleChange}
              value={sumTotal.duty}
            />
            <p className="input_goal">{duty}</p>
          </div>
          <p className="input_title">Weekendy</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="weekend"
              type="text"
              name="weekend"
              onChange={handleChange}
              value={sumTotal.weekend}
            />
            <p className="input_goal">{weekend}</p>
          </div>
          <p className="input_title">Premia (dni pracy)</p>
          <div className="input_wrapper">
            <input
              className="input_value"
              id="bonus"
              type="text"
              name="bonus"
              onChange={handleChange}
              value={sumTotal.bonus}
            />
            <p className="input_goal">{bonus}</p>
          </div>
          {/* <button className="ready_btn">Policz</button> */}
        </form>
        <div className="summa_wyplaty">
          <p className="wyplata">{totalSum ? `${totalSum()}` : `0`}</p>
        </div>
        <table className="tableTab"></table>
      </section>
    </>
  )
}
