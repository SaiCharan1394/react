import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Count: {count}</h1>
      <h2>Location: Piler</h2>
      <h3>Mail: akkiraju</h3>
    </div>
  );
};
export default User;
