import axios from 'axios';
function fetchAirportInfo(){
    return axios.get('http://localhost:8085/api/airportInfo');
    
}
function deleteAirportInfoRow(index){
    axios.delete(`http://localhost:8085/api/delete/${index}`) ;
}
function addAirportInfo(object){
   return axios.post('http://localhost:8085/api/airportInfo',object);
}
function updateAirportInfo(index,object){
    return axios.put(`http://localhost:8085/api/edit/${index}`,object);
}
export {fetchAirportInfo,deleteAirportInfoRow,addAirportInfo,updateAirportInfo}