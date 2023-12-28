import AppRouter from "./Routes";
import "./App.css";
import { UserTypeProvider } from "./Store/UserTypeProvider";

function App() {
  return (
    <>
      <UserTypeProvider>
        <AppRouter></AppRouter>
      </UserTypeProvider>
    </>
  );
}

export default App;
