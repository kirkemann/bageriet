import React from 'react'



const Nyhedsmail = () => {
    return (
        <div className="bg-img">
            <main className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="content">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Tilmeld</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
               
        </div>
    )
}

export default Nyhedsmail
