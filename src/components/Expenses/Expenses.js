import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

 const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("")

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     
      {props.item.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title ={expense.title} 
        amount ={expense.amount} 
        date={expense.date}
        />
      ))}

       
    </Card>
  )
}
export default Expenses;