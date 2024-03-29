import user from "../src/UserProfile/user.json";
import stat from "../src/UserStatistics/stat.json";
import "./App.css";
import { UserProfile } from "./UserProfile/Profile";
import { UserStatistics } from "./UserStatistics/Statistics";

function App() {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></UserProfile>
      <UserStatistics stat={stat}></UserStatistics>
    </>
  );
}

export default App;
