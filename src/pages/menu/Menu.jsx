import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <Sidebar/>
      <div className="menuContainer">
        <Navbar/>
        MENU
      </div>
    </div>
  )
}

export default Menu