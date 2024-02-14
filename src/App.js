
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './RootLayout/Layout';
import About from "./pages/About"
import Home from "./pages/Home"
import User, { UserLoder } from './Layout/UserLayout/User';
import UserDetails, { UserDetailLoder } from './Layout/UserLayout/UserDetails';
import UserLayout from './Layout/UserLayout/UserLayout';
import UserError from './Layout/UserLayout/UserError';
import Error from './pages/Error';




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />

      <Route path='user' element={<UserLayout/>} errorElement={<UserError/>}>
        <Route index element={<User/>} loader={UserLoder}/>
        <Route path=':id' element={<UserDetails/>} loader={UserDetailLoder} />
      </Route>

      <Route path='*' element={<Error/>} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
