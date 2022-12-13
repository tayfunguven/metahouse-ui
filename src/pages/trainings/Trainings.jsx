import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './trainings.scss'

const Trainings = () => {
  return (
    <div className="trainings">
      <Sidebar/>
      <div className="trainingsContainer">
        <Navbar/>
        TRAININGS
      </div>
    </div>
  )
}

export default Trainings