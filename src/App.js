import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENESES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28)
  },
  {
    id: 'e2',
    title: 'TV',
    amount: 294.67,
    date: new Date(2025, 10, 28)
  },
  {
    id: 'e3',
    title: 'Desk',
    amount: 2545.56,
    date: new Date(2022, 8, 8)
  },
  {
    id: 'e4',
    title: 'Table',
    amount: 294.67,
    date: new Date(2023, 6, 20)
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENESES)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
export default App;