import axios from 'axios';
function fetchErrorMessage(){
    return axios.get('http://localhost:8085/api/errormessage');
    
}
function deleteErrorMessageRow(index){
   return axios.delete(`http://localhost:8085/api/errormessage/delete/${index}`) ;
}
function addErrorMessage(object){
   return axios.post('http://localhost:8085/api/errormessage',object);
}
function updateErrorMessage(index,object){
    return axios.put(`http://localhost:8085/api/errormessage/edit/${index}`,object);
}
export {fetchErrorMessage,deleteErrorMessageRow,addErrorMessage,updateErrorMessage}