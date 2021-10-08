import React,{useState} from 'react'
import { useHistory } from 'react-router';

import axios from 'axios';
export default function Login() {
    const [valid, setValid] = useState(false);
    const history = useHistory();
    const [data, setData] = useState({
        email: null,
        password: null,
      });
      function handle(e) {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
      }
      const [passwordShown, setPasswordShown] = useState(false);
      function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
      }
      function login(){
// if(data.email==="admin"&&data.password==="admin"){
//     localStorage.setItem('token','admin');
// history.push("/home")
// }
// else{
// setValid(true);
axios.post('http://localhost:8085/api/login', {
  email: data.email,
  password: data.password,
}).then((response) => {
  console.log(response.data.token);
  if (response.data!=null) {  
    const token=response.data.token;  
localStorage.setItem("token",token);
history.push("/home");
  }
  
})
.catch((error) => {
  console.log(error);
});
      }
    return (

        <div className="cardParent">
            <div className="card w-75 text-center">
                <h1 className="card-title">Login</h1>
                <div className="card-body ">
              
            <div className="row">
              <div className="col text-danger">
              {valid &&( <>Invalid Username and Password</>)}
              </div>
            </div>
          
         <div className="row m-3 ">
            <div className="col d-flex ">
            <label for="Email" class="col-sm-4 col-form-label">Email</label>
              <input
                className="form-control col-sm-6"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  handle(e);
                }}
              />
            </div>
          </div>
          <div className="row m-3 ">
            <div className="col d-flex ">
            <label for="password" class="col-sm-4 col-form-label">Password</label>
              <input
                className="form-control col-sm-6"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  handle(e);
                }}
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <button
                className="btn btn-dark rounded-pill"
                style={{ minWidth: "77px", marginRight: "4px" }}
                onClick={() => login()}
              >
                Login
              </button>
              </div>
              </div>
                </div>
            </div>
      </div>
    )
}
