import React from 'react'
import { FaList} from "react-icons/fa";
import { useHistory } from 'react-router';
export default function NavBar({menuIconClick,heading}) {
  const history = useHistory();
  function handleLogout(){
localStorage.removeItem('token');
history.push("/");
  }
    return (
        <div className=" navbar-fixed-top">       
<nav className="navbar navbar-dark bg-dark" >
  <div className="container-fluid">
    <div className="navbar-brand" onClick={menuIconClick}>
      <FaList></FaList>
    </div>
    <div className="navbar-brand">{heading}</div>
    <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
  </div>
</nav>
        </div>
    )
}
