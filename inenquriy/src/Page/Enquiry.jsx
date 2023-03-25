import React, { useEffect, useState } from 'react'
import axios from "axios";
const Enquiry = () => {
   const [data,setData]= useState([]);

   const getData=async()=>{
      return await axios.get("https://rich-gloves-ant.cyclic.app/users")
      .then((r)=>{
          setData(r.data)
      })
      .catch((e)=>{
        console.log(e)
      })  
   }


   useEffect(()=>{
      getData()
   },[])
console.log("data",data);


  return (
    <div>
       <div style={{marginTop:'45px'}}>
           <h1> <span style={{color:"blue"}}>Enquiry</span> <span style={{color:"red"}}>Data</span> </h1>
       </div>
      <table style={{margin:"auto", width:"80%", marginTop:"25px"}} >
        <thead>
        <tr>
         <th style={{border:"1px solid black", width:"100px", height:"50px", backgroundColor:"red",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>Id</th>
          <th style={{border:"1px solid black",width:"100px",height:"50px", backgroundColor:"red",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>Name</th>
          <th style={{border:"1px solid black",width:"100px",height:"50px", backgroundColor:"red",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>Email</th>
          <th style={{border:"1px solid black",width:"100px",height:"50px", backgroundColor:"red",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>City</th>
          <th style={{border:"1px solid black",width:"100px",height:"50px", backgroundColor:"red",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>Phone</th>
        </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
             return <tr key={index}>
                <td style={{border:"1px solid black",width:"100px", height:"50px", backgroundColor:"green",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>{index+1}</td>
                  <td style={{border:"1px solid black",width:"100px", height:"50px", backgroundColor:"green",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>{item.name}</td>
                  <td style={{border:"1px solid black",width:"100px", height:"50px", backgroundColor:"green",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>{item.email}</td>
                  <td style={{border:"1px solid black",width:"100px", height:"50px", backgroundColor:"green",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>{item.city}</td>
                  <td style={{border:"1px solid black",width:"100px", height:"50px", backgroundColor:"green",color:"white",fontSize:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>{item.phone}</td>
         </tr>
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default Enquiry