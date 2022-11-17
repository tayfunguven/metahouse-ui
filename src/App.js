import Dashboard from "./pages/dashboard/Dashboard";
import Login from './pages/login/Login';

import CafeMenu from './pages/cafe_menu/CafeMenu';
import MenuItems from './pages/menu_items/MenuItems';
import MenuItem from './pages/menu-item/MenuItem';
import NewMenuItem from './pages/new_menu_item/NewMenuItem';

import Trainings from './pages/trainings/Trainings';
import TrainingContents from './pages/training_contents/TrainingContents';
import TrainingContent from './pages/training_content/TrainingContent';
import NewTrainingContent from './pages/new_traning_content/NewTrainingContent';

import Users from './pages/users/Users';
import UserList from './pages/user_list/UserList';
import User from './pages/user/User';
import NewUser from './pages/new_user/NewUser';
import UserReports from './pages/user_reports/UserReports';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/users">
              <Route index element={<Users/>}/>
              <Route path="user-list">
                <Route index element={<UserList/>}/>
                <Route path=":userId" element={<User/>}/>
                <Route path="new-user" element={<NewUser/>}/>
              </Route>
              <Route path="user-reports" element={<UserReports/>}/>
            </Route>
            <Route path="/cafe-menu">
              <Route index element={<CafeMenu/>}/>
              <Route path="menu-items">
                <Route index element={<MenuItems/>}/>
                <Route path=":menuItemId" element={<MenuItem/>}/>
                <Route path="new-menu-item" element={<NewMenuItem/>}/>
              </Route>
            </Route>
            <Route path="/trainings">
              <Route index element={<Trainings/>}/>
              <Route path="training-contents">
                <Route index element={<TrainingContents/>}/>
                <Route path=":trainingContentId" element={<TrainingContent/>}/>
                <Route path="new-training-content" element={<NewTrainingContent/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
