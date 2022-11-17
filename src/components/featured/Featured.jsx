import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
           <CircularProgressbar value={20} text={"20%"}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$240</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">
                $1.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">
                $12.7k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">
                $245.8k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured