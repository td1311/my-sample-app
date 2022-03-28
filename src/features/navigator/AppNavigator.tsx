import { Route, Routes } from "react-router-dom";
import { Counter } from "../counter/Counter";
import { Home } from "../home/Home";
import { UsersList } from "../user/UsersList";

export function AppNavigator() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="redux" element={<Counter />} />
      <Route path="usersList" element={<UsersList />} />
    </Routes>
  )
}