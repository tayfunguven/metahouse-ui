import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const Widget = ({ type }) => {
  let data;
  //temporary data
  switch(type) {
    case "user":
        data={
            title:"USERS",
            isMoney: false,
            amount: 20,
            diff:15,
            arrow: <KeyboardArrowUpIcon style={{color: "#03dd03"}}/>,
            link:"See all application users",
            icon: <GroupOutlinedIcon className='icon' style={{backgroundColor: "#a3a3a3", color:"#2c2c2c"}}/>,
        };
        break;
    case "like":
        data={
            title:"LIKES",
            isMoney: false,
            amount: 37,
            diff: 4,
            arrow: <KeyboardArrowUpIcon style={{color: "#03dd03"}}/>,
            link: null,
            icon: <FavoriteOutlinedIcon className='icon' style={{ backgroundColor: "#d6cbff", color: "#b09cf7"}}/>,
        };
        break;
    case "benefit":
        data={
            title:"EARNINGS",
            isMoney: true,
            amount: "200,000.00",
            diff:0.5,
            arrow: <KeyboardArrowUpIcon style={{color: "#03dd03"}}/>,
            link:"See all financial statistic",
            icon: <AddchartOutlinedIcon className='icon' style={{backgroundColor: "#c4fcc4", color: "#03dd03"}}/>,
        };
        break;
    case "reported-content":
        data={
            title:"REPORTED CONTENT",
            isMoney: false,
            amount: 32,
            diff:17,
            arrow: <KeyboardArrowUpIcon style={{color: "#03dd03"}}/>,
            link:"See all reported application content",
            icon: <ReportProblemOutlinedIcon className='icon' style={{backgroundColor: "#fa979c", color: "#e20d18"}}/>,
        };
        break;
    default:
        break;
  }

  return (
    <div className='widget'>
        <div className='left'>
            <span className="title">
                {data.title}
            </span>
            <span className="counter">
                {data.isMoney && "$"}{data.amount}
            </span>
            <span className="link">
                {data.link}
            </span>
        </div>
        <div className="right">
            <div className="percentage positive">
                {data.arrow}
                {data.diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget