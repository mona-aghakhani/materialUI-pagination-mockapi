// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import React,{useState,useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UsersTable from '../component/--UsersTable';
// const useStyles = makeStyles({
//     header: {
//       width: "100%",
//       background:"gray",
//       height:60,
//       color:"white",
//       fontSize:40,
//     },
//     nodata:{
//         width:300,
//         color:'gray',
//         border:'1px solid black',
//         height:200,
//         textAlign:"center",
//         margin:'100px auto ',
//       },
    
//   });
// const Userspage=()=>{
//     const classes = useStyles();
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         const getUsers = async ()=>{
//           const userFromServer = await fetchUsers()
//           setUsers(userFromServer)
//         }
      
//         getUsers();
//       }, [])
//       const fetchUsers = async () => {
//         try {
//           const response = await fetch(`https://60b4f1e5fe923b0017c83389.mockapi.io/list`);
//           const data = await response.json();
//           console.log(data);
//           return data;
          
//         } catch (err) {
//           toast.error("request failed!");
//         }
//       };
//     return(
//         <>
//         <div className={classes.header}>users list</div>
// {/* <CardHeader className={classes.header} >
//     <CardContent>users list</CardContent>
// </CardHeader> */}
// <ToastContainer />
// {users?.length ?(
//     <UsersTable users={users}/>
// ):(
//     <div className={classes.nodata}>sorry! Data Request Failed... </div> 
// )}
//         </>
//     )
// }
// export default Userspage;