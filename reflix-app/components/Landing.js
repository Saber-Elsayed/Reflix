import React from "react";
import { Link } from "react-router-dom";

const Landing = ({ users }) => {
  return (
    <div className="landing">
      <h1>Choose a user:</h1>
      <div className="user-boxes">
        {users.map((user) => (
          <Link key={user.id} to="/catalog">
            <div className="user-box" style={{ backgroundColor: user.bgColor }}>
              {user.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;
