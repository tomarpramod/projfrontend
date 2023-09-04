import React, { useState } from 'react'
import Base from "../core/Base";
import { Link, Navigate} from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../auth/helper';


const Signin = () => {
  const [values, setValues] = useState({
    name:"",
    email:"twenty@gmail.com",
    password:"12345",
    error:"",
    success:false,
    loading:false,
    didRedirect:false,

  })

const {name, email, password, error, success, loading, didRedirect} = values;


  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  };


  const onSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error:false, loading:true})


    signin({email, password})
    .then(data =>{
      console.log("DATA", data)
      if(data.token) {
        let sessionToken = data.token;
        authenticate(sessionToken, () => {
          console.log("TOKKEN ADDED");

          setValues({
            ...values,
            didRedirect:true,
          });
        });
      }
    })
    .catch(e => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading....</h2>
        </div>
      )
    )
  }

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div 
          className="alert alert-success"
          style={{display: success ? "" : "none"}}
          >
            New Account created successfully, please <Link
             to="/signin"
             >login now.
             </Link>
            </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div 
          className='alert alert-danger'
          style={{display: error ? "" : "none"}}
          >
            Check All fields again.
            </div>
        </div>
      </div>
    );
  };




  const signInForm = () => {
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form action="">
            <div className="form-group">
              <label className="text-light">Email</label>
              <input type="text" 
              className="form-control"
              value={email}
              onChange={handleChange("email")}
               />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input type="password" 
              className="form-control"
              value={password}
              onChange={handleChange("password")}
               />
            </div>
            <button 
            onClick={onSubmit}
            className="btn btn-success btn-block mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  };





  return (
    <div>
       <Base title='Welcome to sign in page' description='A lCO tshirt'>
        {loadingMessage()}
        {signInForm()}
       <p className='text-center'> Welcome to signin page.
              {JSON.stringify(values)}
       </p>
       {performRedirect()}
       </Base>
    </div>
  );
};

export default Signin;