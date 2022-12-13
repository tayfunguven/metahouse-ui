import './list.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [ 
        {
            id: 10001,
            order: ["Americano,", " Tea x2"],
            img: "https://firebasestorage.googleapis.com/v0/b/metahouse-60dd1.appspot.com/o/americano.jpg?alt=media&token=0c9d1058-f536-4e74-ad37-95dc32d2fff8",
            staff: "Allie Grater",
            time: "45 minutes ago",
            amount: 92, 
            method: "Cash",
            status: "Paid",
        },
        {
            id: 10002,
            order: "Çay",
            img: "https://firebasestorage.googleapis.com/v0/b/metahouse-60dd1.appspot.com/o/cay.jpg?alt=media&token=3ba61295-65f1-437b-b597-a847a3b66076",
            staff: "Lois Di Nominator",
            time: "37 minutes ago",
            amount: 25, 
            method: "Cash",
            status: "Paid",
        },
        {
            id: 10003,
            order: "Filter Coffee",
            img: "https://firebasestorage.googleapis.com/v0/b/metahouse-60dd1.appspot.com/o/filter.jpg?alt=media&token=d2153117-665a-4211-a07a-849903c2ad6d",
            staff: "Isabelle Ringing",
            time: "NOW",
            amount: 32, 
            method: "Cash",
            status: "Pending",
        },
        {
            id: 10004,
            order: "Filter Coffee",
            img: "https://firebasestorage.googleapis.com/v0/b/metahouse-60dd1.appspot.com/o/filter.jpg?alt=media&token=d2153117-665a-4211-a07a-849903c2ad6d",
            staff: "Lois Di Nominator",
            time: "1 hour ago",
            amount: 128, 
            method: "Credit Card",
            status: "Paid",
        },
    ];


    return ( 
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Table ID</TableCell>
                        <TableCell className='tableCell'>Orders</TableCell>
                        <TableCell className='tableCell'>Service Staff</TableCell>
                        <TableCell className='tableCell'>Time</TableCell>
                        <TableCell className='tableCell'>Total - TRY</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell  className='tableCell'>{row.id}</TableCell>
                        <TableCell  className='tableCell'>
                            <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.order}
                            </div>
                        </TableCell>
                        <TableCell  className='tableCell'>{row.staff}</TableCell>
                        <TableCell  className='tableCell'>{row.time}</TableCell>
                        <TableCell  className='tableCell'>{row.amount}</TableCell>
                        <TableCell  className='tableCell'>{row.method}</TableCell>
                        <TableCell  className='tableCell'>
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List 