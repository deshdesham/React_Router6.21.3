
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements ,Link} from 'react-router-dom';
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
import Login, { AuthLogin} from './Auth/Login';
import AutherrElmt from './Auth/AutherrElmt';
import {authloder} from "./RootLayout/Navlink.js"
import { Protect } from './Auth/Checkloader.js';


// import { UserPatchAction as loder } from './Layout/UserLayout/UserEdit.js';
// import ShowDetails from './Layout/UserLayout/ShowDetails';




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} handle={{crumb: () => <Link to="/">home</Link>}} errorElement={AutherrElmt} loader={authloder} id='authid' >

      <Route index element={<Home/>} />

     
      <Route path='/about' element={<Protect Component={About}/>} handle={{crumb: () => <Link to="/about">about</Link>}}/>
      

      {/* ///curdlayout */}

      < Route path='user' element={<CurdLayout/>} errorElement={<UserError/>} loader={UserLoder} id="root" handle={{crumb: () => <Link to="/user">user</Link>}}>

            <Route index element={<User/>} />
               <Route path=':id' id="root1"  loader={UserDetailLoder} handle={{crumb: (data) => <span >{data.firstName}</span>,}} >
                 <Route index element={<UserDetails/>} action={deleteaction}  />
                 <Route path='edit' element={<UserEdit/>} action={loader}  /> 
               </Route>
          
       
            <Route path='newuser' element={<Protect Component={NewUser}/>} action={newaction}  />
        
      </Route>
        {/* ///curdlayout end */}

      <Route path='/file' element={<Protect Component={File}/>} handle={{crumb: () => <Link to="/file">file</Link>}} />
      <Route path='/notify' element={<Protect Component={Getnotify}/>} action={actionnotification} handle={{crumb: () => <Link to="/notify">notify</Link>}}  />

      <Route path='/auth' element={<Login/>} action={AuthLogin} errorElement={<AutherrElmt/>} handle={{crumb: () => <Link to="/login">login</Link>}}/>
      
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
