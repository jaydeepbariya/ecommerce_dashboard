import React from "react";
import { useTable, Column, TableOptions } from "react-table";

function TableHoC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(options);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>

        <table className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHoC;
