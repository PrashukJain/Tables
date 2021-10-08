import axios from 'axios';
function fetchTimezoneInfo(){
    return axios.get('http://localhost:8085/api/timezoneinfo');
    
}
function deleteTimezoneInfoRow(index){
   return axios.delete(`http://localhost:8085/api/timezoneinfo/delete/${index}`) ;
}
function addTimezoneInfo(object){
   return axios.post('http://localhost:8085/api/timezoneinfo',object);
}
function updateTimezoneInfo(index,object){
    return axios.put(`http://localhost:8085/api/timezoneinfo/edit/${index}`,object);
}
export {fetchTimezoneInfo,deleteTimezoneInfoRow,addTimezoneInfo,updateTimezoneInfo}