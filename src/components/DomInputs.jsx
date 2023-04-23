export default function DomInputs() {
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

  return (
    <>
      <section>
        <form className="form_wrapper">
          <datalist id="miejsce">
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
            name="miejsce"
            id="miejsce"
            placeholder="Miejsce"
            // value={row.miejsce}
            // onChange={handleChange}
          />
          <input
            type="number"
            inputMode="decimal"
            maxLength={7}
            className="kilometry"
            name="kilometry"
            id="kilometry"
            placeholder="Kilometry"
            // value={row.kilometry}
            // onChange={handleChange}
          />
          <input
            id="date"
            className="date"
            name="date"
            inputMode="decimal"
            defaultValue={getFullTime()}
            // value={row.getFullTime}
          />
          <input
            type="number"
            inputMode="decimal"
            className="operacji"
            name="iOperacji"
            id="operacji"
            placeholder="Ilosc operacji"
            // value={row.iOperacji}
            // onChange={handleChange}
          />
          <datalist id="uwagi">
            <option value="utracone" />
            <option value="brak aut" />
          </datalist>
          <input
            type="textarea"
            className="uwagi"
            name="uwagi"
            list="uwagi"
            placeholder="Uwagi"
            // value={row.uwagi}
            // onChange={handleChange}
          />
          <div className="button_wrapper">
            <button
              className="ready_btn"
              type="submit"
              onClick={() => {
                //TODO add row to table
              }}
            >
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
              {/* {table.map((row, index) => {
                const { id, miejsce, kilometry, data, iOperacji, uwagi } = row
                return (
                  <tr className="table_row" key={index} id={id}>
                    <td>{miejsce}</td>
                    <td>{kilometry}</td>
                    <td>{data}</td>
                    <td>{iOperacji}</td>
                    <td>{uwagi}</td>
                    <td>
                      <button className="usun">
                        X //TODO add remove icon for each element
                      </button>
                    </td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
        </div>
        <div className="button_wrapper">
          <button
            className="remove_btn"
            onClick={() => {
              //TODO remove all rows
            }}
          >
            Oczyszć
          </button>
          <div className="calculate">Operacji: {}</div>
        </div>
      </section>
    </>
  )
}
