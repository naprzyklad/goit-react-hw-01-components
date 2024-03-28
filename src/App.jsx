import { useState } from "react";
import { UserProfile } from "../UserProfile/Profile";
import user from "../UserProfile/user.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProfile user={user}></UserProfile>
    </>
  );
}

export default App;
