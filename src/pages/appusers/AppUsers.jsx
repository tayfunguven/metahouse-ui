import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './appUsers.scss';

const AppUsers = () => {
    return (
        <div className="appUsers">
            <Sidebar/>
            <div className="appUsersContainer">
                <Navbar/>
                App Users
            </div>
        </div>
    )
}
export default AppUsers