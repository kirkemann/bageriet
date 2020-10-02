import React from 'react'

const Login = () => {
    return (
        
        <div className="container">
            <h2 className="mt-5">Login</h2>
            <div className="row mt-5">
                <form className="col-12">
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn my-3 sendknap">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
