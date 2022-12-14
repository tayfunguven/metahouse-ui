import './options.scss'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Link } from 'react-router-dom';

const Options = ({ type }) => {
  let data;
  //temporary data
  switch(type) {
    case "user":
        data={
            title:"User Statistics",
            link:"See all user statistics",
            icon: <PersonSearchIcon className='icon' style={{backgroundColor: "#a3a3a3", color:"#2c2c2c"}}/>,
        };
        break;
    case "cafe":
        data={
            title:"Financial Statistics",
            link: "See all financial statistics",
            icon: <QueryStatsIcon className='icon' style={{backgroundColor: "#c4fcc4", color: "#03dd03"}}/>,
        };
        break;
    default:
        break;
  }

  return (
    <div className='opt'>
        <div className='left'>
            <span className="title">
                {data.title}
            </span>
            <Link to='details' style={{textDecoration: "none"}}>
                <span className="link">
                    {data.link}
                </span>
            </Link>
           
        </div>
        <Link to='details' style={{textDecoration: "none"}}>
            <div className="right">
                {data.icon}
            </div>
        </Link>
        
    </div>
  )
}

export default Options