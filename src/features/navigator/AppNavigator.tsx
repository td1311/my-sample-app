import { AddEditUser } from '../user/AddEditUser';
import { Counter } from '../counter/Counter';
import { Home } from '../home/Home';
import { Route, Routes } from 'react-router-dom';
import { UsersList } from '../user/UsersList';

export function AppNavigator() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="redux" element={<Counter />} />
      <Route path="usersList" element={<UsersList />} />
      <Route path="addEditUsers" element={<AddEditUser />} />
    </Routes>
  )
}