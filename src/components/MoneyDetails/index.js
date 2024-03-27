import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expesnseAmount} = props
  return (
    <div className="money-detail-container">
      <div className="money-container balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-container income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-container exp-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses </p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expesnseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
