export const COLUMNS=[
    {
        Header:'Timezone id',
        accessor:'Timezone_id'
    },
    {
        Header:'UTC',
        accessor:'UTC'
    },
    {
        Header:'valid from',
        accessor:'valid from'
    },{
        Header:'valid to',
        accessor:'valid to'
    },
    {
        Header: '',
        accessor:'editdelete',
        Cell: row => (
            <div>
                <button onClick={() => handleEdit(row)} className="btn btn-primary">Edit</button>
                <button onClick={() => handleDelete(row)} className="btn btn-danger">Delete</button>
            </div>
        )
     }
]
function handleEdit(id){
    console.log(id);

}
function handleDelete(row){
    console.log(row);
    let jsonStr = row;
// let jsonObj = JSON.parse(jsonStr);
// delete jsonObj;

}