// import logo from './logo.svg';
// import './App.css';

import ExpenseItem from "./components/Expenseltem.js";

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : 94.12,
      date : new Date(2020,7,14)

    },
    {
      id : 'e2',
      title : 'New Tv',
      amount : 800.67,
      date : new Date(2021,2,11)

    },
    {
      id : 'e3',
      title : 'Car Insurance',
      amount : 294.67,
      date : new Date(2021,2,15)

    },
    {
      id : 'e4',
      title : 'New Desk(Wooden)',
      amount : 450,
      date : new Date(2021,7,13)

    }
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      {

      }
      {expenses.map((expense) => (
        <ExpenseItem
         
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
