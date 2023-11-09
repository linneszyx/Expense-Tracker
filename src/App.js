import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 294.67,
      date: new Date(2022, 10, 28)
    },
    {
      id: 'e3',
      title: 'Mixer',
      amount: 2545.56,
      date: new Date(2022, 8, 8)
    },
    {
      id: 'e4',
      title: 'Table',
      amount: 294.67,
      date: new Date(2022, 6, 20)
    }
  ]
  const addExpenseHandler = expense => {
    console.log('In App js')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
export default App;