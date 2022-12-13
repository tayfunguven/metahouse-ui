import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './notifications.scss';

const Notifications = () => {
    return (
        <div className="notifications">
            <Sidebar/>
            <div className="notificationsContainer">
                <Navbar/>
                NOTIFICATIONS
            </div>
        </div>
    )
}

export default Notifications