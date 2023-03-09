import React from 'react'; 
import './ExpensesFilter.css';

 const ExpensesFilter=(props)=> {

    const dropdownChangeHandler = (event)=>{
        props.onChangeFilter(event.target.value); 
    }
  return (
    <div >
        <div>
            <label className='expenses-filter'>Filter by year</label>
           
            <select value={props.selected} onChange={dropdownChangeHandler} className="yearMargin">
                <option value="2022">2023</option>
                <option value="2021">2022</option>
                <option value="2020">2021</option>
                <option value="2019">2019</option>
            </select>
        </div>
      
    </div>
  )
}
export default ExpensesFilter;