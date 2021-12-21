import React from 'react'
import {
    Form,
    Button,

} from 'react-bootstrap'
const Singin = () => {
    return (
        <div className='container'>
            <form>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"autoComplete='off' />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete='off'/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Singin
