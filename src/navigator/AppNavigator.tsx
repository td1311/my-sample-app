import { AddEditUser } from '../features/user/AddEditUser';
import { Counter } from '../features/counter/Counter';
import { Home } from '../features/home/Home';
import { Route, Routes } from 'react-router-dom';
import { UsersList } from '../features/user/UsersList';

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