import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

 

 const DUMMY_EXPENSES = [
    {
      id:"e1",
      title : "toilet paper",
      amount : 384,
      date : new Date(2023,3,23)
    } ,
    {
      id:"e2",
      title : "new tv",
      amount : 384,
      date : new Date(2023,3,23)
    } ,
    {
      id:"e3",
      title : "car insurance",
      amount : 384,
      date : new Date(2023,3,23)
    } ,
    {
      id:"e4",
      title : "mobile recharge",
      amount : 384,
      date : new Date(2023,3,23)
    } 
  ];
const App = ()=> {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [...prevExpenses, expense];
    })
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item = {expenses}/>
    </div>
   
  );
}

export default App;
