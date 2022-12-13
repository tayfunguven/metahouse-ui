import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
var firstName = 'Tayfun';




const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsActiveIcon className='icon'/> 
          </div>
          <div className="item">
            Welcome, {firstName}
            <AccountCircleIcon className='photo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar