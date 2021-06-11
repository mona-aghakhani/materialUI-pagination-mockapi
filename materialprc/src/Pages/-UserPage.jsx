import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import withLoading from "../component/withLoading";
import { toast } from "react-toastify";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    title: {
      flexGrow: 1,
    },
  }));
const UserPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    fetchUser(id);
  }, []);

  /*
   * Fetch a single User by Id
   */
  const fetchUser = async (id) => {
    try {
      const response = await fetch(`https://60b4f1e5fe923b0017c83389.mockapi.io/list/${id}`);
      const data = await response.json();
      setUserData(data);
      if (response.status === 404) {
        toast.error("Not found");
        history.push("/");
      }
    } catch (err) {
      toast.error("request failed!");
    }
  };

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" className={classes.title}>
         User Profile
        </Typography>

      </Toolbar>
    </AppBar>
    <Grid container>
        <Grid lg={6} item>
<img src={userData?.avatar}  />
        </Grid>

        
        <Grid item lg={6}>
        <form  className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" value={userData?.code}  label="Name" />
      </FormControl>
  {/* <TextField id="standard-basic" label="Standard" /> */}
  {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
  <TextField id="outlined-basic" label="code"  defaultValue={userData?.code} variant="outlined" />
  <TextField id="outlined-search" label={userData?.code} type="search" variant="outlined" />
  <TextField
          id="outlined-helperText"
          label="Code"
          defaultValue={userData?.code}
          size="small"
          variant="outlined"
        />
          <TextField
          id="outlined-uncontrolled"
          label="code"
          defaultValue={`userData?.code`}
          variant="outlined"
        />
         {/* <TextField
          label="Code"
          id="filled-size-small"
          defaultValue={userData?.code}
          variant="filled"
          size="small"
        /> */}
         <TextField
          label="Code"
          id="outlined-size-small"
          defaultValue={userData?.code}
          variant="outlined"
          size="small"
        />
  <TextField id="outlined-basic" label={userData?.name} variant="outlined" />
  <TextField id="outlined-basic" label={userData?.lastName} variant="outlined" />
</form>
        {/* <InputLabel htmlFor="component-outlined">code</InputLabel> */}
        {/* <TextField
          id="component-outlined"
          defaultValue={userData?.code}
         
          variant="outlined"
        /> */}
        {/* <Input defaultValue={userData ? userData.code : "" }  ><p>{userData?.code}</p></Input> */}
        </Grid>

    </Grid>
    {/* <h1>{userData?.name}</h1>
    <h1>{userData?.code}</h1>
      <p>{userData?.lastName}</p> */}
  </div>
    // <div className="container">
    //   <h1>{userData?.name}</h1>
    //   <p>{userData?.lastName}</p>
    // </div>
  );
};

export default UserPage;