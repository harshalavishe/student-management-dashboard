import { useState } from 'react';
export default function AddUser() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [biology, setBiology] = useState("");
  const handleSubmit = () => {
    const userData = {
      name: name,
      marks: {
        Physics: physics,
        Chemistry: chemistry,
        Mathematics: mathematics,
        Biology: biology
      },
      city: city
    };
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  return (
    <>
      <h2>Add Users Here</h2>
      <h3>Name:</h3>
      <input
        type="text"
        value={name}
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>City:</h3>
      <input
        type="text"
        value={city}
        placeholder="enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <h3>Physics:</h3>
      <input
        type="number"
        placeholder="Physics Marks"
        value={physics}
        onChange={(e) => setPhysics(Number(e.target.value))}
      />

      <h3>Chemistry:</h3>
      <input
        type="number"
        placeholder="Chemistry Marks"
        value={chemistry}
        onChange={(e) => setChemistry(Number(e.target.value))}
      />

      <h3>Mathematics:</h3>
      <input
        type="number"
        placeholder="Mathematics Marks"
        value={mathematics}
        onChange={(e) => setMathematics(Number(e.target.value))}
      />

      <h3>Biology:</h3>
      <input
        type="number"
        placeholder="Biology Marks"
        value={biology}
        onChange={(e) => setBiology(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>Add Users</button>
    </>
  );
}
