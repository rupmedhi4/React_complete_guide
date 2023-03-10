import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

 const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("")

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.item.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  // let expensesContent = <p>No Expense Found</p>

  // if( filteredExpenses.length > 0){
 
  //   expensesContent =  filteredExpenses.map((expense)=>(
  //     <ExpenseItem
  //     key={expense.id}
  //     title ={expense.title} 
  //     amount ={expense.amount} 
  //     date={expense.date}
  //     />
  //   ))
  // }
  

  return (
    <Card className='expenses'>
      <ExpensesFilter
         selected={filteredYear}
         onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses}/>
       
      {/* {filteredExpenses.length===0 && <p>No Expense Found</p> }
     
     { filteredExpenses.length > 0  &&
      
        filteredExpenses.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title ={expense.title} 
        amount ={expense.amount} 
        date={expense.date}
        />
      ))
      } */}
      
      <ExpensesList items={filteredExpenses}/>
     

       
    </Card>
  )
}
export default Expenses;