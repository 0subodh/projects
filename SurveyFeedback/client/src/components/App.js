import './App.css';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import ConnectToServer from './ConnectToServer';

const Redux = () => {
  const value = useSelector(selectAuth);
  return (
    <div>
      <h2>{value ? 'True' : 'False'}</h2>

      <button onClick={() => console.log(selectAuth)}>Change Auth</button>
    </div>
  );
};

const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>New Survey</h2>;
const Landing = () => <h2>Landing</h2>;

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/redux', element: <Redux /> },
  { path: '/api', element: <ConnectToServer /> },
  { path: '/surveys', element: <Survey /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/auth/google', element: <Header /> },
]);

function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
