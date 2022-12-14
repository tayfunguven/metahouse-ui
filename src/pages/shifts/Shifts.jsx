import { Link } from 'react-router-dom'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './shifts.scss'

const Shifts = () => {
    return (
        <div className="shifts">
            <Sidebar/>
            <div className="shiftsContainer">
                <Navbar/>
                <div className="content">
                    <div className="top">
                        Current Shift
                        <Link to="/shifts/new" className="link">Edit Shifts</Link>
                    </div>
                    <div className="bottom">
                        <List/>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Shifts