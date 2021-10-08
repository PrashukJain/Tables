import React,{ useState } from 'react';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent,SubMenu} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { useHistory} from 'react-router-dom';
import jwt from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

export default function NavSideBar({heading}) {
  const decodedToken = jwt(localStorage.getItem('token'));
  console.log(decodedToken);
   let cities=decodedToken.city;
   let countries=decodedToken.country;
   if(cities==null||typeof(cities) == "undefined")
   cities=[];
   if(countries==null||typeof(countries) == "undefined")
   countries=[];
console.log(cities);

  const history = useHistory();
    const [menuCollapse, setMenuCollapse] = useState(true)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  function handleClick(){
    history.push("/home")
    setMenuCollapse(true);
  }
  function handleAirportClick(){
    history.push("/airportInfo")
    setMenuCollapse(true);
  }
  function handleTimezoneClick(){
    history.push("/timezone");
    setMenuCollapse(true);
  }
  function handleRoleClick(){
    history.push("/role");
    setMenuCollapse(true);
  }
  function handleErrorClick(){
    history.push("/error")
    setMenuCollapse(true);
  }
  function handleCityClick(city){
    console.log(city);
  
    axios.get(`http://localhost:8085/api/airportinfo/city/${city}`).then((response)=>{
      history.push("/city",{data:response.data});
    })
  }
  function handleCountryClick(country){
  
    axios.get(`http://localhost:8085/api/airportinfo/country/${country}`).then((response)=>{
      history.push("/country",{data:response.data});
    })
  }

    return (
        
<div>
  <div>
  <NavBar menuIconClick={menuIconClick} heading={heading}/>
  </div>

  <div id="header">
          <ProSidebar collapsed={menuCollapse}> 
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem  icon={<FiHome />} onClick={handleClick}> Home</MenuItem> 
                <SubMenu icon={<FaList />} title='AirPort Info' >
                  
      <SubMenu title='City' >
        {
        cities.map((city)=>{
          return (<MenuItem  onClick={()=>{handleCityClick(city)}}>{city}</MenuItem>)
        })
        }
      </SubMenu>
      <SubMenu title='Country'>
        {
        countries.map((country)=>{
          return (<MenuItem onClick={()=>{handleCountryClick(country)}} >{country}</MenuItem>)
        })
        }
      </SubMenu>
                 </SubMenu>
                <MenuItem icon={ <FaRegHeart />} onClick={handleTimezoneClick}>TimeZone Info</MenuItem>
                <MenuItem icon={<RiPencilLine />} onClick={handleRoleClick}>Role Info</MenuItem>
                <MenuItem icon={<BiCog />} onClick={handleErrorClick}>ErrorMessage</MenuItem>
              </Menu>
           
            </SidebarContent>
            

          </ProSidebar>
        </div>
        </div>
    
    )
}

