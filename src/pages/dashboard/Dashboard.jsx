import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import List from '../../components/list/List';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className="dashboardContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='like'/>
            <Widget type='benefit'/>
            <Widget type='reported-content'/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Today's Orders
            </div>
            <List/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard