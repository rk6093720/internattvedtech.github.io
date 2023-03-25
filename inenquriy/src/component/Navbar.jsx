import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container" style={{display:"flex", width:"100%", height:"50px",backgroundColor:"whitesmoke", color:"white",alignItems:"center",justifyContent:"space-between", position:'fixed', top:"0"}}>
            <div className="left" style={{width:"40%"}}>
                <img style={{width:"100px"}} src="https://internative.in/assets/img/logo.jpg" alt="" />
            </div>
            <div style={{display:"flex",width:"60%", justifyContent:"space-evenly",color:"white", fontSize:"24px"}} >
                {/* <div>
               <Link to="/">
                 PostEnquiry
               </Link>
               </div> */}
               <div>
               <Link to="/enquiry">
                  Enquiry
               </Link>
               </div>
            </div>
            

        </div>
    </div>
  )
}

export default Navbar