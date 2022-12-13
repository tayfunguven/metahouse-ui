import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './stats.scss'

const Stats = () => {
    return(
        <div className="stats">
            <Sidebar/>
            <div className="statsContainer">
                <Navbar/>
                STATISTICS
            </div>
        </div>
    )
}

export default Stats