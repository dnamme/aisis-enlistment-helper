import { FaTimes } from "react-icons/fa"

function InputRow({ row, onSelect, onDelete }) {
  return (
    <div className={`input-row ${row.free_slots > 0 ? "" : "disabled"}`}>
      <input type="radio" checked={row.selected} onChange={onSelect} />
      <p>{row.code}</p>
      <p>{row.section}</p>
      <p>{row.name}</p>
      <p>{row.time}</p>
      <p>{row.room}</p>
      <p>{row.instructor}</p>
      <p>{`${row.free_slots}/${row.max_slots} Slots`}</p>

      <FaTimes
        style={{ cursor: "pointer", marginLeft: "auto" }}
        onClick={onDelete}
      />
    </div>
  )
}

export default InputRow
