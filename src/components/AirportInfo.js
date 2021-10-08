import React, { useState,useEffect,useMemo } from 'react'
// import makeData from '../MOCK_DATA.json'
import Table from '../datatable/Table'
import AirportAdd from '../modal/AirportAdd';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import NavSideBar from './SideBar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {fetchAirportInfo,deleteAirportInfoRow,addAirportInfo,updateAirportInfo} from '../action/actionAirportInfo'
export default function AirportInfo() {
const history=useHistory();
const [index, setIndex] = useState(-1);
const [data, setData] = useState([]);
const [data2, setData2] = useState(1);
const [object, setObject] = useState({})
const [view, setView] = useState(false);
const [deleteModal, setDeleteModal] = useState(false);

   useEffect(()=>{
    fetchAirportInfo().then((response) => {
        setData(response.data);
       })
       .catch(() => {
         console.log("error");
       });
   },[])

    const columns = React.useMemo(
        () => [
            {
                Header: 'city',
                accessor: 'city'
            },
            {
                Header: 'country',
                accessor: 'country'
            }, {
                Header: 'iata',
                accessor: 'iata'
            }, {
                Header: 'icao',
                accessor: 'icao'
            }, {
                Header: 'timezone',
                accessor: 'timezone'
            }, {
                Header: 'Airport_title',
                accessor: 'title'
            }, {
                Header: 'valid from',
                accessor: 'validFrom',
                Cell : (props)=>{
                    const custom_date =new Date(props.value)
                    return <span>{custom_date}</span>
                }
            },
            {
                Header: 'valid to',
                accessor: 'validTo',
                Cell : (props)=>{
                    const custom_date =new Date(props.value).toLocaleDateString()
                    return <span>{custom_date}</span>
                }
            },
            {
                Header:   <div className="cellButton"><button className="btn-dark rounded" style={{'float':'centre'}} onClick={() => { setView(true); }}>Add</button> </div>,
                accessor: 'editdelete',
                minWidth:180,
                Cell: row => (
                    <div className="cellButton">
                        <button onClick={() => handleEdit(row.row.original)} className="btn-dark rounded mr-2">Edit</button>
                        <button onClick={() => {handleOpenDelete(row.row)}} className="btn-dark rounded">Delete</button>
                   </ div>
                )
            }
              ], [data]);

    const nullObject = {
        'city': null,
        'country': null,
        'iata': null,
        'icao': null,
        'timezone': null,
        'title': null,
        'validFrom':null,
        'validTo':null
    };
   
    function handleEdit(row) {
        setIndex(row.airportId);
        row.validFrom=row.validFrom.substring(0,10);
        row.validTo=row.validTo.substring(0,10);
        setObject(row)
        setView(true)
    }
    async function handleOpenDelete(row){
       setIndex(row.original.airportId);
        setDeleteModal(true);
    }
   async function handleDelete() {
    deleteAirportInfoRow(index);
        setIndex(-1);
        setDeleteModal(false);
    }
  
    function handleClose() {
        setView(false);
        setObject(nullObject)
        setIndex(-1)
    }
    function handleCloseDelete(){
      setDeleteModal(false);
      setIndex(-1);
    }

    function handle(e) {
        const newData = { ...object };
        newData[e.target.name] = e.target.value;
        setObject(newData);
        console.log(object.city);
    }
   function handleSubmit(e) {
    e.preventDefault();
    object.validFrom=Date.parse(object.validFrom)
    object.validTo=Date.parse(object.validTo)
    if(object.validFrom > object.validTo){
        alert('valid from date is less than the valid to');
      return;
     }
        if (index === -1){
            console.log(object);
            addAirportInfo(object).then((response)=>{}).catch((error)=>{console.log(error)})
         
        }
        else {
           updateAirportInfo(index,object).then((response)=>{})
          }
          setView(false)
          setData2(data2=>data2+1);
          setIndex(-1);
        setObject(nullObject);
      }
    return (
        <div className="parent">
             <NavSideBar heading={'Airport Info'} />
        <div>
            {
                view &&
                <AirportAdd handleClose={handleClose} handleSubmit={handleSubmit} handle={handle} row={object} />
            }
            {
                deleteModal &&
                <DeleteConfirmation handleClose={handleCloseDelete}   handleDelete={handleDelete} />
            }
            <Table columns={columns} data={data} />
        </div>
        </div>
    )
}
