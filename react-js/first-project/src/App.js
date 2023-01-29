import React from 'react';
import Expenses from "./components/Expenses/Expenses";
const App = (props) => {
  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 530,
      date: new Date(2021, 2, 2)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 950,
      date: new Date(2021, 4, 22)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 140,
      date: new Date(2021, 5, 5)
    }
  ]

  return (
    <div className="App">
      <h2>Lets get started</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
