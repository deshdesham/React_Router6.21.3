
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './RootLayout/Layout';
import About from "./pages/About"
import Home from "./pages/Home"
import Error from './pages/Error';
import {File} from './pages/File';

import CurdLayout from './Layout/UserLayout/CurdLayout';
import UserError from "./Layout/UserLayout/UserError"
import NewUser, {NewUserAction as newaction} from './Layout/UserLayout/NewUser';
import User,{ UserLoder} from './Layout/UserLayout/User.js';
import UserDetails, { UserDetailLoder ,action as deleteaction} from './Layout/UserLayout/UserDetails';
import UserEdit,{UserPatchAction as loader} from './Layout/UserLayout/UserEdit';
import Getnotify, { actionnotification } from './pages/Getnotify.js';
// import { UserPatchAction as loder } from './Layout/UserLayout/UserEdit.js';
// import ShowDetails from './Layout/UserLayout/ShowDetails';






const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >

      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />

      {/* ///curdlayout */}

      < Route path='user' element={<CurdLayout/>} errorElement={<UserError/>} loader={UserLoder} id="root">

            <Route index element={<User/>}/>
               <Route path=':id' id="root1"  loader={UserDetailLoder}>
                 <Route index element={<UserDetails/>} action={deleteaction} />
                 <Route path='edit' element={<UserEdit/>} action={loader} /> 
               </Route>
          
       
            <Route path='newuser' element={<NewUser/>} action={newaction} />
        
      </Route>
        {/* ///curdlayout end */}

      <Route path='/file' element={<File/>} />
      <Route path='/notify' element={<Getnotify/>} action={actionnotification} />
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
