import React from 'react';
import {useHistory} from "react-router-dom"
// import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const useStyles = makeStyles({
 
  img:{
    objectFit:'contain',
    objectPosition:'center',
    width:50,
    height:50,
    borderRadius:0.5,
  },
 
});
function UserTable({user}) {
  let history=useHistory()
  const classes = useStyles();
  const handleGoToUserPage=()=>{
    console.log(1);
    history.push(`/user/${user.id}`)
  }

    return(
        <TableRow key={user?.id} onClick={handleGoToUserPage}>
        <TableCell component="th" scope="row">
          {user?.id}
        </TableCell>
        {/* <TableCell align="right">{user?.code}</TableCell> */}
        <TableCell align="left">{user?.name.substr(0,20)}</TableCell>
        <TableCell align="left">{user?.lastName}</TableCell>
        
        <TableCell align="left">{user?.company}</TableCell>
        <TableCell align="left">{user?.mobile}</TableCell>
        <TableCell align="left">{user?.email}</TableCell>
        <TableCell align="left"><img className={classes.img} src={user?.avatar}/></TableCell>
      </TableRow>
    )
}
export default UserTable;