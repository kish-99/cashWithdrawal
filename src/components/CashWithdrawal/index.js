// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {number: 2000}

  deduction = value => {
    this.setState(prevState => ({
      number: prevState.number - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {number} = this.state
    return (
      <div className="ct">
        <h1>Sarah Villiams</h1>
        <div className="balance-card">
          <p>Your Balance</p>
          <div>
            <p>{number}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <ul>
          {denominationsList.map(each => (
            <DenominationItem
              denominationsList={each}
              deduction={this.deduction}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
