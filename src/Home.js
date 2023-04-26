import React, { useState } from "react";
// import Child from "./Child"
// import Child from "./child";
import Form from "./Form";
import Button from "./Button";




const Home = ()=>{
    const [data,setData]= useState ({
        username: '?',
        email: '?',
    });
    const sendData=( data)=> {
        setData(data)
    }

    // console.log("props",data)
    // let username=props.prop.username
    // const {username} =props.prop
    // console.log("username",username)
    const getData = (data)=>{
        console.log("1111111111111",data)
    }
    return(
        <div>
        {/* {username} */}
        <Button sendData = {sendData}></Button>
        <div>
        The user data sent from Child compoent:
        <strong>{data.username + ' : ' + data.email}</strong>
      </div>
      <Form onSubmit = {getData}></Form>
        </div>
       
    ) 
};

export default Home;