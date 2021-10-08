import axios from 'axios';
function fetchRoleInfo(){
    return axios.get('http://localhost:8085/api/roleinfo');
    
}
function deleteRoleInfoRow(index){
   return axios.delete(`http://localhost:8085/api/roleinfo/delete/${index}`) ;
}
function addRoleInfo(object){
   return axios.post('http://localhost:8085/api/roleinfo',object);
}
function updateRoleInfo(index,object){
    return axios.put(`http://localhost:8085/api/roleinfo/edit/${index}`,object);
}
export {fetchRoleInfo,deleteRoleInfoRow,addRoleInfo,updateRoleInfo}