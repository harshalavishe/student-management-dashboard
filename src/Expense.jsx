import { useState } from 'react';
import './App.css';

function Expense() {
  const [name, setName] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");

 const total = expenses.reduce((total, expense) => {
  if (expense.type === "add") {
    return  total + Number(expense.amount);
  } else {
    return  total - Number(expense.amount);
  }
}, 0);

  const handleAdd = () => {
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: amount,
      type: "add",
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  };

const deleteUser=()=>{
 setExpenses();
}

  const handleSub = () => {
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: amount,
      type: "sub"
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  };

  return (
    <>
      <h1>💰 Expense Tracker</h1>

      <h3>Expense Name: {name}</h3>

      <input
        type="text"
        placeholder="Enter expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Amount: {amount}</h3>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Expense
      </button>
      <button onClick={handleSub}>
        sub Expense
      </button>

      <hr />

      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>Expense: {expense.name}</p>
          <p>Amount: ₹{expense.amount}</p>
          <button onClick={deleteUser}>Delete</button>
        </div>
      ))}

      <h2>Total Expense: ₹{total}</h2>
      <h2>Balance: ₹{total}</h2>
    </>
  );
}

export default Expense;