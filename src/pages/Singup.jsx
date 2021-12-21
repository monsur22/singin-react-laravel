import React from 'react'

const Singup = () => {
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="name"aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1"name="password" placeholder="Password" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1"name="re-password" placeholder="Re-Password" />
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Singup
