import './index.scss';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
const Index = () => {
  return (
    <div className='index'>
        <Sidebar/>
        <div className="indexContainer">
          <Navbar/>
        </div>
    </div>
  )
}

export default Index