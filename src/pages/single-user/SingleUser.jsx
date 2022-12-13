import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import './single-user.scss';
import List from '../../components/list/List';

const SingleUser = () => {
    return(
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>

                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://randomuser.me/api/portraits/lego/0.jpg" alt="userImage" className="itemImg" />
                            <div className="details">
                                <h1 className="username">LaValerie</h1>
                                <h2 className="fullname">Tayfun Güven</h2>
                                <div className="detailItem">
                                    <span className="itemKey">Role:</span>
                                    <span className="itemValue">Admin</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">tayfun@metahouseclub.com.tr</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+905382763070</span>
                                </div>
                                
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemValue">active</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="User Data"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Latest Transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default SingleUser