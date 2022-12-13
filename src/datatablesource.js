//temporary data

export const userColumns = [
    { field: "id", headerName: "ID", width: 70},
    { 
        field: "username", 
        headername: "User", 
        width: 300,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    { field: "firstName", headerName: "First Name", width: 200},
    { field: "lastName", headerName: "Last Name", width: 200},
    { field: "role", headerName: "Role", width: 100},
    { 
        field: "email",
        headerName: "Contact Info",
        width: 300,
        renderCell: (params) =>  {
            return (
                <div className="contactCell">
                    E-Mail: {params.row.email}
                    <br/>
                    Phone: {params.row.phone}
                </div>
            )
        }
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return  <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    }
]

export const userRows = [
    {
        id: 1,
        username: "LaValerie",
        firstName: "Tayfun",
        lastName: "Güven",
        img: "https://randomuser.me/api/portraits/lego/0.jpg",
        role: "Admin",
        email: "tayfun@metahouseclub.com.tr",
        phone: "+905382763070",
        status: "active", 
    },
    {
        id: 2,
        username: "JHDoe",
        firstName: "John",
        lastName: "Doe",
        img: "https://randomuser.me/api/portraits/lego/8.jpg",
        role: "Staff",
        email: "john.doe@metahouseclub.com.tr",
        phone: "+905385556666",
        status: "active", 
    },
    {
        id: 3,
        username: "AAirheart",
        firstName: "Alisson",
        lastName: "Airheart",
        img: "https://randomuser.me/api/portraits/lego/5.jpg",
        role: "Writer",
        email: "alisson.airheart@metahouseclub.com.tr",
        phone: "+905386665555",
        status: "passive", 
    },
]