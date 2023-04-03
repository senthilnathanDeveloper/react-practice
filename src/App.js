import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import About from './components/Pages/About/About';
import Contacts from './components/Pages/Contact/Contacts';
import ErrorBoundary from './components/Pages/ErrorBoundary/ErrorBoundary';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>,
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contacts/>
  },
  {
    path:"/contact/:contactId",
    element:<Contacts/>
  },
  {
    path:"/*",
    element:<ErrorBoundary/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
