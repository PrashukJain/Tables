import React from "react";
import { useTable,usePagination } from "react-table";
export default function Table({ columns, data }) {
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,page,
    nextPage,previousPage,
    canNextPage,canPreviousPage,
    pageOptions,state,
    gotoPage,
    setPageSize
  } = useTable({
    columns,
    data,
  },usePagination)
  const {pageIndex,pageSize}=state;
  return (
    <div>
      <table {...getTableProps({style:{marginTop:'80px',minWidth:'85vw',marginLeft:'150px'}})} className="table table-striped table-bordered">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps({style:{minWidth: column.minWidth}})}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
        <tbody {...getTableBodyProps()}>
            {
                page.map(row=>{
                     prepareRow(row)
                     return(
                        <tr {...row.getRowProps()}>{
                            row.cells.map(cell=>{
                                return(
                                    <td {...cell.getCellProps()} className="flex">
                                        {cell.render('Cell')}

                                    </td>
                                )
                            })
                        }
            
                        </tr>
                     )
                })
            }
        
        </tbody>
      </table>
      <div className="pageParent">
        <span>
          <strong>{pageIndex+1} of {pageOptions.length}</strong>
          
        </span>
        <span>
          Gotopage:
          <input type='number' defaultValue={pageIndex+1} onChange={e=>{
            const pageNumber=e.target.value?Number(e.target.value)-1:0
            gotoPage(pageNumber)
          }}/>
        </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
        <option key={2} value={2}>
                {2}
              </option>
          <option key={10} value={10}>
                {10}
              </option>
              <option key={20} value={20}>
                {20}
              </option>
        </select>
          <button className="rounded" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
          <button className="rounded" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
      </div>
    </div>
  );
}