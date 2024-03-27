import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionHistoryList: [],
    title: '',
    amount: '',
    transactionTypeId: transactionTypeOptions[0].optionId,
  }

  submitEvent = event => {
    event.preventDefault()
    const {title, amount, transactionTypeId} = this.state
    const findType = transactionTypeOptions.find(
      eachItem => eachItem.optionId === transactionTypeId,
    )
    const {displayText} = findType
    const newHistory = {
      id: v4(),
      title,
      amount: parseInt(amount),
      transactionType: displayText,
    }

    this.setState(prevState => ({
      transactionHistoryList: [...prevState.transactionHistoryList, newHistory],
      title: '',
      amount: '',
      transactionTypeId: transactionTypeOptions[0].optionId,
    }))
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: event.target.value})
  }

  onTypeId = event => {
    this.setState({transactionTypeId: event.target.value})
  }

  deleteHistory = id => {
    const {transactionHistoryList} = this.state
    const updatedHistory = transactionHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({transactionHistoryList: updatedHistory})
  }

  getExpenses = () => {
    const {transactionHistoryList} = this.state
    let expense = 0

    transactionHistoryList.forEach(eachItem => {
      if (eachItem.transactionType === transactionTypeOptions[1].displayText) {
        expense += eachItem.amount
      }
    })
    return expense
  }

  getIncome = () => {
    const {transactionHistoryList} = this.state
    let income = 0

    transactionHistoryList.forEach(eachItem => {
      if (eachItem.transactionType === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionHistoryList} = this.state
    let income = 0
    let expense = 0
    let balance = 0

    transactionHistoryList.forEach(eachItem => {
      if (eachItem.transactionType === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      } else if (
        eachItem.transactionType === transactionTypeOptions[1].displayText
      ) {
        expense += eachItem.amount
      }
    })

    balance = income - expense

    return balance
  }

  render() {
    const {transactionHistoryList, transactionTypeId, title, amount} =
      this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expesnseAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-user-details">
            <h1 className="user-name">Hi,Richard</h1>
            <p className="user-greet">
              Welcome back to your{' '}
              <span className="user-span">Money Manager</span>
            </p>
          </div>
          <div>
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expesnseAmount={expesnseAmount}
            />
          </div>
          <div className="transaction-details-container">
            <form onSubmit={this.submitEvent}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.onTitle}
                value={title}
                type="text"
                id="title"
                placeholder="TITLE"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.onAmount}
                type="text"
                value={amount}
                id="amount"
                placeholder="AMOUNT"
              />
              <label htmlFor="type">TYPE</label>
              <select
                onChange={this.onTypeId}
                id="type"
                value={transactionTypeId}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button className="form-buttom" type="submit">
                Add
              </button>
            </form>
            <div className="transaction-history-container">
              <h1>History</h1>
              <ul>
                <li className="history-headings-container">
                  <p className="list-p">Title</p>
                  <p className="list-p">Amount</p>
                  <p className="list-p">Type</p>
                </li>
                {transactionHistoryList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    deleteHistory={this.deleteHistory}
                    eachHistory={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
