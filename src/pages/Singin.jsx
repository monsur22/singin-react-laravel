import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Form,
    Button,

} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Singin =  () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(email, password)
        // const config ={
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }

        // }
        // const data =  axios.post('http://localhost:8000/api/login',{email, password, config})
        // console.log(data)
        // localStorage.setItem('userInfo', JSON.stringify(data))

      axios.post('http://localhost:8000/api/login', {email,password})
      .then(response => {
        localStorage.setItem("userInfo", JSON.stringify(response.data.access_token));
        console.log(response.data.access_token)
        navigate("/")
      });

    }

    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete='off'onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Singin
