import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };
    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to="/users/4859300" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="editButton">Edit</div>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }},
    ];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                User List
                <Link to="/users/new" className="link">Add New User</Link>
            </div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
} 

export default Datatable