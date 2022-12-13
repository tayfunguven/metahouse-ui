import './sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../../assets/icons/logo-admin-lt.png';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/"> 
                <span className="logo"><img src={logo} alt='logo'></img></span> 
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                </Link>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li><GroupAddIcon className='icon'/><span>Platform Users</span></li>
                </Link>
                <Link to="/shifts" style={{textDecoration: "none"}}>
                    <li><AssignmentIndIcon className='icon'/><span>Shifts</span></li>
                </Link>
                <Link to="/reports" style={{textDecoration: "none"}}>
                    <li><SummarizeIcon className='icon'/><span>Reports</span></li>
                </Link>
                <Link to="/stats" style={{textDecoration: "none"}}>
                    <li><QueryStatsIcon className='icon'/><span>Stats</span></li>
                </Link>


                <p className="title">Application Content</p>
                <Link to="/cafe-menu" style={{textDecoration: "none"}}>
                    <li><MenuBookIcon className='icon'/><span>Cafe Menu</span></li>
                </Link>
                <Link to="/trainings" style={{textDecoration: "none"}}>
                    <li><SchoolIcon className='icon'/><span>Trainings</span></li>
                </Link>
                <Link to="/notifications" style={{textDecoration: "none"}}>
                    <li><NotificationAddIcon className='icon'/><span>Push Notifications</span></li>
                </Link>
                <Link to="/appusers" style={{textDecoration: "none"}}>
                    <li><ManageAccountsIcon className='icon'/><span>Users</span></li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <p className="title">Platform Language</p>
                <div className="language">
                    <PublicIcon className='icon'/>
                    <select className='platformLang' name="platformLang" id="platformLanguage">
                        <option value="EN"><span>EN</span></option>
                        <option value="TR"><span>TR</span></option>
                    </select>
                </div>   
            {/* <p className="title">Theme Options</p>
            <div className="colorGroup">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar