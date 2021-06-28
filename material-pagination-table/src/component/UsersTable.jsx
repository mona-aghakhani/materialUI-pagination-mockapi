import React,{useState,useEffect} from 'react';
import withLoading from "./withLoading";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTable from './UserTable';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    direction:'rtl',
  },
  img:{
    objectFit:'contain',
    objectPosition:'center',
    width:100,
    height:100,
    borderRadius:0.5,
  },
  nodata:{
    width:300,
    color:'gray',
    border:'1px solid black',
    height:200,
    textAlign:"center",
    margin:'auto 100px',
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

 function UsersTable({userData}) {
  const classes = useStyles();
// const [users, setUsers] = useState([])
// useEffect(() => {
//   const getUsers = async ()=>{
//     const userFromServer = await fetchUsers()
//     setUsers(userFromServer)
//   }

//   getUsers();
// }, [])
// const fetchUsers = async () => {
//   try {
//     const response = await fetch(`https://60b4f1e5fe923b0017c83389.mockapi.io/list`);
//     const data = await response.json();
//     console.log(data);
//     return data;
    
//   } catch (err) {
//     toast.error("request failed!");
//   }
// };
  return (
    <>
    <ToastContainer />
   <TableContainer component={Paper}>
       
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell >name</TableCell>
            <TableCell >last-name</TableCell>
            
            <TableCell align="right">company</TableCell>
            <TableCell align="right">mobile</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        
          {userData?.map((row) => (
            <UserTable user={row}/>
            // <TableRow key={row.id}>
            //   <TableCell component="th" scope="row">
            //     {row.code}
            //   </TableCell>
            //   <TableCell align="right">{row.name}</TableCell>
            //   <TableCell align="right">{row.lastName}</TableCell>
            //   <TableCell align="right"><img className={classes.img} src={row.avatar}/></TableCell>
            //   <TableCell align="right">{row.company}</TableCell>
            //   <TableCell align="right">{row.mobile}</TableCell>
            //   <TableCell align="right">{row.email}</TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
// export default withLoading(UsersTable)
// export default UsersTable;