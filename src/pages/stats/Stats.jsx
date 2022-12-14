import Navbar from '../../components/navbar/Navbar';
import Options from '../../components/options/Options';
import Sidebar from '../../components/sidebar/Sidebar';
import './stats.scss'

const Stats = () => {
    return(
        <div className="stats">
            <Sidebar/>
            <div className="statsContainer">
                <Navbar/>
                <div className="options">
                    <Options type='user'/>
                    <Options type='cafe'/>
                </div>
            </div>
        </div>
    )
}

export default Stats