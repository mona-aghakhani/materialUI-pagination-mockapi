
import './App.css';
import React from 'react'
import {Link,Route,Switch} from "react-router-dom"
// import MainHeader from './components/MainHeader'
// import UsersTable from "./component/UsersTable"
import UsersTable from "./component/Pagination"
// import Userspage from './Pages/UsersPage';
import UserPage from './Pages/UserPage';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import CustomPaginationActionsTable from "./component/Pagination"
const useStyles = makeStyles((theme) => ({
  
  title: {
    flexGrow: 1,
    // color:"gray"
    background:"lightgray",
    color:"black",
  },
 
}));
function App() {
  const classes = useStyles();
  return (
<React.Fragment>
      {/* <MainHeader/> */}
      <AppBar position="static" className={classes.title}>
      <Toolbar>
        <Typography variant="h6" >
         Users Material App
        </Typography>
      </Toolbar>
    </AppBar>
      <Switch>
      <Route path="/" exact component={UsersTable}/>
      
      <Route path="/user/:id" exact component={UserPage}/>
      
      {/* <Route path="*" exact component={NotFound}/> */}
      </Switch>
    </React.Fragment>
    // <div className="App">
    //  {/* <CustomPaginationActionsTable/> */}
    //  <UsersTable/>
    //  {/* <Userspage/> */}
    // </div>
  );
}

export default App;
