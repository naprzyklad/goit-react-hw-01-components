import history from "../src/UserHistory/table.json";
import user from "../src/UserProfile/user.json";
import stat from "../src/UserStatistics/stat.json";
import status from "../src/UserStatus/current.json";
import "./App.css";
import { UserHistory } from "./UserHistory/History";
import { UserProfile } from "./UserProfile/Profile";
import { UserStatistics } from "./UserStatistics/Statistics";
import { UserStatus } from "./UserStatus/Status";

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
      <UserStatistics stat={stat} />
      <UserStatus status={status} />
      <UserHistory history={history} />
    </>
  );
}

export default App;
