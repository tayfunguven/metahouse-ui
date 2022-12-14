import './statsDetails.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';


const StatsDetails = () => {
    return (
        <div className="statsDetails">
            <Sidebar/>
            <div className="statsDetailsContainer">
                <Navbar/>
                <div className="chart">
                    <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
                    <Featured/>
                </div>
            </div>
        </div>
    )
}

export default StatsDetails