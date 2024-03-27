import './index.css'

const TransactionItem = props => {
  const {eachHistory, deleteHistory} = props
  const {id, title, amount, transactionType} = eachHistory

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-items">
      <p className="history-item-cell">{title}</p>
      <p className="history-item-cell">Rs {amount}</p>
      <p className="history-item-cell">{transactionType}</p>
      <div className="button-container">
        <button
          onClick={onDelete}
          className="icon-button"
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
