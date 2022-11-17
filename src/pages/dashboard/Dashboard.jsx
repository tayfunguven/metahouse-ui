import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './dashboard.scss'

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
            <Chart/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard