import "./Search.css"

export default function Search({filter, setFilter}){
  const changeSearch = (element) => {
    setFilter(element.target.value)
  }
  return (
    <div className="search">
      <input type="text" id="search" placeholder="" autoComplete="off" onChange={changeSearch} />
    </div>
  )
}