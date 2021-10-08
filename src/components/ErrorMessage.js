import React,{useEffect, useState} from 'react'
import makeData from '../MockData(Error).json'
import Table from '../datatable/Table'
import ErrorMessageAdd from '../modal/ErrorMessageAdd';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import NavSideBar from './SideBar';
import {addErrorMessage,updateErrorMessage,deleteErrorMessageRow, fetchErrorMessage,} from '../action/actionErrorMessage'
export default function ErrorMessage() {
    const [data, setData] = React.useState([]);
    useEffect(()=>{
fetchErrorMessage().then((response)=>{
  setData(response.data);
})
    },[])
  const columns = React.useMemo(
    () =>[
      {
        Header:'Error Code',
        accessor:'errorCode'
    },
    {
        Header:'Language',
        accessor:'language'
    },
    {
        Header:'Error Message',
        accessor:'errorMessage'
    },{
        Header:'Severity',
        accessor:'severity',
        maxWidth:300,
    },
    {
        Header:   <div className="cellButton"><button className="btn-dark rounded" onClick={() => { setView(true); }}>Add</button></div>,
        accessor:'editdelete',
        minWidth:180,
        Cell: row => (
            <div className="cellButton">
                <button onClick={() => handleEdit(row.row.original)} className="btn-dark rounded mr-2">Edit</button>
                <button onClick={() => handleOpenDelete(row.row.original)} className="btn-dark rounded">Delete</button>
            </div>
        )
     }
],[data]);
const nullObject={
  'errorCode':null,
  'language':null,
  'errorMessage':null,
  'severity':null,
};
const [index,setIndex]=useState(-1);
const [object,setObject]=useState(nullObject);
const [view,setView]=useState(false);
const [deleteModal, setDeleteModal] = useState(false);
function handleEdit(row) {
  setIndex(row.id);
  setObject(row)
  setView(true)
}
function handleDelete(){
deleteErrorMessageRow(index).then((response)=>{})
  setIndex(-1);
  setDeleteModal(false);
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
function handleOpenDelete(row){
  setIndex(row.id)
  setDeleteModal(true);
}
function handle(e) {
  const newData = { ...object };
  newData[e.target.name] = e.target.value;
  setObject(newData);
}
function handleSubmit(){
  if (index == -1){
    addErrorMessage(object).then((response)=>{})}
else {
  updateErrorMessage(index,object).then((response)=>{})
    setIndex(-1);
  }
 setObject(nullObject)
  setView(false)
}
  return (
    <div className="parent">
        <NavSideBar heading={'Error Message'} />
        {
        view&&
        <ErrorMessageAdd handleClose={handleClose}  handleSubmit={handleSubmit} handle={handle} object={object}/>
        }
          {
                deleteModal &&
                <DeleteConfirmation handleClose={handleCloseDelete}   handleDelete={handleDelete} />
            }
       <Table columns={columns} data={data} />
    </div>
  )
}
