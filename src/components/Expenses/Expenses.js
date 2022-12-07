import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
   const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
 return(
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {props.items.map((value)=>{
        return (
        <ExpenseItem 
        title={value.title} 
        key={value.id}
        amount={value.amount} 
        date={value.date} 
        location={value.location}
        ></ExpenseItem>
        );
       })}

       </Card>

 );
}

export default Expenses;