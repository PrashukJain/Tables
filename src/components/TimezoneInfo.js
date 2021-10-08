import React,{useState,useEffect} from 'react'
import makeData from '../MockData(Timezone).json'
import Table from '../datatable/Table'
import TimezoneAdd from '../modal/TimezoneAdd';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import NavSideBar from './SideBar';
import { addTimezoneInfo,updateTimezoneInfo,deleteTimezoneInfoRow,fetchTimezoneInfo } from '../action/actionTimezoneInfo';
export default function TimezoneInfo() {
  const [data, setData] =useState([]); 
  useEffect(() => {
    fetchTimezoneInfo().then((response)=>{
      console.log(response.data)
setData(response.data)
    })
    
  }, []);
  const columns = React.useMemo(
    () =>[
    {
        Header:'UTC',
        accessor:'utc'
    },
    {
        Header:'valid from',
        accessor:'validFrom',
        Cell : (props)=>{
          const custom_date =new Date(props.value).toLocaleDateString()
          return <span>{custom_date}</span>
      }
    },{
        Header:'valid to',
        accessor:'validTo',
        Cell : (props)=>{
          const custom_date =new Date(props.value).toLocaleDateString()
          return <span>{custom_date}</span>
      }
    },
    {
        Header:   <div className="cellButton"><button className="btn-dark rounded" onClick={() => { setView(true); }}>Add</button></div>,
        accessor:'editdelete',
        maxWidth:180,
        Cell: row => (
            <div className="cellButton">
                <button onClick={() => handleEdit(row.row.original)} className="btn-dark rounded mr-1">Edit</button>
                <button onClick={() => handleOpenDelete(row.row.original)} className="btn-dark rounded">Delete</button>
            </div>
            
        ),
        
     }
],[data]);
const nullObject={
  'utc':null,
  'validFrom':null,
  'validTo':null,
};
const [index,setIndex]=useState(-1);
const [object,setObject]=useState(nullObject);
const [view,setView]=useState(false);
const [deleteModal, setDeleteModal] = useState(false);
function handleEdit(row) {
  setIndex(row.timezoneId);
  row.validFrom=row.validFrom.substring(0,10);
  row.validTo=row.validTo.substring(0,10);
  console.log(row);
  setObject(row)
  setView(true)
}
function handleOpenDelete(row){
  setIndex(row.timezoneId)
  setDeleteModal(true);
}
function handleDelete(){
 deleteTimezoneInfoRow(index).then((response)=>{
   console.log('delete')
 })
  setIndex(-1);
  setDeleteModal(false);
}
function handleCloseDelete(){
  setDeleteModal(false);
  setIndex(-1);
}
function handleClose(){
    setView(false);
    setObject(nullObject)
    setIndex(-1)
}
function handle(e) {
  const newData = { ...object };
  newData[e.target.name] = e.target.value;
  setObject(newData);
}
function handleSubmit(e){
  e.preventDefault();
  console.log(object);
  if (index == -1){
   addTimezoneInfo(object).then((response)=>{})}
else {
  // console.log()
  // addTimezoneInfo(object).then((response)=>{})
  updateTimezoneInfo(index,object).then((response)=>{})
    
  }
  setIndex(-1);
 setObject(nullObject)
  setView(false)
}
  return (
    <div className="parent">
       <NavSideBar heading={'Timezone Info'} />
        {
        view&&
        <TimezoneAdd handleClose={handleClose}  handleSubmit={handleSubmit} handle={handle} object={object}/>
        }
        {
                deleteModal &&
                <DeleteConfirmation handleClose={handleCloseDelete}   handleDelete={handleDelete} />
            }
       <Table columns={columns} data={data} />
    </div>
  )
}
