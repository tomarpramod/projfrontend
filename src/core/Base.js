import React from 'react';

const Base = ({
    title = "My Title",
    description = "My Description",
    className = "bg-dark text-white p-4",
    children,
}) =>{
  return (
    <div>
        <div className="container-fluid">
            <div className="jumbptron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluid bg-success text-white text-center py-3"></div>
            <h4 className='text-warning text-center'>If you got any questions, reach me out at instagram and youtube chennel.</h4>
            <h4 className='text-warning text-center'>
            <button className="btn btn-warning btn-lg btn-center">Contact Us</button>
            </h4>
            <div className="container-fluid text-center">
                <span className='text-danger'>
                    An Amazing Django React Application
                </span>
            </div>
        </footer>
    </div>
  )
}


export default Base;