import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Postenquiry = () => {
  const state=[
    {
        "raaj":"Andhra Pradesh",
        "value":"Andhra Pradesh"
    },
    {
        "raaj":"Arunachal Pradesh",
        "value":"Arunachal Pradesh"
    },
    {
        "raaj":"Assam",
        "value":"Assam"
    },
    {
        "raaj":"Bihar",
        "value":"Bihar"
    },
    {
        "raaj":"Chhattisgarh",
        "value":"Chhattisgarh"
    },
    {
        "raaj":"Goa",
        "value":"Goa"
    },
    {
        "raaj":"Gujarat",
        "value":"Gujarat"
    },
    {
        "raaj":"Haryana",
        "value":"Haryana"
    },
    {
        "raaj":"Himachal Pradesh",
        "value":"Himachal Pradesh"
    },
    {
        "raaj":"Jammu and Kashmir",
        "value":"Jammu and Kashmir"
    },
    {
        "raaj":"Jharkhand",
        "value":"Jharkhand"
    },
    {
        "raaj":"Karnataka",
        "value":"Karnataka"
    },
    {
        "raaj":"Kerala",
        "value":"Kerala"
    },
    {
        "raaj":"Madhya Pradesh",
        "value":"Madhya Pradesh"
    },
    {
        "raaj":"Maharashtra",
        "value":"Maharashtra"
    },
    {
        "raaj":"Manipur",
        "value":"Manipur"
    },
    {
        "raaj":"Meghalaya",
        "value":"Meghalaya"
    },
    {
        "raaj":"Mizoram",
        "value":"Mizoram"
    },
    {
        "raaj":"Nagaland",
        "value":"Nagaland"
    },
    {
        "raaj":"Odisha",
        "value":"Odisha"
    },
    {
        "raaj":"Punjab",
        "value":"Punjab"
    },
    {
        "raaj":"Rajasthan",
        "value":"Rajasthan"
    },
    {
        "raaj":"Sikkim",
        "value":"Sikkim"
    },
    {
        "raaj":"Tamil Nadu",
        "value":"Tamil Nadu"
    },
    {
        "raaj":"Telangana",
        "value":"Telangana"
    },
    {
        "raaj":"Tripura",
        "value":"Tripura"
    },
    {
        "raaj":"Uttar Pradesh",
        "value":"Uttar Pradesh"
    },
    {
        "raaj":"West Bengal",
        "value":"West Bengal"
    },
    {
        "raaj":"Puducherry",
        "value":"Puducherry"
    },
    {
        "raaj":"Lakshadweep",
        "value":"Lakshadweep"
    },
    {
        "raaj":"Ladakh",
        "value":"Ladakh"
    },
    {
        "raaj":"Delhi",
        "value":"Delhi"
    },
    {
        "raaj":"Dadra and Nagar Haveli & Daman and Diu",
        "value":"Dadra and Nagar Haveli & Daman and Diu"
    },
    {
        "raaj":"Chandigarh",
        "value":"Chandigarh"
    },
    {
        "raaj":"Andaman and Nicobar Islands",
        "value":"Andaman and Nicobar Islands"
    },
]

const [name,setName]= useState("");
const [email,setEmail]= useState("");
const [city,setCity]= useState("");
const [phone,setPhone]= useState("");
const [state1,setState]= useState("");
const [data,setData]= useState([]);
const  navigate= useNavigate();
const handleform=(e)=>{
    e.preventDefault()
    const payload={
        name,
        email,
        city,
        phone,
        state1
    }

    return  axios.post(`https://rich-gloves-ant.cyclic.app/users`, payload)
    .then((r)=>{
        setData(r.data)
    })
    .then((r)=>{
        navigate("/enquiry")
    })
}
console.log(data)


  return (
    <div>
         <div>
            <h1>Welcome to Internative edtech</h1>
         </div>
        <form  onSubmit={handleform}>
            <label>Name:</label>
            <input type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='enter your name' required />
            <br /> <br />
            <label>Email:</label>
            <input type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='enter your email'
            required />
            <br />
            <br />
            <label>City:</label>
            <input type="text"
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            placeholder='enter your city'
            required
             />
             <br /><br />
             <label>Phone:</label>
             <input type="text"
             maxLength="10"
             value={phone}
             required
             onChange={(e)=> setPhone(e.target.value)}
             placeholder='enter your phone number' 
              />
              <br />
              <br />
              <label>State:</label>
              <select value={state1} onChange={(e)=> setState(e.target.value)} placeholder='enter your state & it is optional'>
                {
                    state.map((e)=>{
                  return <option value={e.value} key={e.raaj}>
                    {e.raaj}
                    </option>
                    })
                }
              </select>
              <br />
              <br />
              <button type="submit" value="submit">Submit
                </button>

        </form>
    </div>
  )
}

export default Postenquiry