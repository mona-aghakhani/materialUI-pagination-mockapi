import React,{ useEffect, useState,useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import withLoading from "../component/withLoading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: "70%",
    background: "white",
    margin: "5px auto",
    padding: "5px",
    alignItems:"center",
    // justifyContent:"center",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  title: {
    flexGrow: 1,
    // color:"gray"
    background:"lightgray",
    color:"black",
  },
  img: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  input: {
    height: "25px",
    width:"100%",
    // marginBottom:"2px",
  },
  containerimg:{
   textAlign:"center"
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tabpanel-${index}`}
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
    id: `full-width-tabpanel-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const UserPage = ({userData}) => {
  // const { id } = useParams();
  // console.log(id);
  // const [newId, setNewId] = useState('')
  const history = useHistory();
  // const [userData, setUserData] = useState(null);
  const inputRef = useRef(null);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    // fetchUser(id);
    // setNewId(id)
    if (userData !== "Not found") {
      inputRef?.current.focus();
    }
  }, []);

 
  const [value, setValue] = React.useState(0);
console.log(userData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     {userData !== "Not found" && <Grid container  className={classes.grid} spacing={2}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid className={classes.containerimg} item md={3} sm={4} xs={12}>
        <img src={userData?.avatar} className={classes.img} />
        </Grid>
        <Grid item md={9} sm={8} xs={12} container spacing={1} direction="column">
        <Container component="main" maxWidth="xs">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="component-outlined" shrink>Code</InputLabel>
          <OutlinedInput
        id="component-outlined"
        value={userData?.code}
        className={classes.input}
        label="Code"
      />
          </Grid>
          <Grid item xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Company
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.company}
      className={classes.input}
      label="Company"
      inputRef={inputRef}
     
    />
          </Grid>
          <Grid item sm={4} xs={12}>
          <InputLabel htmlFor="component-outlined" shrink>
          job-type
        </InputLabel>

        <OutlinedInput
          id="component-outlined"
          value={userData?.jobtype}
          className={classes.input}
          label="job-type"
        />
            {/* <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            /> */}
          </Grid>
          <Grid item sm={4} xs={12}>
          <InputLabel htmlFor="component-outlined" shrink>
          Name
        </InputLabel>

        <OutlinedInput
          id="component-outlined"
          value={userData?.name?.substr(0,8)}
          className={classes.input}
          label="Name"
        />
            {/* <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
          </Grid>
          <Grid item sm={4} xs={12}>
          <InputLabel htmlFor="component-outlined" shrink>
          LastName
        </InputLabel>

        <OutlinedInput
          id="component-outlined"
          value={userData?.lastName?.substr(0,8)}
          className={classes.input}
          label="Last-Name"
        />
            {/* <TextField
              variant="outlined"
              required
              fullWidth
              name="name"
              
              defaultValue={userData.name}
              
              autoComplete="current-password"
            /> */}
          </Grid>
          <Grid item xs={12} >
          <InputLabel htmlFor="component-outlined" shrink>
      Job-Descriptor
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.jobdescriptor}
      className={classes.input}
      label="Job-Descriptor"
    />
          </Grid>
          <Grid item xs={12} >
          <InputLabel htmlFor="component-outlined" shrink>
      Job-Title
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.jobtitle}
      className={classes.input}
      label="Job-Title"
    />
          </Grid>
        </Grid>
        
      </form>
    </Container>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <AppBar position="static" className={classes.title }>
  <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="General" icon={<PersonPinIcon />}   {...a11yProps(0)} />
    <Tab label="Address Info"  icon={<HomeIcon />} {...a11yProps(1)} />
    <Tab label="Call" icon={<PhoneIcon />} {...a11yProps(2)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
<Grid container spacing={2}>
<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Account-name
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.accountname}
      className={classes.input}
      label="Account-name"
    />
          </Grid>
<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Gender
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.gender}
      className={classes.input}
      label="Gender"
    />
          </Grid>
<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Experience
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.experience}
      className={classes.input}
      label="Account-name"
    />
          </Grid>
  </Grid>
</TabPanel>
<TabPanel value={value} index={1}>
<Grid container spacing={2}>
<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Address
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.address}
      className={classes.input}
      label="Company"
    />
          </Grid>

<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Country
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.country}
      className={classes.input}
      label="Country"
    />
          </Grid>
          <Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      City
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.city}
      className={classes.input}
      label="City"
    />
          </Grid>
  </Grid>
</TabPanel>
<TabPanel value={value} index={2}>
<Grid container spacing={2}>
<Grid item lg={12} md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Phone-number
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.mobile}
      className={classes.input}
      label="Phone-number"
    />
          </Grid>
