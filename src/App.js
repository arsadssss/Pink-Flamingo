import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Checkout from './components/Checkout';
import Products from './components/Products';
import Error from './components/Error';

function App() {
  let allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/CheckOut/:title/:id',
      element: <Checkout />,
    },
    {
      path: '/Products',
      element: <Products />,
    },
    {
      path: '/Products/Dhoop-Cones',
      element: <Products />,
    },
    {
      path: '/Products/Dhoop-Cones/Jar-Cones',
      element: <Products />,
    },
    {
      path: '/*',
      element: <Error />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={allRoutes} />
    </div>
  );
}

export default App;
