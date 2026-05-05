import "./App.css";
import UserCardList from "./components/UserCardList";
import { usersData } from "./data/usersData";

function App() {
  return <UserCardList usersArray={usersData} />;
}

export default App;
