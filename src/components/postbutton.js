import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Postbutton = () => {
  const[name,setname]= useState('sasi')
  const [age,setage] = useState('23')
  const [dob, setdob] = useState('2001-06-15');
  const [cricketer, setCricketer] = useState('virat');

  const postapi = async() => {
    console.log('api called')
    const options = {name,age,dob,cricketer}
    try {
      const postdetails = await axios.post('http://localhost:5000/api/postdetails',options)
      console.log(postdetails)
      console.log('Data saved sucessfully')
    } 
    catch (error) {
      console.error('Error saving data:',error)     
    }

  }

  return (
    <div>
      <h1>Full stack api call</h1>
      <label>
        Name:
      <input type='text' onChange={(e)=>setname(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        age:
      <input type='number' onChange={(e)=>setage(e.target.value)}/>
      <br></br>
      <br></br>
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={(e) => setdob(e.target.value)} />
      </label>
      <br />
      <br/>
      <label>
        Favourite Cricketer:
        <input
          type="text"
          value={cricketer}
          onChange={(e) => setCricketer(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      </label>
        <button onClick={postapi}>POST</button>
    </div>
  )
}

export default Postbutton