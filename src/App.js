import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);
const name = '<script>alert("hacked!")</script>'

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
