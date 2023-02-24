// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, deduction} = props
  const {id, value} = denominationsList

  const change = () => {
    deduction(value)
  }

  return (
    <li className="l" key={id}>
      <button type="button" className="li" onClick={change}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
