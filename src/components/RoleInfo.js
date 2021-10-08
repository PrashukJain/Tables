import React,{useState,useEffect} from 'react'
import makeData from '../MockData(Role).json'
import Table from '../datatable/Table'
import RoleAdd from '../modal/RoleAdd'
import DeleteConfirmation from '../modal/DeleteConfirmation';
import NavSideBar from './SideBar';
import {fetchRoleInfo,deleteRoleInfoRow,addRoleInfo,updateRoleInfo} from '../action/actionRoleInfo'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
export default function RoleInfo() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetchRoleInfo().then((response)=>{
setData(response.data)
    })
  }, [])
  const columns = React.useMemo(
    () =>[
      {
        Header:'Role',
        accessor:'role'
    },
    {
        Header:'Scope',
        accessor:'scope'
    },
    {
        Header:'Function Role',
        accessor:'functionRole'
    },
    {
        Header:   <div className="cellButton"><button className="btn-dark rounded" onClick={() => { setView(true); }}>Add</button></div>,
        accessor:'editdelete',
        minWidth:180,
        Cell: row => (
            <div>
                <button onClick={() => handleEdit(row.row.original)} className="btn-dark rounded mr-2">Edit</button>
                <button onClick={() => handleOpenDelete(row.row.original)} className="btn-dark rounded">Delete</button>
            </div>
        )
     }
],[data]);
const nullObject={
    'role':null,
    'scope':null,
    'functionRole':null
  };
const [index,setIndex]=useState(-1);
const [object,setObject]=useState(nullObject);
const [view,setView]=useState(false);
const [deleteModal, setDeleteModal] = useState(false);
function handleEdit(row){
    setIndex(row.id);
  setObject(row)
  setView(true)
}
function handleDelete(){
  deleteRoleInfoRow(index).then((response)=>{})
  setIndex(-1);
  setDeleteModal(false);
}
function handleOpenDelete(row){
  setIndex(row.id)
  setDeleteModal(true);
}
function handleClose(){
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
  }
  function handleSubmit(){
    const dataCopy= [...data];
    if (index == -1){
      addRoleInfo(object).then((response)=>{})}
  else {
   updateRoleInfo(index,object).then((response)=>{})
     
    }
    setIndex(-1);
   setObject(nullObject)
    setData(dataCopy)
    setView(false)
  }
  return(
    <div className="parent">
      <NavSideBar heading={'Role Info'} />
    <div>
       
     
        {
        view&&
        <RoleAdd handleClose={handleClose}  handleSubmit={handleSubmit} handle={handle} object={object}/>
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
