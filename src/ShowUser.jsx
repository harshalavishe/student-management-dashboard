import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./ShowUser.css";

export default function ShowUser() {
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState(true);

  const navigate = useNavigate();

  // GET USERS
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // DELETE USER
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      });
  };

  // CHART DATA
  const chartData = users.map((user) => ({
    name: user.name,
    Physics: user.marks.Physics,
    Chemistry: user.marks.Chemistry,
    Mathematics: user.marks.Mathematics,
    Biology: user.marks.Biology
  }));

  return (
    <div className="dashboard">

      {/* PAGE TITLE */}
      <h1 className="page-title">
        Student Management Dashboard
      </h1>

      {/* CHART CARD */}
      <div className="chart-card">

        <h2>Students Marks</h2>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>

            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="Physics"
              stroke="red"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="Chemistry"
              stroke="green"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="Mathematics"
              stroke="blue"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="Biology"
              stroke="purple"
              strokeWidth={2}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* SHOW / HIDE BUTTON */}

      <button
        className="show-user-btn"
        onClick={() => setShowUser(!showUser)}
      >
        {showUser ? "Hide Users" : "Show Users"}
      </button>

      {/* USERS */}

      {showUser && (
        <div className="users-container">

          {users.map((user) => (

            <div className="user-card" key={user.id}>

              <h2>{user.name}</h2>

              <p className="city">
                📍 {user.city}
              </p>

              <div className="marks">

                <div className="mark-row">
                  <span>Physics</span>
                  <strong>{user.marks.Physics}</strong>
                </div>

                <div className="mark-row">
                  <span>Chemistry</span>
                  <strong>{user.marks.Chemistry}</strong>
                </div>

                <div className="mark-row">
                  <span>Mathematics</span>
                  <strong>{user.marks.Mathematics}</strong>
                </div>

                <div className="mark-row">
                  <span>Biology</span>
                  <strong>{user.marks.Biology}</strong>
                </div>

              </div>

              {/* BUTTONS */}

              <div className="action-buttons">

                <button
                  className="edit-btn"
                  onClick={() => navigate(`/users/${user.id}`)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}