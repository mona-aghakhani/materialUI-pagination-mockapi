import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme)=> ({
  progress: {
    marginLeft: '45%',
    marginTop:"25%"
  },
}));
function withLoading(WrappedComponent,api) {
  
    const WithLoadingComponent=(props)=>{
      const classes = useStyles();
        const { id } = useParams();
        const [isLoading,setLoading]=useState(true);
        const [data,setData]=useState([]);
        useEffect(() => {
            fetchData(id,api)
          }, [id])
        /*
        *Fetch Data
        */
        const fetchData=async (id,api) =>{
          try{ const response = await fetch(`${api}${id ? '/' + id : ""}`)
          // console.log(response);
          const data = await response.json()
          setLoading(false);
          setData(data)
          if (response.status === 404) {
              toast.error("not found")
              // history.push('/')
            }
          // console.log(data);
          // return data
      }catch(err){
          toast.error("request failed!");
      }
       
      };
        // const fetchData=async (id) =>{
        //     try{ const response = await fetch(`${id ? '/' + id : ""}`)
        //     // console.log(response);
        //     const data = await response.json()
        //     setLoading(false);
        //     setData(data)
        //     if (response.status === 404) {
        //         toast.error("not found")
        //         // history.push('/')
        //       }
        //     // console.log(data);
        //     // return data
        // }catch(err){
        //     toast.error("request failed!");
        // }
         
        // };
        // useEffect(() => {
        //     const getData = async ()=>{
        //       const dataFromServer = await fetchData(id)
        //       setLoading(false);
        //       setData(dataFromServer)
        //     }
        
        //     getData();
        //   }, [])
        // /*
        // *Fetch Tasks
        // */
        
        // const fetchData=async (id) =>{
        //     try{ const response = await fetch(`https://60b4f1e5fe923b0017c83389.mockapi.io/list${id ? '/' + id : ""}`)
        //     // console.log(response);
        //     const data = await response.json()
        //     // console.log(data);
        //     return data
        // }catch(err){
        //     toast.error("request failed!");
        // }
         
        // }
        // useEffect(()=>{

        //     fetch(api)
        //         .then((response) => response.json())
        //         .then((json) => {
        //             console.log(json);
        //             setLoading(false);
        //             setData(json)
        //         })
        //         .catch((err)=>{
        //             toast.error("request failed!");
        //         });
        // },[]) ;

      return(
          <>
           <ToastContainer />
{isLoading ? <CircularProgress className={classes.progress} size={100} thickness={4} disableShrink /> : <WrappedComponent  userData={data} {...props}  /> }
          </>

      )

        // if (isLoading){
        //     return <CircularProgress disableShrink />
        // } else{
        //     return <WrappedComponent  data={data} {...props}  />
        // }
    };

    return WithLoadingComponent;
}
export default withLoading