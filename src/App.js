import Dashboard from "./pages/dashboard/Dashboard";
import Login from './pages/login/Login';
import MenuItems from './pages/menu-items/MenuItems';
import Trainings from './pages/trainings/Trainings';
import Users from './pages/users/Users';
import New from './pages/new/New';
import SingleUser from './pages/single-user/SingleUser';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { userInputs, contentInputs, menuInputs } from "./formsource";
//import Index from "./pages/index/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>}/>
            
            <Route path="login" element={<Login/>}/>

            <Route path="users">
              <Route index element={<Users/>}/>
              <Route path=":userId" element={<SingleUser/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add A New User"/>}/>
            </Route>

            <Route path="/cafe-menu">
              <Route index element={<MenuItems/>}/>
              <Route path="new" element={<New inputs={menuInputs} title="Add Items To The Menu"/>}/>
            </Route>

            <Route path="/trainings">
              <Route index element={<Trainings/>}/>
              <Route path="new" element={<New inputs={contentInputs} title="Add Items To The Training Content"/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
