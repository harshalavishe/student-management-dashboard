import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function UserDetail() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [biology, setBiology] = useState("");
  const [city, setCity] = useState('');
  useEffect(() => {
    fetch(`https://student-management-dashboard-5puc.onrender.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setPhysics(data.marks.Physics);
        setChemistry(data.marks.Chemistry);
        setBiology(data.marks.Biology);
        setMathematics(data.marks.Mathematics);
        setCity(data.city);
      });
  }, [id]);
  const handleUpdate = () => {
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
    fetch(`https://student-management-dashboard-5puc.onrender.com/users/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User Updated:', data);
        alert('User Updated Successfully');
      });
  };

  return (
    <>
      <h1>Edit User</h1>

      <h3>Name:</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>City:</h3>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <h3>Physics:</h3>
      <input
        type="number"
        value={physics}
        onChange={(e) => setPhysics(Number(e.target.value))}
      />

      <h3>Chemistry:</h3>
      <input
        type="number"
        value={chemistry}
        onChange={(e) => setChemistry(Number(e.target.value))}
      />

      <h3>Mathematics:</h3>
      <input
        type="number"
        value={mathematics}
        onChange={(e) => setMathematics(Number(e.target.value))}
      />

      <h3>Biology:</h3>
      <input
        type="number"
        value={biology}
        onChange={(e) => setBiology(Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update User</button>
    </>
  );
}
