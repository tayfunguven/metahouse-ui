import Dashboard from "./pages/dashboard/Dashboard";
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import Trainings from './pages/trainings/Trainings';
import Users from './pages/users/Users';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Shifts from './pages/shifts/Shifts';
import Stats from './pages/stats/Stats';
import Reports from './pages/reports/Reports';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { userInputs, contentInputs, menuInputs } from "./formsource";
import Notifications from "./pages/notifications/Notifications";
import AppUsers from "./pages/appusers/AppUsers";
import StatsDetails from "./pages/statsdetails/StatsDetails";
//import Index from "./pages/index/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>

            {/* MAIN */}
            <Route path="users">
              <Route index element={<Users/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add A New User"/>}/>
            </Route>
            <Route path="/shifts">
              <Route index element={<Shifts/>}/>
              <Route path=":itemId" element={<Single/>}/>
              <Route path="new" element={<New inputs={menuInputs} title="Create New Shift"/>}/>
            </Route>
            <Route path="/reports">
              <Route index element={<Reports/>}/>
              <Route path=":itemId" element={<Single/>}/>
              <Route path="new" element={<New inputs={menuInputs} title="Add Daily Report"/>}/>
            </Route>
            <Route path="/stats">
              <Route index element={<Stats/>}/>
              <Route path="details" element={<StatsDetails/>}/>
            </Route>

            {/* APP CONTENT */}
            <Route path="/cafe-menu">
              <Route index element={<Menu/>}/>
              <Route path=":itemId" element={<Single/>}/>
              <Route path="new" element={<New inputs={menuInputs} title="Add Items To The Menu"/>}/>
            </Route>
            <Route path="/trainings">
              <Route index element={<Trainings/>}/>
              <Route path=":contentId" element={<Single/>}/>
              <Route path="new" element={<New inputs={contentInputs} title="Add Items To The Training Content"/>}/>
            </Route>
            <Route path="/notifications">
              <Route index element={<Notifications/>}/>
              <Route path=":itemId" element={<Single/>}/>
              <Route path="new" element={<New inputs={menuInputs} title="Send Notification"/>}/>
            </Route>
            <Route path="/appusers">
              <Route index element={<AppUsers/>}/>
              <Route path=":itemId" element={<Single/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
