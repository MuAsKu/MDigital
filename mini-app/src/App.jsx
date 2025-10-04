import { Routes, Route } from "react-router-dom";
import { UsersList } from "./pages/UsersList";
import { TodoPage } from "./pages/TodoPage";
import { Navigation } from "./components/navigation/Navigation";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import "./shared/styles/global.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

      <Navigation />
    </div>
  );
}

export default App;
