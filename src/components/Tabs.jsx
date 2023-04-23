// eslint-disable-next-line react/prop-types
export default function Tabs({ setActiveTab, activeTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <div className="btn_container">
        <button
          className={`tab_btn ${activeTab === 'dom' ? 'active' : ''}`}
          data-id="inputs"
          onClick={() => handleTabClick('dom')}
        >
          Dom
        </button>
        <button
          className={`tab_btn ${activeTab === 'table' ? 'active' : ''}`}
          data-id="tabs"
          onClick={() => handleTabClick('table')}
        >
          Tabela
        </button>
      </div>
    </>
  )
}
