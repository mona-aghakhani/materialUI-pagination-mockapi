import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import withLoading from "../component/withLoading";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
   grid:{
       width:'60%',
       background:"white",
       margin:'5px auto',
       padding:"5px", 
   },
   paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
    title: {
      flexGrow: 1,
    },
    img:{
        width:'200px',
        height:"200px",
        borderRadius:"50%"
    },
    input:{
        height:"25px",
        // marginBottom:"2px",
        
    }
  }));
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const UserPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    fetchUser(id);
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
    {/* <Paper className={classes.paper}> */}
    <Grid container className={classes.grid} spacing={2}>
        {/* <Grid lg={4} item>
<img src={userData?.avatar} className={classes.img} />
        </Grid> */}
        <Grid item lg={4}>
            {/* <ButtonBase className={classes.image}> */}
              <img className={classes.img} src={userData?.avatar} />
            {/* </ButtonBase> */}
          </Grid>

        
        <Grid item xs={12} sm container lg={8} >
            <Grid item  xs container direction="column" spacing={2}>
        {/* <form   noValidate autoComplete="off"> */}
        {/* <FormControl variant="outlined"> */}
        <Grid item  >
        <InputLabel htmlFor="component-outlined" shrink>Code</InputLabel>
        {/* <p>Name</p> */}
        <OutlinedInput id="component-outlined" value={userData?.code} className={classes.input}  label="Code" />
        </Grid>
      {/* </FormControl> */}
      {/* <FormControl variant="outlined"> */}
        <InputLabel htmlFor="component-outlined" shrink>Company</InputLabel>
        
        <OutlinedInput id="component-outlined" value={userData?.company} className={classes.input}  label="Company" />
      {/* </FormControl> */}
      <Grid item container spacing={1} sx={12}>
      <Grid item xs={4} >
        <InputLabel htmlFor="component-outlined" shrink>job-type</InputLabel>
        {/* <p>Name</p> */}
        <OutlinedInput id="component-outlined" value={userData?.jobtype} className={classes.input}  label="job-type" />
        </Grid>
        <Grid item xs={4} >
        <InputLabel htmlFor="component-outlined" shrink>Name</InputLabel>
        {/* <p>Name</p> */}
        <OutlinedInput id="component-outlined" value={userData?.name} className={classes.input}  label="Name" />
        </Grid>
        <Grid item  xs={4}>
        <InputLabel htmlFor="component-outlined" shrink>lastName</InputLabel>
        {/* <p>Name</p> */}
        <OutlinedInput id="component-outlined" value={userData?.lastName} className={classes.input}  label="lastName" />
        </Grid>
        </Grid>
        <InputLabel htmlFor="component-outlined" shrink>Job-Descriptor</InputLabel>
        
        <OutlinedInput id="component-outlined" value={userData?.jobdescriptor} className={classes.input}  label="Company" />
        <InputLabel htmlFor="component-outlined" shrink>job-title</InputLabel>
        
        <OutlinedInput id="component-outlined" value={userData?.jobtitle} className={classes.input}  label="Company" />
{/* </form> */}
</Grid>
        </Grid>
        <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
    </Grid>
    
    {/* </Paper> */}
  </div>
   
  );
};

export default UserPage;