<Grid item md={12} xs={12} >
               <InputLabel htmlFor="component-outlined" shrink>
      Email
    </InputLabel>

    <OutlinedInput
      id="component-outlined"
      value={userData?.email}
      className={classes.input}
      label="Email"
    />
          </Grid>

  </Grid>
</TabPanel>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>}
     
    </>
  );
};
// const x=newId;
export default withLoading(UserPage,'https://60b4f1e5fe923b0017c83389.mockapi.io/list')
// export default UserPage;

/*
* <Grid item xs={6}>
          <InputLabel htmlFor="component-outlined" shrink>Code</InputLabel>
          <OutlinedInput
        id="component-outlined"
        value={userData?.code}
        className={classes.input}
        label="Code"
      />
          </Grid>
          <Grid item xs={12}>
          <InputLabel htmlFor="component-outlined" shrink>Code</InputLabel>
          <OutlinedInput
        id="component-outlined"
        value={userData?.code}
        className={classes.input}
        label="Code"
      />
          </Grid>
*/

// {/* <AppBar position="static">
// <Toolbar>
//   <Typography variant="h6" className={classes.title}>
//     User Profile
//   </Typography>
// </Toolbar>
// </AppBar>
// {/* <Paper className={classes.paper}> */}
// {/* <Grid container className={classes.grid} spacing={2}> */}
// {/* <Grid lg={4} item>
// <img src={userData?.avatar} className={classes.img} />
// </Grid> */}
// {/* <Grid item md={4} xs={12}> */}
//   // <div> <img className={classes.img} src={userData?.avatar} /></div>
//   {/* <ButtonBase className={classes.image}> */}
 
//   {/* </ButtonBase> */}
// // </Grid>
// // 
// {/* <Grid item md={8} xs={12} container > */}
  
//   {/* <p className={classes.test}>mona</p> */}
//   {/* <Grid item xs container direction="column" spacing={2}> */}
//     // <Grid item md={4} xs={12}>
//       // <InputLabel htmlFor="component-outlined" shrink>
//         // Code
// //       </InputLabel>

// //       <OutlinedInput
// //         id="component-outlined"
// //         value={userData?.code}
// //         className={classes.input}
// //         label="Code"
// //       />
// //     </Grid>
// //     <Grid item md={12} xs={12}>
// //     <InputLabel htmlFor="component-outlined" shrink>
// //       Company
// //     </InputLabel>

// //     <OutlinedInput
// //       id="component-outlined"
// //       value={userData?.company}
// //       className={classes.input}
// //       label="Company"
// //     />
// // </Grid>
//     {/* <Grid item container spacing={1} sx={12}>
//       <Grid item xs={4}>
//         <InputLabel htmlFor="component-outlined" shrink>
//           job-type
//         </InputLabel>

//         <OutlinedInput
//           id="component-outlined"
//           value={userData?.jobtype}
//           className={classes.input}
//           label="job-type"
//         />
//       </Grid> */}
//       {/* <Grid item xs={4}>
//         <InputLabel htmlFor="component-outlined" shrink>
//           Name
//         </InputLabel>

//         <OutlinedInput
//           id="component-outlined"
//           value={userData?.name}
//           className={classes.input}
//           label="Name"
//         />
//       </Grid> */}
//       {/* <Grid item xs={4}>
//         <InputLabel htmlFor="component-outlined" shrink>
//           lastName
//         </InputLabel>

//         <OutlinedInput
//           id="component-outlined"
//           value={userData?.lastName}
//           className={classes.input}
//           label="lastName"
//         />
//       </Grid>
//     </Grid> */}
//     {/* <InputLabel htmlFor="component-outlined" shrink>
//       Job-Descriptor
//     </InputLabel>

//     <OutlinedInput
//       id="component-outlined"
//       value={userData?.jobdescriptor}
//       className={classes.input}
//       label="Company"
//     />
//     <InputLabel htmlFor="component-outlined" shrink>
//       job-title
//     </InputLabel>

//     <OutlinedInput
//       id="component-outlined"
//       value={userData?.jobtitle}
//       className={classes.input}
//       label="Company"
//     /> */}
//   // </Grid>
// {/* </Grid> */}
// </Grid> */}
 /*
   * Fetch a single User by Id
   */
  // const fetchUser = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `https://60b4f1e5fe923b0017c83389.mockapi.io/list/${id}`
  //     );
  //     const data = await response.json();
  //     setUserData(data);
  //     if (response.status === 404) {
  //       toast.error("Not found");
  //       // history.push("/");
  //     }
  //   } catch (err) {
  //     toast.error("request failed!");
  //   }
  // };
    // {/* <ToastContainer /> */}
    //    {/* <AppBar position="static" className={classes.title}>
    //   <Toolbar>
       
    //     <Typography variant="h6" >
    //      User Profile
    //     </Typography>

    //   </Toolbar>
    // </AppBar> */}
