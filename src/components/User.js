import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Count: {count}</h2>
      <h2>Location:</h2>
      <h3>Mail: akkiraju@gmail.com</h3>
    </div>
  );
};
export default User;
